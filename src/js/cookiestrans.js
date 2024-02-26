const setElements = (content) => {
    document.getElementById("cookies-title1").innerHTML = content.titles[0];
    document.getElementById("cookies-title2").innerHTML = content.titles[1];
    document.getElementById("cookies-title3").innerHTML = content.titles[2];
    document.getElementById("cookies-title4").innerHTML = content.titles[3];
    document.getElementById("cookies-title5").innerHTML = content.titles[4];
    document.getElementById("cookies-title6").innerHTML = content.titles[5];
    document.getElementById("cookies-desc1").innerHTML = content.descriptions[0];
    document.getElementById("cookies-desc2").innerHTML = content.descriptions[1];
    document.getElementById("cookies-desc3").innerHTML = content.descriptions[2];
    document.getElementById("cookies-desc4").innerHTML = content.descriptions[3];
    document.getElementById("cookies-desc5").innerHTML = content.descriptions[4];
    document.getElementById("cookies-desc6").innerHTML = content.descriptions[5];
    document.getElementById("cookies-desc7").innerHTML = content.descriptions[6];
    document.getElementById("table1").innerHTML = content.tableEssen[0];
    document.getElementById("table2").innerHTML = content.tableEssen[1];
    document.getElementById("table3").innerHTML = content.tableEssen[2];
    document.getElementById("table4").innerHTML = content.tableEssen[3];
    document.getElementById("table-info1").innerHTML = content.tableEssenData[0];
    document.getElementById("table-info2").innerHTML = content.tableEssenData[1];
    document.getElementById("table-info9").innerHTML = content.tableEssenData[1];
    document.getElementById("table-info3").innerHTML = content.tableEssenData[2];
    document.getElementById("table-info4").innerHTML = content.tableEssenData[3];
    document.getElementById("table-info5").innerHTML = content.tableEssenData[4];
    document.getElementById("table-info6").innerHTML = content.tableEssenData[5];
    document.getElementById("table-info7").innerHTML = content.tableEssenData[5];
    document.getElementById("table-exp1").innerHTML = content.tableEssenExp[0];
    document.getElementById("table-exp9").innerHTML = content.tableEssenExp[0];
    document.getElementById("table-exp0").innerHTML = content.tableEssenExp[1];
    document.getElementById("table-exp2").innerHTML = content.tableEssenExp[1];
    document.getElementById("table-exp3").innerHTML = content.tableEssenExp[2];
    document.getElementById("table-exp4").innerHTML = content.tableEssenExp[3];
    document.getElementById("table-exp5").innerHTML = content.tableEssenExp[3];
    document.getElementById("table-exp6").innerHTML = content.tableEssenExp[3];
    document.getElementById("table-type1").innerHTML = content.tableEssenTyp[0];
    document.getElementById("table-type2").innerHTML = content.tableEssenTyp[0];
    document.getElementById("table-type3").innerHTML = content.tableEssenTyp[0];
    document.getElementById("table-type4").innerHTML = content.tableEssenTyp[0];
    document.getElementById("table-type5").innerHTML = content.tableEssenTyp[1];
    document.getElementById("table-type6").innerHTML = content.tableEssenTyp[1];
    document.getElementById("table-type7").innerHTML = content.tableEssenTyp[1];

}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("cookies", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});


esButton[0].addEventListener("click", (e) => {
    changeLanguage("cookies", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("cookies", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("cookies", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("cookies", "en", (content) => {
        setElements(content);
    });
});