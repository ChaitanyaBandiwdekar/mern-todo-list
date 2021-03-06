import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ToDoList extends Component {
    
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;

        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="todo-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={250} classNames="fade">
                                <ListGroupItem className='task' style={{borderRadius: "0.5rem", marginBottom: "0.5rem"}}>
                                    <Button
                                        outline
                                        className="remove-btn"
                                        color="success"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                        ✓
                                    </Button>
                                    <h6>{name}</h6>
                                    {/* <p>12:00</p>      
                                    {true?<p className="important">Important</p>:<p></p>}                               */}
                                    
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ToDoList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ToDoList);