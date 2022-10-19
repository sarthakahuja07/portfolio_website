import { Variants } from "framer-motion"

const bounceVariant: Variants = {
	offscreen: {
		y: 150
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8
		}
	}
}

export default bounceVariant
