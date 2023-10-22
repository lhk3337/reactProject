import React from "react";
import { useParams } from "react-router-dom";

const EditEventPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EditEventPage</h1>
      <p>{params.eventId}</p>
    </>
  );
};

export default EditEventPage;
