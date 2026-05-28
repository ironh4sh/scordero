/* =========================================================
MOBILE MENU
========================================================= */

function toggleMenu(){

    const menu =
    document.getElementById("mobileMenu");

    menu.classList.toggle("active");

    /* BLOCK SCROLL */
    document.body.classList.toggle("menu-open");

}

/* CLOSE MENU ON SCROLL */
window.addEventListener("scroll", () => {

    const menu =
    document.getElementById("mobileMenu");

    if(menu.classList.contains("active")){

        menu.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});


/* =========================================================
LANGUAGE
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

/* AUTO LANGUAGE */
let lang =
localStorage.getItem("lang")
|| navigator.language.slice(0,2);

/* DEFAULT */
if(!["es","en","de","ca"].includes(lang)){
    lang = "es";
}

/* LOAD */
document.addEventListener("DOMContentLoaded", () => {

    setLanguage(lang);

});


/* =========================================================
SCROLL TOP
========================================================= */

const scrollTopBtn =
document.getElementById("scrollTop");

const expandBtns =
document.querySelectorAll(".expand-btn");

/* EXPAND CARDS */
expandBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.parentElement;

        card.classList.toggle("active");

    });

});

/* SHOW BUTTON */
window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

/* SCROLL TOP */
if(scrollTopBtn){

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}


/* =========================================================
PRIVACY MODAL
========================================================= */

const openPrivacyBtn =
document.getElementById("openPrivacyModal");

const closePrivacyBtn =
document.getElementById("closePrivacyModal");

const privacyModal =
document.getElementById("privacyModal");

/* OPEN */
if(openPrivacyBtn && privacyModal){

    openPrivacyBtn.addEventListener("click", () => {

        privacyModal.classList.add("active");

    });

}

/* CLOSE */
if(closePrivacyBtn && privacyModal){

    closePrivacyBtn.addEventListener("click", () => {

        privacyModal.classList.remove("active");

    });

}


/* =========================================================
LEGAL MODAL
========================================================= */

const openLegal =
document.getElementById("openLegalModal");

const closeLegal =
document.getElementById("closeLegalModal");

const legalModal =
document.getElementById("legalModal");

/* OPEN */
if(openLegal && legalModal){

    openLegal.addEventListener("click", function(e){

        e.preventDefault();

        legalModal.classList.add("active");

    });

}

/* CLOSE */
if(closeLegal && legalModal){

    closeLegal.addEventListener("click", () => {

        legalModal.classList.remove("active");

    });

}


/* =========================================================
ISSUE MODAL
========================================================= */

const openIssueBtn =
document.getElementById("openIssueModal");

const closeIssueBtn =
document.getElementById("closeIssueModal");

const issueModal =
document.getElementById("issueModal");

/* OPEN */
if(openIssueBtn && issueModal){

    openIssueBtn.addEventListener("click", () => {

        issueModal.classList.add("active");

    });

}

/* CLOSE */
if(closeIssueBtn && issueModal){

    closeIssueBtn.addEventListener("click", () => {

        issueModal.classList.remove("active");

    });

}


/* =========================================================
CLOSE MODALS CLICK OUTSIDE
========================================================= */

window.addEventListener("click", function(e){

    document.querySelectorAll(".modal").forEach(modal => {

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

});
