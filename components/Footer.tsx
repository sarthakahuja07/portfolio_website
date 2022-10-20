import React from "react"
import Star from "../public/images/star.svg"
import Link from "next/link"

interface Props {}

export const Footer = (props: Props) => {
	return (
		<>
			<div className="flex flex-row items-center ">
				<div className="flex-1 h-[1px] bg-line-gradient2 mr-2"></div>
				<Star className="w-[13px] h-[13px]" />
				<div className="flex-1 h-[1px] bg-line-gradient ml-2"></div>
			</div>
			<div className="mt-6 md:mt-10 mx-auto w-fit text-center mb-8 sm:mb-[30px] md:mb-9 lg:mb-[77.4px] xl:mb-14">
				<p className="mb-0 sm:mb-[6] md:mb-2 lg:mb-3 font-clash xl:text-3xsm sm:text-4xsm text-phoneSm ">
					made with ❤️
				</p>
				<p className="font-clash xl:text-3xsm sm:text-4xsm text-phoneSm ">
					Designed by{" "}
					<Link href="https://akhileshsaurabh.com/ ">
						<a className="hover-underline-animation cursor-pointer after:bg-active">
							Akhilesh
						</a>
					</Link>{" "}
					&{" "}
					<Link href="https://www.shahrozahmad.com/ ">
						<a className="hover-underline-animation cursor-pointer after:bg-active">
							Shaz
						</a>
					</Link>{" "}
					&nbsp; &nbsp;| &nbsp;&nbsp;Developed by &nbsp;
					<Link href="https://www.linkedin.com/in/sarthak-ahuja07/ ">
						<a className="hover-underline-animation cursor-pointer after:bg-active">
							Sarthak Ahuja
						</a>
					</Link>
				</p>
			</div>
		</>
	)
}
