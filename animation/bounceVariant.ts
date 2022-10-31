import { Variants } from "framer-motion"

const bounceVariant: Variants = {
	offscreen: {
		y: 100,
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

export default bounceVariant
