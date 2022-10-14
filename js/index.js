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
