interface BookProps {
    title: string;
    author: string;
    year: number;
    price: number;
    genre: string[];
}

const BookInfo = (props: BookProps) => {
    return (
        <div className=" border m-3 p-3">
            <h3 className="card-header ">
                {props.title} - ({props.year})
            </h3>
            <p>Author: {props.author} </p>
            <p>Genre: </p>
            <ul className="list-group">
                {props.genre.map((gen) => (
                    <li className="list-group-item">{gen}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookInfo;