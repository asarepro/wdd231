let menu_open_btn = document.querySelector('.menu-open');
let menu_links = document.querySelector('.menu-links');

menu_open_btn.addEventListener('click',
    () => {
        menu_open_btn.classList.toggle('menu-close');
        menu_links.classList.toggle('menu-links-open');
    }
)