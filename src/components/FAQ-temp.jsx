import React, { useState } from 'react'
import faqBG from '../assets/images/faq-bg2.jpg'

const faqs = [
	{
		question: 'Da li vršite dostavu cveća i aranžmana?',
		answer:
			'Da, vršimo dostavu na području Rume i okoline. Porudžbine dostavljamo na adresu, po prethodnom dogovoru.',
	},
	{
		question: 'Koliko unapred je potrebno poručiti?',
		answer:
			'Preporučujemo da porudžbinu izvršite barem dan ranije, kako bismo mogli da obezbedimo željeno cveće i pripremimo aranžman bez žurbe. Za veće ili specifične porudžbine, poput svadbi i većih proslava, najbolje je javiti se nekoliko dana unapred.',
	},
	{
		question: 'Da li kitite automobile za svadbe i proslave?',
		answer:
			'Da, vršimo dekoraciju automobila za svadbe i druge svečane prilike. Ukrašavanje radimo po unapred dogovorenoj porudžbini, u skladu sa vašim željama i stilom proslave.',
	},
	{
		question: 'Da li ukrašavate svečane sale i ostale objekte?',
		answer:
			'Trenutno ne vršimo dekoraciju sala i većih objekata zbog ograničenog kapaciteta. Fokusirani smo na izradu aranžmana i manjih dekoracija, kako bismo zadržali kvalitet usluge.',
	},
	{
		question: 'Da li pravite pogrebne aranžmane?',
		answer:
			'Da, izrađujemo pogrebne aranžmane, uključujući suze, ikebane i bukete za groblje. Radimo ih po porudžbini, u skladu sa vašim željama i prilikom.',
	},
]

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
	const buttonId = `faq-question-${index}`
	const panelId = `faq-answer-${index}`

	return (
		<div className='relative font-main text-dark'>
			<div
				className={`border-t border-[#c6c6c6] transition-colors duration-500 ${
					isOpen ? 'bg-[#cccccc4d]' : 'xl:hover:bg-[#cccccc4d]'
				}`}>
				<button
					id={buttonId}
					type='button'
					onClick={onClick}
					aria-expanded={isOpen}
					aria-controls={panelId}
					className='relative z-10 flex w-full items-start justify-between px-6 py-6 md:px-8 md:py-7 lg:px-9 lg:py-9 xl:px-10 xl:py-12 text-left font-medium cursor-pointer'>
					<span className='flex items-start w-[80%] lg:w-[85%] xl:w-full'>
						{question}
					</span>

					<span className='shrink-0 p-2 lg:p-2.5' aria-hidden='true'>
						<span className='relative block h-3 w-3 md:h-4 md:w-4 lg:h-[18px] lg:w-[18px] xl:h-5 xl:w-5'>
							<span className='absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-dark' />
							<span
								className={`absolute bottom-0 left-1/2 top-0 w-[1.5px] -translate-x-1/2 bg-dark transition-transform duration-500 ease-out ${
									isOpen ? 'rotate-90' : ''
								}`}
							/>
						</span>
					</span>
				</button>

				<div
					id={panelId}
					role='region'
					aria-labelledby={buttonId}
					className={`grid overflow-hidden lg:max-w-[88%] xl:max-w-[80%] transition-[grid-template-rows,opacity] duration-500 ease-out ${
						isOpen
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'
					}`}>
					<div className='min-h-0 overflow-hidden'>
						<p className='px-6 pb-6 md:px-8 md:pb-7 lg:px-9 lg:pb-9 xl:px-10 xl:pb-12 font-size-5'>
							{answer}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<section
			id='faq'
			aria-labelledby='faq-title'
			className='relative rounded-border-bottom text-dark scroll-mt-[80px] lg:scroll-mt-[96px] xl:scroll-mt-[120px]'>
			<div
				aria-hidden='true'
				className='absolute inset-0 opacity-50 pointer-events-none'
				style={{
					backgroundImage: `url(${faqBG})`,
					backgroundRepeat: 'repeat',
					backgroundPosition: 'center',
				}}
			/>

			<div className='wrapper relative bg-[#f1f1f1] flex-center flex-col custom-radius-bottom section-spacing-y'>
				<h2
					id='faq-title'
					data-animate='fade-up'
					className='z-10 mb-16 lg:mb-20 xl:mb-16 text-center font-size-3 font-accent'>
					Česta{' '}
					<span className='bg-linear-to-r from-accent-1 to-accent-2 p-2 lg:p-3 xl:p-4 rounded-xl text-white'>
						pitanja
					</span>
				</h2>

				<div className='z-10 w-full lg:w-[82%] xl:w-[70%] font-size-5'>
					{faqs.map((faq, index) => (
						<FAQItem
							key={faq.question}
							index={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onClick={() =>
								setOpenIndex(openIndex === index ? null : index)
							}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default FAQ
