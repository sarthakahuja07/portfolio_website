/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useRef } from "react"
import Link from "next/link"
import LinkedIn from "../public/images/linkedin.svg"
import Twitter from "../public/images/twitter.svg"
import Mail from "../public/images/mail.svg"
import Copy from "../public/images/copy.svg"
import GitHub from "../public/images/github.svg"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ScrollAnimation from "./ScrollAnimation"
import { motion } from "framer-motion"
import bounceVariant from "../animation/bounceVariant"
import contactLogoVariant from "../animation/contactLogoVariant"
import socialIconMotion from "../animation/socialIconMotion"
import Star from "../public/images/star.svg"
import Image from "next/image"

interface Props {}

const copyLogoMotion = {
	rest: {
		fill: "transparent",
		type: "spring",
		stiffness: 400,
		damping: 17
	},

	tap: {
		fill: "#fff",

		transition: {
			type: "spring",
			stiffness: 400,
			damping: 17
		}
	}
}
const leftHandVariant = {
	offscreen: {
		x: -120,
		opacity: 0
	},
	onscreen: {
		x: 0,
		opacity: 2,
		transition: {
			type: "easeInOut",
			duration: 0.8
		}
	}
}
const rightHandVariant = {
	offscreen: {
		x: 120,
		opacity: 0
	},
	onscreen: {
		x: 0,
		opacity: 2,
		transition: {
			type: "easeInOut",
			duration: 0.8
		}
	}
}

const starAnimationVariant = {
	offscreen: {
		y: 100,
		opacity: 0,
		scale: 0,
		rotate: 0
	},
	onscreen: {
		y: 0,
		opacity: 1,
		scale: 1,
		rotate: 360,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 20,
			delay: 0.6
		}
	}
}

