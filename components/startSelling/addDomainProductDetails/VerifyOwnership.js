import { Grid ,Card,Row} from "@nextui-org/react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import VerifyHtml from "./VerifyOwnership/verifyHtml";
import VerifyTxt from "./VerifyOwnership/verifyTxt";
import VerifyMeta from "./VerifyOwnership/verifyMeta";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const VerifyOwnership= () => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState("card1");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
 
  setShow(true);
  }
  
   const handleClick = () =>{
    router.push("/startlisting")
   }
  const cardContent = [
    { id: "card1",
       title: "Verify using HTML File",
       img:"/img/startselling/files.png" },
    { id: "card2", img:"/img/startselling/txtfile.png" ,title: "Verify using TXT Record" },
    { id: "card3", img:"/img/startselling/meta.png" ,title: "Verify using META Tag" },
  ];
  const renderSection = () => {
    switch (selectedCard) {
      case "card1":
        return <VerifyHtml/>;
      case "card2":
        return  <VerifyTxt/>;
      case "card3":
        return <VerifyMeta/>;
      default:
        return null;
    }
  };

    return (
      <>
      <div className="col-xl-8 col-lg-8 mt-30">
      <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
      Get in front of buyers looking for Domain like your by categorizing it accurately,and letting them know how long the Domain has been live.
        
      </div>
      <div className="mb-6 xl:mb-8 mt-20">
      <span className="text-40 fw-600">4</span>
      <span className="text-20 fw-400">/4</span>
  </div>
  <div className="row x-gap-20 y-gap-20 pt-20 mb-30">
  
    
     <div className="col-md-8 d-flex align-items-start">
       
     <h2 className="text-18 fw-500">We have three methods to verify ownership</h2>
       
       <p className="ms-2">(choose one)</p>
     </div>
         
          <div className="col-md-4 d-flex justify-content-end cursor-pointer "  
          onClick={handleShow} style={{ alignItems: 'center'}}>
         
         
          <Image
          width={20}
          height={2}
          src="/img/startselling/close1.png"
          alt="image"
         
        />
          <h6 className="text-red-1 fw-400 ml-5">Cancel and Exit</h6>
     
          </div>
          <Modal aria-labelledby="contained-modal-title-vcenter"
          centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to cancel and exit?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Remember this action cannot be reversed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClick}>
          Yes, Go to Start Selling
          </Button>
        </Modal.Footer>
      </Modal>

          </div>
        
          <Grid.Container gap={2}>
          {cardContent.map((item,index) => (
           
            <Grid key ={index} xs={4}>
              <Card isPressable className={`px-0 ${
                selectedCard === item.id ? "bg-pink text-white" : ""}`}
                onClick={() => setSelectedCard(item.id)}>
                <Card.Body>
                <Row className="flex-end justify-center align-center items-center text-center">
                
                <Image
          width={25}
          height={25}
          src={item.img}
          alt="image"
          className="ml-8"
         
        />  
                <h6 className="text-16 ml-4 mr-2 fw-500">{item.title}</h6>
                  </Row>
                </Card.Body> 

              </Card>
            </Grid>
      
            ))}
            </Grid.Container>
            <div className="mt-40">{renderSection()}
            </div>

          </div>


          
      </>
    );
  }
  
  export default VerifyOwnership;
  