
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
                        <p className="fs-5">
                            At <strong>Future Leaders Academy</strong>, we are committed to
                            providing high-quality, holistic education that equips students
                            with the skills, knowledge, and confidence needed to thrive in a
                            rapidly changing world.
                        </p>
                        <p className="fs-5">
                            Whether you're a school student looking to strengthen academic
                            foundations or an aspiring professional seeking to master
                            in-demand technologies, <strong>FLA</strong> is your trusted
                            learning partner.
                        </p>
                        <p className="fs-5">
                            Our diverse courses range from academic tuition for{" "}
                            <strong>Grades 2–12</strong> to professional programs in{" "}
                            <strong>IT, Design, Communication, and Soft Skills</strong> — all
                            designed to nurture excellence.
                        </p>

                        <div className="bg-white shadow-sm rounded p-4 mt-4">
                            <h4 className="text-success fw-semibold mb-3">💡 Why FLA?</h4>
                            <ul className="list-unstyled fs-5">
                                <li>✅ Expert and Passionate Faculty</li>
                                <li>✅ Student-Centric Learning Environment</li>
                                <li>✅ Practical, Hands-on Training</li>
                                <li>✅ Regular Assessments & Progress Tracking</li>
                                <li>✅ Affordable Fees with Proven Results</li>
                            </ul>
                        </div>

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