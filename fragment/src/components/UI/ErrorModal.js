import React from "react";
import { createPortal } from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ confirm }) => {
  return <div className={classes.backdrop} onClick={confirm} />;
};

const ModalOverlay = ({ title, message, confirm }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={confirm}>Confirm</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      {createPortal(<Backdrop confirm={onConfirm} />, document.getElementById("backdrop-root"))}
      {createPortal(
        <ModalOverlay title={title} message={message} confirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
