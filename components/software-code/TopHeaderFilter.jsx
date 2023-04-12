const TopHeaderFilter = () => {
    return (
        <>
            <div className="row y-gap-10 items-center justify-between">
                <div className="col-auto">
                    <div className="text-18">
                        <span className="fw-500">Showing 1-20 of</span> 10,289 results
                    </div>
                </div>

                <div className="col-auto d-flex items-center pr-0">
                    <div className="text-16 fw-500 mr-10">Sort By:</div>
                    <select placeholder="Sort By" className="form-select rounded-4 border-light justify-between text-15 fw-500 px-20 h-34 w-180 sm:w-full text-14">
                        <option value="newset">Newest</option>
                        <option value="design">Price Low to High</option>
                        <option value="illustration">Price High to Low</option>
                    </select>

                    <div className="col-auto d-none xl:d-block">
                        <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#listingSidebar"
                            className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
                        >
                            <i className="icon-up-down text-14 mr-10" />
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopHeaderFilter;
