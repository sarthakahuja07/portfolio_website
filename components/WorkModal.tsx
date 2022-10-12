/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import GitHub from "../public/images/github-black.svg"
import Globe from "../public/images/globe.svg"
import Close from "../public/images/close-button.svg"
import Back from "../public/images/carousel-back.svg"
import BackButton from "../public/images/back.svg"
import Next from "../public/images/carousel-next.svg"
import TechStack from "./TechStack"
import { Footer } from "./Footer"
import { projects } from "@prisma/client"

interface Props {
	isModalOpen: boolean
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	project: projects
}

const WorkModal = ({ isModalOpen, setIsModalOpen, project }: Props) => {
	const close = () => {
		setIsModalOpen(false)
		document.body.style.overflow = "visible"
	}
	return (
		<div className="fixed inset-0 bg-modal-bg flex items-center justify-center z-[20]">
			<div className="bg-modal bg-cover bg-clip-padding backdrop-blur-[12px] xl:rounded-xxl xl:border-[2.5px] xl:border-solid xl:border-[#FFFFFF0D] xxl:p-[76px] xl:p-[44px] lg:p-[44px] md:p-[40px] sm:p-[45px] p-[28px] md:px-[70px] px-9 flex flex-col xxl:w-[880px] xl:w-[700px] xl:h-fit h-[100%] w-full pb-0 sm:pb-0 md:pb-0 lg:pb-0 overflow-auto">
				<div
					className="xl:hidden flex gap-[14px] mb-[20px] cursor-pointer items-center"
					onClick={close}
				>
					<BackButton className="sm:h-6 sm:w-6 h-4 w-4 " />
					<h3 className="font-clash sm:text-md text-xxsm">
						{project.name}
					</h3>
				</div>
				<div className="mx-auto w-full sm:w-auto xl:mx-0 xxl:mx-auto">
					<div className="mb-[40px] xl:mb-0">
						<div className="absolute top-[24px] right-[24px] hidden xl:block">
							<button onClick={close}>
								<Close className="h-[30px] w-[30px]" />
							</button>
						</div>
						<div className="xl:mb-[28px] lg:mb-[56px] sm:mb-[28px] mb-4 relative w-fit mx-auto">
							<div className="absolute top-[calc(50%-14px)] left-2 ">
								<button>
									<Back className="h-[28px] w-[28px]" />
								</button>
							</div>
							<div className="absolute top-[calc(50%-14px)] right-2 ">
								<button>
									<Next className="h-[28px] w-[28px]" />
								</button>
							</div>
							<img
								src={project.image[0]}
								className=" xxl:w-[728px] xxl:h-[322px] xl:w-[79vh] xl:h-[35vh] lg:w-[884px] lg:h-[491px] md:w-[580px] md:h-[322px] sm:w-[569px] sm:h-[322px] w-[100%] h-[52vw] rounded-xxl "
								alt="me"
							/>
						</div>
						<div className="flex flex-col xxl:gap-[60px] xl:gap-[30px] lg:gap-[50px] sm:gap-[32px] gap-[44px]">
							<div className="flex sm:flex-row flex-col justify-between gap-6 sm:gap-0">
								<div className="xxl:w-[372px] xl:w-[372px] lg:w-[372px] sm:w-[294px] w-full">
									<p className="mb-2 font-clash text-md hidden xl:block">
										{project.name}
									</p>
									<div className="">
										{project.description.map(
											(desc, index) => (
												<p
													key={index}
													className="mb-2 font-clash sm:text-4xsm text-phoneLg"
												>
													{desc}
												</p>
											)
										)}
									</div>
								</div>
								<div className="xl:w-[194px] sm:w-[226px] w-full">
									<h3 className="text-md font-clash mb-2 text-start">
										Tech Stack
									</h3>
									<div className="flex flex-wrap gap-4 gap-y-3">
										{project.techStack.map(
											(tech, index) => (
												<TechStack
													key={index}
													logo={tech}
												/>
											)
										)}
									</div>
								</div>
							</div>
							<div className="xxl:w-[312px] xl:w-[312px] sm:w-[312px] w-full max-w-[312px] mx-auto lg:mx-0">
								<div className="w-full flex flex-row items-center justify-between text-black">
									<Link href={project.website}>
										<button className="py-[10px] px-[18px] bg-white border-[0.67px] border-solid border-grey rounded-lg flex items-center">
											<Globe className="h-[20px] w-[20px] mr-4" />
											<p className="font-clash sm:text-xxsm text-phoneXxl">
												Website
											</p>
										</button>
									</Link>
									<Link href={project.github}>
										<button className="py-[10px] px-[18px] bg-white border-[0.67px] border-solid border-grey rounded-lg flex  items-center">
											<GitHub className="h-[20px] w-[20px] mr-4" />
											<p className="font-clash sm:text-xxsm text-phoneXxl">
												GitHub
											</p>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:hidden mt-auto ">
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default WorkModal
