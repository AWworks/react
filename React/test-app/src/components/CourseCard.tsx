interface CourseCardProps {
    title: string;
    instructor: string;
    duration: number;
    topics: string[];
}

const CourseCard = (props: CourseCardProps) => {
    return (
        <div className="border border-info m-3 p-3" >
            <h2>{props.title}</h2>
            <p>Instructor: {props.instructor}</p>
            <p>Duration: {props.duration} hrs</p>
            <p>Topics Covered:</p>
            <ol className="list-group list-group-numbered">
                {props.topics.map((topic, index) => (
                    <li className="list-group-item" key={index}>{topic}</li>
                ))}
            </ol>
        </div>
    )
}
export default CourseCard;