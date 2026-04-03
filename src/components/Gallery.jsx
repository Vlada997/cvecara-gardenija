import React, { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import {
	Counter,
	Thumbnails,
	Zoom,
} from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import img1 from '../assets/images/gallery/korpice-cveca.webp'
import img2 from '../assets/images/gallery/korpice-cveca-2.webp'
import img3 from '../assets/images/gallery/korpice-cveca-3.webp'
import img4 from '../assets/images/gallery/sobna-biljka.webp'
import img5 from '../assets/images/gallery/sobna-biljka-2.webp'
import img6 from '../assets/images/gallery/cvetni-aranzman.webp'
import img7 from '../assets/images/gallery/korpice-cveca-4.webp'
import img8 from '../assets/images/gallery/korpice-cveca-5.webp'
import img9 from '../assets/images/gallery/korpice-cveca-6.webp'
import img10 from '../assets/images/gallery/korpice-cveca-7.webp'
import img11 from '../assets/images/gallery/korpice-cveca-8.webp'
import img12 from '../assets/images/gallery/korpice-cveca-9.webp'

gsap.registerPlugin(ScrollTrigger)

const images = [
	{ src: img1, alt: 'Cvetni aranžman iz cvećare Gardenija u Rumi' },
	{
		src: img2,
		alt: 'Buket cveća iz ponude cvećare Gardenija u Rumi',
	},
	{
		src: img3,
		alt: 'Dekorativni cvetni aranžman iz cvećare Gardenija',
	},
	{
		src: img4,
		alt: 'Sveže cveće i aranžmani iz cvećare Gardenija u Rumi',
	},
	{
		src: img5,
		alt: 'Buket za posebne prilike iz cvećare Gardenija u Rumi',
	},
	{
		src: img6,
		alt: 'Cveće i aranžmani iz galerije cvećare Gardenija',
	},
	{ src: img7, alt: 'Cvetni aranžman iz cvećare Gardenija u Rumi' },
	{
		src: img8,
		alt: 'Buket cveća iz ponude cvećare Gardenija u Rumi',
	},
	{
		src: img9,
		alt: 'Dekorativni cvetni aranžman iz cvećare Gardenija',
	},
	{
		src: img10,
		alt: 'Sveže cveće i aranžmani iz cvećare Gardenija u Rumi',
	},
	{
		src: img11,
		alt: 'Buket za posebne prilike iz cvećare Gardenija u Rumi',
	},
	{
		src: img12,
		alt: 'Cveće i aranžmani iz galerije cvećare Gardenija',
	},
]

const Gallery = () => {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleOpen = (index) => {
		setCurrentIndex(index)
		setOpen(true)
	}

	return (
		<section
			id='galerija'
			aria-labelledby='gallery-title'
			className='py-1 flex-center flex-col section-spacing-y bg-dark'>
			<h2 id='gallery-title' className='sr-only'>
				Galerija cveća i aranžmana
			</h2>

			<div className='grid xl:max-w-[80%] grid-cols-2 xl:grid-cols-3 gap-0.5 xl:gap-1 px-0.5 xl:px-1'>
				{images.map((img, index) => (
					<button
						key={index}
						type='button'
						data-animate='grid-stagger'
						className='aspect-square rounded-sm xl:rounded-xl overflow-hidden cursor-pointer'
						style={{ opacity: 0, transform: 'translateY(24px)' }}
						onClick={() => handleOpen(index)}
						aria-label={`Otvori fotografiju ${index + 1} u galeriji`}>
						<img
							src={img.src}
							alt={img.alt}
							width='1600'
							height='1600'
							decoding='async'
							className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
						/>
					</button>
				))}
			</div>

			<div data-animate='fade-up' className='mt-10 lg:mt-14 xl:mt-20'>
				<button
					type='button'
					onClick={() => handleOpen(0)}
					className='
						cursor-pointer
						rounded-full
						font-main font-medium
						text-[15px] md:text-[18px] lg:text-[18px] xl:text-[20px]
						px-12 py-6
						md:px-14 md:py-5
						lg:px-18 lg:py-7
						xl:px-24 xl:py-12
						bg-linear-to-r from-accent-1 to-accent-2
						text-dark
						xl:border xl:border-dark
						xl:hover:from-dark xl:hover:to-dark
						xl:hover:text-white xl:hover:border-white
						xl:hover:scale-[1.05]
						origin-center
						transition-all duration-200
						will-change-transform'>
					Vidi još fotografija
				</button>
			</div>

			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={images}
					index={currentIndex}
					plugins={[Counter, Thumbnails, Zoom]}
					controller={{ closeOnBackdropClick: true }}
					thumbnails={{
						position: 'bottom',
						width: 80,
						height: 60,
						border: 0,
						borderRadius: 8,
						padding: 4,
						gap: 8,
						vignette: false,
					}}
					zoom={{
						maxZoomPixelRatio: 3,
						zoomInMultiplier: 2,
						doubleTapDelay: 300,
						doubleClickDelay: 300,
						doubleClickMaxStops: 2,
						keyboardMoveDistance: 50,
						wheelZoomDistanceFactor: 100,
						pinchZoomDistanceFactor: 100,
						scrollToZoom: true,
					}}
				/>
			)}
		</section>
	)
}

export default Gallery
