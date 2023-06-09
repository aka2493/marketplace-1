import {useState} from 'react';
import Image from "next/image"
import InputWithSuggestionsAndTags from "./../../common/InputWithSuggestionsAndTags"


const CategoryandTags= () => {
  const [users, setUsers] = useState([0]);
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  
  const addUser = () => {
   
    if (users.length < 2) { // limit to a maximum of 2 extra users
      setUsers([...users, {}]); // add an empty object to the users array
    } 
    
  };

  const removeUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
   <strong className="text-pink">Important</strong>&nbsp;:&nbsp;For Demo and Credentials the maximum file size is 3GB - please ensure compression has been optimized before uploading
          
        </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        <span className="text-40 fw-600">3</span>
        <span className="text-20 fw-400">/4</span>
    </div>
        
      
          <div className="col-md-8">
          <span>
          <h2 className="text-18 fw-500 mt-20 mb-2">Demo/Live Preview URL</h2>
        <h6 className="text-15 fw-normal  text-light-1">Link to a live preview on your own hosting i.e https://my-sitecom/demo/</h6> 
          </span>
          </div>
          {users.map((user, index) => (
            <div key={index}>
         <div className="border mt-20 mb-20" style={{ padding: "36px" }}>
     
          <div className="row">
                  <div className="col-md-4">
                  <h2 className="text-16 fw-600 mt-10 mb-20">Type of user (Optional)</h2>
                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">user</label>
                  </div>
                </div>
                {/* End col-12 */}
          
                <div className="col-md-8">
                <h2 className="text-16 fw-600 mt-10 mb-20">Demo/Live Preview URL</h2>
                <div className="form-input ">
                  <input type="text" required />
                  <label className="lh-1 text-16 text-light-1">
                   url
                  </label>
                </div>
              </div>
                 
              </div>  
              <h2 className="text-16 fw-600 justify-center text-center align-content-center mt-20 mb-20">Enter your Template Login Username and Password(Optional)</h2>
              <div className="row">
                  <div className="col-md-6">
                  
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Username</label>
                  </div>
                </div>
                {/* End col-12 */}
          
                <div className="col-md-6 mb-9">
                
                <div className="form-input ">
                  <input type="text" required />
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
          {index === 1 &&  (
            
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
          </div> ))}

      {/* End .col-xl-7 */}

      <div className="col-md-8">
          
          <h2 className="text-18 mb-10 fw-500 mt-30">Enter Tags</h2>
          </div>
     
        <h6 className="text-15 col-md-12 mb-30 fw-normal text-light-1">Maximum of 15 keywords covering features,usage and styling.Keywords should all be in lowercase and separated by commas.&nbsp;e.g.&nbsp;photography,gallery,jquery.</h6> 
     
   
   
   <InputWithSuggestionsAndTags/>

 </div>
      {/*  */}
    

    </>
  );
};

export default CategoryandTags;
