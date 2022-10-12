/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react"
import Image from "next/image"
import hands from "../images/hands.png"
import Link from "next/link"
import LinkedIn from "../public/images/linkedin.svg"
import Twitter from "../public/images/twitter.svg"
import Mail from "../public/images/mail.svg"
import GitHub from "../public/images/github.svg"
import Copy from "../public/images/copy.svg"
import { CopyToClipboard } from "react-copy-to-clipboard"

interface Props {}

function Contact({}: Props): ReactElement {
	return (
		<div className="container mx-auto grid grid-cols-4 sm:grid-cols-12 gap-x-5 ">
			<div className="mt-[116px] sm:mt-[92px] xxl:mt-14 col-span-12 lg:col-span-8 lg:col-start-3 col-start-1 flex flex-col items-center xxl:col-span-12 xxl:col-start-1 xxl:max-w-[914px] xxl:mx-auto">
				<div>
					<img
						src="images/hands.png"
						className="w-[261px] h-[156px] sm:w-[290px] sm:h-[172px] xl:w-[432px] xl:h-[255px]"
						alt="hands"
					/>
				</div>
				<div className="flex flex-col items-center sm:mt-8 mt-[12px] py-[50px] sm:py-[14px] xl:py-[0.5px] mb-[108px] sm:mb-[213px] md:mb-[335px] xl:mb-[96px] xxl:mb-[132px]">
					<div className="font-clash text-center">
						<p className="customShadow xl:text-8xl sm:text-7xl text-4xl mb-1 xl:mb-3">
							let&apos;s talk
						</p>
						<p className="xl:text-sm sm:text-3xsm text-4xsm xl:pt-[5.2px]">
							I&apos;m available for development-related work. I
							am also open to opportunities for Spring 2021 &
							Summer 2021 open to opportunities for Spring 2021 &
						</p>
					</div>
					<div className="flex flex-col justify-around mt-7 sm:mt-10 xl:mt-11">
						<div className="flex flex-row items-center justify-evenly  mb-4">
							<Link href="https://www.linkedin.com/in/sarthak-ahuja07/">
								<a className="hover:scale-110 duration-300">
									<LinkedIn className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
								</a>
							</Link>
							<Link href="https://twitter.com/sarthakahuja07">
								<a className="hover:scale-110 duration-300">
									<Twitter className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
								</a>
							</Link>
							<Link href="https://twitter.com/sarthakahuja07">
								<a className="hover:scale-110 duration-300">
									<GitHub className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
								</a>
							</Link>
							<Link href="https://twitter.com/sarthakahuja07">
								<a className="hover:scale-110 duration-300">
									<Mail className="w-[22.24px] h-[22.24px] sm:w-[26.85px] sm:h-[26.85px] xl:w-[31px] xl:h-[31px]" />
								</a>
							</Link>
						</div>
						<div className="px-4 py-2 rounded-lg border-[0.5px] border-[#636262] border-solid bg-nav-gradient backdrop-blur-[17.5px] flex items-center">
							<span className="text-3xsm font-clash mr-3">
								sarthak.ahuja0007@gmail.com
							</span>
							<CopyToClipboard text="sarthak.ahuja0007@gmail.com">
								<Copy className="w-[10px] h-[13.3px] sm:w-[13.2px] sm:h-[17.6px] cursor-pointer" />
							</CopyToClipboard>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
