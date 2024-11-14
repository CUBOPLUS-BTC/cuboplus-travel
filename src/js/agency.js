const setElements = (content) => {
  Object.keys(content).forEach(id => {
      const element = document.getElementById(id);
      try {
          element.innerHTML = content[id];
      } catch (e) {

      }
  })
}

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage("agency", localStorage.getItem("language-tourism"), setElements);
  });
  
  jpButton[0].addEventListener("click", () => {
    changeLanguage("agency", "jp", setElements);
  });
  
  jpButton[1].addEventListener("click", () => {
    changeLanguage("agency", "jp", setElements);
  });
  
  enButton[0].addEventListener("click", () => {
    changeLanguage("agency", "en", setElements);
  });
  
  enButton[1].addEventListener("click", () => {
    changeLanguage("agency", "en", setElements);
  });