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

const Home: NextPage = () => {
	return (
		<div>
			<Navbar />
			<div className="w-full h-screen bg-hero-pattern absolute bg-center bg-cover bg-no-repeat">
				<div className="backdrop-blur-[100px] absolute w-full">
					<Head>
						<title>Sarthak Portfolio</title>
						<meta
							name="description"
							content="Portfolio website for software developer Sarthak Ahuja"
						/>
						<link rel="icon" href="/favicon.svg" />
					</Head>
					{/* TODO: fix the mt based on each screen size */}
					<div className="mt-[66.5px] sm:mt-[109px] md:mt-[105px] lg:mt-[107px] xl:mt-[124px]"></div>
					<Hero />
					<About />
					<Work />
					<Contact />
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default Home
