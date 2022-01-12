import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";

//Modal for Help option
export default function HikePictureModal(props) {
  const [open, setOpen] = React.useState(false);
  console.log("props from hikePicture modal", props)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
           props.data[0]
      }
    >
      <Modal.Content image>
        <Image wrapped />
        <Modal.Description>
          <div id="HikeModalDesc">
            <h4>Testing</h4>              
            </div>
          {/* <!-- end stats--> */}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
