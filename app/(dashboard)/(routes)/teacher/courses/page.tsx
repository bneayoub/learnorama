import { Button } from "@/components/ui/button";
import Link from "next/link";

const isTeacherPage = () => {
	return (
		<div>
			<Link href="/teacher/create">
				<Button>
					New Course
				</Button>
			</Link>
		</div>

	 );
}

export default isTeacherPage;