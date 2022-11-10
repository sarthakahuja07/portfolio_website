import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
import backgrounds from "../public/backgrounds"
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Head from "next/head"

const icon = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		fill: "rgba(0, 0, 0, 0)"
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		fill: "rgba(0, 0, 0, 1)"
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(false)
	const cacheImages = async () => {
		const promises = await backgrounds.map((image) => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.src = image.url
				img.onload = resolve
				img.onerror = reject
			})
		})

		promises.push(
			new Promise((resolve, reject) => {
				setTimeout(resolve, 2000)
			})
		)

		await Promise.all(promises)

		setLoading(false)
	}

	useEffect(() => {
		cacheImages()
	}, [])

	return (
		<>
			{loading ? (
				<>
					<Head>
						<title>Loading...</title>
						<meta
							name="description"
							content="Portfolio website for software developer Sarthak Ahuja"
						/>
						<link rel="icon" href="/favicon.svg" />
					</Head>
					<div className="flex justify-center items-center h-screen bg-modal">
						<div className="w-[250px] h-[250px] drop-shadow-loader flex items-center justify-center  bg-[#000] rounded-[30px]">
							<motion.svg
								width="402"
								height="402"
								viewBox="0 0 402 402"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[56%] overflow-visible stroke-active stroke-[10px]"
							>
								<motion.path
									d="M399.431 101.68V177.871L209.627 85.3537H190.804L85.7059 141.136C74.4118 166.17 97.732 169.707 110.804 168.347L201.784 122.088L401 221.408V301.68L201.784 401L2.56863 301.68V222.769L192.373 320.728H209.627L316.294 263.585C324.137 240.456 306.882 233.653 289.627 237.735L201.784 281.272L1 181.952V98.9592L201.784 1L399.431 101.68Z"
									variants={icon}
									initial="hidden"
									animate="visible"
									transition={{
										default: {
											duration: 2,
											ease: "easeOut",
											repeat: Infinity
										},
										fill: {
											duration: 2,
											ease: "easeOut",
											repeat: Infinity
										}
									}}
								/>
							</motion.svg>
						</div>
					</div>
				</>
			) : (
				<Component {...pageProps} />
			)}
		</>
	)
}

export default MyApp
