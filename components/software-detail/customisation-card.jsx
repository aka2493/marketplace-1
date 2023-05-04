
const CustomisationCard = ({ }) => {
    return (
        <div className="d-flex justify-end js-pin-content mt-20">
            <div className="w-360 lg:w-full d-flex flex-column items-center">
                <div className="px-30 py-30 rounded-4 border-light bg-black shadow-4">
                    <div className="d-flex items-center pt-20">
                        <div className="size-40 flex-center bg-light-2 rounded-full">
                            <i className="icon-heart text-16 text-green-2" />
                        </div>
                        <div className="lh-16 ml-10">
                            <p className="text-18 fw-500 text-white">Need Customization?</p>
                            <p className="text-16 text-white">Talk to us today</p>
                        </div>
                    </div>
                    <p className="lh-16 text-white text-22 fw-600 pt-10">Hire Resources from $10/hour text</p>
                </div>
            </div>
        </div>
    );
};

export default CustomisationCard;
