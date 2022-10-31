/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import logo from "../public/images/logo.png"
// import { ReactComponent as YourSvg } from "./your-svg.svg"
import NavMenu from "../public/images/menu.svg"
import NavMenuXs from "../public/images/menu-xs.svg"
import { motion, useCycle } from "framer-motion"

interface Props {}

const Path = (props: any) => (
	<motion.path
		fill="hsl(0, 0%, 100%)"
		strokeWidth="2"
		stroke="hsl(0, 0%, 100%)"
		strokeLinecap="round"
		{...props}
	/>
)

const Navbar = (props: Props) => {
	const [isNavOpen, setisNavOpen] = useState(false)
	const [isOpen, toggleOpen] = useCycle(false, true)

	const btnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const closeNavbar = (e: any) => {
			if (!e.path.includes(btnRef.current)) {
				if (isNavOpen) {
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
							<button onClick={() => setisNavOpen(false)}>
								<Link href="/">
									<a>
										<img
											src="images/logo.png"
											className="xl:w-[140px] sm:w-[112px] w-[80px] sm:h-[16px] xl:h-[20px] h-[11px]"
											alt="logo"
										/>
									</a>
								</Link>
							</button>

							<motion.button
								id="toggler"
								ref={btnRef}
								className="block xl:hidden h-[15px] w-[20px] "
								initial={false}
								animate={isNavOpen ? "open" : "closed"}
								// className=" "
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

							<div
								className={`flex-col flex flex-wrap w-full xl:w-[523px] justify-between items-center xl:flex-row mt-4 xl:mt-0 ${
									isNavOpen ? "flex" : "hidden"
								} xl:flex `}
							>
								<button onClick={() => setisNavOpen(false)}>
									<Link href="#work">
										<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.work()
											</a>
										</div>
									</Link>
								</button>
								<button onClick={() => setisNavOpen(false)}>
									<Link href="#skills">
										<div className="py-3  sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.skills()
											</a>
										</div>
									</Link>
								</button>
								<button onClick={() => setisNavOpen(false)}>
									<Link href="#about">
										<div className="py-3 sm:py-[20px]  px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.about()
											</a>
										</div>
									</Link>
								</button>
								<button onClick={() => setisNavOpen(false)}>
									<Link href="#contact">
										<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.contact()
											</a>
										</div>
									</Link>
								</button>
								<button onClick={() => setisNavOpen(false)}>
									<Link href="#resume">
										<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.resume()
											</a>
										</div>
									</Link>
								</button>
							</div>
						</div>
					</motion.nav>
				</div>
			</div>
		</>
	)
}

export default Navbar
