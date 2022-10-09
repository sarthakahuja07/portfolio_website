import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css"
import { Footer } from "../components/Footer"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Skills from "../components/Skills"

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
			<div className="bg-hero-pattern bg-center bg-cover bg-no-repeat h-screen w-[100%] absolute inset-0 z-[-10]">
				<div className="backdrop-blur-[100px] h-[250%]"></div>
			</div>
			<div className="mt-[66.5px] sm:mt-[109px] md:mt-[105px] lg:mt-[107px] xl:mt-[124px]"></div>

			<Hero />
			<About />
            <Skills />
			<Work />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
