import { Html, Head, Main, NextScript } from "next/document"

const isProduction = process.env.NODE_ENV === "production"
export default function Document() {
	return (
		<Html>
			<Head>
				{isProduction && (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
						/>
						<script
							dangerouslySetInnerHTML={{
								__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
							}}
						/>
					</>
				)}
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
