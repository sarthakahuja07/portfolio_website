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
import {
	skills_set,
	PrismaClient,
	skills,
	experience,
	projects
} from "@prisma/client"

type SkillsSetType = skills_set & { skills: skills[] }

interface Props {
	skillSet: SkillsSetType[]
	experiences: experience[]
	projects: projects[]
}

const Home: NextPage<Props> = ({ skillSet, experiences, projects }) => {
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
			<About experiences={experiences} />
			<Skills skillSet={skillSet} />
			<Work projects={projects} />
			<Contact />
			<Footer />
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
