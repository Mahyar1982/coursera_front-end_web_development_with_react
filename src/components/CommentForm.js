import React, { Component } from 'react';
import {Button, Label, Col, Row, Modal, ModalHeader, ModalBody} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: ", JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {

        return (
          <>
              <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-edit fa-lg">Submit Feedback</span>
              </Button>
              <Modal
                  isOpen={this.state.isModalOpen}
                  toggle={this.toggleModal}>
                  <ModalHeader
                      toggle={this.toggleModal}>
                      Submit Feedback
                  </ModalHeader>
                  <ModalBody>
                      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                          <Row className="form-group">
                              <Col>
                                  <Label htmlFor="rating">
                                      Rating
                                  </Label>
                                  <Control.select model=".rating"
                                                  className="form-control"
                                                  name="rating"
                                  >
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                  </Control.select>
                              </Col>
                          </Row>
                          <Row className="form-group">
                              <Col>
                                  <Label htmlFor="author">
                                      Your Name
                                  </Label>
                                  <Control.text model=".author"
                                                id="author"
                                                name ="author"
                                                placeholder="Your Name"
                                                className = "form-control"
                                                validators={{
                                                    required, minLength: minLength(3),
                                                    maxLength: maxLength(15)
                                                }}
                                  />
                                  <Errors
                                      className="text-danger"
                                      model=".author"
                                      show="touched"
                                      messages={{
                                          required: 'Required',
                                          minLength: 'Must be greater than 2 characters',
                                          maxLength: 'Must be 15 characters or less'
                                      }}
                                  />
                              </Col>
                          </Row>
                          <Row className="form-group" md={2}>
                              <Col>
                              <Label htmlFor="comment">
                                  Your Feedback
                              </Label>
                                  <Control.textarea model = ".comment"
                                                    id="comment"
                                                    name ="comment"
                                                    rows="6"
                                                    className="form-control"
                                  />
                              </Col>
                          </Row>
                          <Row className="form-group">
                              <Col md={{size: 10, offset: 2}}>
                                  <Button
                                      type = "submit"
                                      color="primary">
                                      Submit
                                  </Button>
                              </Col>
                          </Row>
                      </LocalForm>
                  </ModalBody>
              </Modal>
          </>
        );
    }
}

export default CommentForm;