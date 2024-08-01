import ApiConstant from "@/api/apiconstants";
import { BlocksRenderer, BlocksContent } from '@strapi/blocks-react-renderer';



async function getNewsLists(slug) {
    let apiconstant = new ApiConstant();
    let response = await fetch(`${apiconstant.api}/api/newsapi/${slug}?populate=*`);
    return response.json();
}


export default async function SampleNewsPage({ params }) {
    let apiconstant = new ApiConstant();
    let newsData = await getNewsLists(params.slug);
    // const content = newsData.data.attributes.content;

    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <ol className="breadcrumb justify-content-start mb-4">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">News</a>
                            </li>
                            <li className="breadcrumb-item active text-dark">Single Page Title</li>
                        </ol>
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <a className="h1 display-5">
                                        {params.slug}
                                    </a>
                                </div>
                                <div className="position-relative rounded overflow-hidden mb-3">
                                    <img
                                        src={`${apiconstant.api}${newsData.data.attributes.thumbnail.data.attributes.url}`}
                                        className="img-zoomin img-fluid rounded w-100"
                                        alt=""
                                    />
                                    <div
                                        className="position-absolute text-white px-4 py-2 bg-primary rounded"
                                        style={{ top: 20, right: 20 }}
                                    >
                                        {newsData.data.attributes.category.toString().toUpperCase()}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <a className="text-dark link-hover me-3">
                                        <i className="fa fa-clock" /> 06 minute read
                                    </a>

                                </div>

                                <div dangerouslySetInnerHTML={{ __html: newsData.data.attributes.content }} />;


                                <div className="bg-light rounded my-4 p-4">
                                    <h4 className="mb-4">You Might Also Like</h4>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center p-3 bg-white rounded">
                                                <img
                                                    src="../img/chatGPT.jpg"
                                                    className="img-fluid rounded"
                                                    alt=""
                                                />
                                                <div className="ms-3">
                                                    <a href="#" className="h5 mb-2">
                                                        Lorem Ipsum is simply dummy text of the printing
                                                    </a>
                                                    <p className="text-dark mt-3 mb-0 me-3">
                                                        <i className="fa fa-clock" /> 06 minute read
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center p-3 bg-white rounded">
                                                <img
                                                    src="../img/chatGPT-1.jpg"
                                                    className="img-fluid rounded"
                                                    alt=""
                                                />
                                                <div className="ms-3">
                                                    <a href="#" className="h5 mb-2">
                                                        Lorem Ipsum is simply dummy text of the printing
                                                    </a>
                                                    <p className="text-dark mt-3 mb-0 me-3">
                                                        <i className="fa fa-clock" /> 06 minute read
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="p-3 rounded border">
                                            <div className="row g-2">

                                                <img src="/img/ads1.png" />
                                            </div>

                                            <div className="row g-4">
                                                <div className="col-12">
                                                    <img src="/img/ads1.png" />
                                                </div>
                                            </div>
                                            <h4 className="my-4">Popular News</h4>
                                            <div className="row g-4">
                                                <div className="col-12">
                                                    <div className="row g-4 align-items-center features-item">
                                                        <div className="col-4">
                                                            <div className="rounded-circle position-relative">
                                                                <div className="overflow-hidden rounded-circle">
                                                                    <img
                                                                        src="../img/features-sports-1.jpg"
                                                                        className="img-zoomin img-fluid rounded-circle w-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span
                                                                    className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute"
                                                                    style={{ top: "10%", right: "-10px" }}
                                                                >
                                                                    3
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="features-content d-flex flex-column">
                                                                <p className="text-uppercase mb-2">Sports</p>
                                                                <a href="#" className="h6">
                                                                    Get the best speak market, news.
                                                                </a>
                                                                <small className="text-body d-block">
                                                                    <i className="fas fa-calendar-alt me-1" /> December 9,
                                                                    2024
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row g-4 align-items-center features-item">
                                                        <div className="col-4">
                                                            <div className="rounded-circle position-relative">
                                                                <div className="overflow-hidden rounded-circle">
                                                                    <img
                                                                        src="../img/features-technology.jpg"
                                                                        className="img-zoomin img-fluid rounded-circle w-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span
                                                                    className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute"
                                                                    style={{ top: "10%", right: "-10px" }}
                                                                >
                                                                    3
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="features-content d-flex flex-column">
                                                                <p className="text-uppercase mb-2">Technology</p>
                                                                <a href="#" className="h6">
                                                                    Get the best speak market, news.
                                                                </a>
                                                                <small className="text-body d-block">
                                                                    <i className="fas fa-calendar-alt me-1" /> December 9,
                                                                    2024
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row g-4 align-items-center features-item">
                                                        <div className="col-4">
                                                            <div className="rounded-circle position-relative">
                                                                <div className="overflow-hidden rounded-circle">
                                                                    <img
                                                                        src="../img/features-fashion.jpg"
                                                                        className="img-zoomin img-fluid rounded-circle w-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span
                                                                    className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute"
                                                                    style={{ top: "10%", right: "-10px" }}
                                                                >
                                                                    3
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="features-content d-flex flex-column">
                                                                <p className="text-uppercase mb-2">Fashion</p>
                                                                <a href="#" className="h6">
                                                                    Get the best speak market, news.
                                                                </a>
                                                                <small className="text-body d-block">
                                                                    <i className="fas fa-calendar-alt me-1" /> December 9,
                                                                    2024
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row g-4 align-items-center features-item">
                                                        <div className="col-4">
                                                            <div className="rounded-circle position-relative">
                                                                <div className="overflow-hidden rounded-circle">
                                                                    <img
                                                                        src="../img/features-life-style.jpg"
                                                                        className="img-zoomin img-fluid rounded-circle w-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span
                                                                    className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute"
                                                                    style={{ top: "10%", right: "-10px" }}
                                                                >
                                                                    3
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="features-content d-flex flex-column">
                                                                <p className="text-uppercase mb-2">Life Style</p>
                                                                <a href="#" className="h6">
                                                                    Get the best speak market, news.
                                                                </a>
                                                                <small className="text-body d-block">
                                                                    <i className="fas fa-calendar-alt me-1" /> December 9,
                                                                    2024
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <a
                                                        href="#"
                                                        className="link-hover btn border border-primary rounded-pill text-dark w-100 py-3 mb-4"
                                                    >
                                                        View More
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}