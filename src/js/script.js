var esButton = document.getElementsByClassName("es-button");
var enButton = document.getElementsByClassName("en-button");
const contentVersion = "1.1";

function setElementsNavbarAndFooter(content) {
  document.getElementById("navbar-about-button").innerHTML = content.navbar[0];
  document.getElementById("navbar-program-button").innerHTML = content.navbar[1];
  document.getElementById("navbar-sponsors-button").innerHTML = content.navbar[2];
  document.getElementById("footer-contact").innerHTML = content.footer[0];
  document.getElementById("footer-follow").innerHTML = content.footer[1];
  document.getElementById("footer-links").innerHTML = content.footer[2];
  document.getElementById("footer-copyright").innerHTML = content.footer[3];
}

//function to set the language in page
async function changeLanguage(page, language, callback) {
  //validates localStorage is not already settled before with a language non-declarated
  //language == "en" || "es"
  //if NOT language = "en"
  if (language !== "en" && language !== "es") language = "en";
  //sets language defined
  localStorage.setItem("language", language);
  // Check if content exists in localStorage and has a valid 'secret' property
  const storedContent = localStorage.getItem(`content-${language}`);

  try {
    const content = JSON.parse(storedContent);
    if (content.version != contentVersion) {
      throw error;
    }

    if (content && (content.secret == "es-cuboplus" || content.secret == "en-cuboplus")) {
      // Content is valid, proceed with the callback
      setElementsNavbarAndFooter(content.layout);
      callback(content[page]);
      return;
    }
  } catch (error) {
    // Handle the error, e.g., clear localStorage and fetch content again
    localStorage.removeItem(`content-${language}`);
  }

  let res = "";

  // If content does not exist or does not have a valid 'secret', fetch and store it
  if (page != "index") {
      res = await fetch(`../content/content-${language}.json`);
  } else {
      res = await fetch(`./content/content-${language}.json`);
  }
  const res1 = await res.json();

  localStorage.setItem(`content-${language}`, JSON.stringify(res1));

  setElementsNavbarAndFooter(res1.layout);
  callback(res1[page]);
}