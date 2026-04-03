import { getLenis } from '../hooks/useLenisScroll'

const scrollToSection = (e, href, closeMenu = null) => {
    e.preventDefault()

    if (closeMenu) closeMenu(false)

    const getOffset = () => (window.innerWidth >= 1024 ? -100 : -60)

    const scrollOnce = (duration = 1.2) => {
        const target = document.querySelector(href)
        if (!target) return

        const lenis = getLenis()
        const offset = getOffset()

        if (lenis && window.innerWidth >= 768) {
            lenis.scrollTo(target, {
                offset,
                duration,
            })
        } else {
            const top =
                target.getBoundingClientRect().top + window.pageYOffset + offset

            window.scrollTo({
                top,
                behavior: 'smooth',
            })
        }
    }

    // prvi scroll
    setTimeout(() => {
        scrollOnce(1.2)

        // kratka korekcija
        setTimeout(() => {
            scrollOnce(0.7)
        }, 500)

        // srednja korekcija
        setTimeout(() => {
            scrollOnce(0.5)
        }, 1100)

        // završna korekcija za FAQ / Contact
        setTimeout(() => {
            scrollOnce(0.35)
        }, 1800)
    }, 120)

    window.history.replaceState(null, '', window.location.pathname)
}

export default scrollToSection