let select = document.querySelector("#theme-selector");
// console.log(select)

let cssLink = document.querySelector("#theme-class");
// console.log(cssLink)

select.addEventListener("change", changeTheme);

function changeTheme () {
    cssLink.href = `${select.value}.css`
    localStorage.setItem("key", select.value);
}

function setThem () {
    let theme = localStorage.getItem("key");
    cssLink.href = `${theme}.css`
}

setThem();