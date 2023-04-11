import Link from "next/link";

const ProductSpecs = ({ }) => {
    return (
        <div className="d-flex justify-end js-pin-content mt-20">
            <div className="w-360 lg:w-full d-flex flex-column items-center">
                <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
                    <div className="text-24 fw-600 text-dark-1">
                        Product Specs
                    </div>
                    <div className="lh-16 pt-10">
                        <p className="text-dark-1 text-18 fw-400">Created: Jun 13, 2019</p>
                        <p className="text-dark-1 text-18 fw-400">Compatible With: Wordpess + HTML</p>
                        <p className="text-dark-1 text-18 fw-400">File Type: HTML</p>
                        <p className="text-dark-1 text-18 fw-400">File Size: 20.2 KB</p>
                        <p className="text-dark-1 text-18 fw-400">Dimensions: 1300 x 1300 px</p>
                        <p className="text-dark-1 text-18 fw-400">DPI: 72</p>
                        <p className="text-dark-1 text-18 fw-400">Layered</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSpecs;
