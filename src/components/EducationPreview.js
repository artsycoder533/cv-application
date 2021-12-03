import React from "react";

export default function EducationPreview(props) {
    const { educationList } = props.educationList;
    console.log(props.educationList);
    //only show when button has been pressed
	return (
		<div>
			{/* <h3>Education</h3>
			{educationList.map(education => {
				return (
					<>
						<p>{education.school}</p>
						<p>{education.major}</p>
						<p>{education.degree}</p>
						<p>{education.dateStarted}</p>
						<p>{education.dateEnded}</p>
						<p>{education.attending}</p>
					</>
				)
				
			})} */}
		</div>
	);
}
