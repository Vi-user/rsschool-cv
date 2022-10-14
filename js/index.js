//scrollBTN
const scrollBtn = document.querySelector('.scroll-btn');
const docHeight = document.documentElement.clientHeight;
scrollBtn.addEventListener('click', () => window.scrollTo(0, 0))

const showHideScrollBtn = () => {
    // (window.scrollY + docHeight > docHeight) ? scrollBtn.classList.add('scroll-btn_visible') : scrollBtn.classList.remove('scroll-btn_visible');
    if ((window.scrollY + docHeight) > docHeight) {
        scrollBtn.classList.add('scroll-btn_visible')
    } else {
        scrollBtn.classList.remove('scroll-btn_visible')
    }
}
window.addEventListener('scroll', showHideScrollBtn)
// const scrollUp = () => {
//     window.scrollTo(0, 0)
// }
//
// scrollBtn.addEventListener('click', scrollUp)


//day-night theme
const themeIcon = document.querySelector('.theme-icon')

const changeTheme = () => {
    document.body.classList.toggle('night-theme')
    document.querySelector('.header').classList.toggle('night-theme')
    themeIcon.classList.toggle('icon_moon')
    themeIcon.classList.toggle('icon_sun')
}

themeIcon.addEventListener('click', changeTheme)