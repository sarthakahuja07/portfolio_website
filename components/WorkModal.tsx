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

interface Props {
	isModalOpen: boolean
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const WorkModal = ({ isModalOpen, setIsModalOpen }: Props) => {
	const close = () => {
		setIsModalOpen(false)
		document.body.style.overflow = "visible"
	}
	return (
		<div className="fixed inset-0 bg-modal-bg flex items-center justify-center z-[20]">
			<div className="bg-modal backdrop-blur-[12px] xl:rounded-xxl xl:border-[0.5px] xl:border-solid xl:border-grey xxl:p-[76px] xl:p-[76px] lg:p-[44px] md:p-[40px] sm:p-[45px] p-[28px] md:px-[70px] px-9 pb-0 flex flex-col xxl:w-[880px] xl:w-[880px] xl:h-fit h-[100%] w-full overflow-auto">
				<div
					className="xl:hidden flex gap-[14px] mb-[20px] cursor-pointer"
					onClick={close}
				>
					<BackButton className="sm:h-6 sm:w-6 h-4 w-4 " />
					<h3 className="font-clash sm:text-md text-xxsm">
						NFT Marketplace
					</h3>
				</div>
				<div className="mx-auto w-full sm:w-auto ">
					<div className="mb-[40px] xl:mb-0">
						<div className="absolute top-[24px] right-[24px] hidden xl:block">
							<button onClick={close}>
								<Close className="h-[30px] w-[30px]" />
							</button>
						</div>
						<div className="xl:mb-[28px] lg:mb-[56px] sm:mb-[28px] mb-4 relative">
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
								src="images/hero-bg.png"
								className=" xxl:w-[728px] xxl:h-[322px] xl:w-[728px] xl:h-[322px] lg:w-[884px] lg:h-[491px] md:w-[580px] md:h-[322px] sm:w-[569px] sm:h-[322px] w-[100%] h-[52vw] rounded-xxl "
								alt="me"
							/>
						</div>
						<div className="flex flex-col xxl:gap-[60px] xl:gap-[30px] lg:gap-[50px] sm:gap-[32px] gap-[44px]">
							<div className="flex sm:flex-row flex-col justify-between gap-6 sm:gap-0">
								<div className="xxl:w-[372px] xl:w-[372px] lg:w-[372px] sm:w-[294px] w-full">
									<p className="mb-2 font-clash text-md hidden xl:block">
										NFT Marketplace
									</p>
									<div className="">
										<p className="mb-2 font-clash sm:text-4xsm text-phoneLg">
											Here is a showcase of some of my
											best projects that i made. They can
											be found on my guthub.Here is a
											showcase of some of my best projects
											that i made.They can be found on my
											guthub.
										</p>
										<p className="mb-2 font-clash sm:text-4xsm text-phoneLg">
											Here is a showcase of some of my
											best projects that i made. They can
											be found on my guthub.Here is a
											showcase of some of my best projects
											that i made.They can be found on my
											guthub.
										</p>
									</div>
								</div>
								<div className="xl:w-[194px] sm:w-[226px] w-full">
									<h3 className="text-md font-clash mb-2 text-start">
										Tech Stack
									</h3>
									<div className="flex flex-wrap gap-4 gap-y-3">
										<TechStack />
										<TechStack />
										<TechStack />
										<TechStack />
										<TechStack />
										<TechStack />
										<TechStack />
										<TechStack />
										<TechStack />
										<TechStack />
									</div>
								</div>
							</div>
							<div className="xxl:w-[312px] xl:w-[312px] sm:w-[312px] w-full max-w-[312px] mx-auto lg:mx-0">
								<div className="w-full flex flex-row items-center justify-between text-black">
									<Link href="/">
										<button className="py-[10px] px-[18px] bg-white border-[0.67px] border-solid border-grey rounded-lg flex">
											<Globe className="h-[20px] w-[20px] mr-4" />
											<p className="font-clash sm:text-xxsm text-phoneXxl">
												Website
											</p>
										</button>
									</Link>
									<Link href="/">
										<button className="py-[10px] px-[18px] bg-white border-[0.67px] border-solid border-grey rounded-lg flex">
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