function Contact({}: Props): ReactElement {
	const copyPromptRef = useRef<HTMLDivElement>(null)
	const copyPromptAnimation = () => {
		if (copyPromptRef.current) {
			copyPromptRef.current!.style.height = "auto"
			copyPromptRef.current.style.opacity = "1"
			setTimeout(() => {
				copyPromptRef.current!.style.transform = "translateY(-20px)"
			}, 400)
			copyPromptRef.current!.style.transform = "translateY(0px)"
			setTimeout(() => {
				copyPromptRef.current!.style.transform = "translateY(0px)"
			}, 800)
			setTimeout(() => {
				copyPromptRef.current!.style.opacity = "0"
			}, 1200)
			setTimeout(() => {
				copyPromptRef.current!.style.height = "0"
			}, 1400)
		}
	}

	return (
		<div
			className="container overflow-x-clip mx-auto grid grid-cols-4 sm:grid-cols-12 gap-x-5 pt-[200px] md:pt-[220px] lg:pt-[220px] xl:pt-[250px] xxl:pt-[300px] "
			id="contact"
		>
			<div className=" relative col-span-12 lg:col-span-8 lg:col-start-3 col-start-1 flex flex-col items-center xxl:col-span-12 xxl:col-start-1 xxl:max-w-[914px] xxl:mx-auto">
				<ScrollAnimation>
					<motion.div
						variants={starAnimationVariant}
						className="absolute left-0 right-0"
					>
						<Star className="w-[24px] h-[24px] mx-auto" />
					</motion.div>
					<motion.div
						variants={starAnimationVariant}
						className="absolute left-0 right-[44px] top-[-94px]"
					>
						<Star className="w-[24px] h-[24px] mx-auto " />
					</motion.div>
					<motion.div
						className="absolute left-[44px] right-0 top-[-62px]"
						variants={starAnimationVariant}
					>
						<Star className="w-[24px] h-[24px] mx-auto" />
					</motion.div>

					<div className="flex overflow-x-clip w-[100vw]">
						<motion.div
							variants={leftHandVariant}
							className="w-[130px] h-[84px] sm:w-[145px] sm:h-[92px] xl:w-[216px] xl:h-[136px] ml-auto relative"
						>
							<Image
								src="/images/left-hand.png"
								alt="left-hand"
								layout="fill"
								loading="eager"
							/>
						</motion.div>
						<motion.div
							variants={rightHandVariant}
							className="w-[130px] h-[84px] sm:w-[145px] sm:h-[92px] xl:w-[216px] xl:h-[136px] mr-auto relative"
						>
							<Image
								src="/images/right-hand.png"
								alt="left-hand"
								layout="fill"
								loading="eager"
							/>
						</motion.div>
					</div>
				</ScrollAnimation>

				<div className="flex flex-col items-center sm:mt-8 mt-[12px] py-[50px] xl:py-[0.5px] mb-[20px] sm:mb-[20px] md:mb-[30px] xl:mb-[96px] xxl:mb-[100px]">
					<ScrollAnimation>
						<motion.div
							variants={bounceVariant}
							className="font-clash text-center"
						>
							<p className="customShadow xl:text-8xl sm:text-7xl text-4xl mb-1 xl:mb-3">
								let&apos;s talk
							</p>
							<p className="xl:text-sm sm:text-3xsm text-4xsm xl:pt-[5.2px]">
								I&apos;m available for development-related work and full time job opportunities.
								Feel free to reach out to me via email or
								socials below.
							</p>
						</motion.div>
					</ScrollAnimation>
					<ScrollAnimation>
						<motion.div
							variants={contactLogoVariant}
							className="flex flex-col justify-around mt-7 sm:mt-10 xl:mt-11"
						>
							<div className="flex flex-row items-center justify-evenly  mb-4">
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
								>
									<Link href="https://www.linkedin.com/in/sarthak-ahuja07/">
										<a target="_blank">
											<motion.div
												variants={socialIconMotion}
											>
												<LinkedIn className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
											</motion.div>
										</a>
									</Link>
								</motion.div>
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
								>
									<Link href="https://twitter.com/sarthakahuja07">
										<a target="_blank">
											<motion.div
												variants={socialIconMotion}
											>
												<Twitter className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
											</motion.div>
										</a>
									</Link>
								</motion.div>
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
								>
									<Link href="https://github.com/sarthakahuja07/">
										<a target="_blank">
											<motion.div
												variants={socialIconMotion}
											>
												<GitHub className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
											</motion.div>
										</a>
									</Link>
								</motion.div>
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
								>
									<Link href="mailto:sarthak.ahuja0007@gmail.com">
										<a>
											<motion.div
												variants={socialIconMotion}
											>
												<Mail className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
											</motion.div>
										</a>
									</Link>
								</motion.div>
							</div>
							<motion.div
								initial="rest"
								whileTap="tap"
								animate="rest"
								className="cursor-pointer relative"
								onClick={copyPromptAnimation}
							>
								<motion.div
									ref={copyPromptRef}
									className=" h-0 absolute w-[100%] bottom-[calc(100%+4px)] left-0 opacity-0 duration-500"
								>
									<div className=" bg-[#181a1b] rounded-[6px] py-2 px-[18px] z-[2] flex items-center gap-1 bottom-[calc(100%+4px)] left-[calc(50%+4px)] mx-auto w-fit">
										<p className="text-4xsm text-white">
											Copied
										</p>
										<Copy className="w-[10px] h-[13.33px]" />
									</div>
								</motion.div>
								<CopyToClipboard text="sarthak.ahuja0007@gmail.com ">
									<motion.div
										whileTap={{ scale: 0.9 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 17
										}}
										className=" copy-button after:rounded-lg px-4 py-2 rounded-lg border-[0.5px] border-[#636262] border-solid bg-nav-gradient backdrop-blur-[17.5px] flex items-center"
									>
										<span className="text-3xsm font-clash mr-3">
											sarthak.ahuja0007@gmail.com
										</span>
										<div>
											<div className="w-[10px] h-[13.3px] sm:w-[13.2px] sm:h-[17.6px]">
												<svg
													width="100%"
													height="100%"
													viewBox="0 0 10 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<mask
														id="path-1-inside-1_2363_17443"
														fill="white"
													>
														<path d="M1.66667 1.66667C1.66667 1.22464 1.84226 0.800716 2.15482 0.488155C2.46738 0.175595 2.89131 0 3.33333 0H8.33333C8.77536 0 9.19928 0.175595 9.51184 0.488155C9.8244 0.800716 10 1.22464 10 1.66667V10C10 10.442 9.8244 10.866 9.51184 11.1785C9.19928 11.4911 8.77536 11.6667 8.33333 11.6667H3.33333C2.89131 11.6667 2.46738 11.4911 2.15482 11.1785C1.84226 10.866 1.66667 10.442 1.66667 10V1.66667ZM0 3.33333C7.43203e-06 3.04078 0.0770215 2.75338 0.223302 2.50002C0.369582 2.24667 0.579974 2.03628 0.833333 1.89V10.4167C0.833333 10.9692 1.05283 11.4991 1.44353 11.8898C1.83423 12.2805 2.36413 12.5 2.91667 12.5H8.11C7.96372 12.7534 7.75333 12.9638 7.49998 13.11C7.24662 13.2563 6.95922 13.3333 6.66667 13.3333H2.91667C2.14312 13.3333 1.40125 13.026 0.854272 12.4791C0.307291 11.9321 0 11.1902 0 10.4167V3.33333Z" />
													</mask>
													<motion.path
														variants={
															copyLogoMotion
														}
														d="M1.66667 1.66667C1.66667 1.22464 1.84226 0.800716 2.15482 0.488155C2.46738 0.175595 2.89131 0 3.33333 0H8.33333C8.77536 0 9.19928 0.175595 9.51184 0.488155C9.8244 0.800716 10 1.22464 10 1.66667V10C10 10.442 9.8244 10.866 9.51184 11.1785C9.19928 11.4911 8.77536 11.6667 8.33333 11.6667H3.33333C2.89131 11.6667 2.46738 11.4911 2.15482 11.1785C1.84226 10.866 1.66667 10.442 1.66667 10V1.66667ZM0 3.33333C7.43203e-06 3.04078 0.0770215 2.75338 0.223302 2.50002C0.369582 2.24667 0.579974 2.03628 0.833333 1.89V10.4167C0.833333 10.9692 1.05283 11.4991 1.44353 11.8898C1.83423 12.2805 2.36413 12.5 2.91667 12.5H8.11C7.96372 12.7534 7.75333 12.9638 7.49998 13.11C7.24662 13.2563 6.95922 13.3333 6.66667 13.3333H2.91667C2.14312 13.3333 1.40125 13.026 0.854272 12.4791C0.307291 11.9321 0 11.1902 0 10.4167V3.33333Z"
														fill="#070707"
													/>
													<path
														d="M3.33333 0L3.33333 -1L3.33333 0ZM8.33333 0V-1V0ZM1.66667 10L0.666667 10L1.66667 10ZM0 3.33333L-1 3.33331V3.33333H0ZM0.833333 1.89H1.83333V0.157949L0.333333 1.02397L0.833333 1.89ZM0.833333 10.4167L-0.166667 10.4167L0.833333 10.4167ZM8.11 12.5L8.97603 13L9.84205 11.5H8.11V12.5ZM6.66667 13.3333L6.66667 14.3333L6.66669 14.3333L6.66667 13.3333ZM2.66667 1.66667C2.66667 1.48986 2.7369 1.32029 2.86193 1.19526L1.44772 -0.218951C0.947618 0.281146 0.666667 0.959423 0.666667 1.66667H2.66667ZM2.86193 1.19526C2.98695 1.07024 3.15652 1 3.33333 1L3.33333 -1C2.62609 -1 1.94781 -0.719049 1.44772 -0.218951L2.86193 1.19526ZM3.33333 1H8.33333V-1H3.33333V1ZM8.33333 1C8.51014 1 8.67971 1.07024 8.80474 1.19526L10.219 -0.218951C9.71885 -0.719048 9.04058 -1 8.33333 -1V1ZM8.80474 1.19526C8.92976 1.32029 9 1.48986 9 1.66667H11C11 0.959422 10.719 0.281145 10.219 -0.218951L8.80474 1.19526ZM9 1.66667V10H11V1.66667H9ZM9 10C9 10.1768 8.92976 10.3464 8.80474 10.4714L10.219 11.8856C10.719 11.3855 11 10.7072 11 10H9ZM8.80474 10.4714C8.67971 10.5964 8.51014 10.6667 8.33333 10.6667V12.6667C9.04058 12.6667 9.71885 12.3857 10.219 11.8856L8.80474 10.4714ZM8.33333 10.6667H3.33333V12.6667H8.33333V10.6667ZM3.33333 10.6667C3.15652 10.6667 2.98695 10.5964 2.86193 10.4714L1.44772 11.8856C1.94781 12.3857 2.62609 12.6667 3.33333 12.6667V10.6667ZM2.86193 10.4714C2.7369 10.3464 2.66667 10.1768 2.66667 10L0.666667 10C0.666667 10.7072 0.947618 11.3855 1.44772 11.8856L2.86193 10.4714ZM2.66667 10V1.66667H0.666667V10H2.66667ZM1 3.33336C1 3.21634 1.03081 3.10138 1.08932 3.00003L-0.642717 2.00001C-0.876766 2.40538 -0.999988 2.86522 -1 3.33331L1 3.33336ZM1.08932 3.00003C1.14783 2.89869 1.23199 2.81454 1.33333 2.75603L0.333333 1.02397C-0.072041 1.25802 -0.408669 1.59464 -0.642717 2.00001L1.08932 3.00003ZM-0.166667 1.89V10.4167H1.83333V1.89H-0.166667ZM-0.166667 10.4167C-0.166667 11.2344 0.158184 12.0187 0.736421 12.5969L2.15063 11.1827C1.94747 10.9795 1.83333 10.704 1.83333 10.4167L-0.166667 10.4167ZM0.736421 12.5969C1.31466 13.1752 2.09892 13.5 2.91667 13.5V11.5C2.62935 11.5 2.3538 11.3859 2.15063 11.1827L0.736421 12.5969ZM2.91667 13.5H8.11V11.5H2.91667V13.5ZM7.24397 12C7.18546 12.1013 7.10131 12.1855 6.99996 12.244L7.99999 13.9761C8.40536 13.742 8.74198 13.4054 8.97603 13L7.24397 12ZM6.99996 12.244C6.89862 12.3025 6.78366 12.3333 6.66664 12.3333L6.66669 14.3333C7.13478 14.3333 7.59461 14.2101 7.99999 13.9761L6.99996 12.244ZM6.66667 12.3333H2.91667V14.3333H6.66667V12.3333ZM2.91667 12.3333C2.40833 12.3333 1.92082 12.1314 1.56138 11.772L0.147165 13.1862C0.881683 13.9207 1.8779 14.3333 2.91667 14.3333V12.3333ZM1.56138 11.772C1.20193 11.4125 1 10.925 1 10.4167H-1C-1 11.4554 -0.587352 12.4517 0.147165 13.1862L1.56138 11.772ZM1 10.4167V3.33333H-1V10.4167H1Z"
														fill="white"
														mask="url(#path-1-inside-1_2363_17443)"
													/>
												</svg>
											</div>
										</div>
									</motion.div>
								</CopyToClipboard>
							</motion.div>
						</motion.div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	)
}

export default Contact
