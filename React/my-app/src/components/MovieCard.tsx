interface MovieProps {
    name: string;
    rating: number;
    actors: string[];
    isRecommended: boolean;
}

const MovieCard = (props: MovieProps) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Rating: {props.rating}/10</p>
            <p>Cast:</p>
            <ul className="list-group list-group-flush">
                {props.actors.map((actor, i) => <li className="list-group-item" key={i}>{actor}</li>)}
            </ul>
            <p>{props.isRecommended ? "Highly Recommended!" : "Optional Watch"}</p>
        </div>
    )
}

export default MovieCard;