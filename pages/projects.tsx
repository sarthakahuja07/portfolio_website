import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"

import ProjectsPage from "../components/projectsPage"

const Projects: NextPage = () => {
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

			<ProjectsPage />
			<Footer />
		</div>
	)
}

export default Projects
