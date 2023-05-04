import Image from "next/image";

const WhyChoose = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/3/1.svg",
      title: "Best Price",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/3/2.svg",
      title: "Easy & Quick Selling and Buying",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/3/3.svg",
      title: "All Products in one place",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image
                width={70}
                height={70}
                src={item.icon}
                alt="image"
             
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
