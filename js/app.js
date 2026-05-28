

function toggleMenu(){
    document.getElementById("mobileMenu")
    .classList.toggle("active");
}

function toggleMenu(){

    document
    .getElementById("mobileMenu")
    .classList.toggle("active");

}

/* =========================================================
INI: LANGUAGE
========================================================= */

function setLanguage(lang){

    /* CHANGE TEXTS */
    document.querySelectorAll("[data-es]").forEach(el => {

        const text =
        el.getAttribute("data-" + lang);

        if(text){
            el.innerText = text;
        }

    });

    /* SAVE LANGUAGE */
    localStorage.setItem("lang", lang);

    /* REMOVE ACTIVE */
    document.querySelectorAll(".lang").forEach(btn => {
        btn.classList.remove("active");
    });

    /* ACTIVE CURRENT */
    document.querySelectorAll(".lang").forEach(btn => {

        if(btn.dataset.lang === lang){
            btn.classList.add("active");
        }

    });

}

/* =========================================================
AUTO LANGUAGE
========================================================= */

let lang =
localStorage.getItem("lang")
|| navigator.language.slice(0,2);

/* DEFAULT LANGUAGE */
if(!["es","en","de","ca"].includes(lang)){
    lang = "es";
}

/* LOAD WEBSITE */
document.addEventListener("DOMContentLoaded", () => {

    setLanguage(lang);

});

/* =========================================================
END: LANGUAGE
========================================================= */

/* =========================
Ini: Scroll Top
========================= */
const scrollTopBtn = document.getElementById('scrollTop');

const expandBtns = document.querySelectorAll('.expand-btn');

expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.parentElement;
        card.classList.toggle('active');
    });
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/* =========================
End: Scroll Top
========================= */


/* =========================
Privacy Modal
========================= */

const openPrivacyBtn = document.getElementById("openPrivacyModal");
const closePrivacyBtn = document.getElementById("closePrivacyModal");
const privacyModal = document.getElementById("privacyModal");

if(openPrivacyBtn && privacyModal){
    openPrivacyBtn.addEventListener("click", () => {
        privacyModal.classList.add("active");
    });
}

if(closePrivacyBtn && privacyModal){
    closePrivacyBtn.addEventListener("click", () => {
        privacyModal.classList.remove("active");
    });
}

/* =========================
Legal Modal 
========================= */

const openLegal = document.getElementById("openLegalModal");
const closeLegal = document.getElementById("closeLegalModal");
const legalModal = document.getElementById("legalModal");

if(openLegal && legalModal){
    openLegal.addEventListener("click", function(e){
        e.preventDefault();
        legalModal.classList.add("active");
    });
}

if(closeLegal && legalModal){
    closeLegal.addEventListener("click", () => {
        legalModal.classList.remove("active");
    });
}


/* =========================
Issue Modal
========================= */
const openIssueBtn = document.getElementById("openIssueModal");
const closeIssueBtn = document.getElementById("closeIssueModal");
const issueModal = document.getElementById("issueModal");

if(openIssueBtn && issueModal){
    openIssueBtn.addEventListener("click", () => {
        issueModal.classList.add("active");
    });
}

if(closeIssueBtn && issueModal){
    closeIssueBtn.addEventListener("click", () => {
        issueModal.classList.remove("active");
    });
}
