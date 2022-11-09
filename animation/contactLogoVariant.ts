import { Variants } from "framer-motion"

const contactLogoVariant: Variants = {
	offscreen: {
		y: 50,
		opacity: 0
	},
	onscreen: {
		y: 0,
		opacity: 2,
		transition: {
			type: "easeInOut",
			duration: 0.6
		}
	}
}

export default contactLogoVariant
