import{useState } from "react"
import  Image  from "next/image"

const DeploymentDetails = () => {
    const [stackValue, setStackValue] = useState("Mean Stack");
    const handleStackvalueChange = (value) => {
      setStackValue(value);
    };
  
    const stackoptions = ["React.js","Dot.Net","Angular","Mongo DB","Express"]

    const images = [
      {
        icon: "/img/servers/node-js.svg",
      },
      { icon: "/img/servers/node-js.svg",
      },
      { icon: "/img/servers/node-js.svg", 
      },
      {icon: "/img/servers/node-js.svg",
    }
    ];

    return(
        <div className="rounded-4 bg-white shadow-3">
        <h5 className="text-16 fw-500 mt-20 mb-15">Configuration</h5>
        <div className="row">
        <div className="col-6">
            <div className="single-field">
                <input className="col-12 bg-white h-50 border" placeholder="Google.com" type="text" />
            </div>
        </div>
        
    </div>
    <div className="col-auto">
    <h5 className="text-16 fw-500 mt-30 mb-15">Select Stack</h5>
    <div className="dropdown js-dropdown js-amenities-active">
      <div
        className="drop_pitch d-flex items-center text-14 rounded-80 border-light px-15 h-34"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <h2 className="text-16 fw-500 text-light-1">{stackValue}</h2>
        <i className="icon icon-chevron-sm-down text-7" />
      </div>
      {/* End dropdown__button */}

      <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
        <div className="text-15 y-gap-15 js-dropdown-list">

        {stackoptions.map((item, index) => (
          <div key={index}>
              <button className={`${
                item === stackValue? "text-blue-1 " : ""
              }d-block js-dropdown-link`}
              onClick={() => handleStackvalueChange(item)}
              >
          {item}
              </button>
              </div>
              ))}
        
        </div>
      </div>
      {/* End dropdown-menu */}
    </div>
    {/* End dropdown */}
  </div>
  <div className="flex-container mt-30 image-container">
  
  {images.map((item) => (
    <div className="rounded stack bg-light-2">
     
        <Image  width={60} height={60} src={item.icon} alt="image" />
     
    </div>
  ))}
</div>
  <h5 className="text-16 fw-500 mt-30 mb-15">DataBase Version</h5>
  <div className="row">
  <div className="col-6">
      <div className="single-field">
          <input className="col-12 bg-white h-50 border" placeholder="2.5.3" type="text" />
      </div>
  </div>
  
</div>

    <h5 className="text-16 fw-500 mt-20 mb-15">Choose source URL</h5>
    <div className="d-flex justify-between items-center mb-20">
    <div className="col-md-6">
    <div className="single-field">
    <input className="col-12 bg-white h-50 border" placeholder="Git Lab/Bit Bucket/Git Hub" type="text" />
</div>
    </div>
    <div className="mr-20">
      <Image
        src="/img/servers/user.png"
        width={15}
        height={15}
        
    
      />
       
      <span className="fw-500  ml-10 text-blue-1">
        Connect Account
      </span>
    </div>
  </div>





  <button className="h-40 px-30 mt-40 ml-20 mb-20 -dark-1 bg-white border-dark-4 text-dark-4">
  Save Deployment Plan
</button>


   <button className="h-40 px-40 mt-40 ml-20 mb-20 -dark-1 bg-dark-4 text-white">
      Build and Deploy
    </button>
      
    
      
      </div>
    )
  };
  
  export default DeploymentDetails;