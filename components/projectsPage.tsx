import React, { useState } from "react"
import Back from "../public/images/projectsBack.svg"
import ProjectCard from "./ProjectCard"
import Modal from "./WorkModal"
import { useRouter } from "next/router"
import { projects } from "@prisma/client"

interface Props {
	projects: (projects & { placeholder: [] })[]
}
type projectWithPlaceholder = projects & { placeholder: [] }

const ProjectsPage = ({ projects }: Props) => {
	const router = useRouter()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currProject, setCurrProject] = useState<
		projects & { placeholder: [] }
	>({
		...projects[0],
		placeholder: []
	})

	const open = (project: projectWithPlaceholder) => {
		setIsModalOpen(true)
		setCurrProject(project)
		document.body.style.overflow = "hidden"
	}
	return (
		<div>
			<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 pt-[44px] md:pt-[64px] lg:pt-[100px] xl:pt-[80px] ">
				<div className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full">
					<div className="sm:w-[456px] lg:w-[604px] xl:w-[580px] mb-11">
						<div className="flex flex-row items-center mb-7 gap-[15px] sm:gap-[40px] ">
							<div
								className="cursor-pointer p-[5px] pl-0 hover:scale-[1.3] duration-300 "
								onClick={() => router.back()}
							>
								<Back className="h-[20px] w-[20px] sm:h-[42px] sm:w-[42px] " />
							</div>
							<h2 className="text-shadow-work font-clash text-4xl sm:text-6xl xl:text-8xl">
								Projects
							</h2>
						</div>
						<p className="font-clash text-4xsm sm:text-3xsm xl:text-sm">
							Here is a showcase of some of the best projects that
							I made. You can Find the source code on my GitHub :)
						</p>
					</div>
				</div>
			</div>
			<div className="sm:container sm:mx-auto sm:grid sm:grid-cols-4 md:grid-cols-12 sm:gap-x-5  mb-[108px] sm:mb-[213px] md:mb-[335px] xl:mb-[96px] xxl:mb-[132px]">
				<div className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full">
					<div className="w-full pb-[46px] sm:pb-[72px] lg:pb-[92px] xl:pb-[68px] flex flex-col xl:flex-row flex-wrap gap-y-[46px] sm:gap-y-[72px] lg:gap-y-[105px]">
						{projects.map((project, index) => (
							<div key={project.id} className="basis-1/3 m-0">
								<ProjectCard
									open={open}
									project={project}
									index={index}
								/>
							</div>
						))}
					</div>
					{isModalOpen && (
						<Modal
							setIsModalOpen={setIsModalOpen}
							isModalOpen={isModalOpen}
							project={currProject}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage
