import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://api.fontshare.com/v2/css?f[]=array@400,600&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,600,500&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="bg-black_bg text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
