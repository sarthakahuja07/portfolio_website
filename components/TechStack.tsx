/* eslint-disable @next/next/no-img-element */
import React from "react"

interface Props {
	logo: string
}

const TechStack = ({ logo }: Props) => {
	return (
		<div className="w-[26px] h-[26px]">
			<div
				className="w-[26px] h-[26px] "
				style={{
					backgroundImage: `url(${logo})`,
					backgroundPosition: "center",
					backgroundSize: "cover"
				}}
			></div>
			{/* <img src={logo} className="w-[26px] h-[26px] " alt="android" /> */}
		</div>
	)
}

export default TechStack
