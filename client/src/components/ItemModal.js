import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { v4 as uuid } from 'uuid';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        //ADDING ITEM VIA ADDITEM
        this.props.addItem(newItem);

        //CLOSING MODAL
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Task
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to the list
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>

                                <Label for="item">Task</Label>

                                <Input 
                                    type="text" 
                                    name="name"   //SHOULD MATCH THE STATE VALA THING
                                    id="item"
                                    placeholder="Add todo task"
                                    onChange={this.onChange}
                                />

                                <Button
                                    color="success"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add Task
                                </Button>

                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});
    
export default connect(mapStateToProps, { addItem })(ItemModal);