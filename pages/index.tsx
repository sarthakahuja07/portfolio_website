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

type SkillsSetType = skills_set & { skills: skills[] }

interface Props {
	skillSet: SkillsSetType[]
	experiences: experience[]
	projects: projects[]
}

const Home: NextPage<Props> = ({ skillSet, experiences, projects }) => {
	const [loading, setLoading] = useState(true)

	const cacheImages = async (srcArray: any) => {
		const promises = await srcArray.map((image: any) => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.src = image
				img.onload = resolve
				img.onerror = reject
			})
		})
		await Promise.all(promises)
		setLoading(false)
	}

	useEffect(() => {
		const srcArray = backgrounds.map((bg) => bg.url)
		cacheImages(srcArray)

		// setTimeout(() => {
		// 	setLoading(false)
		// }, 2000)

		// load all the assets before showing the page
		// Promise.all(
		// 	backgrounds.map((background) => {
		// 		return new Promise((resolve) => {
		// 			const img: ImageProps = {
		// 				src: background.url,
		// 				width: 1920,
		// 				height: 1080,
		// 				layout: "responsive",
		// 				quality: 100,
		// 				priority: true,
		// 				loading: "eager",
		// 				unoptimized: true
		// 			}
		// 			img.src = background.url
		// 			img.onLoad = resolve
		// 		})
		// 	})
		// ).then(() => {
		// 	console.log("here")
		// 	setLoading(false)
		// })

		// load the images into the cache
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
				<div className="flex justify-center items-center h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
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
