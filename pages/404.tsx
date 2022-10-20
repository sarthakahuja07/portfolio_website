/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Star from "../public/images/star.svg"
import { motion } from "framer-motion"

const FourOhFour: NextPage = () => {
	return (
		<>
			<Head>
				<title>{"404 - You are Lost"}</title>
				<meta name="description" content="page not found" />
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<div className="w-screen h-screen bg-modal overflow-hidden grid">
				<div className="flex flex-col justify-between min-h-[90vh] mt-auto ">
					<div className="w-[272px] lg:w-[444px] text-center mx-auto">
						<h1 className="font-source text-404 sm:text-404-sm lg:text-404-lg text-active text-shadow-404 lg:text-shadow-404-lg mb-[2px]">
							404
						</h1>
						<div className="mb-9">
							<p className="font-clash text-sm lg:text-xxl ">
								Looks like you got lost!
							</p>
							<p className="font-clash text-sm lg:text-xxl ">
								Just like I am lost in my life.
							</p>
							<div className="flex flex-row items-center">
								<div className="flex-1 h-[1px] bg-line-gradient2 mr-2"></div>
								<Star className="w-[13px] h-[13px]" />
								<div className="flex-1 h-[1px] bg-line-gradient ml-2"></div>
							</div>
						</div>
						<motion.button
							whileHover={{
								boxShadow:
									"0px 4px 30px rgba(255, 255, 255, 0.75)"
							}}
							whileFocus={{
								boxShadow:
									"0px 4px 30px rgba(255, 255, 255, 0.75)"
							}}
							transition={{ duration: 0.2 }}
							className="px-[25px] py-3 rounded-[10px] bg-white"
						>
							<Link href="/">
								<a className="font-clash text-xxsm text-black_bg">
									Go to homepage
								</a>
							</Link>
						</motion.button>
					</div>
					<div className="mx-auto mb-[93px] sm:mb-[98px] md:mb-[72px] lg:mb-[201px] xl:mb-[106px]">
						{/* <Image
							src="https://media.tenor.com/K-A090pkjI8AAAAd/honeycardi-the-weeknd.gif"
							alt="weekend"
							width="100%"
							height="auto"
						/> */}
						<img
							src="https://media.tenor.com/K-A090pkjI8AAAAd/honeycardi-the-weeknd.gif"
							alt="weekend"
							className="w-[226px] sm:w-[383px] md:w-[467px] h-[130px] sm:h-[222px] md:h-[270px] rounded-[26px] sm:rounded-[27px] md:rounded-[33px]"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default FourOhFour
