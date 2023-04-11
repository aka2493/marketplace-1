const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "List your Products",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Receive Bids",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Pay to Traderlo",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/img/featureIcons/1/2.svg",
      title: "Delivery",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "200",
    },
    {
      id: 5,
      icon: "/img/featureIcons/1/3.svg",
      title: "Get paid by Traderlo",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-2 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
             
              <Image
              src={item.icon}
              className="js-lazy"
                            
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

export default BlockGuide;
