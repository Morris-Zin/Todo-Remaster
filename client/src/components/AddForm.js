import React, { useState } from "react";
import ModalForm from "./ModalForm";

const AddForm = () => {
  const [modalShow, setModalShow] = useState(false);

  const show = () => {
    setModalShow(true);
  };

  const hide = () => {
    setModalShow(false);
  };
  return (
    <>
      <button className="btn right-2 bottom-2 md:btn md:right-12 bottom-8 " onClick={show}>
        +
      </button>
      <ModalForm modalShow={modalShow} hide={hide} />
    </>
  );
};

export default AddForm;
