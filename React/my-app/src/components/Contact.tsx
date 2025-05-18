
const Contact = () => {

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            <form className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="name@example.com"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        name="message"
                        rows={4}
                        placeholder="Your message..."
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;