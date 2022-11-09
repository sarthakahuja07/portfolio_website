/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import LinkedIn from "../public/images/linkedin.svg"
import Twitter from "../public/images/twitter.svg"
import Mail from "../public/images/mail.svg"
import GitHub from "../public/images/github.svg"
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
			className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 mt-[130px] md:mt-[150px] lg:mt-[160px] xl:mt-[300px] xxl:mt-[350px]"
			id="about"
		>
			<div className="col-start-1 col-span-4 md:col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-1 xl:col-span-11 xxl:col-start-2 xxl:col-span-10 flex flex-col xl:flex-row justify-between mb-11 sm:mb-[72px] lg:mb-[78px] ">
				<ScrollAnimation>
					<motion.div
						variants={bounceVariant}
						className="sm:w-[568px] md:w-[580px] xl:w-[520px] xxl:w-[580px] mb-[32px] sm:mb-[46px] lg:mb-[50px] xl:mb-0"
					>
						<p className="font-clash text-4xl md:text-7xl xl:text-8xl sm:text-7xl text-shadow-h2 mb-1 sm:mb-2">
							About
						</p>
						<p className="font-clash text-4xsm sm:text-3xsm xl:text-sm mb-3 sm:mb-4 xl:mb-[28px] xxl:mb-[36px]">
							I am a third-year student at Manipal University
							Jaipur pursuing B.Tech in Information Technology,
							programming since freshman year of college.
						</p>
						<div className="flex flex-row items-center justify-between w-[192px] sm:w-[212px] md:w-[216px] xl:w-[224px] ">
							<motion.div
								initial="rest"
								whileHover="hover"
								animate="rest"
							>
								<Link href="https://www.linkedin.com/in/sarthak-ahuja07/">
									<a>
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
								<Link href="https://www.linkedin.com/in/sarthak-ahuja07/">
									<a>
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
								<Link href="https://www.linkedin.com/in/sarthak-ahuja07/">
									<a>
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
								<Link href="https://www.linkedin.com/in/sarthak-ahuja07/">
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
					<motion.img
						variants={bounceVariant}
						src="images/hero-bg.png"
						className="w-full sm:w-[422px] md:w-[430px] lg:w-[440px] mx-auto xl:mx-0 h-[140px] lg:h-[356px] my-auto"
						alt="me"
					/>
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
