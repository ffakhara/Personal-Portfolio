import { useRef } from "react";
import '../styles/Contact.css';
import contactImage from '../assets/contact.gif';

const Contact = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const submitHandler = (e) => {
     e.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(emailInputRef.current.value);
    console.log(descriptionInputRef.current.value)
  };


  return (
    <>
      <section id="contact" className="d-flex flex-column w-100 justify-content-center align-items-center contact-sec">
      <div className=" p-3 contacts">
      <h2 className="m-3">Contact Me!</h2>
      <p className="mb-5">Thanks for taking the time to reach out. How can I help you today?</p>
      </div>
      
       <div className="d-flex justify-content-evenly w-100">
        
          <img className="contact-img" src={contactImage} alt="contact-pic" />
        
        <form action="" onSubmit={submitHandler} className="contact-form">
          <div className="mb-3">
            <label htmlFor='exampleFormControlInput1' className="form-label">Name</label>
            <input
             ref={nameInputRef} type="Name" placeholder="Enter your full name"
            className="form-control"
              id="exampleFormControlInput1" required
            />
          </div>
          <div className="mb-3">
          <label htmlFor='exampleFormControlInput1' className="form-label">Email</label>
            <input
               ref={emailInputRef} type="email" placeholder="Enter your email"
              className="form-control"
              id="exampleFormControlInput1" required
            />
          </div>
          <div className="mb-3">
          <label htmlFor='exampleFormControlTextarea1' className="form-label">Message</label>
            <textarea
              ref={descriptionInputRef} 
              className="form-control"
              placeholder="Enter message here"
              id="exampleFormControlTextarea1"
              rows="5" required
            ></textarea>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
          <input className="btn btn-secondary" type="reset" value="Reset" />
        </form>
      </div>
        </section>


    </>
  );
};

export default Contact;