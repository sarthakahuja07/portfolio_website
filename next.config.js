/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	experimental: {
		scrollRestoration: true
	},
	images: {
		domains: ["i.imgur.com"]
	}
}

module.exports = nextConfig
