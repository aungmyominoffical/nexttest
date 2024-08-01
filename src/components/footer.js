


export default function FooterComponent() {

  return (
    <>
      <div className="container-fluid bg-dark footer py-5">
        <div className="container py-5">
          <div
            className="pb-4 mb-4"
            style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
          >
            <div className="row g-4">
              <div className="col-lg-3">
                <a href="#" className="d-flex flex-column flex-wrap">
                  <p className="text-white mb-0 display-6">Newsers</p>
                  <small
                    className="text-light"
                    style={{ letterSpacing: 11, lineHeight: 0 }}
                  >
                    Newspaper
                  </small>
                </a>
              </div>
              <div className="col-lg-9">
                <div className="d-flex position-relative rounded-pill overflow-hidden">
                  <input
                    className="form-control border-0 w-100 py-3 rounded-pill"
                    type="email"
                    placeholder="example@gmail.com"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary border-0 py-3 px-5 rounded-pill text-white position-absolute"
                    style={{ top: 0, right: 0 }}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 col-xl-3">
              <div className="footer-item-1">
                <h4 className="mb-4 text-white">Get In Touch</h4>
                <p className="text-secondary line-h">
                  Address: <span className="text-white">123 Streat, New York</span>
                </p>
                <p className="text-secondary line-h">
                  Email: <span className="text-white">Example@gmail.com</span>
                </p>
                <p className="text-secondary line-h">
                  Phone: <span className="text-white">+0123 4567 8910</span>
                </p>
                <div className="d-flex line-h">
                  <a
                    className="btn btn-light me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-twitter text-dark" />
                  </a>
                  <a
                    className="btn btn-light me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-facebook-f text-dark" />
                  </a>
                  <a
                    className="btn btn-light me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-youtube text-dark" />
                  </a>
                  <a className="btn btn-light btn-md-square rounded-circle" href="">
                    <i className="fab fa-linkedin-in text-dark" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="footer-item-2">
                <div className="d-flex flex-column mb-4">
                  <h4 className="mb-4 text-white">Recent Posts</h4>
                  <a href="#"></a>
                  <div className="d-flex align-items-center">
                    <a href="#">
                      <div className="rounded-circle border border-2 border-primary overflow-hidden">
                        <img
                          src="img/footer-1.jpg"
                          className="img-zoomin img-fluid rounded-circle w-100"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="d-flex flex-column ps-4">
                      <a href="#">
                        <p className="text-uppercase text-white mb-3">Life Style</p>
                      </a>
                      <a href="#" className="h6 text-white">
                        Get the best speak market, news.
                      </a>
                      <small className="text-white d-block">
                        <i className="fas fa-calendar-alt me-1" /> Dec 9, 2024
                      </small>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <a href="#"></a>
                  <div className="d-flex align-items-center">
                    <a href="#">
                      <div className="rounded-circle border border-2 border-primary overflow-hidden">
                        <img
                          src="img/footer-2.jpg"
                          className="img-zoominimg-fluid rounded-circle w-100"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="d-flex flex-column ps-4">
                      <a href="#">
                        <p className="text-uppercase text-white mb-3">Sports</p>
                      </a>
                      <a href="#" className="h6 text-white">
                        Get the best speak market, news.
                      </a>
                      <small className="text-white d-block">
                        <i className="fas fa-calendar-alt me-1" /> Dec 9, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="d-flex flex-column text-start footer-item-3">
                <h4 className="mb-4 text-white">Categories</h4>
                <a className="btn-link text-white" href="">
                  <i className="fas fa-angle-right text-white me-2" /> Sports
                </a>
                <a className="btn-link text-white" href="">
                  <i className="fas fa-angle-right text-white me-2" /> Magazine
                </a>
                <a className="btn-link text-white" href="">
                  <i className="fas fa-angle-right text-white me-2" /> Lifestyle
                </a>
                <a className="btn-link text-white" href="">
                  <i className="fas fa-angle-right text-white me-2" /> Politician
                </a>
                <a className="btn-link text-white" href="">
                  <i className="fas fa-angle-right text-white me-2" /> Technology
                </a>
                <a className="btn-link text-white" href="">
                  <i className="fas fa-angle-right text-white me-2" /> Intertainment
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="footer-item-4">
                <h4 className="mb-4 text-white">Our Gallary</h4>
                <div className="row g-2">
                  <div className="col-4">
                    <div className="rounded overflow-hidden">
                      <img
                        src="img/footer-1.jpg"
                        className="img-zoomin img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="rounded overflow-hidden">
                      <img
                        src="img/footer-2.jpg"
                        className="img-zoomin img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="rounded overflow-hidden">
                      <img
                        src="img/footer-3.jpg"
                        className="img-zoomin img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="rounded overflow-hidden">
                      <img
                        src="img/footer-4.jpg"
                        className="img-zoomin img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="rounded overflow-hidden">
                      <img
                        src="img/footer-5.jpg"
                        className="img-zoomin img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="rounded overflow-hidden">
                      <img
                        src="img/footer-6.jpg"
                        className="img-zoomin img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="btn btn-primary border-2 border-white rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up" />
      </a>


    </>
  );
}