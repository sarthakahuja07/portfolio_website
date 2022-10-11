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
			<Navbar />
			<div className="mt-[66.5px] sm:mt-[109px] md:mt-[105px] lg:mt-[107px] xl:mt-[124px]"></div>

			<ProjectsPage />
			<Footer />
		</div>
	)
}

export default Projects
