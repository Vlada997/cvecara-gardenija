import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import heroBgMobile from '../assets/images/hero/hero-bg-mobile.jpg'
import heroBgDesktop from '../assets/images/hero/hero-bg-2.jpg'
import useScreenWidth from '../assets/hooks/useScreenWidth'
import scrollToSection from '../assets/utils/scrollToSection'

import flower from '../assets/icons/flower.png'
import money from '../assets/icons/money.png'
import truck from '../assets/icons/truck.png'

const ICON_ITEMS = [
	{
		icon: money,
		alt: 'Povoljne cene cveća i sobnih biljaka u Rumi',
		lines: ['Povoljne', 'cene'],
	},
	{
		icon: flower,
		alt: 'Veliki izbor cveća i cvetnih aranžmana u Rumi',
		lines: ['Raznovrsna', 'ponuda'],
	},
	{
		icon: truck,
		alt: 'Dostava cveća na adresu u Rumi i okolini',
		lines: ['Dostava', 'na adresu'],
	},
]

const DESKTOP_BREAKPOINT = 1024

const Hero = () => {
	const screenWidth = useScreenWidth()
	const isDesktop = screenWidth >= DESKTOP_BREAKPOINT

	const heroRef = useRef(null)
	const bgRef = useRef(null)
	const subtitleRef = useRef(null)
	const titleRef = useRef(null)
	const featuresRef = useRef(null)
	const ctaRef = useRef(null)

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				bgRef.current,
				{ scale: 1.1 },
				{
					scale: 1,
					duration: 1.6,
					ease: 'power2.out',
				},
			)

			const tl = gsap.timeline({
				defaults: {
					duration: 0.65,
					ease: 'power2.out',
				},
			})

			tl.fromTo(
				subtitleRef.current,
				{ autoAlpha: 0, y: 18 },
				{ autoAlpha: 1, y: 0 },
			)
				.fromTo(
					titleRef.current,
					{ autoAlpha: 0, y: 20 },
					{ autoAlpha: 1, y: 0 },
					'-=0.45',
				)
				.fromTo(
					featuresRef.current,
					{ autoAlpha: 0, y: 20 },
					{ autoAlpha: 1, y: 0 },
					'-=0.4',
				)
				.fromTo(
					ctaRef.current,
					{ autoAlpha: 0, y: 20 },
					{ autoAlpha: 1, y: 0 },
					'-=0.38',
				)
		}, heroRef)

		return () => ctx.revert()
	}, [])

	return (
		<header
			ref={heroRef}
			id='pocetna'
			className='relative min-h-screen lg:min-h-[110vh] w-full overflow-hidden rounded-border-bottom bg-[#f3f3f3]'>
			{/* BACKGROUND IMAGE */}
			<div className='absolute inset-0'>
				<img
					ref={bgRef}
					src={!isDesktop ? heroBgMobile : heroBgDesktop}
					className='h-full w-full object-cover will-change-transform'
					alt='Cvećara Gardenija u Rumi - buketi, aranžmani i sobne biljke'
					loading='eager'
					decoding='async'
					fetchpriority='high'
				/>
			</div>

			{/* CONTENT */}
			<div className='relative z-20 flex min-h-screen lg:min-h-[110vh] flex-col items-center justify-center gap-2 select-none px-4 py-[140px] md:px-6 md:py-[170px] lg:px-8 lg:py-[150px] xl:py-[180px] xl:gap-4'>
				{/* SUBTITLE */}
				<p
					ref={subtitleRef}
					className='gradient-text font-accent text-[24px] md:text-[32px] lg:text-[38px] xl:text-[46px] bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent -mt-[6rem] lg:-mt-[1rem]'
					style={{ opacity: 0 }}>
					Cvećara
				</p>

				{/* MAIN TITLE */}
				<h1
					ref={titleRef}
					className='font-accent text-[44px] md:text-[62px] lg:text-[74px] xl:text-[86px] text-dark text-center leading-none'
					style={{ opacity: 0 }}>
					Gardenija
					<span className='sr-only'>
						{' '}
						– cvećara u Rumi sa buketima, aranžmanima i dostavom cveća
					</span>
				</h1>

				{/* FEATURES */}
				<ul
					ref={featuresRef}
					className='mt-6 mb-12 flex w-full max-w-[360px] font-main text-[14px] sm:max-w-[640px] md:text-[16px] lg:mt-5 lg:mb-10 lg:max-w-[760px] lg:text-[17px] xl:mb-12 xl:max-w-[860px] xl:text-[18px]'
					style={{ opacity: 0 }}>
					{ICON_ITEMS.map((item, index) => (
						<React.Fragment key={item.alt}>
							<li className='flex-center w-full flex-col gap-2 text-center lg:gap-2.5'>
								<img
									src={item.icon}
									alt={item.alt}
									className='w-6 md:w-7 lg:w-8 xl:w-[34px]'
									loading='lazy'
									decoding='async'
								/>

								<p className='leading-4 md:leading-5 lg:leading-5 xl:leading-6 md:pt-2'>
									{item.lines.map((line, i) => (
										<React.Fragment key={i}>
											{line}
											{i !== item.lines.length - 1 && <br />}
										</React.Fragment>
									))}
								</p>
							</li>

							{index < ICON_ITEMS.length - 1 && (
								<div
									aria-hidden='true'
									className='line my-3 lg:my-4 xl:my-5'
								/>
							)}
						</React.Fragment>
					))}
				</ul>

				{/* CTA BUTTONS */}
				<nav
					ref={ctaRef}
					aria-label='Glavne sekcije'
					className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-14 font-medium text-[15px] md:text-[18px] lg:text-[18px] xl:text-[20px]'
					style={{ opacity: 0 }}>
					<a
						href='#kontakt'
						onClick={(e) => scrollToSection(e, '#kontakt')}
						className='
							cursor-pointer
							rounded-full
							font-main
							px-11 py-5
							md:px-14 md:py-5
							lg:px-16 lg:py-6
							xl:px-24 xl:py-9
							bg-linear-to-r from-accent-1 to-accent-2
							text-dark
							xl:hover:from-dark xl:hover:to-dark
							xl:hover:text-white
							xl:hover:scale-[1.05]
							transition-all duration-200
							will-change-transform'>
						Kontakt
					</a>

					<a
						href='#galerija'
						onClick={(e) => scrollToSection(e, '#galerija')}
						className='
							cursor-pointer
							rounded-full
							font-main
							px-11 py-5
							md:px-14 md:py-5
							lg:px-16 lg:py-6
							xl:px-24 xl:py-9
							text-dark
							border border-dark
							hover:bg-dark hover:text-white
							xl:hover:scale-[1.05]
							transition-all duration-200
							will-change-transform'>
						Galerija
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Hero
