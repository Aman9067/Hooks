import React, { useRef } from 'react';

const RegistrationForm = () => {
  const studentNameRef = useRef(null);
  const addressRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  


  const handleClick = () => {
    studentNameRef.current.focus();
  };

  return (
    <div>
      <div>
        <form>
          <label>Student Name</label>
          <input ref={studentNameRef} type="text" />

          <label>Address</label>
          <input ref={addressRef} type="text" />

          <label>Mobile No</label>
          <input ref={mobileRef} type="number" />

          <label>Email</label>
          <input ref={emailRef} type="email" />

          <button type="button" onClick={handleClick}>
      
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;