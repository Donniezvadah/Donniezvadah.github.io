document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    const setMenu = (open) => {
        navLinks.classList.toggle('active', open);
        mobileBtn.setAttribute('aria-expanded', String(open));
        mobileBtn.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    };

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMenu(false));
        });
    }

    // Header gains a hairline and shadow once the page scrolls
    const header = document.querySelector('header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Photo strip: arrows scroll one screenful and hide at either end
    const strip = document.getElementById('strip');
    if (strip) {
        const prev = document.getElementById('strip-prev');
        const next = document.getElementById('strip-next');
        const update = () => {
            prev.disabled = strip.scrollLeft < 8;
            next.disabled = strip.scrollLeft + strip.clientWidth > strip.scrollWidth - 8;
        };
        const move = (dir) => strip.scrollBy({ left: dir * strip.clientWidth * 0.8, behavior: 'smooth' });
        prev.addEventListener('click', () => move(-1));
        next.addEventListener('click', () => move(1));
        strip.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    }
});
