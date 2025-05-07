import './Course.css'
function Course() {
    const courseInfo = [
        {
            courseId: 2020,
            name: "Python 123",
            summary: "Learn the basics of Python, a versatile programming language used in various fields.",
            duration: "15hrs",
            rating: 4,
            imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
            courseId: 2022,
            name: "JavaScript 123",
            summary: "Learn the basics of JavaScript, the most popular programming language for web development.",
            duration: "25hrs",
            rating: 4.5,
            imageUrl: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
    ]

    return (
        <>
            {courseInfo.map(c => (
                <div className="card" key={c.courseId}>
                    <img src={c.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{c.name}</h5>
                        <h5 className='card-link'>{c.rating} stars</h5>
                        <h5 className='card-subtitle mb-2 text-body-secondary'>{c.duration} </h5>
                        <p className="card-text">{c.summary}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Course;