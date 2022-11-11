/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next")

const nextConfig = withPlaiceholder({
	reactStrictMode: true,
	swcMinify: true,

	experimental: {
		scrollRestoration: true
	},
	images: {
		domains: ["i.imgur.com"]
	}
})

module.exports = nextConfig
