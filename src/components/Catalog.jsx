import React, { useState } from 'react'
import { LuZoomIn } from 'react-icons/lu'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import {
	Counter,
	Thumbnails,
	Zoom,
} from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

/* KORPICE */
import korpice from '../assets/images/catalog/korpice/korpice.webp'
import korpiceHorizontal from '../assets/images/catalog/korpice/korpice-horizontal.jpg'
import korpiceHover from '../assets/images/catalog/korpice/korpice-hover.webp'
import korpice1 from '../assets/images/catalog/korpice/korpice-1.webp'
import korpice2 from '../assets/images/catalog/korpice/korpice-2.webp'
import korpice3 from '../assets/images/catalog/korpice/korpice-3.webp'
import korpice4 from '../assets/images/catalog/korpice/korpice-4.webp'
import korpice5 from '../assets/images/catalog/korpice/korpice-5.webp'
import korpice6 from '../assets/images/catalog/korpice/korpice-6.webp'
import korpice7 from '../assets/images/catalog/korpice/korpice-7.webp'
import korpice8 from '../assets/images/catalog/korpice/korpice-8.webp'

/* SOBNE BILJKE */
import sobneBiljke from '../assets/images/catalog/sobne-biljke/sobne-biljke.webp'
import sobneBiljkeHorizontal from '../assets/images/catalog/sobne-biljke/sobne-biljke-horizontal.jpg'
import sobneBiljkeHover from '../assets/images/catalog/sobne-biljke/sobne-biljke-hover.webp'
import sobneBiljke1 from '../assets/images/catalog/sobne-biljke/sobne-biljke-1.webp'
import sobneBiljke2 from '../assets/images/catalog/sobne-biljke/sobne-biljke-2.webp'
import sobneBiljke3 from '../assets/images/catalog/sobne-biljke/sobne-biljke-3.webp'
import sobneBiljke4 from '../assets/images/catalog/sobne-biljke/sobne-biljke-4.webp'
import sobneBiljke5 from '../assets/images/catalog/sobne-biljke/sobne-biljke-5.webp'
import sobneBiljke6 from '../assets/images/catalog/sobne-biljke/sobne-biljke-6.webp'
import sobneBiljke7 from '../assets/images/catalog/sobne-biljke/sobne-biljke-7.webp'
import sobneBiljke8 from '../assets/images/catalog/sobne-biljke/sobne-biljke-8.webp'

/* BUKETI I ARANŽMANI */
import buketi from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani.webp'
import buketiHorizontal from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-horizontal.jpg'
import buketiHover from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-hover.webp'
import buketi1 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-1.webp'
import buketi2 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-2.webp'
import buketi3 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-3.webp'
import buketi4 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-4.webp'
import buketi5 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-5.webp'
import buketi6 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-6.webp'
import buketi7 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-7.webp'
import buketi8 from '../assets/images/catalog/buketi-aranzmani/buketi-aranzmani-8.webp'

/* KAKTUSI */
import kaktusi from '../assets/images/catalog/kaktusi/kaktusi.webp'
import kaktusiHorizontal from '../assets/images/catalog/kaktusi/kaktusi-horizontal.jpg'
import kaktusiHover from '../assets/images/catalog/kaktusi/kaktusi-hover.webp'
import kaktusi1 from '../assets/images/catalog/kaktusi/kaktusi-1.webp'
import kaktusi2 from '../assets/images/catalog/kaktusi/kaktusi-2.webp'
import kaktusi3 from '../assets/images/catalog/kaktusi/kaktusi-3.webp'
import kaktusi4 from '../assets/images/catalog/kaktusi/kaktusi-4.webp'

