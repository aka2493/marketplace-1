import {useState} from 'react';
import Image from "next/image";
import { Checkbox} from "@nextui-org/react";

const Demo= ({typevalue}) => {
  const [users, setUsers] = useState([{type: '', url: '', username: '', password: ''}]);
  const [selected, setSelected] = useState(-1);

  const options =["Demo Account","Free Trial Account"]

const handleCheckboxChange = (index) => {
  setSelected(index === selected ? -1 : index);
};
 
  const addUser = () => {
    if (users.length < 4) { // limit to a maximum of 2 extra users
      setUsers([...users, {type: '', url: '', username: '', password: ''}]); // add an empty user object to the users array
    }  
  };

  const removeUser = (index) => {
    if (index > 0) { // prevent removal of the first user
      const newUsers = [...users];
      newUsers.splice(index,1);
      setUsers(newUsers);
    }
  };

  const handleUserChange = (index, field, value) => {
    const newUsers = [...users];
    newUsers[index][field] = value;
    setUsers(newUsers);

  };

  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
        By demonstrating your product, you can help potential buyers better understand its features and benefits, and build credibility for your brand.
           </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        {typevalue !== "AI models" ?  <span className="text-40 fw-600">3</span>: <span className="text-40 fw-600">4</span>}
       
        {typevalue !== "AI models" ? <span className="text-20 fw-400">/3</span> : <span className="text-20 fw-400">/4</span>} 
    </div>
   
{options.map((option, index) => (
  <div className ="mt-20" key={index}>
    <Checkbox isSelected={selected === index} color="success" onChange={() => handleCheckboxChange(index)}>
      <label className="text-16 fw-500 text-blue-1">{option}</label>
    </Checkbox>
 
  </div>
))}

{selected === 0 && (
         <div className="mt-40">
          <div className="col-md-8">
          <span>
          <h2 className="text-18 fw-500 mt-30 mb-2">Demo/Live Preview URL</h2>
        <h6 className="text-15 fw-normal  text-light-1">Link to a live preview for your AI product</h6> 
          </span>
          </div>
     
          {users.map((user, index) => (
            <div key={index}>
         <div className="border mt-20 mb-20" style={{ padding: "36px" }}>
     
          <div className="row">
                  <div className="col-md-4">
                  <h2 className="text-16 fw-600 mt-10 mb-20">Type of user (Optional)</h2>
                  <div className="form-input">
                    <input type="text" value={user.type} onChange={(e) => handleUserChange(index, 'type', e.target.value)}/>
                    <label className="lh-1 text-16 text-light-1">user</label>
                  </div>
                </div>
                {/* End col-12 */}
          
                <div className="col-md-8">
                <h2 className="text-16 fw-600 mt-10 mb-20">Demo/Live Preview URL</h2>
                <div className="form-input ">
                  <input type="text" value={user.url} onChange={(e) => handleUserChange(index, 'url', e.target.value)}  />
                  <label className="lh-1 text-16 text-light-1">
                url
                  </label>
                </div>
              </div>
                 
              </div>  
              <h2 className="text-16 fw-600 justify-center text-center align-content-center mt-20 mb-20">Enter your Demo Account Credentials(Optional)</h2>
              <div className="row">
                  <div className="col-md-6">
                  
                  <div className="form-input ">
                    <input type="text" value={user.username} onChange={(e) => handleUserChange(index, 'username', e.target.value)}  />
                    <label className="lh-1 text-16 text-light-1">Username</label>
                  </div>
                </div>
                {/* End col-12 */}
          
                <div className="col-md-6 mb-9">
                
                <div className="form-input ">
                  <input type="text" value={user.password} onChange={(e) => handleUserChange(index, 'password', e.target.value)}  />
                  <label className="lh-1 text-16 text-light-1">
               Password
                  </label>
                </div>
              </div>
                 
              </div>  
              </div> <div  style={{ display: 'flex', alignItems: 'center' }}>
              <h2 className="text-16 text-blue-1 fw-600">Add more users</h2>
       
          <Image
          onClick={()=>addUser()}
          style={{ cursor:"pointer" ,marginLeft: '10px',marginTop: '2px' }}
          width={25}
          height={25}
          src="/img/startselling/plus.png"
          alt="image"
         
        />
        {index !== 0 &&   (
            
            <Image
            onClick={() => removeUser(index)}
            style={{ cursor:"pointer" ,marginLeft: '10px',marginTop: '2px' }}
            width={23}
            height={25}
            src="/img/startselling/minus.png"
            alt="image"
           
          />
            )}
          </div>
          </div> ))}</div>)}
{selected === 1 && (
  <div className="col-md-6 mt-40">
  <h6 className="text-18 fw-500 mb-20">Enter URL</h6>        
  <div className="form-input ">
    <input type="text"   />
   
  </div>
</div>

)}
                   


      {/* End .col-xl-7 */}
</div>
      {/*  */}
  
    </>
  );
};

export default Demo;
