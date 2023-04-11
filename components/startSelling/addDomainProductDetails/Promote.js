import {useState,useEffect} from "react";
import Image from "next/image"

const Promote= () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const divContent = [
        { id: "1",
           heading: "Free Basic",
           content: "Promote your listing for free,At no cost",
           img:"/img/startselling/delivery-truck.png" },
        { id: "2",
        heading: "Featured",
        content: "Be first to sell your listing at $50 Per Month",
        img:"/img/startselling/featured.png"  },
        { id: "3",
        heading: "Editor Choice",
        content: "Be first to sell your listing at $50 Per Month",
        img:"/img/startselling/editor.png" },
      ];
      

    function handleClick(id) {
      setSelectedIndex(id);
    }
  
    useEffect(() => {
      console.log("Selected Index:", selectedIndex);
    }, [selectedIndex]);

  return (
    <>

    <div className="col-xl-8 col-lg-8 mt-30">
    <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
    Describe your Promotion and get in front of buyers looking for similar domains by categorizing and mentioniing the age
      
    </div>
    {/* End register notify */}
    <div className="mb-6 xl:mb-8 mt-20">
    <span className="text-40 fw-600">3</span>
    <span className="text-20 fw-400">/4</span>
</div>
    
    
    <div className="mt-30 d-flex text-center gap-x-2">
    {divContent.map((item,index) => (
        <div key={index} className="border relative py-30 px-30 cursor-pointer" style={{ marginRight: item.id === divContent.length - 1 ? 0 : 20 }} onClick={() =>handleClick(item.id)}>
   
        
        <Image
          width={70}
          height={70}
          src={item.img}
          alt="image"
          
        />
        { selectedIndex === item.id && (
            
            <Image
            width={25}
            height={25}
            src="/img/startselling/check.png"
            alt="image"
            style={{ right: 0, top: 0 }}
            className="absolute rounded-full"
          />
            )}
        
        <div className="text-20 fw-500">{item.heading}</div>
        <div className="text-14 fw-400">{item.content}</div>
        
          </div>
      
       
        ))}
       
       
        </div>
       
        </div>
        {/* End .row */}
     
      
      {/* End .col-xl-7 */}

 
      {/*  */}
    </>
  );
};

export default Promote;
