import CourseCard from "./CourseCard";
import { type Course } from "../types/Course"

const CourseList = () => {
    const courses: Course[] = [
        {
            title: "Web Design",
            instructor: "Alice Johnson",
            duration: 20,
            topics: ["HTML", "CSS", "Bootstrap"],
        },
        {
            title: "React Fundamentals",
            instructor: "Bob Smith",
            duration: 25,
            topics: ["JSX", "Components", "Hooks"],
        },
        {
            title: "Full Stack with MERN",
            instructor: "Charlie Davis",
            duration: 40,
            topics: ["MongoDB", "Express", "React", "Node.js"],
        },
    ];

    return (
        <div className="container">
            <h2 className="text-secondary my-5">Available Courses</h2>
            <div className="row">
                {courses.map((course) => (
                    <CourseCard
                        title={course.title}
                        instructor={course.instructor}
                        duration={course.duration}
                        topics={course.topics}
                    />
                ))}
            </div>
        </div>
    )
}

export default CourseList;