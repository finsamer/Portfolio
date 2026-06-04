document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar-nav');
    const toggle = document.querySelector('.nav-toggle');
    const backdrop = document.querySelector('.sidebar-backdrop');
    const navLinks = document.querySelectorAll('.nav-links a');

    const closeSidebar = () => {
        sidebar?.classList.remove('is-open');
        toggle?.classList.remove('is-open');
        toggle?.setAttribute('aria-expanded', 'false');
        backdrop?.classList.remove('is-visible');
        backdrop?.setAttribute('hidden', '');
        document.body.style.overflow = '';
    };

    const openSidebar = () => {
        sidebar?.classList.add('is-open');
        toggle?.classList.add('is-open');
        toggle?.setAttribute('aria-expanded', 'true');
        backdrop?.classList.add('is-visible');
        backdrop?.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
    };

    toggle?.addEventListener('click', () => {
        if (sidebar?.classList.contains('is-open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    backdrop?.addEventListener('click', closeSidebar);

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.matchMedia('(max-width: 900px)').matches) {
                closeSidebar();
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeSidebar();
    });

    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) {
            revealElements.forEach((el) => el.classList.add('is-visible'));
        } else {
            const observer = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    });
                },
                {
                    root: null,
                    rootMargin: '0px 0px -6% 0px',
                    threshold: 0.12,
                }
            );

            revealElements.forEach((el) => observer.observe(el));
        }
    }
});
