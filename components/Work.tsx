import React, { ReactElement, useState, useRef, useEffect } from "react"
import Modal from "./WorkModal"
import WorkCard from "./WorkCard"
import AllProjectsIcon from "../public/images/allProjects.svg"
import Link from "next/link"
import { projects } from "@prisma/client"
import ScrollAnimation from "./ScrollAnimation"
import bounceVariant from "../animation/bounceVariant"
import { motion } from "framer-motion"
import Slider from "react-slick"
import { getCurrentBreakpoint } from "../utils/tailwindBreakpoint"
import Back from "../public/images/work-back.svg"
import Next from "../public/images/work-next.svg"

interface Props {
	projects: projects[]
}

var settings = {
	className: "slider variable-width",
	dots: true,
	infinite: true,
	arrows: false,
	autoplay: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	draggable: false,
	variableWidth: true
}

function Work({ projects }: Props): ReactElement {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currProject, setCurrProject] = useState(projects[0])
	const [currBreakpoint, setCurrBreakpoint] = useState<string | undefined>(
		getCurrentBreakpoint()
	)
	const sliderRef = useRef<Slider | null>(null)

	const viewAllRef = useRef<HTMLDivElement>(null)
	const allProjectIcon = useRef<HTMLDivElement>(null)
	const leftScrollIcon = useRef<HTMLDivElement>(null)
	const rightScrollIcon = useRef<HTMLDivElement>(null)

	const open = (project: projects) => {
		setIsModalOpen(true)
		setCurrProject(project)
		document.body.style.overflow = "hidden"
	}

	useEffect(() => {
		const handleResize = () => {
			setCurrBreakpoint(getCurrentBreakpoint())
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [currBreakpoint])

	const toggleViewAll = () => {
		if (viewAllRef.current?.classList.contains("hidden")) {
			viewAllRef.current?.classList.remove("hidden")
			viewAllRef.current?.classList.add("xl:flex")
		} else if (viewAllRef.current?.classList.contains("xl:flex")) {
			viewAllRef.current?.classList.remove("xl:flex")
			viewAllRef.current?.classList.add("hidden")
		}
	}

	const toggleIcon = () => {
		if (allProjectIcon.current?.classList.contains("hidden")) {
			allProjectIcon.current?.classList.remove("hidden")
			allProjectIcon.current?.classList.add("xl:flex")
		} else if (allProjectIcon.current?.classList.contains("xl:flex")) {
			allProjectIcon.current?.classList.remove("xl:flex")
			allProjectIcon.current?.classList.add("hidden")
		}
		if (
			leftScrollIcon.current?.classList.contains("opacity-0") &&
			leftScrollIcon.current?.classList.contains("scale-0")
		) {
			leftScrollIcon.current?.classList.remove("opacity-0")
			leftScrollIcon.current?.classList.remove("scale-0")
			leftScrollIcon.current?.classList.add("opacity-100")
			leftScrollIcon.current?.classList.add("scale-1")
		} else if (
			leftScrollIcon.current?.classList.contains("opacity-100") &&
			leftScrollIcon.current?.classList.contains("scale-1")
		) {
			leftScrollIcon.current?.classList.remove("opacity-100")
			leftScrollIcon.current?.classList.remove("scale-1")
			leftScrollIcon.current?.classList.add("opacity-0")
			leftScrollIcon.current?.classList.add("scale-0")
		}

		if (
			rightScrollIcon.current?.classList.contains("opacity-0") &&
			rightScrollIcon.current?.classList.contains("scale-0")
		) {
			rightScrollIcon.current?.classList.remove("opacity-0")
			rightScrollIcon.current?.classList.remove("scale-0")
			rightScrollIcon.current?.classList.add("opacity-100")
			rightScrollIcon.current?.classList.add("scale-1")
		} else if (
			rightScrollIcon.current?.classList.contains("opacity-100") &&
			rightScrollIcon.current?.classList.contains("scale-1")
		) {
			rightScrollIcon.current?.classList.remove("opacity-100")
			rightScrollIcon.current?.classList.remove("scale-1")
			rightScrollIcon.current?.classList.add("opacity-0")
			rightScrollIcon.current?.classList.add("scale-0")
		}
	}

	return (
		<>
			<div
				className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 pt-[130px] md:pt-[150px] lg:pt-[160px] xl:pt-[200px] xl:mt-[0px] xxl:mt-[50px] xxl:pt-[250px] "
				id="work"
			>
				<div className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full sm:w-[456px] lg:w-[604px] xl:w-[580px] mb-[28px] sm:mb-[36px] lg:mb-[40px] xl:mb-[84px]">
					<ScrollAnimation>
						<motion.div variants={bounceVariant}>
							<h2 className="text-shadow-work font-clash text-4xl sm:text-7xl xl:text-8xl mb-1 sm:mb-2">
								Work
							</h2>
							<div>
								<p className="font-clash text-4xsm sm:text-3xsm xl:text-sm">
									Here is a showcase of some of the best
									projects that I made. You can find the
									source code on my{" "}
									<a
										href="https://github.com/sarthakahuja07/"
										className="hover-underline-animation cursor-pointer after:bg-active"
									>
										GitHub
									</a>{" "}
									:)
								</p>
							</div>
						</motion.div>
					</ScrollAnimation>
				</div>
			</div>

			{/* TODO: */}
			<ScrollAnimation>
				<motion.div
					variants={bounceVariant}
					className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5"
				>
					<div
						className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 min-w-[250px] w-fit mb-2 hidden xl:flex flex-row items-end"
						onMouseOver={toggleViewAll}
						onMouseOut={toggleViewAll}
					>
						<h3 className="font-clash xl:text-4xl">Projects</h3>
						<Link href="/projects">
							<div
								className="items-center gap-1 hidden ml-5 cursor-pointer"
								ref={viewAllRef}
							>
								<p className="font-clash text-xxsm">View All</p>
								<AllProjectsIcon className="h-[14px] w-[10px]" />
							</div>
						</Link>

						<div
							ref={allProjectIcon}
							className="hidden ml-3 self-center"
						>
							<AllProjectsIcon className="h-[22px] w-[14px]" />
						</div>
					</div>
				</motion.div>

				{currBreakpoint !== "xl" && currBreakpoint !== "xxl" ? (
					<div
						className="w-full flex flex-col xl:flex-row overflow-x-clip work-row relative before:hidden xl:before:block after:hidden xl:after:block "
						onMouseOver={toggleIcon}
						onMouseOut={toggleIcon}
					>
						{projects.map((project: projects, i) => {
							return (
								<div key={project.id}>
									<WorkCard
										open={open}
										project={project}
										index={i}
									/>
								</div>
							)
						})}
					</div>
				) : (
					<motion.div
						className="work-row relative before:hidden xl:before:block after:hidden xl:after:block"
						onMouseOver={toggleIcon}
						onMouseOut={toggleIcon}
						variants={bounceVariant}
					>
						<div
							ref={leftScrollIcon}
							className="absolute top-[calc(50%-34px+46px)] left-8 z-10 opacity-0 scale-0 duration-300 hover:scale-[1.5]"
						>
							<button
								onClick={() => sliderRef.current!.slickPrev()}
							>
								<Back className="h-[68px] w-[68px]" />
							</button>
						</div>
						<div
							ref={rightScrollIcon}
							className="absolute top-[calc(50%-34px+46px)] right-8 z-10 opacity-0 scale-0 duration-300 hover:scale-[1.5]"
						>
							<button
								onClick={() => {
									sliderRef.current!.slickNext()
								}}
							>
								<Next className="h-[68px] w-[68px]" />
							</button>
						</div>
						<Slider {...settings} ref={sliderRef}>
							{projects.map((project: projects, i) => {
								return (
									<div
										key={project.id}
										id={"card" + i.toString()}
									>
										<WorkCard
											open={open}
											project={project}
											index={i}
										/>
									</div>
								)
							})}
						</Slider>
					</motion.div>
				)}
			</ScrollAnimation>

			{isModalOpen && (
				<Modal
					setIsModalOpen={setIsModalOpen}
					isModalOpen={isModalOpen}
					project={currProject}
				/>
			)}
		</>
	)
}

export default Work
