import React from 'react'
import phone from '../assets/icons/phone.png'
import mail from '../assets/icons/mail.png'
import location from '../assets/icons/location.png'
import instagram from '../assets/icons/instagram.png'
import { IoSend } from 'react-icons/io5'

const Contact = () => {
	return (
		<section
			id='kontakt'
			aria-labelledby='contact-title'
			className='min-h-screen relative text-center text-dark scroll-mt-[80px] lg:scroll-mt-[96px] xl:scroll-mt-[120px]'>
			<div className='wrapper flex flex-col items-center section-spacing-x section-spacing-y bg-white custom-radius'>
				{/* TITLE */}
				<h2
					id='contact-title'
					data-animate='fade-up'
					className='font-accent font-size-3'>
					Kontaktirajte nas
				</h2>

				{/* SUBTITLE */}
				<p
					data-animate='fade-up'
					className='font-main font-size-5 mt-6 w-[90%] lg:w-[75%] xl:w-[90%]'>
					Pozovite, pišite ili svratite do nas.
					<br />
					<span className='font-semibold'>
						Za sva vaša pitanja stojimo na raspolaganju!
					</span>
				</p>

				{/* CONTENT */}
				<div className='w-full lg:w-[72%] xl:w-[55%] mt-[60px] lg:mt-[72px] xl:mt-[60px] flex flex-col gap-12 lg:gap-14 xl:gap-12'>
					{/* FORM */}
					<form
						data-animate='fade-up'
						aria-label='Kontakt forma'
						className='w-full flex flex-col gap-7 lg:gap-8 xl:gap-10'
						action='https://api.web3forms.com/submit'
						method='POST'>
						<input
							type='hidden'
							name='access_key'
							value='YOUR_ACCESS_KEY_HERE'
						/>
						<input
							type='hidden'
							name='subject'
							value='Nova poruka sa sajta Gardenija'
						/>

						<div className='flex flex-col xl:flex-row gap-7 lg:gap-8 xl:gap-10'>
							{/* NAME */}
							<div className='w-full'>
								<label
									htmlFor='name'
									className='font-accent flex gap-1.5 lg:gap-2 xl:gap-3 font-size-6 text-start mb-2'>
									<span className='mid-circle w-[7px] h-[7px] lg:w-[8px] lg:h-[8px] xl:w-[9px] xl:h-[9px] mt-[5px] lg:mt-[6px] xl:mt-[8px] bg-linear-to-r from-accent-1 to-accent-2 rounded-full' />
									<span>Ime i prezime</span>
								</label>

								<input
									id='name'
									name='name'
									required
									type='text'
									autoComplete='name'
									placeholder='Vaše ime'
									className='w-full bg-[#eeeeee] hover:bg-[#e1e1e1] transition-colors p-3 lg:p-3.5 xl:p-4 rounded-md font-main font-size-5'
								/>
							</div>

							{/* EMAIL */}
							<div className='w-full'>
								<label
									htmlFor='email'
									className='font-accent flex gap-1.5 lg:gap-2 xl:gap-3 font-size-6 text-start mb-2'>
									<span className='mid-circle w-[7px] h-[7px] lg:w-[8px] lg:h-[8px] xl:w-[9px] xl:h-[9px] mt-[5px] lg:mt-[6px] xl:mt-[8px] bg-linear-to-r from-accent-1 to-accent-2 rounded-full' />
									<span>Imejl adresa</span>
								</label>

								<input
									id='email'
									name='email'
									type='email'
									required
									autoComplete='email'
									placeholder='example@gmail.com'
									className='w-full bg-[#eeeeee] hover:bg-[#e1e1e1] transition-colors p-3 lg:p-3.5 xl:p-4 rounded-md font-main font-size-5'
								/>
							</div>
						</div>

						{/* MESSAGE */}
						<div>
							<label
								htmlFor='message'
								className='font-accent flex gap-1.5 lg:gap-2 xl:gap-3 font-size-6 text-start mb-2'>
								<span className='mid-circle w-[7px] h-[7px] lg:w-[8px] lg:h-[8px] xl:w-[9px] xl:h-[9px] mt-[5px] lg:mt-[6px] xl:mt-[8px] bg-linear-to-r from-accent-1 to-accent-2 rounded-full' />
								<span>Vaša poruka</span>
							</label>

							<textarea
								id='message'
								name='message'
								required
								placeholder='Dobar dan, zanima me...'
								style={{ resize: 'none' }}
								className='w-full h-50 lg:h-64 xl:h-80 bg-[#eeeeee] hover:bg-[#e1e1e1] transition-colors p-3 lg:p-3.5 xl:p-4 rounded-md font-main font-size-5'
							/>
						</div>

						{/* SUBMIT */}
						<div className='-mt-2.5 flex justify-center'>
							<button
								type='submit'
								className='
									flex items-center gap-2
									cursor-pointer
									rounded-full
									font-main font-medium font-size-5
									bg-linear-to-r from-accent-1 to-accent-2
									text-dark
									xl:hover:from-dark xl:hover:to-dark
									px-12 py-6
									md:px-14 md:py-5
									lg:px-16 lg:py-6
									xl:px-20 xl:py-8
									xl:hover:text-white
									xl:hover:scale-[1.05]
									origin-center
									transition-all duration-200
									will-change-transform'>
								Pošalji
								<IoSend />
							</button>
						</div>
					</form>

					{/* CONTACT LINKS */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 xl:gap-6 font-main xl:mt-10 w-full'>
						<ContactItem
							href='tel:+381638715866'
							icon={phone}
							text='063 871 5866'
							label='Pozovite cvećaru Gardenija'
						/>
						<ContactItem
							href='https://www.instagram.com/cvecara_gardenija_ruma'
							icon={instagram}
							text='cvecara_gardenija_ruma'
							label='Instagram profil cvećare Gardenija'
							external
						/>
						<ContactItem
							href='mailto:gardenija@gmail.com'
							icon={mail}
							text='gardenija@gmail.com'
							label='Pošaljite imejl cvećari Gardenija'
						/>
						<ContactItem
							href='https://maps.google.com'
							icon={location}
							text='Veljka Dugoševića 141. Ruma'
							label='Lokacija cvećare Gardenija'
							external
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

const ContactItem = ({
	href,
	icon,
	text,
	label,
	external = false,
}) => (
	<a
		data-animate='fade-up'
		href={href}
		aria-label={label}
		{...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
		className='
			group
			w-full min-w-0
			flex items-center gap-3 lg:gap-4 xl:gap-[18px]
			px-3 lg:px-4 xl:px-5 py-3 lg:py-4 xl:py-6
			rounded-full
			custom-shadow-2
			cursor-pointer
			text-[14px] lg:text-[17px] xl:text-[20px]
			font-medium
			hover:bg-dark hover:text-white
			transition-all duration-300 ease-[cubic-bezier(0.2,1,0.1,1)]
		'>
		<span
			className='
				shrink-0
				bg-[#eeeeee]
				p-3 lg:p-4 xl:p-5
				rounded-full
				flex items-center justify-center
				group-hover:bg-white
				transition-all duration-300 ease-[cubic-bezier(0.2,1,0.1,1)]
			'>
			<img
				src={icon}
				draggable='false'
				alt=''
				aria-hidden='true'
				className='w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 object-contain'
			/>
		</span>

		<span className='min-w-0 break-words leading-tight text-left'>
			{text}
		</span>
	</a>
)

export default Contact
