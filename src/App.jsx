import React, { useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import About from './components/About'
import SlidingText from './components/SlidingText'
import Faq from './components/Faq'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useLenisScroll from './assets/hooks/useLenisScroll'
import useScrollReveal from './assets/hooks/useScrollReveal'

const App = () => {
	useLenisScroll()
	useScrollReveal()

	useLayoutEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual'
		}

		if (window.location.hash) {
			window.history.replaceState(
				null,
				'',
				window.location.pathname + window.location.search,
			)
		}

		window.scrollTo(0, 0)

		requestAnimationFrame(() => {
			window.scrollTo(0, 0)
		})

		setTimeout(() => {
			window.scrollTo(0, 0)
		}, 50)
	}, [])

	return (
		<div className='overflow-x-hidden'>
			<Navbar />
			<Hero />
			<Catalog />
			<SlidingText
				text={'Sobne biljke — buketi — aranžmani za svaku priliku'}
			/>
			<About />
			<Gallery />
			<Faq />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
