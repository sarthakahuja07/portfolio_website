import React, { ReactElement } from "react"
import { experience } from "@prisma/client"

interface Props {
	experience: experience
}

function Experience({ experience }: Props): ReactElement {
	return (
		<div className="w-full xl:w-[424px]  ">
			<div className="mb-4">
				{/* after:top-2 after:left-[-16px] xl:after:top-[-16px] xl:after:left-[50%] */}
				<div className="flex flex-row items-center justify-start mb-[2px] experienceHeading relative after:hidden">
					<h4 className="text-xsm sm:text-md font-clash mr-4">
						{experience.company_name}
					</h4>
					<p className="text-phoneSm sm:text-4xsm  xl:text-3xsmfont-clash text-grey ">{`// ${experience.starting_date} - ${experience.ending_date}`}</p>
				</div>
				<p className="font-clash text-phoneSm sm:text-4xsm xl:text-3xsm">
					{experience.position}
				</p>
			</div>
			<div>
				<ul className="font-clash pl-4 list-disc">
					{experience.description.map((desc, index) => {
						return (
							<li
								key={index}
								className="mb-2 text-phoneLg sm:text-4xsm xl:text-3xsm"
							>
								{desc}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Experience
