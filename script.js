const features = document.querySelector(".features-dropdown-div")
const arrow = document.querySelector(".features-arrowdown-icon")
const company = document.querySelector(".company-dropdown-div")
const company_arrow = document.querySelector("#company-dropdown-icon")
const menuIcon = document.querySelector(".menu-icon")
const mobile_navbar = document.querySelector(".mobile-navbar")
const overlay = document.querySelector(".overlay")
const close_icon = document.querySelector(".close-menu-icon")
const mobile_features = document.querySelector("#features")
const mobile_dropdown1 = document.querySelector(".mobile-dropdown1")
const features_dropdown = document.querySelector(".mobile-features-dropdown-div")
const mobile_company = document.querySelector(".company")
const company_dropdown = document.querySelector(".mobile-company-dropdown-div")
const mobile_dropdown2 = document.querySelector(".mobile-dropdown2")

menuIcon.addEventListener("click", () => {
    overlay.classList.add("open")
    mobile_navbar.classList.add("open")
})

mobile_features.addEventListener("click", () => {
    mobile_dropdown1.src = "images\\icon-arrow-down.svg"
    features_dropdown.classList.toggle("dropdown")
    mobile_dropdown1.toggleAttribute("data-mobileArrow1")
    const mobile_dropdown_arrow = document.querySelector("[data-mobileArrow1]")
    mobile_dropdown_arrow.src = "images\\icon-arrow-up.svg"
})

mobile_company.addEventListener("click", () => {
    mobile_dropdown2.src = "images\\icon-arrow-down.svg"
    company_dropdown.classList.toggle("dropdown")
    mobile_dropdown2.toggleAttribute("data-mobileArrow2")
    const mobile_dropdown_arrow = document.querySelector("[data-mobileArrow2]")
    mobile_dropdown_arrow.src = "images\\icon-arrow-up.svg"
})

overlay.addEventListener("click", closeNavbar)
close_icon.addEventListener("click", closeNavbar)

function closeNavbar() {
    overlay.classList.remove("open")
    mobile_navbar.classList.remove("open")
}

function showFeatures() {
    arrow.src = "images\\icon-arrow-down.svg"
    features.classList.toggle("display")
    arrow.toggleAttribute("data-arrow1")
    const arrow_data = document.querySelector("[data-arrow1]")
    arrow_data.src = "images\\icon-arrow-up.svg"
}

function showCompany() {
    company_arrow.src = "images\\icon-arrow-down.svg"
    company.classList.toggle("display")
    company_arrow.toggleAttribute("data-arrow2")
    const company_arrow_data = document.querySelector("[data-arrow2]")
    company_arrow_data.src = "images\\icon-arrow-up.svg"
}

