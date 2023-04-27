const AIFilters = () => {
  const filters = [
    {
      label: "AI for Business",
      count: 5,
    },
    {
      label: "AI for Finance",
      count: 10,
    },
    {
      label: "AI for Customer Service",
      count: 15,
    },
    {
      label: "AI for Entertainment",
      count: 4,
    },
    {
      label: "AI for HealthCare",
      count: 7,
    },
  ];

  return (
    <>
      {filters.map((filter, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{filter.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{filter.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AIFilters;
