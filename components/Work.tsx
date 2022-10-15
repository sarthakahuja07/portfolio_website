import React, { ReactElement, useState, useRef } from "react"
import Modal from "./WorkModal"
import WorkCard from "./WorkCard"
import AllProjectsIcon from "../public/images/allProjects.svg"
import Link from "next/link"
import { projects } from "@prisma/client"
import ScrollAnimation from "./ScrollAnimation"
import bounceVariant from "../animation/bonceVariant"
import delayedBounceVariant from "../animation/delayedBounceVariant"
import { motion } from "framer-motion"

interface Props {
	projects: projects[]
}

function Work({ projects }: Props): ReactElement {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currProject, setCurrProject] = useState(projects[0])

	const viewAllRef = useRef<HTMLDivElement>(null)
	const allProjectIcon = useRef<HTMLDivElement>(null)

	const open = (project: projects) => {
		setIsModalOpen(true)
		setCurrProject(project)
		document.body.style.overflow = "hidden"
	}

	const toggleViewAll = () => {
		if (viewAllRef.current?.classList.contains("hidden")) {
			viewAllRef.current?.classList.remove("hidden")
			viewAllRef.current?.classList.add("xl:flex")
		} else if (viewAllRef.current?.classList.contains("xl:flex")) {
			viewAllRef.current?.classList.remove("xl:flex")
			viewAllRef.current?.classList.add("hidden")
		}
	}

	const toggleIcon = () => {
		if (allProjectIcon.current?.classList.contains("hidden")) {
			allProjectIcon.current?.classList.remove("hidden")
			allProjectIcon.current?.classList.add("xl:flex")
		} else if (allProjectIcon.current?.classList.contains("xl:flex")) {
			allProjectIcon.current?.classList.remove("xl:flex")
			allProjectIcon.current?.classList.add("hidden")
		}
	}

	return (
		<>
			<div
				className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 mt-[96px] lg:mt[180px] xl:mt-[240px] "
				id="work"
			>
				<div className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full sm:w-[456px] lg:w-[604px] xl:w-[580px] mb-[28px] sm:mb-[36px] lg:mb-[40px] xl:mb-[84px]">
					<ScrollAnimation>
						<motion.h2
							variants={bounceVariant}
							className="text-shadow-work font-clash text-4xl sm:text-7xl xl:text-8xl mb-1 sm:mb-2"
						>
							Work
						</motion.h2>
						<motion.div variants={delayedBounceVariant}>
							<p className="font-clash text-4xsm sm:text-3xsm xl:text-sm">
								Here is a showcase of some of my best projects
								that i made. They can be found on my github.
							</p>
						</motion.div>
					</ScrollAnimation>
				</div>
				<div
					className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 min-w-[250px] w-fit mb-2 hidden xl:flex flex-row items-end"
					onMouseOver={toggleViewAll}
					onMouseOut={toggleViewAll}
				>
					<ScrollAnimation>
						<motion.h3
							variants={bounceVariant}
							className="font-clash xl:text-4xl"
						>
							Projects
						</motion.h3>
					</ScrollAnimation>
					<ScrollAnimation>
						<Link href="/projects">
							<div
								className="items-center gap-1 hidden ml-5 cursor-pointer"
								ref={viewAllRef}
							>
								<p className="font-clash text-xxsm">View All</p>
								<AllProjectsIcon className="h-[14px] w-[10px]" />
							</div>
						</Link>
					</ScrollAnimation>

					<div
						ref={allProjectIcon}
						className="hidden ml-3 self-center"
					>
						<AllProjectsIcon className="h-[22px] w-[14px]" />
					</div>
				</div>
			</div>
			<div
				className="w-full flex flex-col xl:flex-row overflow-x-clip work-row relative before:hidden xl:before:block after:hidden xl:after:block "
				onMouseOver={toggleIcon}
				onMouseOut={toggleIcon}
			>
				{projects.map((project: projects, i) => {
					return (
						<div key={project.id}>
							<WorkCard open={open} project={project} index={i} />
						</div>
					)
				})}
			</div>

			{isModalOpen && (
				<Modal
					setIsModalOpen={setIsModalOpen}
					isModalOpen={isModalOpen}
					project={currProject}
				/>
			)}
		</>
	)
}

export default Work
