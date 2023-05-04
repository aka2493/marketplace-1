import CommentsCard from "./comments-card";
const TemplateComments = () => {
    return (<div className="row x-gap-40 y-gap-40">
        <div className="col-12">
            <h2 className="text-22 fw-500 mb-30 mt-30">Recent Comments</h2>
            <CommentsCard />
            <form className="mt-20">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-22 fw-500 mb-15">Leave a Comment</h3>
                        <div className="form-input">
                            <textarea required rows={4} defaultValue={""} />
                            <label className="lh-1 text-16 text-light-1">
                                Enter Your Comment
                            </label>
                        </div>
                    </div>
                </div>
                <div className="d-inline-block pt-30">
                    <button
                        type="submit"
                        className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                    >Post Comment</button>
                </div>
            </form>
        </div>
        <div className="col-12">
            <div className="px-24 py-20 rounded-4 bg-yellow-4">
                <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                        <div className="flex-center size-60 rounded-full bg-white">
                            <i className="icon-star text-yellow-1 text-30"></i>
                        </div>
                    </div>

                    <div className="col-auto">
                        <h4 className="text-20 lh-15 fw-500">
                            Disclaimer
                        </h4>
                        <div className="text-14 lh-15">Does this listing violate the Free Domain auctions
                            <span className="text-blue-1 fw-500"> Terms and conditions</span>?<span> | If so, anonymously </span>
                            <span className="text-blue-1 fw-500">report it</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default TemplateComments;