/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import { projects } from "@prisma/client"
import Back from "../public/images/carousel-back.svg"
import Next from "../public/images/carousel-next.svg"
import { wrap } from "popmotion"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

interface Props {
	project: projects & { placeholder: [] }
}
const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0
		}
	}
}
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

const ImageScroller = ({ project }: Props) => {
	const [[page, direction], setPage] = useState([0, 0])
	const imageIndex = wrap(0, project.image.length, page)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}
	return (
		<AnimatePresence initial={false} custom={direction}>
			<div className="overflow-x-hidden xxl:w-[728px] xxl:h-[322px] xl:w-[79vh] xl:h-[35vh] lg:w-[884px] lg:h-[491px] md:w-[580px] md:h-[322px] sm:w-[569px] sm:h-[322px] w-[100%] h-[52vw] rounded-xxl ">
				<motion.div
					key={page}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 }
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x)

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1)
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1)
						}
					}}
					className="h-full w-full rounded-xxl object-cover  bg-cover bg-center "
				>
					<Image
						alt="project image"
						className="rounded-xxl"
						src={project.image[imageIndex]}
						placeholder="blur"
						blurDataURL={project.placeholder[imageIndex]}
						layout="fill"
						objectFit="cover"
						loading="eager"
						priority={true}
					/>
				</motion.div>
				<div className="absolute top-[calc(50%-14px)] left-2 duration-300 hover:scale-[1.2]">
					<button>
						<Back
							className="h-[28px] w-[28px]"
							onClick={() => paginate(-1)}
						/>
					</button>
				</div>
				<div className="absolute top-[calc(50%-14px)] right-2 duration-300 hover:scale-[1.2]">
					<button>
						<Next
							className="h-[28px] w-[28px]"
							onClick={() => paginate(1)}
						/>
					</button>
				</div>
			</div>
		</AnimatePresence>
	)
}

export default ImageScroller
