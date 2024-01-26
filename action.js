// content.js
[".js-notice", ".zhc-banner", ".js-header-wrapper", "#repository-container-header"].forEach((i) => {
    //$(i).style.display="none"
    let $=document.querySelector; // We can also use $ as a shortcut
    element = document.querySelector(i);
    if (element) {
        element.style.display = ((element.style.display == "" || element.style.display == "block") ? "none" : "block");
        window.dispatchEvent(new Event('resize'));
    }
})