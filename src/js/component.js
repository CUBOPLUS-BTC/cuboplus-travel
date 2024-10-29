const jpButton = document.getElementsByClassName("jp-button");
const enButton = document.getElementsByClassName("en-button");
const contentVersion = "1.4"
const TOURISM_DATA_URL = "https://raw.githubusercontent.com/CUBOPLUS-BTC/tourism-portal-data/main/";
const TOURISM_ASSETS = TOURISM_DATA_URL + "assets/";

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("language-tourism")) localStorage.setItem("language-tourism", "en");
  document.getElementById("footer-copyright").innerHTML = `© ${new Date().getFullYear()} CUBO+.`;
});

const setLayout = (content) => {
  document.getElementById("navbar-home-button").innerHTML = content.navbar.home;
  document.getElementById("navbar-travel-button").innerHTML = content.navbar.travel;
  document.getElementById("navbar-agency-button").innerHTML = content.navbar.agency;
  document.getElementById("navbar-relocate-button").innerHTML = content.navbar.relocate;
  document.getElementById("footer-contact").innerHTML = content.footer.contact;
  document.getElementById("footer-follow").innerHTML = content.footer.follow;
  document.getElementById("footer-links").innerHTML = content.footer.links;
  try {
    document.getElementById("header-home-button").innerHTML = content.navbar.home;
    document.getElementById("header-travel-button").innerHTML = content.navbar.travel;
    document.getElementById("header-agency-button").innerHTML = content.navbar.agency;
    document.getElementById("header-relocate-button").innerHTML = content.navbar.relocate;
  } catch (e) {
    
  }
}

async function changeLanguage(page, language = "en", callback) {
    //sets language defined
    localStorage.setItem("language-tourism", language);
    // Check if content exists in localStorage and has a valid 'secret' property
  const storedContent = localStorage.getItem(`content-tourism-${language}`);

    try {
      const content = JSON.parse(storedContent);
      if (content.version != contentVersion) {
        throw error;
      }
  
      setLayout(content.layout);
      callback(content[page]);
      return;
    } catch (error) {
      // Handle the error, e.g., clear localStorage and fetch content again
      localStorage.removeItem(`content-tourism-${language}`);
    }
  
    let res = await fetch(`content/${language}.json`);;
    const res1 = await res.json();
  
    localStorage.setItem(`content-tourism-${language}`, JSON.stringify(res1));
    setLayout(res1.layout);
    callback(res1[page]);
}