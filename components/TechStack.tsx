/* eslint-disable @next/next/no-img-element */
import React from "react"

interface Props {
	logo: string
}

const TechStack = ({ logo }: Props) => {
	return (
		<div className="w-[26px] h-[26px]">
			<img
				src={logo}
				className="w-[26px] h-[26px] "
				alt="android"
			/>
		</div>
	)
}

export default TechStack
