import React, {
	useEffect,
	useState,
	useLayoutEffect,
	useRef,
} from 'react'
import gsap from 'gsap'
import logo from '../assets/images/logo.svg'
import useScreenWidth from '../assets/hooks/useScreenWidth'
import { getLenis } from '../assets/hooks/useLenisScroll'

const MENU_ITEMS = [
	{ label: 'Početna', href: '#pocetna' },
	{ label: 'Katalog', href: '#katalog' },
	{ label: 'O nama', href: '#o-nama' },
	{ label: 'Galerija', href: '#galerija' },
	{ label: 'Česta pitanja', href: '#faq' },
	{ label: 'Kontakt', href: '#kontakt' },
]

const DESKTOP_BREAKPOINT = 1024

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [navReady, setNavReady] = useState(false)

	const screenWidth = useScreenWidth()
	const isDesktop = screenWidth >= DESKTOP_BREAKPOINT
	const navRef = useRef(null)

	useEffect(() => {
		if (isDesktop && isOpen) setIsOpen(false)
	}, [isDesktop, isOpen])

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				navRef.current,
				{
					autoAlpha: 0,
					y: -20,
					filter: 'blur(6px)',
				},
				{
					autoAlpha: 1,
					y: 0,
					filter: 'blur(0px)',
					duration: 0.42,
					delay: 1,
					ease: 'power2.out',
					onComplete: () => setNavReady(true),
				},
			)
		})

		return () => ctx.revert()
	}, [])

	const handleNavClick = (e, href) => {
		e.preventDefault()

		const target = document.querySelector(href)
		if (!target) return

		const lenis = getLenis()

		if (lenis && window.innerWidth >= 768) {
			lenis.scrollTo(target, {
				offset: 0,
				duration: 1.4,
			})
		} else {
			target.scrollIntoView({ behavior: 'smooth' })
		}

		window.history.replaceState(null, '', window.location.pathname)
		setIsOpen(false)
	}

	return (
		<>
			<nav
				ref={navRef}
				aria-label='Glavna navigacija sajta'
				className='navbar fixed z-100 w-full border-b border-gray-200 bg-white'
				style={{ opacity: 0 }}>
				<div className='flex-apart h-[60px] px-5 md:h-[72px] md:px-8 lg:h-[84px] lg:px-[5%] xl:h-[100px] xl:px-[8%]'>
					<a
						href='#pocetna'
						aria-label='Početna strana - Cvećara Gardenija'
						className='flex-center shrink-0'
						onClick={(e) => handleNavClick(e, '#pocetna')}>
						<img
							draggable='false'
							src={logo}
							alt='Logo cvećare Gardenija'
							className='w-18 md:w-20 lg:w-[84px] xl:w-22 select-none outline-0'
						/>
					</a>

					{isDesktop && (
						<div className='flex items-center gap-6 xl:gap-10 font-main text-[14px] xl:text-[16px] font-medium'>
							{MENU_ITEMS.map((item) => (
								<a
									key={item.label}
									href={item.href}
									onClick={(e) => handleNavClick(e, item.href)}
									className='select-none whitespace-nowrap outline-0 transition-opacity duration-300 hover:opacity-70'>
									{item.label}
								</a>
							))}
						</div>
					)}

					{!isDesktop && (
						<button
							type='button'
							onClick={() => setIsOpen((prev) => !prev)}
							className='hamburger-menu flex-center cursor-pointer'
							aria-label={
								isOpen ? 'Zatvori navigaciju' : 'Otvori navigaciju'
							}
							aria-expanded={isOpen}
							aria-controls='mobile-menu'>
							<div className='flex flex-col gap-1.5'>
								<span
									aria-hidden='true'
									className={`h-[1.6px] w-7 rounded bg-dark transition-transform duration-300 ${
										isOpen ? 'translate-y-1 rotate-45' : ''
									}`}
								/>
								<span
									aria-hidden='true'
									className={`h-[1.6px] w-7 rounded bg-dark transition-transform duration-300 ${
										isOpen ? '-translate-y-1 -rotate-45' : ''
									}`}
								/>
							</div>
						</button>
					)}
				</div>
			</nav>

			{!isDesktop && navReady && (
				<div
					aria-hidden='true'
					onClick={() => setIsOpen(false)}
					className={`fixed inset-0 z-90 bg-dark/40 transition-opacity duration-300 ${
						isOpen
							? 'pointer-events-auto opacity-100'
							: 'pointer-events-none opacity-0'
					}`}
				/>
			)}

			{!isDesktop && navReady && (
				<div
					id='mobile-menu'
					className={`fixed top-0 left-0 right-0 z-95 mt-[60px] md:mt-[72px] bg-white custom-radius-bottom
						transition-transform duration-1000
						ease-[cubic-bezier(0.2,1,0.1,1)]
						${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
					<nav
						aria-label='Mobilna navigacija'
						className='flex flex-col font-main text-[14px] md:text-[15px] font-medium'>
						{MENU_ITEMS.map((item) => (
							<a
								key={item.label}
								href={item.href}
								onClick={(e) => handleNavClick(e, item.href)}
								className='border-b border-gray-200 px-5 py-5 md:px-8 md:py-6'>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</>
	)
}

export default Navbar
