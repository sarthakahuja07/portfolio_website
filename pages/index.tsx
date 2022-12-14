import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
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
import { useEffect } from "react"
import { getPlaiceholder } from "plaiceholder"

type SkillsSetType = skills_set & { skills: skills[] }

interface Props {
	skillSet: SkillsSetType[]
	experiences: experience[]
	projectsWithPlaceholder: (projects & { placeholder: [] })[]
}

const Home: NextPage<Props> = ({
	skillSet,
	experiences,
	projectsWithPlaceholder
}) => {
	const randomBackground = () => {
		const randomindex = Math.floor(Math.random() * backgrounds.length)
		return backgrounds[randomindex].url
	}

	useEffect(() => {
		const background = randomBackground()
		document.getElementById(
			"bg"
		)!.style.backgroundImage = `url(${background})`
	}, [])

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
				<Work projects={projectsWithPlaceholder} />
				<Skills skillSet={skillSet} />
				<Contact />
				<Footer />
			</>
		</div>
	)
}

export default Home

export const getStaticProps = async () => {
	const prisma = new PrismaClient()
	const skillSet: SkillsSetType[] = await prisma.skills_set.findMany({
		include: {
			skills: true
		}
	})

	const experiences: experience[] = await prisma.experience.findMany({})
	const projects: projects[] = await prisma.projects.findMany({})

	const projectsWithPlaceholder = await Promise.all(
		projects.map(async (project) => {
			const images = project.image
			const placeholder = await Promise.all(
				images.map(async (image) => {
					const { base64 } = await getPlaiceholder(image)
					return base64
				})
			)
			return { ...project, placeholder }
		})
	)

	return {
		props: { skillSet, experiences, projectsWithPlaceholder }
	}
}
