import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className='relative z-1 bg-dark flex flex-col gap-10 pt-16 pb-0 lg:pt-24 xl:pt-32'>
			{/* INFO */}
			<div className='flex w-full flex-col gap-6 px-6 pb-6 font-light text-white font-size-6 lg:w-[88%] lg:gap-8 lg:px-0 xl:w-[80%] xl:flex-row xl:gap-12 self-center'>
				<FooterBlock title='Kontakt'>
					<a href='tel:+381638715866'>+381 63 871 5866</a>
					<a href='mailto:gardenija@gmail.com'>gardenija@gmail.com</a>
				</FooterBlock>

				<FooterBlock title='Adresa'>
					<address className='not-italic flex flex-col gap-2'>
						<p>Veljka Dugoševića 141.</p>
						<p>Ruma, 22400</p>
					</address>
				</FooterBlock>

				<FooterBlock title='Radno vreme'>
					<p>Pon – Sub: 08:00 – 19:00</p>
					<p>Nedelja: 08:00 – 12:00</p>
				</FooterBlock>
			</div>

			{/* MAP */}
			<div className='relative h-[500px] w-full lg:h-[560px] lg:w-[88%] xl:h-[640px] xl:w-[80%] self-center'>
				<iframe
					title='Lokacija cvećare Gardenija u Rumi na Google mapi'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.780413418221!2d19.816553377069454!3d45.00908090569488!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x475bab001b9b5bf9%3A0x33f12b30c0a3bfbd!2sCve%C4%87ara%20Gardenija!5e0!3m2!1sen!2srs!4v1766061335225!5m2!1sen!2srs'
					className='h-full w-full'
					style={{ border: 0, borderRadius: 20 }}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				/>

				{/* DECORATIVE OVERLAY */}
				<div
					aria-hidden='true'
					className='absolute inset-0 bg-white bg-opacity-[0.5] mix-blend-saturation'
				/>

				{/* MAP LINK */}
				<a
					href='https://maps.google.com/?q=Cve%C4%87ara%20Gardenija%20Ruma'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Otvori lokaciju cvećare Gardenija na Google mapama'
					className='absolute -top-10 right-4 z-10 lg:-top-12 lg:right-6 xl:-right-10'>
					<div
						className='
							flex items-center justify-center
							w-22 h-22 lg:w-[110px] lg:h-[110px] xl:w-[140px] xl:h-[140px]
							rounded-full
							bg-linear-to-r from-accent-1 to-accent-2
							text-dark
							xl:border-2 xl:border-transparent
							xl:hover:from-dark xl:hover:to-dark
							xl:hover:text-white xl:hover:border-white
							xl:hover:scale-115
							transition-all duration-200
							origin-center
						'>
						<MdArrowOutward className='text-[22px] lg:text-[24px] xl:text-[26px]' />
					</div>
				</a>
			</div>

			{/* BOTTOM */}
			<div className='mb-4 w-full px-6 font-main text-[#9e9e9e] font-size-7 lg:mb-5 lg:w-[88%] lg:px-0 xl:mb-6 xl:w-[80%] self-center'>
				<div className='horizontal-line mb-4 lg:mb-5 xl:mb-6' />
				<div className='flex flex-col gap-1.5 text-center text-[12px] lg:text-[14px] xl:text-[16px]'>
					<p>© 2026 Gardenija — Sva prava zadržana</p>
					<p>Made by VN</p>
				</div>
			</div>
		</footer>
	)
}

const FooterBlock = ({ title, children }) => (
	<section className='w-full rounded-xl bg-[#c9c9c90b] p-8 py-10 lg:p-10 lg:py-11 xl:p-16 flex flex-col gap-4 lg:gap-5 xl:gap-6'>
		<h3 className='font-accent border-b border-[#3e3e3e] pb-4 lg:pb-5 xl:pb-6'>
			{title}
		</h3>
		<div className='flex flex-col gap-2 font-main text-[13px] lg:text-[15px] text-[#ccc] xl:text-[18px]'>
			{children}
		</div>
	</section>
)

export default Footer
