/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react"
import { motion, useCycle, Variants } from "framer-motion"
import { getCurrentBreakpoint } from "../utils/tailwindBreakpoint"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import Link from "next/link"
import LogoFull from "../public/images/logo-full.svg"

import Image from "next/image"

interface Props {}

const Path = (props: any) => (
	<motion.path
		fill="hsl(0, 0%, 100%)"
		strokeWidth="2.5"
		stroke="hsl(0, 0%, 100%)"
		strokeLinecap="round"
		{...props}
	/>
)

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "easeout", damping: 24 }
	},

	closed: {
		opacity: 0,
		y: 20,
		transition: { type: "easeout", damping: 24 }
	}
}

const Navbar = (props: Props) => {
	const [isNavOpen, setisNavOpen] = useState(false)
	const [currBreakpoint, setCurrBreakpoint] = useState<string | undefined>(
		getCurrentBreakpoint()
	)

	useEffect(() => {
		const handleResize = () => {
			setCurrBreakpoint(getCurrentBreakpoint())
			if (currBreakpoint == "xl" || currBreakpoint == "xxl") {
				setisNavOpen(true)
			} else {
				setisNavOpen(false)
			}
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [currBreakpoint])

	const btnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const closeNavbar = (e: any) => {
			if (!e.path.includes(btnRef.current)) {
				if (
					isNavOpen &&
					currBreakpoint !== "xl" &&
					currBreakpoint !== "xxl"
				) {
					setisNavOpen(false)
				}
			}
		}
		document.body.addEventListener("click", closeNavbar)
		return () => {
			document.body.removeEventListener("click", closeNavbar)
		}
	}, [isNavOpen])

	return (
		<>
			<div className="fixed w-[100%] top-0 z-10">
				<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5">
					<motion.nav
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							// delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01]
						}}
						className="w-auto mt-6 sm:mt-[32px] md:mt-[28px] lg:mt-[30px] xl:mt-[44px] col-span-4 md:col-span-12 lg:col-span-8 col-start-1 lg:col-start-3 py-4 sm:py-[30px] px-3 sm:pl-6 sm:pr-[30px] xl:pr-6 rounded-lg sm:rounded-xl bg-nav-bg backdrop-blur-[80px] "
						id="main-nav"
					>
						<div className="flex flex-row justify-between items-center flex-wrap ">
							<button>
								<ScrollLink
									to="hero"
									spy={true}
									smooth={true}
									offset={-250}
									onClick={() => setisNavOpen(false)}
									duration={500}
								>
									<a>
										<LogoFull className="xl:w-[140px] sm:w-[112px] w-[80px] sm:h-[16px] xl:h-[20px] h-[11px] relative" />
										
									</a>
								</ScrollLink>
							</button>
							<motion.button
								id="toggler"
								ref={btnRef}
								className="block xl:hidden h-[15px] w-[20px] "
								initial={false}
								animate={isNavOpen ? "open" : "closed"}
								onClick={() => setisNavOpen(!isNavOpen)}
							>
								<svg
									width="100%"
									height="100%"
									viewBox="0 0 24 19"
								>
									<Path
										variants={{
											closed: {
												d: "M 2 2.5 L 20 2.5"
											},
											open: { d: "M 3 16.5 L 17 2.5" }
										}}
									/>
									<Path
										d="M 2 9.423 L 20 9.423"
										variants={{
											closed: { opacity: 1 },
											open: { opacity: 0 }
										}}
										transition={{ duration: 0.1 }}
									/>
									<Path
										variants={{
											closed: {
												d: "M 2 16.346 L 20 16.346"
											},
											open: {
												d: "M 3 2.5 L 17 16.346"
											}
										}}
									/>
								</svg>
							</motion.button>
							<motion.div
								initial={false}
								animate={
									isNavOpen ||
									currBreakpoint == "xl" ||
									currBreakpoint == "xxl"
										? "open"
										: "closed"
								}
								variants={{
									open: {
										transition: {
											type: "easeout",
											bounce: 0,
											duration: 0.4,
											delayChildren: 0.3,
											staggerChildren: 0.05
										}
									},
									closed: {
										transition: {
											type: "easein",
											bounce: 0,
											duration: 0.2
										}
									}
								}}
								className={`flex-col flex justify-between items-center xl:flex-row w-full xl:w-[523px] overflow-hidden navItems ${
									isNavOpen
										? "max-h-[350px] mt-4 xl:mt-0"
										: "xl:max-h-[100px] max-h-0 mt-0"
								} `}
							>
								<motion.button variants={itemVariants}>
									<ScrollLink
										to="about"
										spy={true}
										onClick={() => setisNavOpen(false)}
										activeClass="active"
										smooth={true}
										duration={500}
									>
										<div className="py-3 sm:py-[20px]  px-[40px] xl:px-0 xl:py-0">
											<a className="nav-link text-white text-nav font-array hover:text-shadow-navItem">
												.about()
											</a>
										</div>
									</ScrollLink>
								</motion.button>
								<motion.button variants={itemVariants}>
									<ScrollLink
										to="work"
										activeClass="active"
										spy={true}
										onClick={() => setisNavOpen(false)}
										smooth={true}
										duration={500}
									>
										<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="nav-link text-white text-nav font-array hover:text-shadow-navItem">
												.work()
											</a>
										</div>
									</ScrollLink>
								</motion.button>
								<motion.button variants={itemVariants}>
									<ScrollLink
										to="skills"
										activeClass="active"
										spy={true}
										smooth={true}
										onClick={() => setisNavOpen(false)}
										duration={500}
									>
										<div className="py-3  sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="nav-link text-white text-nav font-array hover:text-shadow-navItem">
												.skills()
											</a>
										</div>
									</ScrollLink>
								</motion.button>

								<motion.button variants={itemVariants}>
									<ScrollLink
										to="contact"
										spy={true}
										onClick={() => setisNavOpen(false)}
										activeClass="active"
										smooth={true}
										duration={500}
									>
										<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="nav-link text-white text-nav font-array hover:text-shadow-navItem">
												.contact()
											</a>
										</div>
									</ScrollLink>
								</motion.button>
								<motion.button variants={itemVariants}>
									<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
										<a
											href="/resume.pdf"
											target="_blank"
											onClick={() => setisNavOpen(false)}
											className="nav-link text-white text-nav font-array hover:text-shadow-navItem"
										>
											.resume()
										</a>
									</div>
								</motion.button>
							</motion.div>
						</div>
					</motion.nav>
				</div>
			</div>
		</>
	)
}

export default Navbar
