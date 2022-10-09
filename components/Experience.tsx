import React, { ReactElement } from "react"

interface Props {}

function Experience({}: Props): ReactElement {
	return (
		<div className="w-full xl:w-[424px]  ">
			<div className="mb-4">
				<div className="flex flex-row items-center justify-start mb-[2px] experienceHeading relative after:top-2 after:left-[-16px] xl:after:top-[-16px] xl:after:left-[30%]">
					<h4 className="text-xsm sm:text-md font-clash mr-4">
						Nonceblox Pvt. Ltd.
					</h4>
					<p className="text-phoneSm sm:text-4xsm  xl:text-3xsmfont-clash text-grey ">{`// Jun 2022 - Sep 2022`}</p>
				</div>
				<p className="font-clash text-phoneSm sm:text-4xsm xl:text-3xsm">
					Full Stack Developer Intern
				</p>
			</div>
			<div>
				<ul className="font-clash pl-4 list-disc">
					<li className="mb-2 text-phoneLg sm:text-4xsm xl:text-3xsm">
						Worked on multiple projects from front to back creating
						applications for clients. Some of them are Myosin,
						Bundles, and companys HRMS portal
					</li>
					<li className="mb-2 text-phoneLg sm:text-4xsm xl:text-3xsm">
						Worked on multiple projects from front to back creating
						applications for clients. Some of them are Myosin,
						Bundles, and companys HRMS portal
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Experience
