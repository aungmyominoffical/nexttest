import Link from "next/link";



export default function NewListCard({url,title,imgUrl,publishDate}) {

    return (
        <>
            <Link href={url} className="col-lg-4">
                <div >
                    <div className="lifestyle-item rounded">
                        <img
                            src={imgUrl}
                            className="img-fluid w-100 rounded"
                            alt=""
                            style={{ height: "350px" }}
                        />
                        <div className="lifestyle-content">
                            <div className="mt-auto">

                                <p className="h4 text-white link-hover">{title}</p>
                                <div className="d-flex justify-content-between mt-4">

                                    <small className="text-white d-block">
                                        <i className="fas fa-calendar-alt me-1" />{publishDate}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}