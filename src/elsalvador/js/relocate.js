const setElements = (content) => {
    Object.keys(content).forEach(id => {
        const element = document.getElementById(id);
        element.innerHTML = content[id];
    })
  }

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage("relocate", localStorage.getItem("language-tourism"), setElements);
  });
  
  jpButton[0].addEventListener("click", () => {
    changeLanguage("relocate", "jp", setElements);
  });
  
  jpButton[1].addEventListener("click", () => {
    changeLanguage("relocate", "jp", setElements);
  });
  
  enButton[0].addEventListener("click", () => {
    changeLanguage("relocate", "en", setElements);
  });
  
  enButton[1].addEventListener("click", () => {
    changeLanguage("relocate", "en", setElements);
  });