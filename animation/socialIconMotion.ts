const socialIconMotion = {
	rest: {
		filter: "drop-shadow(0px 0px 0px #ffffff)",
		scale: 1,
		ease: "easeOut",
		duration: 0.2,
		type: "tween"
	},

	hover: {
		filter: "drop-shadow(0px 4px 15px #ffffff)",
		scale: 1.15,
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn"
		}
	}
}

export default socialIconMotion
