function toggleMenue() {
    /* targert menue, icon so on click open class will have styling*/ 
    const menue = document.querySelector(".menue-links");
    const icon = document.querySelector(".hamburger-icon");
    menue.classList.toggle("open");
    icon.classList.toggle("open");
}