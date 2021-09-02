function Modal(props) {

    console.log("props from modal",props);

    return(
        <div className="modal">
            <p>Are you sure you want to delete this task?</p>
            <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
            <button className="btn" onClick={props.onConfirm}>Confirm</button>
        </div>
    )
}

export default Modal;