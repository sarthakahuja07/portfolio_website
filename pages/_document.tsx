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
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Source+Code+Pro:wght@200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="bg-black_bg text-white cursor-fancy">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
