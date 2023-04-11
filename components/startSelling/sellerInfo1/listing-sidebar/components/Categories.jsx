import Link from "next/link";

const Categories = () => {
  const catContent = [
    { id: 1, name: "Finance", number: "13" },
    { id: 2, name: "Art", number: "10" },
    { id: 3, name: "Entertainment", number: "6" },
    { id: 4, name: "Business", number: "20" },
    { id: 5, name: "Fashion", number: "30" },
    { id: 5, name: "Law", number: "5" },
  ];
  return (
    <>
      {catContent.map((item) => (
        <Link
          href="/blog/blog-list-v1"
          className="d-flex items-center justify-between text-dark-1"
          key={item.id}
        >
          <span className="text-15 text-dark-1">{item.name}</span>
          <span className="text-14 text-light-1">{item.number}</span>
        </Link>
      ))}
    </>
  );
};

export default Categories;
