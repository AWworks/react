import "./UserProfile.css"

interface ProfileProps {
    name: string;
    email: string;
    phone: string;
    summary: string;
    skills: string[];
    profileImgURL: string;
    portfolioURL: string;
}

const propsProfile = (props: ProfileProps) => {

    return (
        <div className="card">
            <img src={props.profileImgURL} alt="Profile" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.summary}</p>
                <p className="card-text"><strong>Email:</strong> {props.email}</p>
                <p className="card-text"><strong>Phone:</strong> {props.phone}</p>
                <p className="card-text"><strong>Skills:</strong> {props.skills.join(", ")}</p>
                <a href={props.portfolioURL} className="btn btn-primary">View Profile</a>
            </div>
        </div>
    );
}
export default propsProfile;