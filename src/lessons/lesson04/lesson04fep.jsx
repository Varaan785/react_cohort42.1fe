import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson_04() {

    const showName = () => {

    }
    return (
      <div className="page-wrapper">
        {/* <Modal>
          <div className="modal-example-container">
            <h3>Some Title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <Button name="Close Modal" />
          </div>
        </Modal> */}
        <button id="show-name-button">Show User Name</button>
        <div class></div><Button/>
        <Button/>
        <Button/>
      </div>
    );
  }

export default Lesson_04;