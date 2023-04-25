
const Services = () => {
  const services = [
    { name: "MERN Stack", price: "$20/hr" },
    { name: "Java/J2EE with Microservices", price: "$30/hr" },
    { name: "Cloud Stack", price: "$35/hr" },
    { name: "UI/UX Designing", price: "$50/hr" },
    { name: "Wordpress and PHP", price: "$15/hr" },
    { name: "AI/Machine Learning", price: "$45/hr" },
  ];

  const support =[
    "Application Development","UX Designing","Cloud Management","Project Management","Remote Support"
  ]
  return (
    <div className="row x-gap-10 y-gap-30">
    <h4 className="mt-10 text-22 fw-500">Services</h4>
      <div className="d-flex services" >
      <div className="w-360 lg:w-full  d-flex flex-column items-center" style={{marginRight: "20px"}}>
      <div className="px-20 py-30  rounded-4 border-light bg-light-5 shadow-4">
        <div className="text-20  fw-600 text-dark-1 lh-12">
        We Support
        </div>
  
        <div className="row y-gap-20 pt-30">
          {support.map((support) => (
            <div
              className="row y-gap-10 items-center justify-between"
              key={support}
            >
              <div className="col-auto">
                <div className="text-15 ml-10">{support}</div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    
    </div>
    <div className="w-360 lg:w-full d-flex flex-column items-center" >
      <div className="px-20 py-30 rounded-4 border-light bg-light-5 shadow-4">
        <div className="text-20 fw-600 text-dark-1 lh-12">
          Technology Expertise
        </div>

        <div className="row y-gap-20 pt-30">
          {services.map((service) => (
            <div
              className="row y-gap-10 items-center justify-between"
              key={service.name}
            >
              <div className="col-auto">
                <div className="text-15 ml-10">{service.name}</div>
              </div>
              <div className="col-auto">
                <div className="text-14 text-dark-1 fw-600">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  
</div>
</div>
  );
};


export default Services;