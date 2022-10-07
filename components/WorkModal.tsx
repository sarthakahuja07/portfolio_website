/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import GitHub from "../public/images/github-black.svg"
import Globe from "../public/images/globe.svg"
import Close from "../public/images/close-button.svg"
import Back from "../public/images/carousel-back.svg"
import Next from "../public/images/carousel-next.svg"
import TechStack from "./TechStack"

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
			<div className="bg-modal backdrop-blur-[12px] rounded-xxl border-[0.5px] border-solid border-grey p-[76px] flex flex-col w-[880px] h-[800px]">
				<div className="absolute top-[24px] right-[24px] ">
					<button onClick={close}>
						<Close className="h-[30px] w-[30px]" />
					</button>
				</div>
				<div className="mb-[28px] relative">
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
						className=" w-[728px] h-[322px] rounded-xxl"
						alt="me"
					/>
				</div>
				<div className="flex flex-row justify-between">
					<div className="w-[372px]">
						<p className="mb-2 font-clash text-md">
							NFT Marketplace
						</p>
						<div className="mb-[60px]">
							<p className="mb-2 font-clash text-4xsm">
								Here is a showcase of some of my best projects
								that i made. They can be found on my guthub.Here
								is a showcase of some of my best projects that i
								made.They can be found on my guthub.
							</p>
							<p className="mb-2 font-clash text-4xsm">
								Here is a showcase of some of my best projects
								that i made. They can be found on my guthub.Here
								is a showcase of some of my best projects that i
								made.They can be found on my guthub.
							</p>
						</div>
						<div className="w-[312px] flex flex-row items-center justify-between text-black">
							<Link href="/">
								<button className="py-[10px] px-[18px] bg-white border-[0.67px] border-solid border-grey rounded-lg flex">
									<Globe className="h-[20px] w-[20px] mr-4" />
									<p className="font-clash text-xxsm">
										Website
									</p>
								</button>
							</Link>
							<Link href="/">
								<button className="py-[10px] px-[18px] bg-white border-[0.67px] border-solid border-grey rounded-lg flex">
									<GitHub className="h-[20px] w-[20px] mr-4" />
									<p className="font-clash text-xxsm">
										GitHub
									</p>
								</button>
							</Link>
						</div>
					</div>
					<div className="w-[194px]">
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
			</div>
		</div>
	)
}

export default WorkModal
