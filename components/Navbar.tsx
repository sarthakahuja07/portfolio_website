/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import logo from "../public/images/logo.png"
// import { ReactComponent as YourSvg } from "./your-svg.svg"
import NavMenu from "../public/images/menu.svg"
import NavMenuXs from "../public/images/menu-xs.svg"

interface Props {}

const Navbar = (props: Props) => {
	const [isNavOpen, setisNavOpen] = useState(false)

	const btnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const closeNavbar = (e: any) => {
			if (!e.path.includes(btnRef.current)) {
				if (isNavOpen) {
					setisNavOpen(false)
				}
			}
		}
		document.body.addEventListener("touchstart", closeNavbar)
		return () => {
			document.body.removeEventListener("touchstart", closeNavbar)
		}
	}, [isNavOpen])

	return (
		<>
			<div className="fixed w-[100%] top-0 z-10">
				<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5">
					<nav
						className="w-auto mt-6 sm:mt-[32px] md:mt-[28px] lg:mt-[30px] xl:mt-[44px] col-span-4 md:col-span-12 lg:col-span-8 col-start-1 lg:col-start-3 py-4 sm:py-[30px] px-3 sm:pl-6 sm:pr-[30px] xl:pr-6 rounded-lg sm:rounded-xl bg-nav-gradient backdrop-blur-[20px] border-[1px] sm:border-[1.5px] xl:border-[2px] border-nav-border border-solid "
						id="main-nav"
					>
						<div className="flex flex-row justify-between items-center flex-wrap ">
							<button>
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
							<button
								id="toggler"
								ref={btnRef}
								className="block xl:hidden px-[10px] py-[2px]"
								onClick={() => setisNavOpen(!isNavOpen)}
							>
								<NavMenu className=" w-[20px] h-[15px] hidden sm:block" />
								<NavMenuXs className="w-[16.14px] h-[9.05px] block sm:hidden" />
							</button>
							<div
								className={`flex-col flex flex-wrap w-full xl:w-[523px] justify-between items-center xl:flex-row mt-4 xl:mt-0 ${
									isNavOpen ? "flex" : "hidden"
								} xl:flex `}
							>
								<button>
									<Link href="#work">
										<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.work()
											</a>
										</div>
									</Link>
								</button>
								<button>
									<Link href="#skills">
										<div className="py-3  sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.skills()
											</a>
										</div>
									</Link>
								</button>
								<button>
									<Link href="#about">
										<div className="py-3 sm:py-[20px]  px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.about()
											</a>
										</div>
									</Link>
								</button>
								<button>
									<Link href="#contact">
										<div className="py-3 sm:py-[20px] px-[40px] xl:px-0 xl:py-0">
											<a className="text-white text-nav font-array hover:text-shadow-navItem">
												.contact()
											</a>
										</div>
									</Link>
								</button>
								<button>
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
					</nav>
				</div>
			</div>
		</>
	)
}

export default Navbar
