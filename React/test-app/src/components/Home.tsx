import Users from "./Users";

const Home = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">
                        🌟 Welcome to Future Leaders Academy (FLA)
                    </h2>
                    <p className="lead text-secondary">
                        Empowering Minds. Shaping Futures.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        <Users />


                        <p className="fs-5 mt-4 text-center fw-semibold text-dark">
                            Join us in building a brighter future — one student at a time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;