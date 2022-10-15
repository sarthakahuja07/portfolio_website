import { Variants } from "framer-motion"

const delayedBounceVariant: Variants = {
	offscreen: {
		y: 150
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			delay: 0.2,
			duration: 0.8
		}
	}
}

export default delayedBounceVariant
