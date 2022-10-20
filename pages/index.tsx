import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css"
import { Footer } from "../components/Footer"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Skills from "../components/Skills"
import {
	skills_set,
	PrismaClient,
	skills,
	experience,
	projects
} from "@prisma/client"
import backgrounds from "../public/backgrounds"
import { useEffect, useState } from "react"
import { url } from "inspector"
import { motion } from "framer-motion"

type SkillsSetType = skills_set & { skills: skills[] }

interface Props {
	skillSet: SkillsSetType[]
	experiences: experience[]
	projects: projects[]
}

const icon = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		fill: "rgba(0, 0, 0, 0)"
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		fill: "rgba(0, 0, 0, 1)"
	}
}

const Home: NextPage<Props> = ({ skillSet, experiences, projects }) => {
	const [loading, setLoading] = useState(true)

	const cacheImages = async () => {
		const promises = await backgrounds.map((image) => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.src = image.url
				img.onload = resolve
				img.onerror = reject
			})
		})

		promises.push(
			new Promise((resolve, reject) => {
				setTimeout(resolve, 2000)
			})
		)

		await Promise.all(promises)

		setLoading(false)
	}

	useEffect(() => {
		cacheImages()
	}, [])

	const randomBackground = () => {
		const randomindex = Math.floor(Math.random() * backgrounds.length)
		return backgrounds[randomindex].url
	}

	useEffect(() => {
		const background = randomBackground()
		console.log(background)
		if (!loading) {
			document.getElementById(
				"bg"
			)!.style.backgroundImage = `url(${background})`
		}
	}, [loading])

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

			{loading ? (
				<div className="flex justify-center items-center h-screen bg-modal">
					<div className="w-[250px] h-[250px] drop-shadow-loader flex items-center justify-center  bg-[#000] rounded-[30px]">
						<motion.svg
							width="402"
							height="402"
							viewBox="0 0 402 402"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[56%] overflow-visible stroke-active stroke-[10px]"
						>
							<motion.path
								d="M399.431 101.68V177.871L209.627 85.3537H190.804L85.7059 141.136C74.4118 166.17 97.732 169.707 110.804 168.347L201.784 122.088L401 221.408V301.68L201.784 401L2.56863 301.68V222.769L192.373 320.728H209.627L316.294 263.585C324.137 240.456 306.882 233.653 289.627 237.735L201.784 281.272L1 181.952V98.9592L201.784 1L399.431 101.68Z"
								// fill="#09F755"
								// stroke="#09F755"
								variants={icon}
								initial="hidden"
								animate="visible"
								transition={{
									default: {
										duration: 2,
										ease: "easeOut",
										repeat: Infinity
									},
									fill: {
										duration: 2,
										ease: "easeOut",
										repeat: Infinity
									}
								}}
							/>
						</motion.svg>
					</div>
				</div>
			) : (
				<>
					<Navbar />

					<div
						id="bg"
						className=" bg-center bg-cover bg-no-repeat h-screen w-[100%] absolute inset-0 z-[-10]"
					>
						<div className="backdrop-blur-[100px] h-[250%]"></div>
					</div>
					<div className="mt-[66.5px] sm:mt-[109px] md:mt-[105px] lg:mt-[107px] xl:mt-[124px]"></div>

					<Hero />
					<About experiences={experiences} />
					<Skills skillSet={skillSet} />
					<Work projects={projects} />
					<Contact />
					<Footer />
				</>
			)}
		</div>
	)
}

export default Home

export const getStaticProps = async () => {
	const prisma = new PrismaClient()
	// get skillSet from prisma and include the skills associated with it
	const skillSet: SkillsSetType[] = await prisma.skills_set.findMany({
		include: {
			skills: true
		}
	})

	const experiences: experience[] = await prisma.experience.findMany({})
	const projects: projects[] = await prisma.projects.findMany({})

	return {
		props: { skillSet, experiences, projects }
	}
}
