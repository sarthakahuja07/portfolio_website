import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css"
import { Footer } from "../components/Footer"
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Sarthak Portfolio</title>
				<meta
					name="description"
					content="Portfolio website for software developer Sarthak Ahuja"
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Navbar />
			{/* TODO: fix the mt based on each screen size */}
			<div className="mt-[160px]"></div>
            <Hero />

            <Contact />

			<Footer />
		</div>
	)
}

export default Home
