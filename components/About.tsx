/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react"

interface Props {}

function About({}: Props): ReactElement {
	return (
		<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 mt-[92px] sm:mt[40px] md:mt[130px] lg:mt[158px] xl:mt-[234px]">
			<div className="col-start-1 col-span-4 md:col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-1 xl:col-span-11 xxl:col-start-2 xxl:col-span-10 bg-active flex flex-col xl:flex-row justify-between ">
				<div className="sm:w-[568px] md:w-[580px] xl:w-[520px] xxl:w-[580px] bg-red">
					About me
				</div>
				<img
					src="images/hero-bg.png"
					className="w-full h-[200px] sm:w-[422px] md:w-[430px] lg:w-[440px] mx-auto xl:mx-0 "
					alt="test"
				/>
			</div>
			<div></div>
		</div>
	)
}

export default About
