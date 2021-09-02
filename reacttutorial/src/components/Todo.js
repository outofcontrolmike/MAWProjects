import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function deleteHandler() {
    setModalIsOpen(true);
  }

  console.log("props",props);
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <p>{props.desc}</p>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
