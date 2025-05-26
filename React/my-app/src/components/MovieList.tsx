import MovieCard from "./MovieCard"

const MovieList = () => {
    return (
        <>
            < MovieCard
                name='Sholay'
                actors={["Amitabh Bachchan", "Sanjeev Kapoor", "Dharmendra"]}
                rating={4.5}
                isRecommended={true}
            />
            < MovieCard
                name='A Few Good Men'
                actors={["Tom Cruise", "Jack Nicholson", "Demi Moore"]}
                rating={4.5}
                isRecommended={true}
            />

        </>
    )
}

export default MovieList