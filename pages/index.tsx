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
					<div className="mt-[124px] md:mt-[130px] lg:mt-[136px]"></div>
					<Hero />
					<About />
					<Work />
					<Contact />
					<div className="relative w-[320px] sm:w-[488px] lg:w-[564px] mx-auto mb-[46px] sm:mb-[72px] lg:mb-[92px]">
						<div className=" absolute top-0 right-0 w-[94px] h-[86px] sm:w-[142px] sm:h-[130px] lg:w-[184px] lg:h-[168px] ">
							<p className="font-clash text-number outlinedNumber sm:text-numberMd lg:text-numberLg">
								01
							</p>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default Home
