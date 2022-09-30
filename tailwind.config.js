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
					lineHeight: "85px",
					fontWeight: "500"
				}
			],
			"6xl": [
				"68.66px",
				{
					lineHeight: "84px",
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
			black: "#070707"
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
			lg: "10px",
			large: "12px",
			xl: "22px",
			terminal: "20px"
		},
		extend: {
			backgroundImage: {
				"nav-gradient":
					"linear-gradient(89.89deg, rgba(255, 255, 255, 0.06) -12.34%, rgba(217, 217, 217, 0) 114.36%, rgba(255, 255, 255, 0.4) 114.36%);",
				"line-gradient":
					"linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #FFFEFE 100%);",
				"line-gradient2":
					"linear-gradient(270deg, #FFFEFE 0%, rgba(0, 0, 0, 0) 100%);"
			}
		}
	},
	corePlugins: {
		container: false
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					// maxWidth: "100%",
					padding: "0 35px",
					"@screen sm": {
						// maxWidth: "640px"
						margin: "0 70px"
					},
					"@screen md": {
						// maxWidth: "768px"
					},
					"@screen lg": {
						// width: "100%",
						maxWidth: "1720px",
						padding: "0 70px"
					},
					"@screen xl": {
						maxWidth: "1440px",
						margin: "0 70px"
					},
					"@screen xxl": {
						maxWidth: "1830px",
						margin: "0 70px"
					}
				}
			})
		}
	],
	darkMode: "class"
}
