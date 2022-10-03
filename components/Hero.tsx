/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { ReactElement } from "react"
import star from "../public/images/star.png"
import arrow from "../public/images/arrow.png"
import Link from "next/link"

interface Props {}

function Hero({}: Props): ReactElement {
	const handleCodeChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		event.target.value
			? event.target.classList.add("hide")
			: event.target.classList.remove("hide")

		if (
			event.target.value.includes("\n") &&
			event.target.value.replace(/\s/g, "") === "sarthak"
		) {
			event.target.value = ""
			event.target.placeholder = ""
			event.target.classList.remove("hide")
		} else if (event.target.value.includes("\n")) {
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

	return (
		<div>
			<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5  mb-20 sm:mb-9 md:mb-[64px] xl:mb-[216px] xxl:mb-[204px] ">
				<div className="col-start-1 lg:col-start-2 xl:col-start-2 xxl:col-start-2 col-span-4 md:col-span-12 xl:col-span-5 xxl:col-span-5  sm:w-[480px] mt-11 sm:mt-20 lg:mt-[104px]  xxl:mt-[194px] relative">
					<div className="absolute top-[-54px] left-[201px]">
						<Image
							className="self-center"
							src={star}
							alt="star"
							width={24}
							height={24}
						/>
					</div>
					<div className="absolute sm:top-[472px] left-[57px] top-[270px] ">
						<Image
							className="self-center"
							src={star}
							alt="star"
							width={24}
							height={24}
						/>
					</div>
					<div className="absolute sm:top-[300px] sm:left-[300px] left-[230px] top-[150px]">
						<Image
							className="self-center"
							src={star}
							alt="star"
							width={24}
							height={24}
						/>
					</div>

					<div className="font-clash">
						<p className="text-xxl sm:text-5xl font-cabinet mb-1 sm:mb-4 ">
							Hi, I am
						</p>
						<p className="text-3xl sm:text-6xl customShadow mb-2 sm:mb-4 xl:mb-7">
							Sarthak Ahuja
						</p>
						<p className="text-4xsm sm:text-sm mb-6 sm:mb-[52px] sm:w-[372px]">
							I am a full stack developer based out of New Delhi,
							India.
						</p>
					</div>
					<div>
						<button className="helloButton hover:before:bg-black hover:after:bg-white hover:text-white text-black hover:after:border-black transition-all duration-300 ">
							<p className="font-array text-hello  sm:text-hellolg ">
								Say Hello!
							</p>
						</button>
					</div>
				</div>

				<div className=" col-span-4 mx-auto col-start-1 md:col-span-12  xl:col-span-5 xl:col-start-8 w-[240px] h-[264px] sm:w-[430px] sm:h-[372px] mt-[92px] sm:mt-[64px] md:mt-[100px] xxl:mt-[172px] xl:mx-0 bg-[#000] rounded-terminal relative terminal">
					<div className="bg-[#1F1F22] sm:h-[58px] h-[32px] w-[full] opacity-50 rounded-[20px] rounded-b-[0px]"></div>
					<div className=" w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#E35353] rounded-full absolute sm:top-6 sm:left-6 top-[12px] left-5  "></div>
					<div className=" w-2 h-2 sm:w-2.5 sm:h-2.5  bg-[#53E37C] rounded-full absolute sm:top-6 sm:left-10 top-[12px] left-[36px] xl:left-[46px]"></div>
					<div className=" w-2 h-2 sm:w-2.5 sm:h-2.5  bg-[#F8D41C] rounded-full absolute sm:top-6 sm:left-[56px] top-[12px] left-[52px] xl:left-[68px]"></div>
					<div className=" pb-5 px-2 pt-4 sm:pb-[46px] sm:px-4">
						<div className="font-source text-code sm:text-codeLg">
							<p>
								<span className="text-[#636262] mr-1"> 1 </span>
								class
								<span className="text-codeYellow">
									{`
                            Person {`}
								</span>
							</p>
							<p>
								<span className="text-[#636262] mr-1"> 2 </span>
								&emsp;&emsp;
								{`  constructor
                                `}
								<span className="text-codePurple">{`() {`}</span>
							</p>
							<p>
								<span className="text-[#636262] mr-1"> 3 </span>
								&emsp;&emsp;&emsp;&emsp;
								<span className="text-codeBlue">this</span>
								{`.name= `}
								<span className="text-codeGreen">{`"Sarthak Ahuja"`}</span>
							</p>
							<p>
								<span className="text-[#636262] mr-1"> 4 </span>
								&emsp;&emsp;&emsp;&emsp;
								<span className="text-codeBlue">this</span>
								{`.interest = `}
								<span className="text-codeGreen">{`"WEB 3"`}</span>
							</p>
							<p>
								<span className="text-[#636262] mr-1"> 5 </span>
								&emsp;&emsp;&emsp;&emsp;
								<span className="text-codeBlue">this</span>
								{`.age = `}
								<span className="text-codeGreen">{`21`}</span>
							</p>
							<div className="inline-flex">
								<div className="text-[#636262] mr-1 w-[33px]">
									6
								</div>
								&emsp;&emsp;&emsp;&emsp;
								<span className="">
									<span className="text-codeBlue">this</span>
									{`.tech = ["`}
									<span>
										<span className="text-codeGreen">{`React`}</span>
										<span>{`", "`}</span>
										<span className="text-codeGreen">{`Redux`}</span>
										<span>{`", "`}</span>

										<span className="text-codeGreen">{`Node`}</span>
										<span>{`", "`}</span>

										<span className="text-codeGreen">{`MongoDB`}</span>
										<span>{`", "`}</span>

										<span className="text-codeGreen">{`Typescript`}</span>
										<span>{`", "`}</span>
										<span className="text-codeGreen">{`Solidity`}</span>
										<span>{`"]`}</span>
									</span>
								</span>
							</div>

							<p>
								<span className="text-[#636262] mr-1"> 7 </span>
								&emsp;&emsp;
								<span className="text-codePurple">{`}`}</span>
							</p>
							<p>
								<span className="text-[#636262] mr-1"> 8 </span>
								&emsp;&emsp;
								<span>{`...`}</span>
							</p>
							<p>
								<span className="text-[#636262] mr-1"> 8 </span>

								<span className="text-codeYellow">{`}`}</span>
							</p>
							<p>
								<span className="text-[#636262] mr-1"> 9 </span>
								{`const sarthak = `}
								<span className="text-codeBlue">new </span>
								<span className="text-codeYellow">
									Person()
								</span>
								;
							</p>
							<p>
								<span className="text-[#636262] mr-1">10</span>
								<span className="text-codeComment">
									{`// try to ask my favSong`}
								</span>
							</p>
							<div className="inline-flex">
								<span className="text-[#636262] mr-1">11</span>
								<div className="cursor w-full">
									<textarea
										id="code"
										// placeholder="Error:[ please try again!"
										className="codeTextArea bg-transparent text-white resize-none w-full overflow-y-hidden"
										spellCheck="false"
										rows={1}
										cols={100}
										autoFocus
										onChange={handleCodeChange}
									/>
									<i className="hide"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-fit mx-auto">
				<Link href="/">
					<a>
						<img
							src="images/arrow.png"
							className="w-[27px] h-[48px] md:w-[74px] md:h-[95px] xl:w-[68px] xl:h-[88px]"
							alt="arrow"
						/>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Hero
