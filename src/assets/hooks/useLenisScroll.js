import { useEffect } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export const getLenis = () => lenisInstance

const useLenisScroll = () => {
    useEffect(() => {
        if (window.innerWidth < 768) return

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        lenisInstance = new Lenis({
            duration: 1.6,
            smoothWheel: true,
            touch: false,
        })

        const onScroll = () => {
            ScrollTrigger.update()
        }

        lenisInstance.on('scroll', onScroll)

        let rafId

        const raf = (time) => {
            lenisInstance.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        const refreshTimeout = setTimeout(() => {
            ScrollTrigger.refresh()
        }, 500)

        return () => {
            clearTimeout(refreshTimeout)

            if (lenisInstance) {
                lenisInstance.off('scroll', onScroll)
                lenisInstance.destroy()
                lenisInstance = null
            }

            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])
}

export default useLenisScroll