import Link from "next/link";
import sellerlistingData from "../../../../../data/sellerlistingData";


const Tags = () => {
  return (
    <>
      {sellerlistingData.slice(0, 7).map((item) => (
        <div key={item.id} className="col-auto">
          <Link
            href={`/blog/blog-details/${item.id}`}
            className="button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize"
          >
            {item.tag}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Tags;
