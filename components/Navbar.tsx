/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import Image from "next/image"
import logo from "../public/images/logo.png"
// import { ReactComponent as YourSvg } from "./your-svg.svg"
import NavMenu from "../public/images/menu.svg"
import NavMenuXs from "../public/images/menu-xs.svg"

interface Props {}

const Navbar = (props: Props) => {
	return (
		<>
			<div className="fixed w-[100%] top-0 z-10">
				<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5">
					<nav className="w-auto mt-6 sm:mt-[32px] md:mt-[28px] lg:mt-[30px] xl:mt-[44px]  col-span-4 md:col-span-12 lg:col-span-8 col-start-1 lg:col-start-3 py-4 sm:py-[30px] px-3 sm:pl-6 sm:pr-[30px] xl:pr-6 rounded-lg sm:rounded-xl bg-nav-gradient backdrop-blur-[20px] border-[1px] sm:border-[1.5px] xl:border-[2px] border-nav-border border-solid ">
						<div className="flex flex-row justify-between h-5 items-center">
							<div>
								<Link href="/">
									<a>
										<img
											src="images/logo.png"
											className="xl:w-[140px] sm:w-[112px] w-[80px] sm:h-[16px] xl:h-[20px] h-[11px]"
											alt="logo"
										/>
									</a>
								</Link>
							</div>
							<div className="flex-row flex-wrap w-[523px] justify-between items-center hidden xl:flex">
								<Link href="#work">
									<a className="text-white text-nav font-array hover:text-shadow-navItem">
										.work()
									</a>
								</Link>
								<Link href="#skills">
									<a className="text-white text-nav font-array hover:text-shadow-navItem">
										.skills()
									</a>
								</Link>
								<Link href="#about">
									<a className="text-white text-nav font-array hover:text-shadow-navItem">
										.about()
									</a>
								</Link>
								<Link href="#contact">
									<a className="text-active text-nav font-array hover:text-shadow-navItem">
										.contact()
									</a>
								</Link>
								<Link href="#resume">
									<a className="text-white text-nav font-array hover:text-shadow-navItem">
										.resume()
									</a>
								</Link>
							</div>

							<button className="block xl:hidden">
								<NavMenu className=" w-[20px] h-[15px] hidden sm:block" />
								<NavMenuXs className="w-[16.14px] h-[9.05px] block sm:hidden" />
							</button>
							{/* </div> */}
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Navbar
