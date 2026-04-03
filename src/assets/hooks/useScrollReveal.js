import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const useScrollReveal = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const mm = gsap.matchMedia()
        let refreshTimeout1
        let refreshTimeout2

        const handleLoad = () => {
            ScrollTrigger.refresh()
        }

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            const fadeUpElements = gsap.utils.toArray('[data-animate="fade-up"]')
            const fadeInElements = gsap.utils.toArray('[data-animate="fade-in"]')
            const staggerContainers = gsap.utils.toArray(
                '[data-animate="stagger"]'
            )
            const gridStaggerElements = gsap.utils.toArray(
                '[data-animate="grid-stagger"]'
            )

            fadeUpElements.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 24,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                        },
                    }
                )
            })

            fadeInElements.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                        },
                    }
                )
            })

            staggerContainers.forEach((container) => {
                const children = Array.from(container.children)

                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        y: 24,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: container,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                        },
                    }
                )
            })

            ScrollTrigger.batch(gridStaggerElements, {
                start: 'top 75%',
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.08,
                        ease: 'power2.out',
                        overwrite: true,
                    })
                },
                once: true,
            })
        })

        refreshTimeout1 = setTimeout(() => {
            ScrollTrigger.refresh()
        }, 300)

        refreshTimeout2 = setTimeout(() => {
            ScrollTrigger.refresh()
        }, 1000)

        window.addEventListener('load', handleLoad)

        return () => {
            clearTimeout(refreshTimeout1)
            clearTimeout(refreshTimeout2)
            window.removeEventListener('load', handleLoad)
            mm.revert()
        }
    }, [])
}

export default useScrollReveal