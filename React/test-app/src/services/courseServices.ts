import type { Course } from "../types/Course";

export function getCourses(): Course[] {
    const courses : Course [] = [
        {
            title: "Web Design",
            instructor: "Alice Johnson",
            duration: 20,
            topics: ["HTML", "CSS", "Bootstrap"]
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
    ]

    return courses;
}