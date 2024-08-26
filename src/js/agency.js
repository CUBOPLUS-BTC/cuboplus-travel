function loadAgencyForm() { //Agency form
    document.getElementById('dynamicImage').src = '../img/tourism/agency/form-volcano.png';
    hbspt.forms.create({
        region: "na1",
        portalId: "45121273",
        formId: "440e25d2-02cc-43e7-8251-67583663f0c6",
        target: '#hubspotForm'
    });
    document.getElementById("form-text").textContent = "Plan your trip here!";

    updateContainerStyle('rgba(161, 134, 113, 0.35)');
    // Show/Hide Agency text
    document.getElementById('agencyBenefits').classList.remove('hidden');
    document.getElementById('agencyText').classList.remove('hidden');
    document.getElementById('agencyText').classList.add('grid');
    // Show/Hide Concierge Text
    document.getElementById('conciergeBenefits').classList.add('hidden');
    document.getElementById('conciergeText').classList.add('hidden');
    document.getElementById('conciergeText').classList.remove('grid');
}

function loadConciergeForm() { //Concierge Form
    document.getElementById('dynamicImage').src = '../img/tourism/agency/form-lake.png';
    hbspt.forms.create({
        region: "na1",
        portalId: "45121273",
        formId: "5f3ccc83-0eb3-4814-89ea-6bd8fd12cb05",
        target: '#hubspotForm'
    });
    document.getElementById("form-text").textContent = "Hire our tailored and exclusive concierge services";

    updateContainerStyle('rgba(57, 167, 255, 0.35)');
    // Show/Hide Agency text
    document.getElementById('conciergeBenefits').classList.remove('hidden');
    document.getElementById('conciergeText').classList.remove('hidden');
    document.getElementById('conciergeText').classList.add('grid');
    // Show/Hide Concierge Text
    document.getElementById('agencyBenefits').classList.add('hidden');
    document.getElementById('agencyText').classList.add('hidden');
    document.getElementById('agencyText').classList.remove('grid');
}

loadAgencyForm();
document.getElementById('agencyButton').addEventListener('click', loadAgencyForm);
document.getElementById('conciergeButton').addEventListener('click', loadConciergeForm);

function updateContainerStyle(backgroundColor) { //Form Style
    const container = document.querySelector('.w-full.lg\\:w-1\\/2.p-8.flex.flex-col.justify-center');
    container.style.background = backgroundColor;
}