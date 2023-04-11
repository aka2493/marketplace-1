import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import SearchBox from "../../searchBox";

const NewSearchBox = () => {
    const { tabs, currentTab } = useSelector((state) => state.hero) || {};
    const dispatch = useDispatch();

    return (
        <>
            <div className="tabs__controls d-flex x-gap-30 y-gap-20 justify-center sm:justify-start js-tabs-controls">
                {tabs?.map((tab) => (
                    <button
                        key={tab?.id}
                        className={`tabs__button text-15 fw-500 text-dark-1 pb-4 js-tabs-button ${tab?.name === currentTab ? "is-tab-el-active" : ""
                            }`}
                        onClick={() => dispatch(addCurrentTab(tab?.name))}
                    >
                        {tab?.name}
                    </button>
                ))}
            </div>

            <div className="position-relative mt-30 md:mt-20 js-tabs-content">
                <SearchBox classes={'w-75 m-auto'} />
            </div>
        </>
    );
};

export default NewSearchBox;
