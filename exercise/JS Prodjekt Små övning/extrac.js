let burgerMenu = selectElement(".hamburger")

let acctiveMenu = () => {
    burgerMenu.classList.toggle(`active`)
}

burgerMenu.addEventListener("click", acctiveMenu)

function scrollToTop () {
    window.scrollTo({
        top: 0,
        behavior: `smooth`
    })
}

selectElement("#to-top").addEventListener("click", scrollToTop)

function scrollDown () {
    window.scrollTo({
        top: 500,
        behavior: 'smooth'
    });
}

selectElement("#down-arrow").addEventListener("click", scrollDown)
