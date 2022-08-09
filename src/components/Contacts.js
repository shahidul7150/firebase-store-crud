import React from "react";

import ContactForm from "./ContactForm";
const Contacts = () => {
    const addOrEdit=obj=>{
        // firebaseDb.child('contacts').push(
        //     obj,
        //     err=>{
        //         if(err)
        //         console.log(err)
        //     }
        // )
    }
  return (
    <>
      <div className="">
        <div className="container">
          <h1>Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-7">
          <div>List of contact</div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