const ITEMS = [
	{
		img: korpiceHorizontal,
		hoverImg: korpiceHover,
		title: 'Korpice',
		text: 'Nežne, šarene i pune pažnje — poklon koji uvek izmami osmeh!',
		alt: 'Cvetne korpice iz ponude cvećare Gardenija u Rumi',
		gallery: [
			{ src: korpice1 },
			{ src: korpice2 },
			{ src: korpice3 },
			{ src: korpice4 },
			{ src: korpice5 },
			{ src: korpice6 },
			{ src: korpice7 },
			{ src: korpice8 },
		],
	},
	{
		img: sobneBiljkeHorizontal,
		hoverImg: sobneBiljkeHover,
		title: 'Sobne biljke',
		text: 'Zeleni prijatelji koji oplemenjuju naš kućni prostor.',
		alt: 'Sobne biljke iz ponude cvećare Gardenija u Rumi',
		gallery: [
			{ src: sobneBiljke1 },
			{ src: sobneBiljke2 },
			{ src: sobneBiljke3 },
			{ src: sobneBiljke4 },
			{ src: sobneBiljke5 },
			{ src: sobneBiljke6 },
			{ src: sobneBiljke7 },
			{ src: sobneBiljke8 },
		],
	},
	{
		img: buketiHorizontal,
		hoverImg: buketiHover,
		title: 'Buketi i aranžmani',
		text: 'Za iznenađenja i sve lepe trenutke — buketi koji govore umesto vas.',
		alt: 'Buketi i cvetni aranžmani iz cvećare Gardenija u Rumi',
		gallery: [
			{ src: buketi1 },
			{ src: buketi2 },
			{ src: buketi3 },
			{ src: buketi4 },
			{ src: buketi5 },
			{ src: buketi6 },
			{ src: buketi7 },
			{ src: buketi8 },
		],
	},
	{
		img: kaktusiHorizontal,
		hoverImg: kaktusiHover,
		title: 'Kaktusi',
		text: 'Za sve koji zaborave da zalivaju, a ipak žele malo prirode u svom prostoru.',
		alt: 'Kaktusi i ukrasne biljke iz cvećare Gardenija u Rumi',
		gallery: [
			{ src: kaktusi1 },
			{ src: kaktusi2 },
			{ src: kaktusi3 },
			{ src: kaktusi4 },
		],
	},
]

const Catalog = () => {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentGallery, setCurrentGallery] = useState([])

	const handleOpenGallery = (gallery, index = 0) => {
		setCurrentGallery(gallery)
		setCurrentIndex(index)
		setOpen(true)
	}

	return (
		<section
			id='katalog'
			aria-labelledby='katalog-naslov'
			className='relative z-10 min-h-screen rounded-border-bottom section-spacing-x section-spacing-y flex flex-col items-center gap-4 text-dark'>
			<h2
				id='katalog-naslov'
				data-animate='fade-up'
				className='w-full text-center font-size-3 font-accent'>
				<span className='gradient-text bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent'>
					Naš
				</span>{' '}
				Katalog
			</h2>

			<p
				data-animate='fade-up'
				className='max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[90%] text-center font-size-5 font-main'>
				Ulepšajte dan dragoj osobi svežim cvećem iz naše ponude.
				<span className='block font-semibold'>
					Posetite nas ili poručite telefonom.
				</span>
			</p>

			<ul className='w-full lg:max-w-[95%] 2xl:max-w-[75%] flex flex-wrap justify-between gap-y-8 md:gap-y-10 lg:gap-y-12 2xl:gap-y-20 my-6 lg:my-10 2xl:my-30'>
				{ITEMS.map((item) => (
					<li
						key={item.title}
						data-animate='fade-up'
						className='
							basis-full md:basis-[47.5%]
							lg:rounded-2xl lg:p-4 lg:shadow-[0px_0px_40px_10px_rgba(231,231,231,0.35)]
							xl:rounded-3xl xl:p-6 xl:shadow-[0px_0px_50px_16px_rgba(231,231,231,0.5)]
							flex flex-col gap-2 group
						'>
						<button
							type='button'
							onClick={() => handleOpenGallery(item.gallery, 0)}
							aria-label={`Pogledaj galeriju kategorije ${item.title}`}
							className='w-full text-left cursor-pointer outline-0'>
							<div className='relative aspect-video lg:aspect-[1.15/1] xl:aspect-7/6 rounded-xl overflow-hidden bg-[#f0f0f0]'>
								<img
									src={item.img}
									alt={item.alt}
									width='1600'
									height='900'
									className='w-full h-full object-cover transition-opacity duration-500 ease-in-out xl:group-hover:opacity-0'
									decoding='async'
								/>

								{item.hoverImg && (
									<img
										src={item.hoverImg}
										alt={item.alt}
										width='1600'
										height='900'
										className='absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out xl:group-hover:opacity-100'
										decoding='async'
									/>
								)}

								<div
									aria-hidden='true'
									className='
										absolute top-2 right-2 md:top-3 md:right-3 xl:top-3 xl:right-3
										w-9 h-9 md:w-11 md:h-11 lg:w-13 lg:h-13 xl:w-16 xl:h-16
										rounded-lg
										bg-linear-to-r from-accent-1 to-accent-2
										text-dark
										origin-center
										transition-all duration-200
										will-change-transform
										flex items-center justify-center
										xl:group-hover:from-dark xl:group-hover:to-dark
										xl:group-hover:text-white
										xl:group-hover:scale-[1.05]
									'>
									<LuZoomIn className='text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]' />
								</div>
							</div>

							<h3 className='mt-4 lg:mt-5 xl:mt-8 font-accent font-size-6'>
								{item.title}
							</h3>

							<p className='font-main font-size-6 my-2 lg:my-2.5 xl:my-3'>
								{item.text}
							</p>
						</button>
					</li>
				))}
			</ul>

			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={currentGallery}
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

export default Catalog
