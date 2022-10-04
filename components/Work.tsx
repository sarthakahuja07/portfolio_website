import React, { ReactElement } from "react"
import WorkCard from "./WorkCard"

interface Props {}

function Work({}: Props): ReactElement {
	return (
		<div>
			<div className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-5 mt-[96px] lg:mt[180px] xl:mt-[240px]">
				<div className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full sm:w-[456px] lg:w-[604px] xl:w-[580px] mb-[28px] sm:mb-[36px] lg:mb-[40px] xl:mb-[84px]">
					<h2 className="text-shadow-work font-clash text-4xl sm:text-7xl xl:text-8xl mb-1 sm:mb-2">
						Work
					</h2>
					<p className="font-clash text-4xsm sm:text-3xsm xl:text-sm">
						Here is a showcase of some of my best projects that i
						made. They can be found on my github.
					</p>
				</div>
				<h3 className="col-start-1 lg:col-start-2 xl:col-start-1 xxl:col-start-2 col-span-4 md:col-span-12 w-full font-clash xl:text-4xl mb-2 hidden xl:block">
					Projects
				</h3>
			</div>
			<div className="w-full flex flex-col xl:flex-row overflow-hidden">
				<WorkCard />
				<WorkCard />
				<WorkCard />
				<WorkCard />
			</div>
		</div>
	)
}

export default Work
