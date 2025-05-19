import type { Course } from "../types/Course";


const CourseCard = (props: Course) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        {/* <img src={props.imageUrl} className="card-img-top" alt="Course 1" /> */}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            <strong>Instructor:</strong> {props.instructor}
          </p>
          <p className="card-text">
            {" "}
            <strong>Duration:</strong> {props.duration} hours
          </p>

          <a href="#" className="btn btn-primary">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;