import Link from "next/link";
import ApiConstant from "@/api/apiconstants";
import HomeAdsBanner from "@/components/ads/homeads";
import NewListCard from "@/components/news/newlistcard";


async function getNewsLists() {
    const apiconstants = new ApiConstant();
    let response = await fetch(`${apiconstants.api}/api/newsapi?populate=*`);
    if (!response.ok) {
        throw Error("Error");
    }
    return response.json();
}

export default async function NewsPage() {
    const apiconstants = new ApiConstant();
    const responseList = await getNewsLists();
    const newsLists = responseList.data;
    return (
        <>
            <div className="container-fluid populer-news py-5" style={{ marginTop: "50px" }}>
                <div className="container py-5">
                    <div className="mt-5 lifestyle">
                        {/* <div className="border-bottom mb-4">
                        <h1 className="mb-4">Life Style</h1>
                    </div> */}
                        {

                            <>

                                <div className="row g-4">
                                    {/* Insert Lists */}

                                    {
                                        newsLists.map((e, index) => {
                                            return (
                                                <>
                                                    <NewListCard
                                                        url={`./news/${e.attributes.url}`}
                                                        title={e.attributes.title}
                                                        imgUrl={`${apiconstants.api}${e.attributes.thumbnail.data.attributes.url}`}
                                                        publishDate={new Date(Date.parse(e.attributes.updatedAt)).toDateString()}
                                                    />
                                                </>
                                            );
                                        })
                                    }



                                    {/* End Lists */}
                                </div>
                            </>

                        }
                    </div>
                </div>
            </div>
        </>
    );
}