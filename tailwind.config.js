/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		screens: {
			sm: "640px",
			md: "720px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1536px"
		},
		textShadow: {
			default: "0 2px 0 #000",
			navItem: "0px -4px 0px #09F755",
			h2: "0px 2.25641px 16.9231px rgba(255, 255, 255, 0.5)",
			h3: "0px 3.12381px 43.7333px rgba(255, 255, 255, 0.5)",
			h1: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
			work: "0px 4px 30px rgba(255, 255, 255, 0.5);"
		},
		fontSize: {
			phoneSm: [
				"9.22px",
				{
					lineHeight: "10px",
					fontWeight: "400"
				}
			],
			phoneMd: [
				"9.22px",
				{
					lineHeight: "11px",
					fontWeight: "500"
				}
			],
			phoneLg: [
				"11.52px",
				{
					lineHeight: "14px",
					fontWeight: "400"
				}
			],
			phoneXl: [
				"11.52px",
				{
					lineHeight: "14px",
					fontWeight: "600"
				}
			],
			phoneXxl: [
				"14.4px",
				{
					lineHeight: "18px",
					fontWeight: "500"
				}
			],
			"4xsm": [
				"14.4px",
				{
					lineHeight: "18px",
					fontWeight: "400"
				}
			],
			nav: [
				"18px",
				{
					lineHeight: "20px",
					fontWeight: "400"
				}
			],
			"3xsm": [
				"18px",
				{
					lineHeight: "22px",
					fontWeight: "400"
				}
			],
			xxsm: [
				"18px",
				{
					lineHeight: "22px",
					fontWeight: "500"
				}
			],
			xsm: [
				"18px",
				{
					lineHeight: "22px",
					fontWeight: "600"
				}
			],
			sm: [
				"22.5px",
				{
					lineHeight: "28px",
					fontWeight: "400"
				}
			],
			md: [
				"22.5px",
				{
					lineHeight: "28px",
					fontWeight: "600"
				}
			],
			lg: [
				"28.13px",
				{
					lineHeight: "35px",
					fontWeight: "600"
				}
			],
			xl: [
				"28.13px",
				{
					lineHeight: "32px",
					fontWeight: "500"
				}
			],
			xxl: [
				"35.16px",
				{
					lineHeight: "44px",
					fontWeight: "500"
				}
			],
			"3xl": [
				"35.16px",
				{
					lineHeight: "43px",
					fontWeight: "600"
				}
			],
			"4xl": [
				"43.95px",
				{
					lineHeight: "44px",
					fontWeight: "600"
				}
			],
			"5xl": [
				"68.66px",
				{
					lineHeight: "48px",
					fontWeight: "500"
				}
			],
			"6xl": [
				"68.66px",
				{
					lineHeight: "48px",
					fontWeight: "600"
				}
			],
			"7xl": [
				"85.83px",
				{
					lineHeight: "104px",
					fontWeight: "600"
				}
			],
			"8xl": [
				"107.29px",
				{
					lineHeight: "104px",
					fontWeight: "600"
				}
			],
			"9xl": [
				"134.11px",
				{
					lineHeight: "165px",
					fontWeight: "600"
				}
			],
			hello: [
				"19.86px",
				{
					lineHeight: "23px",
					fontWeight: "500"
				}
			],
			hellolg: [
				"28.13px",
				{
					lineHeight: "32px",
					fontWeight: "500"
				}
			],
			code: [
				"10px",
				{
					lineHeight: "13px",
					fontWeight: "400"
				}
			],
			codeLg: [
				"14px",
				{
					lineHeight: "18px",
					fontWeight: "400"
				}
			],
			number: [
				"68.66px",
				{
					lineHeight: "84px",
					fontWeight: "600"
				}
			],
			numberMd: [
				"107.29px",
				{
					lineHeight: "132px",
					fontWeight: "600"
				}
			],
			numberLg: [
				"134.11px",
				{
					lineHeight: "165px",
					fontWeight: "600"
				}
			]
		},
		colors: {
			// Configure your color palette here
			black_bg: "#070707",
			active: "#09f755",
			white: "#ffffff",
			grey: "#636262",
			yellow: "#f8d41c",
			green: "#53e37c",
			red: "#e35353",
			error: "#FF453A",
			black: "#070707",
			codeYellow: "#FF9F0A",
			codeGreen: "#09F755",
			codeBlue: "#64D2FF",
			codePurple: "#BF5AF2",
			codeComment: "#8E8E93",
			transparent: "transparent",
			"nav-border": "rgba(255, 255, 255, 0.05)",
			"modal-bg": "#07070759"
		},
		fontFamily: {
			array: ["Array", "sans-serif"],
			clash: ["Clash Grotesk", "sans-serif"],
			cabinet: ["Cabinet Grotesk", "sans-serif"],
			source: ["Source Code Pro", "monospace"]
		},
		container: {
			center: true
		},
		borderRadius: {
			none: "0",
			sm: "0.125rem",
			hello: "2.82px",
			DEFAULT: "0.25rem",
			DEFAULT: "4px",
			md: "0.375rem",
			lg: "0.5rem",
			full: "9999px",
			full: "9999px",
			"work-card-lg": "17px",
			"work-card-xs": "8.63404px",
			"work-card-sm": "13.1669px",
			lg: "10px",
			large: "12px",
			xl: "22px",
			xxl: "24px",
			xxxl: "36.5963px",
			terminal: "20px"
		},
		linearBorderGradients: (theme) => ({
			colors: theme("colors")
		}),
		extend: {
			backgroundImage: {
				"nav-gradient":
					"linear-gradient(89.89deg, rgba(255, 255, 255, 0.06) -12.34%, rgba(217, 217, 217, 0) 114.36%, rgba(255, 255, 255, 0.4) 114.36%);",
				"line-gradient":
					"linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #FFFEFE 100%);",
				"line-gradient2":
					"linear-gradient(270deg, #FFFEFE 0%, rgba(0, 0, 0, 0) 100%);",
				"experience-line":
					"linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,#ffffff 17.19%,#ffffff 81.77%,rgba(0, 0, 0, 0) 100%);",
				"experience-line-horizontal":
					"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #FFFFFF 13.02%, #FFFFFF 88.54%, rgba(0, 0, 0, 0) 100%);",
				// "hero-pattern": "url('../public/images/hero-bg.png')",
				"hero-pattern": "url('https://i.imgur.com/QZ36B0m.png')",
				"work-card-gradient":
					"url('../public/images/card-bg.png'), linear-gradient(92.04deg, rgba(0, 0, 0, 0.06) -8.08%, rgba(0, 0, 0, 0.4) 112.27%)",
				modal: "url('../public/images/card-bg.png'), linear-gradient(181.1deg, rgba(0, 0, 0, 0.5) -142.74%, #000000 99.06%);"
			},
			dropShadow: {
				menuItem: " 0px -3px 0px #09F755;",
				"4xl": [
					"0 35px 35px rgba(0, 0, 0, 0.25)",
					"0 45px 65px rgba(0, 0, 0, 0.15)"
				]
			}
		}
	},
	corePlugins: {
		container: false
	},
	plugins: [
		require("tailwindcss-textshadow"),
		require("tailwindcss-border-gradients")(),

		function ({ addComponents }) {
			addComponents({
				".container": {
					padding: "0 35px",
					"@screen sm": {
						// maxWidth: "640px"
						// margin: "0 70px"
					},
					"@screen md": {
						// maxWidth: "768px"
						padding: "0 70px"
					},
					"@screen lg": {
						// width: "100%",
						// maxWidth: "1720px",
						padding: "0 70px"
					},
					"@screen xl": {
						maxWidth: "1440px",
						padding: "0 70px"
					},
					"@screen xxl": {
						maxWidth: "1920px",
						padding: "0 70px"
					}
				}
			})
		}
	],
	darkMode: "class"
}
