import React from "react"
import JS from "../public/images/js.svg"

interface Props {}

const Skills = (props: Props) => {
	return (
		<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 mt-[96px] lg:mt[180px] xl:mt-[240px]">
			<div className="flex justify-between items-start flex-col xl:flex-row gap-[68px] sm:gap-[44px] lg:gap-[112px] md:gap-[92px] xl:gap-0 col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 xxl:col-span-10">
				<div className="w-full sm:w-[568px] md:w-[580px] xl:w-[530px] ">
					<h3 className="font-clash text-4xl sm:text-7xl xl:text-8xl mb-1 sm:mb-2">
						Skills
					</h3>
					<p className="font-clash text-4xsm sm:text-sm">
						An individual eager to learn and explore new fields of
						life and technology, with good listening skills and fast
						learning abilities.
					</p>
					<p className="font-clash text-4xsm sm:text-sm">
						An individual eager to learn and explore new fields of
						life and technology, with good listening skills and fast
						learning abilities.
					</p>
				</div>
				<div className="w-full overflow-auto sm:overflow-x-hidden max-w-[360px] sm:max-w-none sm:w-[550px] h-[416px] sm:h-[570px] mx-auto xl:mx-0 bg-skills-card bg-cover bg-clip-padding rounded-large sm:rounded-xxl border-solid border-[0.56px] sm:border-[1px] border-[#FFFFFF14] p-[6px] pb-0 relative">
					<div className="absolute sm:left-[34px] sm:top-[105px] z-[-1] w-[269px] h-[333px] left-[18.5px] top-[79px] sm:w-[556px] sm:h-[448px] bg-skills-card-gradient blur-[100px] rounded-full"></div>
					<div className=" w-full flex flex-row flex-no-wrap overflow-auto bg-[#FFFFFF1A] rounded-[6px] sm:rounded-[12px] justify-between font-clash text-phoneXl sm:text-xsm ">
						{/* active */}
						<div className="px-[8px] py-[9px] sm:py-[16px]  sm:px-[28px] rounded-[6px] bg-[#FFFFFF26]">
							Languages
						</div>
						<div className="px-[6px] py-[9px] sm:py-[16px] sm:px-[22px] opacity-30">
							Framework
						</div>
						<div className="px-[6px] py-[9px] sm:py-[16px] sm:px-[22px] opacity-30">
							Datebase
						</div>
						<div className="px-[6px] py-[9px] sm:py-[16px] sm:px-[22px] opacity-30">
							Other
						</div>
					</div>

					<div className="my-[28px] sm:my-[32px] mx-auto w-[254px] sm:w-[455px] flex fex-row flex-wrap sm:gap-y-[16px] sm:gap-x-[77px] gap-y-[22px] gap-x-[28px]">
						{[...Array(12)].map((_, i) => (
							<div
								key={i}
								className="sm:w-[100px] w-[66px] text-center "
							>
								<JS className="sm:w-[68px] sm:h-[68px] w-[40px] h-[40px] mx-auto  mb-1" />
								<p className="text-4xsm sm:text-3xsm font-clash">
									Javascript
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
