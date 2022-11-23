/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import myImage from "../public/images/about-image.png"
import Link from "next/link"
import LinkedIn from "../public/images/linkedin.svg"
import Twitter from "../public/images/twitter.svg"
import Mail from "../public/images/mail.svg"
import GitHub from "../public/images/github.svg"
import TSLogo from "../public/images/ts-logo.svg"
import ReactLogo from "../public/images/react-logo.svg"
import ValoLogo from "../public/images/valo-logo.svg"
import FirebaseLogo from "../public/images/firebase-logo.svg"
import NodeLogo from "../public/images/node-logo.svg"
import React, { ReactElement } from "react"
import Experience from "./Experience"
import { experience } from "@prisma/client"
import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"
import bounceVariant from "../animation/bounceVariant"

import socialIconMotion from "../animation/socialIconMotion"

interface Props {
	experiences: experience[]
}

function About({ experiences }: Props): ReactElement {
	return (
		<div
			className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 pt-[130px] md:pt-[150px] lg:pt-[160px] xl:pt-[300px] xxl:pt-[350px]"
			id="about"
		>
			<div className="col-start-1 col-span-4 md:col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-1 xl:col-span-11 xxl:col-start-2 xxl:col-span-10 flex flex-col xl:flex-row justify-between items-center mb-11 sm:mb-[72px] lg:mb-[78px] ">
				<ScrollAnimation>
					<motion.div
						variants={bounceVariant}
						className="sm:w-[568px] md:w-[580px] xl:w-[520px] xxl:w-[580px] mb-[32px] sm:mb-[46px] lg:mb-[50px] xl:mb-0"
					>
						<p className="font-clash text-4xl md:text-7xl xl:text-8xl sm:text-7xl text-shadow-h2 mb-1 sm:mb-2">
							About
						</p>
						<p className="font-clash text-4xsm sm:text-3xsm xl:text-sm mb-3 sm:mb-4 xl:mb-[28px] xxl:mb-[36px]">
							I am a Senior at Manipal University Jaipur pursuing
							B.Tech in Computer Science. Focused,
							quick-learner and Passionate about coding and trying out
							new things.
						</p>
						<div className="flex flex-row items-center justify-between w-[192px] sm:w-[212px] md:w-[216px] xl:w-[224px] ">
							<motion.div
								initial="rest"
								whileHover="hover"
								animate="rest"
							>
								<Link href="https://www.linkedin.com/in/sarthak-ahuja07/">
									<a target="_blank">
										<motion.div variants={socialIconMotion}>
											<LinkedIn className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
										</motion.div>
									</a>
								</Link>
							</motion.div>
							<motion.div
								initial="rest"
								whileHover="hover"
								animate="rest"
							>
								<Link href="https://twitter.com/sarthakahuja07">
									<a target="_blank">
										<motion.div variants={socialIconMotion}>
											<Twitter className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
										</motion.div>
									</a>
								</Link>
							</motion.div>
							<motion.div
								initial="rest"
								whileHover="hover"
								animate="rest"
							>
								<Link href="https://github.com/sarthakahuja07/">
									<a target="_blank">
										<motion.div variants={socialIconMotion}>
											<GitHub className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
										</motion.div>
									</a>
								</Link>
							</motion.div>
							<motion.div
								initial="rest"
								whileHover="hover"
								animate="rest"
							>
								<Link href="mailto:sarthak.ahuja0007@gmail.com">
									<a>
										<motion.div variants={socialIconMotion}>
											<Mail className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
										</motion.div>
									</a>
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.div
						variants={bounceVariant}
						className=" w-[219px] h-[219px] sm:w-[396px] sm:h-[396px] relative flex about-image-container before:w-[142px] before:h-[142px] sm:before:w-[258px] sm:before:h-[258px]"
					>
						<div className="absolute inset-0  w-[152px] h-[152px] sm:w-[274px] sm:h-[274px] m-auto border-[3px] border-[rgba(255,255,255,0.15)] z-[1] rounded-full"></div>
						<div className="absolute inset-0  w-[190px] h-[190px] sm:w-[345px] sm:h-[345px] m-auto border-[1px] border-[rgba(255,255,255,0.15)] z-[1] rounded-full"></div>
						<div className="absolute inset-0 m-auto z-[2] h-[26px] w-[26px] sm:h-[46px] sm:w-[46px] backdrop-blur-lg animate-rot-js-xs sm:animate-rot-js rounded-full flex justify-center items-center border-[0.44px] border-[rgba(255,255,255,0.25)] bg-about-logo-gradient">
							<TSLogo className="h-[19.4px] w-[14.26px] sm:h-[17px] sm:w-[25.8px] filter drop-shadow-ts-logo-shadow" />
						</div>
						<div className="absolute inset-0 m-auto z-[2] h-[26px] w-[26px] sm:h-[46px] sm:w-[46px] backdrop-blur-lg animate-rot-react-xs sm:animate-rot-react rounded-full flex justify-center items-center border-[0.44px] border-[rgba(255,255,255,0.25)] bg-about-logo-gradient">
							<ReactLogo className="h-[13.3px] w-[14.93px] sm:h-[24.04px] sm:w-[27px] filter drop-shadow-react-logo-shadow" />
						</div>
						<div className="absolute inset-0 m-auto z-[2] h-[26px] w-[26px] sm:h-[46px] sm:w-[46px] backdrop-blur-lg animate-rot-valo-xs sm:animate-rot-valo rounded-full flex justify-center items-center border-[0.44px] border-[rgba(255,255,255,0.25)] bg-about-logo-gradient">
							<ValoLogo className="h-[12.27px] w-[14.93px] sm:h-[22.18px] sm:w-[27px] filter drop-shadow-valo-logo-shadow" />
						</div>
						<div className="absolute inset-0 m-auto z-[2] h-[26px] w-[26px] sm:h-[46px] sm:w-[46px]  backdrop-blur-lg animate-rot-firebase-xs sm:animate-rot-firebase rounded-full flex justify-center items-center border-[0.44px] border-[rgba(255,255,255,0.25)] bg-about-logo-gradient">
							<FirebaseLogo className="h-[15.94px] w-[11.61px] sm:h-[27.82px] sm:w-[21px] filter drop-shadow-firebase-logo-shadow" />
						</div>
						<div className="absolute inset-0 m-auto z-[2] h-[26px] w-[26px] sm:h-[46px] sm:w-[46px]  backdrop-blur-lg animate-rot-node-xs sm:animate-rot-node rounded-full flex justify-center items-center border-[0.44px] border-[rgba(255,255,255,0.25)] bg-about-logo-gradient">
							<NodeLogo className="h-[15.1px] w-[13.27px] sm:h-[27.31px] sm:w-[24px] filter drop-shadow-node-logo-shadow" />
						</div>
						<div className="sm:h-[192px] sm:w-[192px] h-[106px] w-[106px] z-[1] relative m-auto">
							<Image
								src={myImage}
								alt="me"
								layout="fill"
								loading="eager"
								placeholder="blur"
							/>
						</div>

						{/* <AboutImage className="mx-auto my-auto z-[1]" /> */}
					</motion.div>
				</ScrollAnimation>
			</div>

			<div className="col-start-1 col-span-4 md:col-span-12 lg:col-start-2 xl:col-start-1 sm:w-[548px] md:w-[558px] lg:w-[603px] xl:w-full xxl:w-[1324px] xl:mx-auto">
				<ScrollAnimation>
					<motion.div variants={bounceVariant}>
						<h3 className=" font-clash text-lg sm:text-4xl w-fit mx-auto text-shadow-h3 mb-[15px] sm:mb-[20px] xl:mb-[16px]">
							Experience
						</h3>
						<div className="flex flex-row xl:flex-col w-full h-full">
							<div className="h-auto w-[1px] relative experience-line xl:w-[90%] xl:h-[1px] bg-experience-line xl:bg-experience-line-horizontal mr-3 xl:mr-0 mb-0 xl:mb-3 translate-y-[-30px] xl:translate-y-0 xl:after:top-[-3px] after:bottom-[1%] xl:after:right-[4px] after:right-[-4px] xl:before:top-[-3px] before:top-[10%] xl:before:left-[10%] before:left-[-3px]  "></div>
							<div className="flex flex-col xl:flex-row w-full justify-between gap-[92px] xl:gap-0 ">
								{experiences.map((experience) => (
									<Experience
										key={experience.id}
										experience={experience}
									/>
								))}
							</div>
						</div>
					</motion.div>
				</ScrollAnimation>
			</div>
		</div>
	)
}

export default About
