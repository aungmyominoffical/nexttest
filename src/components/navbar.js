"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function CustomNavbar() {
    let currentPath = usePathname();


    return (
        <>
            <div className="container-fluid fixed-top px-0" style={{position:"-webkit-sticky"}}>
                <div className="container-fluid topbar bg-dark d-none d-lg-block">
                    <div className="container px-0">
                        <div className="topbar-top d-flex justify-content-between flex-lg-wrap">
                            <div className="top-info flex-grow-0">
                                <span className="rounded-circle btn-sm-square bg-primary me-2">
                                    <i className="fas fa-bolt text-white" />
                                </span>
                                <div className="pe-2 me-3 border-end border-white d-flex align-items-center">
                                    <p className="mb-0 text-white fs-6 fw-normal">Trending</p>
                                </div>
                                <div className="overflow-hidden" style={{ width: 735 }}>
                                    <div id="note" className="ps-2">
                                        <img
                                            src="img/features-fashion.jpg"
                                            className="img-fluid rounded-circle border border-3 border-primary me-2"
                                            style={{ width: 30, height: 30 }}
                                            alt=""
                                        />
                                        <a href="#">
                                            <p className="text-white mb-0 link-hover">
                                                Newsan unknown printer took a galley of type andscrambled
                                                Newsan.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="top-link flex-lg-wrap">
                                <i className="fas fa-calendar-alt text-white border-end border-secondary pe-2 me-2">
                                    {" "}
                                    <span className="text-body">Tuesday, Sep 12, 2024</span>
                                </i>
                                <div className="d-flex icon">
                                    <p className="mb-0 text-white me-2">Follow Us:</p>
                                    <a href="" className="me-2">
                                        <i className="fab fa-facebook-f text-body link-hover" />
                                    </a>
                                    <a href="" className="me-2">
                                        <i className="fab fa-twitter text-body link-hover" />
                                    </a>
                                    <a href="" className="me-2">
                                        <i className="fab fa-instagram text-body link-hover" />
                                    </a>
                                    <a href="" className="me-2">
                                        <i className="fab fa-youtube text-body link-hover" />
                                    </a>
                                    <a href="" className="me-2">
                                        <i className="fab fa-linkedin-in text-body link-hover" />
                                    </a>
                                    <a href="" className="me-2">
                                        <i className="fab fa-skype text-body link-hover" />
                                    </a>
                                    <a href="" className="">
                                        <i className="fab fa-pinterest-p text-body link-hover" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-light">
                    <div className="container px-0">
                        <nav className="navbar navbar-light navbar-expand-xl">
                            <Link href="/" className="navbar-brand mt-3">
                                <p className="text-primary display-6 mb-2" style={{ lineHeight: 0 }}>
                                    Newsers
                                </p>
                                <small className="text-body fw-normal" style={{ letterSpacing: 12 }}>
                                    Nespaper
                                </small>
                            </Link>
                            <button
                                className="navbar-toggler py-2 px-3"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                            >
                                <span className="fa fa-bars text-primary" />
                            </button>
                            <div
                                className="collapse navbar-collapse bg-light py-3"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mx-auto border-top">

                                    <Link className={currentPath == "/" ? "nav-item nav-link active" : "nav-item nav-link"} href="/">
                                        HOME
                                    </Link>
                                    <Link className={currentPath.includes("/photos") ? "nav-item nav-link active" : "nav-item nav-link"} href="/photos">
                                        PHOTOS
                                    </Link>
                                    <Link className={currentPath.includes("/videos") ? "nav-item nav-link active" : "nav-item nav-link"} href="/videos">
                                        VIDEOS
                                    </Link>
                                    <Link className={currentPath.includes("/shows") ? "nav-item nav-link active" : "nav-item nav-link"} href="/shows">
                                        SHOWS
                                    </Link>
                                    <Link className={currentPath.includes("/news") ? "nav-item nav-link active" : "nav-item nav-link"} href="/news">
                                        NEWS
                                    </Link>
                                </div>
                                <div className="d-flex flex-nowrap border-top pt-3 pt-xl-0">
                                    
                                    <button
                                        className="btn-search btn border border-primary btn-md-square rounded-circle bg-white my-auto"
                                        data-bs-toggle="modal"
                                        data-bs-target="#searchModal"
                                    >
                                        <i className="fas fa-search text-primary" />
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}