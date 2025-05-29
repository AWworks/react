
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CourseList = () => {

    type Course = {
        id: number;
        name: string;
        description: string;
    }

    const [courses, setCourses] = useState<Course[]>([]);

    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<boolean | null>(null);

    let apiUrl = "https://68373bd5664e72d28e440d9d.mockapi.io/api/courses";

    const fetchCourses = async () => {
        const response = await fetch(apiUrl);
        const data: Course[] = await response.json();
        setCourses(data); // Update state with fetched courses
        console.log(courses);

    };

    // Fetch courses when the component mounts
    useEffect(() => {
        fetchCourses();
    }, []);

    const deleteCourse = async (id: number) => {

        const deleteUrl = `${apiUrl}/${id}`;
        await fetch(deleteUrl, { method: "DELETE" });
        fetchCourses();
    }

    return (
        <div id="container">
            <h1 className="text-danger">Course List</h1>
            {/* Link to add a new course */}
            <Link to={`/addcourse`} className="btn btn-primary my-3">
                <i className="bi-plus-circle me-2"></i>
                Add Course
            </Link>
            {/* Table to display the list of courses */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render each course as a table row */}
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <th scope="row">{course.id}</th>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td>
                                {/* Link to edit the course */}
                                <Link
                                    to={`/editcourse/${course.id}`}
                                    className="btn btn-info me-2"
                                >
                                    <i className="bi-pencil-square me-2"></i>Edit
                                </Link>
                                {/* Button to delete the course */}
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteCourse(course.id)}
                                >
                                    <i className="bi-trash me-2"></i> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default CourseList;