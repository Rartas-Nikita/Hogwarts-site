// Active menu item
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('.block-bg').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
            document.querySelectorAll('.menu a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });

            document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('active')
        }
    });
});