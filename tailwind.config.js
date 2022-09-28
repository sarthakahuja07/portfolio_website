/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		screens: {
			sm: "390px",
			md: "744px",
			lg: "1440px",
			xl: "1920px"
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
			red: "#e35353"
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
			DEFAULT: "0.25rem",
			DEFAULT: "4px",
			md: "0.375rem",
			lg: "0.5rem",
			full: "9999px",
			large: "12px",
			xl: "22px"
		},
		extend: {
			backgroundImage: {
				"nav-gradient":
					"linear-gradient(89.89deg, rgba(255, 255, 255, 0.06) -12.34%, rgba(217, 217, 217, 0) 114.36%, rgba(255, 255, 255, 0.4) 114.36%);"
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
					"@screen sm": {
						margin: "0 0px"
					},
					"@screen md": {
						margin: "0 0px"
					},
					"@screen lg": {
						margin: "0 00px"
					},
					"@screen xl": {
						maxWidth: "1780px",
						margin: "0 0"
					}
				}
			})
		},
        
	],
	darkMode: "class"
}
