/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useState } from "react"
import Star from "../public/images/star.svg"
import Link from "next/link"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

interface Props {}

const commands = ["sarthak.playFavSong()", "sarthak.pauseFavSong()"]
let path = "./sounds/song.mp3"

function Hero({}: Props): ReactElement {
	const [isPlaying, setIsPlaying] = useState(false)
	const [startTyping, setStartTyping] = useState(false)
	const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(path))
	audio.volume = 0.05

	const play = () => {
		console.log("play")
		if (!isPlaying) {
			audio.play()
			setIsPlaying(true)
		}
	}

	const pause = () => {
		audio.pause()
		setIsPlaying(false)
	}

	const handleCodeChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		event.target.value
			? event.target.classList.add("hide")
			: event.target.classList.remove("hide")

		if (event.target.value.includes("\n")) {
			if (commands.includes(event.target.value.trim().replace(";", ""))) {
				if (
					event.target.value.trim().replace(";", "") ===
					"sarthak.playFavSong()"
				) {
					play()
				}
				if (
					event.target.value.trim().replace(";", "") ===
					"sarthak.pauseFavSong()"
				) {
					pause()
				}
				event.target.value = ""
				event.target.placeholder = ""
				event.target.classList.remove("hide")
			} else {
				event.target.placeholder = "Error :[ please try again!"
				event.target.classList.remove("hide")
				event.target.classList.add("error")
				event.target.value = ""

				setTimeout(() => {
					event.target.placeholder = ""
					event.target.classList.remove("error")
				}, 5000)
			}
		}
	}

	return (
		<>
			<div
				id="hero"
				className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 mb-20 sm:mb-9 md:mb-[64px] xl:mb-[216px] xxl:mb-[204px] pt-[56px] sm:pt-20  md:pt-[88px] lg:pt-[116px] xl:pt-[158px] xxl:pt-[178px]"
			>
				<div className="col-start-1 lg:col-start-2 xl:col-start-2 xxl:col-start-2 col-span-4 md:col-span-12 xl:col-span-5 xxl:col-span-5 sm:w-[480px] xl:mt-[58px] xxl:mt-[78px] relative">
					<motion.div
						className="absolute top-[-34px] sm:top-[-54px] left-[201px]"
						initial={{ scale: 0, opacity: 0, y: 100 }}
						animate={{ rotate: 360, scale: 1, opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 20
						}}
					>
						<Star className="w-[24px] h-[24px]" />
					</motion.div>
					<motion.div
						className="absolute sm:top-[472px] left-[57px] top-[250px] "
						initial={{ scale: 0, opacity: 0, y: 100 }}
						animate={{ rotate: 360, scale: 1, opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 20
						}}
					>
						<Star className="w-[24px] h-[24px]" />
					</motion.div>
					<motion.div
						className="absolute sm:top-[300px] sm:left-[300px] left-[230px] top-[150px]"
						initial={{ scale: 0, opacity: 0, y: 100 }}
						animate={{ rotate: 360, scale: 1, opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 20
						}}
					>
						<Star className="w-[24px] h-[24px]" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<div className="font-clash">
							<p className="text-xxl sm:text-5xl font-cabinet mb-1 sm:mb-4 ">
								Hi, I am
							</p>
							<p className="text-3xl sm:text-6xl customShadow mb-2 sm:mb-4 xl:mb-7">
								Sarthak Ahuja
							</p>
							<p className="text-4xsm sm:text-sm mb-6 sm:mb-[52px] sm:w-[372px]">
								I am a full stack developer based out of New
								Delhi, India.
							</p>
						</div>
						<div>
							<Link href="mailto:sarthak.ahuja0007@gmail.com?subject=Hey%20There! 👋">
								<a>
									<button className="helloButton hover:before:bg-black hover:after:bg-white hover:text-white text-black hover:after:border-black transition-all duration-300 ">
										<p className="font-array text-hello  sm:text-hellolg ">
											Say Hello!
										</p>
									</button>
								</a>
							</Link>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 mx-auto col-start-1 md:col-span-12  xl:col-span-5 xl:col-start-8 w-[240px] h-[264px] sm:w-[430px] sm:h-[372px] mt-[92px] sm:mt-[64px] md:mt-[100px] xl:mt-[38px] xxl:mt-[54px] xl:mx-0 bg-[#000] rounded-terminal relative "
				>
					<div>
						<div className="bg-[#1F1F22] sm:h-[58px] h-[32px] w-[full] opacity-50 rounded-[20px] rounded-b-[0px]"></div>
						<div className=" w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#E35353] rounded-full absolute sm:top-6 sm:left-6 top-[12px] left-5  "></div>
						<div className=" w-2 h-2 sm:w-2.5 sm:h-2.5  bg-[#53E37C] rounded-full absolute sm:top-6 sm:left-10 top-[12px] left-[36px] xl:left-[46px]"></div>
						<div className=" w-2 h-2 sm:w-2.5 sm:h-2.5  bg-[#F8D41C] rounded-full absolute sm:top-6 sm:left-[56px] top-[12px] left-[52px] xl:left-[68px]"></div>
						<div className=" pb-5 px-2 pt-4 sm:pb-[46px] sm:px-4">
							<div className="font-source text-code sm:text-codeLg">
								<Typewriter
									options={{
										delay: 15,
										cursor: ""
									}}
									onInit={(typewriter) => {
										typewriter
											.pauseFor(10)
											.typeString(
												`<span><span class="text-[#636262] mr-1"> 1 </span>class<span class="text-codeYellow"> Person {</span></span></br><span><span class="text-[#636262] mr-1"> 2 </span>&emsp;&emsp; constructor<span class="text-codePurple">() {</span></span></br><span><span class="text-[#636262] mr-1"> 3 </span>&emsp;&emsp;&emsp;&emsp;<span class="text-codeBlue">this</span>.name = <span class="text-codeGreen">"Sarthak Ahuja"</span></span></br><span><span class="text-[#636262] mr-1"> 4 </span>&emsp;&emsp;&emsp;&emsp;<span class="text-codeBlue">this</span>.interest = <span class="text-codeGreen">"WEB 3"</span></span></br><span><span class="text-[#636262] mr-1"> 5 </span>&emsp;&emsp;&emsp;&emsp;<span class="text-codeBlue">this</span>.age = <span class="text-codeGreen">21</span></span></br><span class="inline-flex"><span class="flex-grow-0 flex-shrink-0 text-[#636262] mr-1 sm:w-[16.81px] w-[12px]"> 6 </span>&emsp;&emsp;&emsp;&emsp;<span class="flex-grow-0"><span class="text-codeBlue">this</span>.tech = ["<span><span class="text-codeGreen">React</span><span>", "</span><span class="text-codeGreen">Redux</span><span>", "</span><span class="text-codeGreen">Node</span><span>", "</span><span class="text-codeGreen">MongoDB</span><span>", "</span><span class="text-codeGreen">Typescript</span><span>", "</span><span class="text-codeGreen">Solidity</span><span>"]</span></span></span></span></br><span><span class="text-[#636262] mr-1"> 7 </span>&emsp;&emsp;<span class="text-codePurple"> }</span></span></br><span><span class="text-[#636262] mr-1"> 8 </span>&emsp;&emsp; <span>...</span></span></br><span><span class="text-[#636262] mr-1"> 9 </span><span class="text-codeYellow">}</span></span></br><span><span class="text-[#636262] mr-1"> 10</span>const sarthak = <span class="text-codeBlue">new </span><span class="text-codeYellow"> Person() </span></span></br><span><span class="text-[#636262] mr-1"> 11</span><span class="text-codeComment">// try to ask my favSong </span></span>`
											)
											.start()
											.callFunction(() => {
												setStartTyping(true)
											})
									}}
								/>

								{startTyping && (
									<div className="inline-flex">
										<span className="text-[#636262] mr-1">
											12
										</span>
										<div className="cursor w-full">
											<textarea
												id="code"
												className="codeTextArea bg-transparent text-white resize-none w-full overflow-y-hidden"
												spellCheck="false"
												rows={1}
												cols={100}
												onChange={handleCodeChange}
											/>
											<i className="hide"></i>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	)
}

export default Hero
