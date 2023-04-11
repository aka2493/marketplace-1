import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/blogs";

const Blog3 = () => {
  return (
    <>
      {blogsData.slice(0, 3).map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item.id}
          data-aos="fade"
        //  data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/`}
            className="blogCard -type-1 d-block "
          >
            <div className="blogCard__image">
              <div className="ratio ratio-4:3 rounded-4 rounded-8">
                <Image
                  width={400}
                  height={300}
                  className="img-ratio js-lazy"
                  src={item.img}
                  alt="image"
                />
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-dark-1 text-20 fw-600">| By Admin</h4>
              <h4 className="text-dark-1 text-18 fw-500 mt-10">Make money easy as Pie</h4>
              <p className="mt-10 text-light-1 fw-400 text-14">{item.title}</p>
              <div className="text-light-1 text-15 lh-14 mt-5">
                <i className="icon-calendar-2 text-18 text-light-1"></i>
                <span className="ml-10">{item.date}</span></div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog3;
