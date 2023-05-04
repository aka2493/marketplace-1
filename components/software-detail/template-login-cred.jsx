const TemplateLoginCredSection = () => {
    return (<div className="px-24 py-20 rounded-4 bg-green-1">
        <div className="row x-gap-20 y-gap-20 items-center">
            <div className="col-auto">
                <div className="flex-center size-60 rounded-full bg-white">
                    <i className="icon-star text-yellow-1 text-30"></i>
                </div>
            </div>

            <div className="col-auto">
                <h4 className="text-20 lh-15 fw-500">
                    Login Required!!
                </h4>
                <div className="text-15 lh-15">This template requires login credentials to view the live preview | Please find them here</div>
            </div>
        </div>

        <div className="border-top-light mt-20 mb-10"></div>

        <div className="row x-gap-20 y-gap-20 items-center">
            <div className="col-6">
                <div className="text-dark-1 text-center lh-14 fw-500 text-20">Login Username: ThomasJames24</div>
            </div>
            <div className="col-6">
                <div className="text-dark-1 text-center lh-14 fw-500 text-20">Login Password: James@24</div>
            </div>
        </div>
    </div>)
}

export default TemplateLoginCredSection;