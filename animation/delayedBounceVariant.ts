import { Variants } from "framer-motion"

const delayedBounceVariant: Variants = {
	offscreen: {
		y: 100,
		opacity: 0
	},
	onscreen: {
		y: 0,
		opacity: 2,
		transition: {
			type: "easeout",
			duration: 0.5,
			delay: 0.2
		}
	}
}

export default delayedBounceVariant
