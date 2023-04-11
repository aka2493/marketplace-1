const AmenitiesFilter = () => {
  const amenities = [
    // { name: "Breakfast Included", count: 92 },
    // { name: "Romantic", count: 45 },
    // { name: "Airport Transfer", count: 21 },
    // { name: "WiFi Included", count: 78 },
    // { name: "5 Star", count: 679 },
    { name: "Arts and Culture" },
    { name: "Automobiles" }, { name: "Beauty and Cosmetics" },
    { name: "Business and Startups" }, { name: "Cloud Servers and Security" },
    { name: "Digital Marketing" }, { name: "Education and eLearning" },
    { name: "Electronics and Appliances" },

    { name: "Entertainment" },
    { name: "Events" },
    { name: "Fashion and Style" },
    { name: "Finance (Fintech)" },
    { name: "Food and Bevarages" },
    { name: "Gadget Accessories" },
    { name: "Gaming" },
    { name: "Gifts and Promotions" },
    { name: "Graphics and Design" },
    { name: "Health and Lifestyle" },
    { name: "Home and Decor" },
    { name: "Jobs and Careers" },
    { name: "Kids and Toys" },
    { name: "Legal and Compliance" },
    { name: "News and Publications" },
    { name: "Others" },
    { name: "Real Estate" },
    { name: "Science and Technology" },
    { name: "Services" },
    { name: "Social Media and Networking" },
    { name: "Software and SaaS" },
    { name: "Sports" },
    { name: "Stocks and Trading" },
    { name: "Travel and Hospitality" },
    { name: "Web and Internet" },
  ];

  return (
    <>
      {amenities.map((amenity, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{amenity.name}</div>
            </div>
          </div>
          {/* <div className="col-auto">
            <div className="text-15 text-light-1">{amenity.count}</div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default AmenitiesFilter;
