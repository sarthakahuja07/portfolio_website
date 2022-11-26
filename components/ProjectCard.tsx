/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import GitHub from "../public/images/github.svg"
import Globe from "../public/images/globe-white.svg"
import { projects } from "@prisma/client"

interface Props {
	open: (project: projects & { placeholder: [] }) => void
	project: projects & { placeholder: [] }
	index: number
}

const ProjectCard = ({ open, project, index }: Props) => {
	return (
		<div className="relative w-[320px] card sm:w-[488px] lg:w-[482px] xl:w-[367px] mx-auto xl:m-0 hover:z-[2]">
			<div className=" absolute top-0 right-0 w-fit h-[86px] sm:h-[130px] lg:h-[109px] xl:h-[116px] cardNumber duration-300 delay-75">
				<p className="font-clash text-number outlinedNumber sm:text-numberMd lg:text-numberLg xl:text-numberXl text-black_bg">
					{("0" + (index + 1)).slice(-2)}
				</p>
			</div>
			<div
				onClick={() => open(project)}
				className="bg-work-card-gradient bg-cover bg-clip-padding cursor-pointer cardBox  duration-300 delay-75 backdrop-blur-[6.86799px] rounded-work-card-xs sm:rounded-work-card-sm lg:rounded-work-card-lg xl:rouned-work-card-sm border-solid border-[#FFFFFF0D] border-[1.5px] relative top-[46px] sm:top-[72px] lg:top-[92px] xl:top-[68px] p-3 sm:p-5 lg:p-[30px] lg:px-[24px] xl:p-5"
			>
				<div className="flex flex-row justify-between items-center">
					<div
						className={` w-[116px] h-[123px] sm:w-[176px] sm:h-[190px] lg:w-[174px] lg:h-[187px] xl:w-[132px] xl:h-[142px] xl:rounded-[13.9847px] lg:rounded-[18.39px] rounded-[12px] sm:rounded-[18.5px] bg-cover bg-center`}
						style={{
							backgroundImage: `url(${project.cover})`
						}}
					></div>
					<div className="font-clash w-[156px] sm:w-[240px] lg:w-[244px] xl:w-[163px]">
						<h3 className="text-phoneXl sm:text-xsm lg:text-md xl:text-xsm mb-1 sm:mb-2">
							{project.name}
						</h3>
						<p className="text-phoneSm sm:text-4xsm lg:text-3xsm xl:text-4xsm mb-5 sm:mb-7 lg:mb-9 xl:mb-7">
							{project.gist}
						</p>
						<div className="flex flex-row items-center w-[116px] sm:w-[180px] lg:w-[212px] xl:w-[160px] font-clash justify-between">
							<div className="flex flex-row items-center">
								<Globe className="w-3 sm:w-4 lg:w-5 xl:w-4 h-3 sm:h-4 lg:h-5 xl:h-4 mr-1 text-white" />
								<Link href={`${project.website}`}>
									<a className="hover-underline-animation cursor-pointer after:bg-active">
										<h4 className="text-phoneSm sm:text-4xsm lg:text-3xsm xl:text-4xsm">
											Website
										</h4>
									</a>
								</Link>
							</div>
							<div>|</div>
							<div className="flex flex-row items-center">
								<GitHub className="w-3 sm:w-4 lg:w-5 xl:w-4 h-3 sm:h-4 lg:h-5 xl:h-4 mr-1 text-white" />
								<Link href={`${project.github}`}>
									<a className="hover-underline-animation cursor-pointer after:bg-active">
										<h4 className="text-phoneSm sm:text-4xsm lg:text-3xsm xl:text-4xsm">
											Github
										</h4>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
