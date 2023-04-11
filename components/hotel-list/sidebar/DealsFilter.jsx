const DealsFilter = () => {
  const dealsData = [
    // { label: "Free cancellation" },
    // { label: "Reserve now, pay at stay" },
    // { label: "Properties with special offers" },
    { label: ".com" },
    { label: ".ai" },
    { label: ".tv" },
  ];

  return (
    <>
      {dealsData.map((deal, index) => (
        <div className="col-auto col-md-12" key={index}>
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{deal.label}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DealsFilter;
