import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useScreenWidth from '../assets/hooks/useScreenWidth'
import about from '../assets/images/about/about.webp'
import aboutMobile from '../assets/images/about/about-mobile.webp'
import underline from '../assets/images/underline.svg'
import scrollToSection from '../assets/utils/scrollToSection'

import icon1 from '../assets/icons/about-badge.png'
import icon2 from '../assets/icons/about-people.png'
import icon3 from '../assets/icons/about-flower.png'

gsap.registerPlugin(ScrollTrigger)

const featuresData = [
	{
		icon: icon1,
		title: 'Dve decenije sa vama',
		text: 'Već više od 20 godina radimo ono što znamo najbolje — cveće. I dalje sa istom pažnjom kao prvog dana.',
	},
	{
		icon: icon2,
		title: 'Poverenje koje traje',
		text: 'Zahvalni smo našim stalnim kupcima koji nam iznova poklanjaju svoje poverenje. Trudimo se da ga uvek opravdamo.',
	},
	{
		icon: icon3,
		title: 'Za vaše važne trenutke',
		text: 'Rođendani, venčanja, godišnjice ili mali znak pažnje. Tu smo kada želite da nekome ulepšate dan.',
	},
]

const About = () => {
	const screenWidth = useScreenWidth()

	const sectionRef = useRef(null)
	const titleRef = useRef(null)
	const underlineRef = useRef(null)

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(underlineRef.current, {
				scaleX: 0,
				transformOrigin: 'left center',
			})

			gsap.to(underlineRef.current, {
				scaleX: 1,
				duration: 1.2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: titleRef.current,
					start: 'top 70%',
					toggleActions: 'play none none none',
					once: true,
					invalidateOnRefresh: true,
				},
			})
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<div className='relative bg-dark'>
			<section
				ref={sectionRef}
				id='o-nama'
				aria-labelledby='about-title'
				className='relative w-full flex-center flex-col rounded-border-bottom bg-white section-spacing-x section-spacing-y text-dark'>
				{/* TITLE */}
				<div
					ref={titleRef}
					data-animate='fade-up'
					className='title relative flex-center w-full text-center font-size-3 font-accent gap-1.5 lg:gap-2 xl:gap-3'>
					<h2
						id='about-title'
						className='relative flex-center gap-1.5 lg:gap-2 xl:gap-3'>
						<span>Reč, dve</span>

						<span className='relative'>
							o nama
							<span className='absolute left-0 top-6 lg:top-8 xl:top-11 w-[94px] lg:w-[120px] xl:w-[160px] overflow-hidden'>
								<img
									ref={underlineRef}
									src={underline}
									alt=''
									aria-hidden='true'
									className='block w-full will-change-transform'
									style={{ transform: 'scaleX(0)' }}
								/>
							</span>
						</span>
					</h2>
				</div>

				{/* TEXT */}
				<div
					data-animate='fade-up'
					className='text z-10 w-full lg:w-[82%] xl:w-[70%] font-main text-center font-size-5 py-8 lg:py-12 xl:py-16 space-y-4 lg:space-y-5 leading-5 lg:leading-7 xl:leading-normal'>
					<p>
						Već <span className='font-semibold'>20 godina</span> sa
						ljubavlju i pažnjom biramo najlepše cvetove{' '}
						<span className='font-semibold'>
							za vaše posebne trenutke.
						</span>{' '}
						Nudimo vam širok asortiman svežeg rezanog cveća,
						dekorativnih biljaka i elegantnih aranžmana za svaku
						priliku.
					</p>

					<p>
						<span className='font-semibold'>
							Pravimo unikatne cvetne aranžmane po porudžbini,
						</span>{' '}
						u skladu sa vašim željama, stilom i prilikom — od nežnih
						buketa do svečanih dekoracija.{' '}
						<span className='font-semibold'>
							Vršimo dostavu širom Rume i okoline,
						</span>{' '}
						brzo i pouzdano.
					</p>

					<p>
						<span className='font-semibold'>
							Pozovite ili posetite
						</span>{' '}
						naš kutak i pronađite savršeni cvet za svaki vaš trenutak!
					</p>
				</div>

				{/* IMAGE */}
				<div className='w-full lg:w-[82%] xl:w-[70%] rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden'>
					<picture>
						<source media='(min-width: 681px)' srcSet={about} />
						<img
							src={aboutMobile}
							alt='Cvećara Gardenija u Rumi - cveće, aranžmani i dekorativne biljke'
							width='1600'
							height='1000'
							className='block w-full h-auto'
							loading='lazy'
							decoding='async'
						/>
					</picture>
				</div>
				{/* FEATURES */}
				<ul className='features w-full lg:w-[82%] xl:w-[70%] my-6 lg:my-8 xl:my-10 px-2 lg:px-0 flex items-center xl:items-start flex-col'>
					{featuresData.map((feature) => (
						<li
							key={feature.title}
							data-animate='fade-up'
							className='feature w-full flex flex-col gap-3 lg:gap-3.5 xl:gap-4 py-6 lg:py-8 xl:py-12 border-b border-[#e1e1e1]'>
							<div className='flex items-center gap-3 lg:gap-4 xl:gap-5'>
								<img
									src={feature.icon}
									alt=''
									aria-hidden='true'
									className='icon w-9 h-9 lg:w-11 lg:h-11 xl:w-13 xl:h-13 p-2 lg:p-2.5 xl:p-3 rounded-full bg-linear-to-r from-accent-1 to-accent-2'
								/>
								<h3 className='font-accent font-size-5 mt-1'>
									{feature.title}
								</h3>
							</div>

							<p className='font-main font-size-6'>{feature.text}</p>
						</li>
					))}
				</ul>

				<div
					data-animate='fade-up'
					className='my-10 lg:my-14 xl:my-20'>
					<a
						href='#kontakt'
						onClick={(e) => scrollToSection(e, '#kontakt')}
						className='
							inline-flex items-center justify-center
							cursor-pointer
							rounded-full
							font-main font-medium
							text-[15px] md:text-[18px] lg:text-[18px] xl:text-[20px]
							px-12 py-6
							md:px-14 md:py-5
							lg:px-18 lg:py-7
							xl:px-28 xl:py-12
							bg-linear-to-r from-accent-1 to-accent-2
							text-dark
							xl:hover:from-dark xl:hover:to-dark
							xl:hover:text-white
							xl:hover:scale-[1.05]
							origin-center
							transition-all
							duration-200
							will-change-transform'>
						Kontaktirajte nas
					</a>
				</div>
			</section>
		</div>
	)
}

export default About
