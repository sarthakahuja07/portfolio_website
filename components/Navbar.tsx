import Link from "next/link"
import React from "react"
import Image from "next/image"
import logo from "../images/logo.png"

interface Props {}

const Navbar = (props: Props) => {
	return (
		<>
			<div className="fixed w-[100%] top-0 z-10">
				<div className="container mx-auto grid grid-cols-4 sm:grid-cols-12 gap-x-5">
					<nav className="w-auto mt-6 sm:mt-9 lg:mt-11 col-start-1 col-span-4 sm:col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 py-10 pr-20 pl-6 rounded-xl border-[0.5px] border-[#636262] border-solid bg-nav-gradient hidden lg:block">
						<div className="flex flex-row justify-between ">
							<div>
								<Link href="/">
									<a>
										<p className="font-source text-phoneXxl md:text-md inline-flex items-baseline ">
											&lt;
											<span className="inline-flex items-baseline [&>span]:self-center self-center">
												<Image
													className="self-center"
													src={logo}
													alt="logo"
													width={15}
													height={18}
												/>
											</span>
											<span>arthak/&gt;</span>
										</p>
									</a>
								</Link>
							</div>
							<div className="flex flex-row flex-wrap w-[523px] justify-between items-center">
								<Link href="#work">
									<a className="text-white text-nav font-array ">
										work()
									</a>
								</Link>
								<Link href="#skills">
									<a className="text-white text-nav font-array">
										skills()
									</a>
								</Link>
								<Link href="#about">
									<a className="text-white text-nav font-array">
										about()
									</a>
								</Link>
								<Link href="#contact">
									<a className="text-active text-nav font-array">
										contact()
									</a>
								</Link>
								<Link href="#resume">
									<a className="text-white text-nav font-array">
										resume()
									</a>
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Navbar
