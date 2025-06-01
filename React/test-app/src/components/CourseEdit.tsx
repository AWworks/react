import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const apiUrl = "https://68373bd5664e72d28e440d9d.mockapi.io/api/courses";

const CourseEdit = () => {

    let param = useParams();
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const navigate = useNavigate();

    const loadCourse = async () => {
        let response = await fetch(`${apiUrl}/${param.id}`);
        let data = await response.json();

        setName(data.name);
        setDescription(data.description);
    }

    useEffect(() => {
        loadCourse();
    }, [param.id]);

    const updateCourse = async () => {

        const course = {
            name,
            description
        }

        await fetch(`${apiUrl}/${param.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course),
        });

        navigate("/courses");
    }

    return (
        <div className="container">
            <h2 className="text-primary">Edit Course</h2>
            <div id="addCourseForm" className="border border-1 rounded shadow p-4">
                <div className="mb-4">
                    <label htmlFor="titleTextBox">Course Name</label>
                    <input type="text"
                        name="titleTextBox"
                        id="titleTextBox"
                        className="form-control"
                        placeholder="Enter Course Title like Java, Python, React, etc"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="descTextBox">Course Desccription</label>
                    <input type="text"
                        name="descTextBox"
                        id="descTextBox"
                        className="form-control"
                        placeholder="Enter Course Description such as topics, duration etc..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mt-5 ">
                    <button className="btn btn-primary w-100" onClick={() => updateCourse()}>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default CourseEdit;