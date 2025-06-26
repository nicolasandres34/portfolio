 const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('nav ul');

    mobileBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });