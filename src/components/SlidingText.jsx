import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import pattern from '../assets/images/sliding-text/pattern-bg.png'
import pattern2 from '../assets/images/sliding-text/pattern-bg-mobile.png'
import plant from '../assets/images/sliding-text/plant.png'

const SlidingText = ({ text }) => {
	const firstText = useRef(null)
	const secondText = useRef(null)
	const slider = useRef(null)
	const animationFrameId = useRef(null)
	const baseSpeed = 0.05
	let xPercent = 0
	let direction = -1

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const scrollTriggerInstance = gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.4,
				start: 0,
				end: '100%',
				onUpdate: (e) => {
					direction = e.direction * -1
				},
			},
		})

		const startAnimation = () => {
			animationFrameId.current = requestAnimationFrame(animate)
		}
		startAnimation()

		return () => {
			scrollTriggerInstance.kill()

			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
		}
	}, [])

	const animate = () => {
		xPercent += baseSpeed * direction

		if (xPercent < -100) {
			xPercent = 0
		} else if (xPercent > 0) {
			xPercent = -100
		}

		if (firstText.current && secondText.current) {
			gsap.set(firstText.current, { xPercent })
			gsap.set(secondText.current, { xPercent })
		}

		animationFrameId.current = requestAnimationFrame(animate)
	}

	const repeatedText = `${text} — ${text} —`

	return (
		<section
			aria-labelledby='sliding-text-title'
			className='relative sliding-text-border-radius rounded-border-bottom rounded-border-top flex justify-center items-center overflow-hidden h-[280px] md:h-[450px] lg:h-[520px] xl:h-[600px] xl:my-8'>
			<h2 id='sliding-text-title' className='sr-only'>
				Cvećara Gardenija u Rumi
			</h2>

			<p className='sr-only'>
				Sveže cveće, buketi, aranžmani i dostava cveća u Rumi.
			</p>

			{/* PATTERN BG */}
			<div
				aria-hidden='true'
				className='absolute inset-0 g-repeat md:hidden'
				style={{
					backgroundImage: `url(${pattern2})`,
				}}
			/>

			<div
				aria-hidden='true'
				className='absolute inset-0 g-repeat hidden md:block'
				style={{
					backgroundImage: `url(${pattern})`,
				}}
			/>

			<div className='absolute py-6 md:py-7 lg:py-8 xl:py-6 bg-accent'>
				<div
					ref={slider}
					aria-hidden='true'
					className='relative whitespace-nowrap font-accent text-dark text-[32px] md:text-[52px] lg:text-[62px] xl:text-[72px]'>
					<p ref={firstText} className='relative m-0'>
						{repeatedText}&nbsp;
					</p>
					<p
						ref={secondText}
						className='absolute left-full top-0 m-0'>
						{repeatedText}&nbsp;
					</p>
				</div>
			</div>

			<img
				src={plant}
				alt=''
				aria-hidden='true'
				className='absolute bottom-0 left-1/2 translate-x-[-50%] w-[250px] md:w-[350px] lg:w-[440px] xl:w-[550px]'
				loading='lazy'
				decoding='async'
			/>
		</section>
	)
}

export default SlidingText
