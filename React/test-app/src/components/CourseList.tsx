import CourseCard from "./CourseCard";
import { getCourses } from "../services/courseServices";

const CourseList = () => {
  const courses = getCourses();

  return (
    <div className="container">
      <h2 className="text-secondary my-5">Our Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <CourseCard
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            topics={course.topics}
            // imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;