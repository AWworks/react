import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = "https://68373bd5664e72d28e440d9d.mockapi.io/api/courses";

const CourseAdd = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const navigate = useNavigate();

    const addCourse = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (name.trim().length == 0) {
            setError("Course Name is required.");
            return;
        }

        if (description.trim().length < 15) {
            setError("Course Description must be atleast 15 characters.");
            return;
        }
        const course = {
            name,
            description
        }

        await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course),
        });
        setName("");
        setDescription("");
        navigate("/courses");
    }

    return (
        <div className="container">
            <h2 className="text-primary">Add Course</h2>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
            <form id="addCourseForm" onSubmit={addCourse} className="border border-1 rounded shadow p-4">
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
                    <button className="btn btn-primary w-100" type="submit">Add Course</button>
                </div>
            </form>
        </div>
    );
}
export default CourseAdd;