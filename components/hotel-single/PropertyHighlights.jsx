const PropertyHighlights2 = () => {
  const highlightsContent = [
    {
      id: 1,
      icon: "icon-city",
      text: `Buyer Protection Guarantee`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 2,
      icon: "icon-airplane",
      text: `Time Frame`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 3,
      icon: "icon-bell-ring",
      text: `Payments`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }
  ];

  return (
    <div className="row y-gap-20 pt-30">
      {highlightsContent.map((item) => (
        <div className="col-lg-4 col-6 col-md-4" key={item.id}>
          <div className="text-center">
            <i className={`${item.icon} text-50 text-blue-1`} />
            <div className="text-18 fw-600 lh-1 mt-10">{item.text}</div>
            <p className="text-15 fw-400 mt-10 text-light-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
