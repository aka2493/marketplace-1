

const PromotionalCard = () => {
    return (<div className="border-light rounded-8 px-20 py-20 bg-light-3 shadow-2" >
        <div className="row">
            <div className="col-auto"><img src="/img/avatars/4.png" alt="image" className="size-50 rounded-full" /></div>
            {/* <div className="col-md">
                <div className="fw-500 text-18 lh-15">50% off on our selected domains...</div>
            </div>
            <div className="col-auto">
                <span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span>
            </div> */}
        </div>
        <div className="fw-500 text-18 lh-15 mt-20">50% off on our selected domains...50% off on our selected templates</div>
        <div className="mt-20 d-flex">
            <div>
                <button className="button px-20 w-100 fw-500 text-16 bg-blue-1 -blue-1 h-40 text-white">Participate</button>
            </div>
            <div>
                <button className="button px-20 w-100 fw-500 text-16 border-blue-1 h-40 text-blue-1 ml-15">View Details</button>
            </div>
        </div>
    </div>)
}

export default PromotionalCard;