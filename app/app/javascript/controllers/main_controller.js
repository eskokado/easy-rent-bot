import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        this.activateFeather();
        this.enableTooltips();
        this.enablePopovers();
        this.activateScrollspy();
        this.toggleSideNavigation();
        this.closeSideNavigationOnSmallerScreens();
        this.activateSidebarNavLinks();
    }

    activateFeather() {
        feather.replace();
    }

    enableTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    enablePopovers() {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }

    activateScrollspy() {
        const stickyNav = document.body.querySelector('#stickyNav');
        if (stickyNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#stickyNav',
                offset: 82,
            });
        }
    }

    toggleSideNavigation() {
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sidenav-toggled'));
            });
        }
    }

    closeSideNavigationOnSmallerScreens() {
        const sidenavContent = document.body.querySelector('#layoutSidenav_content');
        if (sidenavContent) {
            sidenavContent.addEventListener('click', event => {
                const BOOTSTRAP_LG_WIDTH = 992;
                if (window.innerWidth >= BOOTSTRAP_LG_WIDTH) {
                    return;
                }
                if (document.body.classList.contains("sidenav-toggled")) {
                    document.body.classList.toggle("sidenav-toggled");
                }
            });
        }
    }

    activateSidebarNavLinks() {
        let activatedPath = window.location.pathname.match(/([\w-]+\.html)/, '$1');

        if (activatedPath) {
            activatedPath = activatedPath[0];
        } else {
            activatedPath = 'index.html';
        }

        const targetAnchors = document.body.querySelectorAll('[href="' + activatedPath + '"].nav-link');

        targetAnchors.forEach(targetAnchor => {
            let parentNode = targetAnchor.parentNode;
            while (parentNode !== null && parentNode !== document.documentElement) {
                if (parentNode.classList.contains('collapse')) {
                    parentNode.classList.add('show');
                    const parentNavLink = document.body.querySelector(
                        '[data-bs-target="#' + parentNode.id + '"]'
                    );
                    parentNavLink.classList.remove('collapsed');
                    parentNavLink.classList.add('active');
                }
                parentNode = parentNode.parentNode;
            }
            targetAnchor.classList.add('active');
        });
    }
}
