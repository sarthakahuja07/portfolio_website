import React from "react"
import { motion } from "framer-motion"

interface Props {
	children: React.ReactNode
}

const ScrollAnimation = ({ children }: Props) => (
	<motion.div
		initial="offscreen"
		whileInView="onscreen"
		viewport={{ once: true, amount: 0.1 }}
	>
		{children}
	</motion.div>
)

export default ScrollAnimation
