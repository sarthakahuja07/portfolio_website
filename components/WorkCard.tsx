/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import GitHub from "../public/images/github.svg"
import Globe from "../public/images/globe-white.svg"

interface Props {}

const WorkCard = (props: Props) => {
	return (
		<div className="mb-4 lg:mb-9 xl:mb-0 xl:mr-5">
			<div className="relative w-[320px] card sm:w-[488px] lg:w-[564px] mx-auto mb-[46px] sm:mb-[72px] lg:mb-[92px] hover:z-[4] ">
				<div className=" absolute top-0 right-0 w-[94px] h-[86px] sm:w-[142px] sm:h-[130px] lg:w-[184px] lg:h-[168px] cardNumber duration-300 delay-75">
					<p className="font-clash text-number outlinedNumber sm:text-numberMd lg:text-numberLg">
						01
					</p>
				</div>
				<div className="bg-work-card-gradient cursor-pointer cardBox duration-300 delay-75 backdrop-blur-[6.86799px] rounded-work-card border-solid border-grey border-[0.196228px] relative top-[46px] sm:top-[72px] lg:top-[92px] p-3 sm:p-5 lg:p-[26px]">
					<div className="flex flex-row justify-between items-center">
						<img
							src="images/herobg.png"
							className="w-[116px] sm:w-[176px] lg:w-[228px]  h-[123px] sm:h-[190px] lg:h-[244px] lg:rounded-[24px] rounded-[12px] sm:rounded-[18.5px]"
							alt="project image"
						/>
						<div className="font-clash w-[156px] sm:w-[240px] lg:w-[244px]">
							<h3 className="text-phoneXl sm:text-xsm lg:text-md mb-1 sm:mb-2">
								Pooja Store
							</h3>
							<p className="text-phoneSm sm:text-4xsm lg:text-3xsm mb-5 sm:mb-7 lg:mb-9">
								Here is a showcase of some of my best projects.
							</p>
							<div className="flex flex-row items-center w-[116px] sm:w-[180px] lg:w-[212px] font-clash justify-between">
								<div className="flex flex-row items-center">
									<Globe className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 mr-1 text-white" />

									<Link href="https://www.linkedin.com/in/sarthak-ahuja07/ ">
										<a className="hover-underline-animation cursor-pointer after:bg-active">
											<h4 className="text-phoneSm sm:text-4xsm lg:text-3xsm">
												Website
											</h4>
										</a>
									</Link>
								</div>
								<div>|</div>
								<div className="flex flex-row items-center">
									<GitHub className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 mr-1" />

									<Link href="https://www.linkedin.com/in/sarthak-ahuja07/ ">
										<a className="hover-underline-animation cursor-pointer after:bg-active">
											<h4 className="text-phoneSm sm:text-4xsm lg:text-3xsm">
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
		</div>
	)
}

export default WorkCard
