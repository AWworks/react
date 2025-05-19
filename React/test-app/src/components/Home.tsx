
const Home = () => {
 return (
    <main className="container my-5">
        <h2 className="text-center">Our Services</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Consulting</h5>
                        <p className="card-text">Professional advice tailored to your business needs.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Web Development</h5>
                        <p className="card-text">Creating modern and responsive websites.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Marketing</h5>
                        <p className="card-text">Strategic marketing plans to boost brand visibility.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
 )
}

export default Home;