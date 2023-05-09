import React from "react";

const WhatsAppButton = (props) => {
  const phoneNumber = "+972567813568";

  const handleClick = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <button onClick={handleClick} className="btn btn-outline-warning">{props.title}</button>
  );
};

export default WhatsAppButton;
