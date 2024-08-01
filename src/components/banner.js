



export default function BannerComponent() {

    return (
        <>
            <div
                className="container-fluid py-5 my-5"
                style={{
                    background:
                        "linear-gradient(rgba(202, 203, 185, 1), rgba(202, 203, 185, 1))"
                }}
            >
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7">
                            <h1 className="mb-4 text-primary">Newsers</h1>
                            <h1 className="mb-4">Get Every Weekly Updates</h1>
                            <p className="text-dark mb-4 pb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley
                            </p>
                            <div className="position-relative mx-auto">
                                <input
                                    className="form-control w-100 py-3 rounded-pill"
                                    type="email"
                                    placeholder="Your Busines Email"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary py-3 px-5 position-absolute rounded-pill text-white h-100"
                                    style={{ top: 0, right: 0 }}
                                >
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="rounded">
                                <img
                                    src="img/banner-img.jpg"
                                    className="img-fluid rounded w-100 rounded"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}