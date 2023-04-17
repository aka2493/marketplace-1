import { useState, useEffect } from 'react';
import { Modal,ProgressBar } from 'react-bootstrap';


const ModalProgressBar= ({show, onDismiss}) => {
  const [progress, setProgress] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
 
  
  useEffect(() => {
    let timer = setInterval(() => {
      // Increase progress by 10 every second, up to 100
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 1000);
    

    return () => clearInterval(timer); // Cleanup function to clear the timer when component unmounts
  }, []);

  const handleDeployClick = () => {
    setIsDeploying(true);
    setProgress(0);
  };



  const renderButtons = () => {
    if (isDeploying) {
      return progress === 100 ? (
        <button
        onClick={() => onDismiss("deployed")}
          className="h-40 px-30 mt-20 fw-600 mb-20 -dark-1 bg-white border-dark-4 text-dark-4"
        >
         Done
        </button>
      ) : (
        <button
          onClick={onDismiss}
          className="h-40 px-30 mt-20 fw-600 mb-20 -dark-1 bg-white border-dark-4 text-dark-4"
        >
         Dismiss Deployment
        </button>
      );
    } else {
      return progress === 100 ? (
        <button
       onClick={handleDeployClick}
          className="h-40 px-30 mt-20 fw-600 mb-20 -dark-1 bg-white border-dark-4 text-dark-4"
        >
          Click To Deploy
        </button>
      ) : (
        <button
          onClick={onDismiss}
          className="h-40 px-30 mt-20 fw-600 mb-20 -dark-1 bg-white border-dark-4 text-dark-4"
        >
          Dismiss Build
        </button>
      );
    }
  };
    return(
    <Modal aria-labelledby="contained-modal-title-vcenter"
          centered  show={show}
         >
        <Modal.Header>
        <span>
        {isDeploying ? <h5 className="fw-500 text-20">Deployment</h5> :<h5 className="fw-500 text-20">Build</h5>}
          <h5 className="fw-500 mt-10 text-15 text-light-4">Google.com</h5>
          </span>
          {progress === 100 ?  <h5 className="fw-500 text-16 text-green-3">Completed</h5>: <h5 className="fw-500 text-16 text-green-3">In progress</h5>}
        </Modal.Header>  
        <Modal.Body>
        <ProgressBar animated now={progress} label={`${progress}%`} /></Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          
   
        {renderButtons()}
        </Modal.Footer>
        
     
      </Modal>
      
      
    )
}
export default ModalProgressBar;