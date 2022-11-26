import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
import backgrounds from "../public/backgrounds"
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Head from "next/head"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false
import logos from "../public/skills_logos"

// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

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
	const [loading, setLoading] = useState(true)
	const cacheImages = async () => {
		setTimeout(() => {
			setLoading(false)
		}, 8000)

		const promises = await backgrounds.map((image) => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.src = image.url
				img.onload = resolve
				img.onerror = reject
			})
		})
		const logosPromises = await logos.map((image) => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.src = image.url
				img.onload = resolve
				img.onerror = reject
			})
		})

		promises.push(...logosPromises)
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
						<title>Sarthak Portfolio</title>
						<link
							href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
							rel="stylesheet"
							integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
							crossOrigin="anonymous"
						/>

						<meta
							name="description"
							content="Portfolio website for software developer Sarthak Ahuja"
						/>
						<link rel="icon" href="/favicon.svg" />
					</Head>

					<div className="wrapper">
						<div className="loader-outer">
							<div className="loader-inner gap-2">
								<div className="h-[15px] w-[15px] bg-active rounded-[4px] shadow-[0_0_20px_#09f755]"></div>
								<div className="h-[15px] w-[15px] bg-active rounded-[4px] shadow-[0_0_20px_#09f755]"></div>
								<div className="h-[15px] w-[15px] bg-active rounded-[4px] shadow-[0_0_20px_#09f755]"></div>
							</div>
						</div>
						<h1 className="loadingH1">
							<span>LOADING</span>
						</h1>
					</div>
				</>
			) : (
				<Component {...pageProps} />
			)}
		</>
	)
}

export default MyApp
