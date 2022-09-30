import Image from "next/image"
import React, { ReactElement } from "react"
import star from "../public/images/star.png"

interface Props {}

function Hero({}: Props): ReactElement {
	return (
		<>
			<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 ">
				<div className="col-start-1 lg:col-start-2 xl:col-start-2 xxl:col-start-2 w-[250px] col-span-4 md:col-span-12 xl:col-span-5 xxl:col-span-5 sm:w-[515px] md:w-[480px] mt-11 sm:mt-20 lg:mt-[104px] xl:mt-[158px] xxl:mt-[194px] relative">
					<div className="absolute top-[-54px] left-[201px]">
						<Image
							className="self-center"
							src={star}
							alt="star"
							width={24}
							height={24}
						/>
					</div>
					<div className="absolute sm:top-[472px] left-[57px] top-[270px] ">
						<Image
							className="self-center"
							src={star}
							alt="star"
							width={24}
							height={24}
						/>
					</div>
					<div className="absolute sm:top-[240px] sm:left-[300px] left-[230px] top-[200px]">
						<Image
							className="self-center"
							src={star}
							alt="star"
							width={24}
							height={24}
						/>
					</div>
					{/* <div></div>
					<div></div> */}
					<div className="font-clash">
						<h2 className="text-xxl sm:text-5xl font-cabinet mb-1 sm:mb-4">
							Hi, I am
						</h2>
						<h1 className="text-3xl sm:text-6xl customShadow mb-2 sm:mb-4 xl:mb-7">
							Sarthak Ahuja
						</h1>
						<p className="text-4xsm sm:text-sm mb-6 sm:mb-[52px]">
							I am a full stack developer based out of New Delhi,
							India.
						</p>
					</div>
					<div>
						<button className="helloButton hover:before:bg-black hover:after:bg-white hover:text-white text-black hover:after:border-black transition-all duration-300 ">
							<p className="font-array text-hello  sm:text-hellolg ">
								Say Hello!
							</p>
						</button>
					</div>
				</div>

				<div className=" col-span-4 mx-auto col-start-1 md:col-span-12  xl:col-span-5 xl:col-start-8 w-[240px] sm:w-[430px] mt-[92px] sm:mt-[64px] md:mt-[100px] xl:mt-[196px] xxl:mt-[172px] xl:mx-0 bg-[#000] rounded-terminal relative ">
					<div className="w-4 h-4 bg-[#E35353] rounded-full absolute top-6 left-6"></div>
					<div className="w-4 h-4 bg-[#53E37C] rounded-full absolute top-6 left-[52px]"></div>
					<div className="w-4 h-4 bg-[#F8D41C] rounded-full absolute top-6 left-20"></div>
				</div>
			</div>
		</>
	)
}

export default Hero
