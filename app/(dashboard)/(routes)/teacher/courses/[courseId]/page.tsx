import { db } from "@/lib/db";

const CourseIdPage = async ({
	params
}:{
	params : { courseId: string}
}) => {


	return (
		<div>
			<h1>Course {params.courseId}</h1>
		</div>
	 );
}

export default CourseIdPage;