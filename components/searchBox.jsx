const SearchBox = ({ placeholderText = "Search", inputType = "text", classes }) => {
    return (
        <div className={classes}>
            <div className="single-field relative d-flex items-center md:d-none justify-end">
                <input className="pr-50 border-light bg-white text-dark-1 h-60 rounded-8" type={inputType} placeholder={placeholderText} />
                <button className="absolute d-flex items-center h-full"><i className="icon-search text-20 px-15 text-dark-1"></i>
                </button>
            </div>
        </div>
    )
}
export default SearchBox; 