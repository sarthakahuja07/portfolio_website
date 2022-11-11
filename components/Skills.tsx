/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import JS from "../public/images/js.svg"
import { skills_set, skills } from "@prisma/client"
import ScrollAnimation from "./ScrollAnimation"
import { motion, AnimatePresence } from "framer-motion"
import bounceVariant from "../animation/bounceVariant"
import { useEffect, useRef } from "react"
import Image from "next/image"
// @ts-ignore

type SkillsSetType = skills_set & { skills: skills[] }

interface Props {
	skillSet: SkillsSetType[]
}

const Skills = ({ skillSet }: Props) => {
	const [currSkill, setCurrSkill] = useState(skillSet[0])
	const skillsBgRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// change the bg color of the skills section
		if (skillsBgRef.current) {
			skillsBgRef.current.style.setProperty(
				"--skills-bg-color",
				"linear-gradient(155.73deg, #000000 15.54%," +
					currSkill.color +
					" 85.89%)"
			)
		}
	}, [currSkill])

	return (
		<div
			className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 pt-[130px] md:pt-[150px] lg:pt-[160px] xl:pt-[250px] xxl:pt-[300px]"
			id="skills"
		>
			<div className="flex justify-between items-start flex-col xl:flex-row gap-[68px] sm:gap-[44px] lg:gap-[112px] md:gap-[92px] xl:gap-0 col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 xxl:col-span-10">
				<div className="h-[100%]">
					<ScrollAnimation>
						<motion.div
							variants={bounceVariant}
							className="h-[100%] w-full sm:w-[568px] md:w-[580px] xl:w-[530px] "
						>
							<h3 className="mb-1 sm:mb-2 font-clash text-4xl md:text-7xl xl:text-8xl sm:text-7xl text-shadow-h2">
								Skills
							</h3>
							<div>
								<p className="font-clash text-4xsm sm:text-sm">
									An individual eager to learn and explore new
									fields of life and technology, with good
									listening skills and fast learning
									abilities.
								</p>
								<p className="font-clash text-4xsm sm:text-sm">
									An individual eager to learn and explore new
									fields of life and technology, with good
									listening skills and fast learning
									abilities.
								</p>
							</div>
						</motion.div>
					</ScrollAnimation>
				</div>
				<div className="w-full max-w-[360px] sm:max-w-none sm:w-[550px] mx-auto xl:mx-0">
					<ScrollAnimation>
						<motion.div
							variants={bounceVariant}
							className={` overflow-hidden h-[416px] sm:h-[570px]  bg-skills-card bg-cover bg-clip-padding rounded-large sm:rounded-xxl border-solid border-[0.56px] sm:border-[1px] border-[#FFFFFF14] p-[6px] pb-0 relative skillsCard before:blur-[100px]`}
							ref={skillsBgRef}
						>
							<div className=" w-full flex flex-row flex-no-wrap overflow-auto sm:overflow-hidden bg-[#FFFFFF1A] rounded-[6px] sm:rounded-[12px] justify-between font-clash text-phoneXl sm:text-xsm ">
								{skillSet.map((singleSkillSet, i) => {
									return (
										<motion.div
											whileTap={{ scale: 0.9 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 17
											}}
											key={singleSkillSet.id}
											onClick={() =>
												setCurrSkill(singleSkillSet)
											}
											className={`px-[6px] py-[9px] sm:py-[16px] sm:px-[22px] opacity-30 capitalize cursor-pointer hover:opacity-75  ${
												singleSkillSet.id ===
													currSkill.id &&
												" active-skill px-[8px] sm:px-[28px] rounded-[6px] bg-[#FFFFFF26] text-shadow-skills-tab opacity-100 hover:opacity-100 "
											}`}
										>
											{singleSkillSet.name}
										</motion.div>
									)
								})}
							</div>
							<AnimatePresence mode="wait">
								<motion.div
									key={currSkill ? currSkill.name : "empty"}
									initial={{ scale: 0.6, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.6, opacity: 0 }}
									transition={{ duration: 0.2 }}
									className="overflow-auto h-[calc(100%-38px)] sm:h-[calc(100%-60px)]"
								>
									<div className="my-[28px] sm:my-[32px] mx-auto w-[254px] sm:w-[455px] flex fex-row flex-wrap sm:gap-y-[16px] sm:gap-x-[77px] gap-y-[22px] gap-x-[7px]">
										{currSkill.skills.map(
											(singleSkill, i) => (
												<div
													key={singleSkill.id}
													className="sm:w-[100px] w-[80px] text-center "
												>
													<div className="sm:w-[68px] sm:h-[68px] w-[40px] h-[40px] mx-auto mb-1 relative rounded-full">
														<Image
															src={
																singleSkill.logo
															}
															alt={
																singleSkill.name
															}
															layout="fill"
															objectFit="contain"
															loading="eager"
															priority={true}
															placeholder="blur"
															blurDataURL={`/_next/image?url=${singleSkill.logo}&w=1920&q=1`}
														/>
													</div>
													{/* <img
														src={singleSkill.logo}
														alt={singleSkill.name}
														className="sm:w-[68px] sm:h-[68px] w-[40px] h-[40px] mx-auto mb-1"
													/> */}

													<p className="text-4xsm sm:text-3xsm font-clash">
														{singleSkill.name}
													</p>
												</div>
											)
										)}
									</div>
								</motion.div>
							</AnimatePresence>
						</motion.div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	)
}

export default Skills
