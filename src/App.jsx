import React, { useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import About from './components/About'
import SlidingText from './components/SlidingText'
import FAQ from './components/FAQ'
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

		// skloni hash iz URL-a da browser ne skače na sekciju posle refresh-a
		if (window.location.hash) {
			window.history.replaceState(
				null,
				'',
				window.location.pathname + window.location.search,
			)
		}

		// vrati na vrh odmah
		window.scrollTo(0, 0)

		// i još jednom posle mount-a/layout-a, za svaki slučaj
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
			<FAQ />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
