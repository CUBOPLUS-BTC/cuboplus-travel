var esButton = document.getElementsByClassName("es-button");
var enButton = document.getElementsByClassName("en-button");
const TOURISM_DATA_URL = "https://raw.githubusercontent.com/CUBOPLUS-BTC/tourism-portal-data/main/";
const TOURISM_ASSETS = TOURISM_DATA_URL + "assets/";

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
    if (page !== "index" && page === "cookies") {
        res = await fetch(`../../content/content-${language}.json`);
    } else if (page !== "cookies" && page !== "index") {
        res = await fetch(`../content/content-${language}.json`);
    } else {
        res = await fetch(`content/content-${language}.json`);
    }
    const res1 = await res.json();
  
    localStorage.setItem(`content-${language}`, JSON.stringify(res1));
  /* 
    setElementsNavbarAndFooter(res1.layout); */
    callback(res1[page]);
}