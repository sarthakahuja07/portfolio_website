import "../styles/globals.css"
import Head from "next/head"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
import backgrounds from "../public/backgrounds"
import * as gtag from "../lib/gtag"
import { config } from "@fortawesome/fontawesome-svg-core"
import logos from "../public/skills_logos"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { useRouter } from "next/router"
config.autoAddCss = false

const isProduction = process.env.NODE_ENV === "production"

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
	const router = useRouter()

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

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			if (isProduction) gtag.pageview(url)
		}
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [router.events, loading])
    
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
