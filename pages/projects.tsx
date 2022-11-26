import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"

import ProjectsPage from "../components/projectsPage"
import { PrismaClient, projects } from "@prisma/client"
import { getPlaiceholder } from 'plaiceholder';

interface Props {
	projectsWithPlaceholder: (projects & { placeholder: [] })[]
}

const Projects: NextPage<Props> = ({ projectsWithPlaceholder }) => {
	return (
		<div>
			<Head>
				<title>Projects</title>
				<meta
					name="description"
					content="Here are a list of my projects"
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<ProjectsPage projects={projectsWithPlaceholder} />
			<Footer />
		</div>
	)
}

export default Projects

export const getStaticProps = async () => {
	const prisma = new PrismaClient()
	// get skillSet from prisma and include the skills associated with it

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
		props: { projectsWithPlaceholder }
	}
}
