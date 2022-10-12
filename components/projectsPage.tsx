import React from "react"
import Back from "../public/images/projectsBack.svg"
import ProjectCard from "./ProjectCard"
import Modal from "./WorkModal"
import { useRouter } from "next/router"

interface Props {}

const ProjectsPage = (props: Props) => {
	const router = useRouter()
	const [isModalOpen, setIsModalOpen] = React.useState(false)

	const open = () => {
		setIsModalOpen(true)
		document.body.style.overflow = "hidden"
	}
	return (
		<div>
			<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 mt-[96px] lg:mt[180px] xl:mt-[240px] ">
				<div className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full">
					<div className="sm:w-[456px] lg:w-[604px] xl:w-[580px] mb-11">
						<div className="flex flex-row items-center mb-7 gap-[15px] sm:gap-[40px] ">
							<div className="cursor-pointer p-[5px] pl-0" onClick={() => router.back()}>
								<Back
									className="h-[20px] w-[20px] sm:h-[42px] sm:w-[42px] "
								/>
							</div>
							<h2 className="text-shadow-work font-clash text-4xl sm:text-6xl xl:text-8xl">
								Projects
							</h2>
						</div>
						<p className="font-clash text-4xsm sm:text-3xsm xl:text-sm">
							Here is a showcase of some of my best projects that
							i made. They can be found on my guthub.Here is a
							showcase of some of my best projects that i made.
							They can be found on my guthub.
						</p>
					</div>
				</div>
			</div>
			<div className="sm:container sm:mx-auto sm:grid sm:grid-cols-4 md:grid-cols-12 sm:gap-x-5  mb-[108px] sm:mb-[213px] md:mb-[335px] xl:mb-[96px] xxl:mb-[132px]">
				<div className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full">
					<div className="w-full pb-[46px] sm:pb-[72px] lg:pb-[92px] xl:pb-[68px] flex flex-col xl:flex-row flex-wrap gap-y-[46px] sm:gap-y-[72px] lg:gap-y-[105px]">
						<div className="basis-1/3 m-0">
							<ProjectCard open={open} />
						</div>
						<div className="basis-1/3">
							<ProjectCard open={open} />
						</div>
						<div className="basis-1/3">
							<ProjectCard open={open} />
						</div>
						<div className="basis-1/3">
							<ProjectCard open={open} />
						</div>
						<div className="basis-1/3">
							<ProjectCard open={open} />
						</div>
						<div className="basis-1/3">
							<ProjectCard open={open} />
						</div>
						<div className="basis-1/3">
							<ProjectCard open={open} />
						</div>
						<div className="basis-1/3">
							<ProjectCard open={open} />
						</div>
					</div>
					{isModalOpen && (
						<Modal
							setIsModalOpen={setIsModalOpen}
							isModalOpen={isModalOpen}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage
