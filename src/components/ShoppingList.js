import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {v4} from 'uuid';

class ShoppingList extends Component {
    
    state = {
        items: [
            {id: v4(), name: 'Eggs'},
            { id: v4(), name: 'Milk' },
            { id: v4(), name: 'Steak' },
            { id: v4(), name: 'Water' }
        ]
    }
    
    render() {
        const {items} = this.state; // DESTRUCTURING STATE TO GET ITEMS
        return (
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state => ({
                                items: [...state.items, {id: v4(), name}]
                            }));
                        }
                    }}
                >
                    Add Item
                </Button>
                <ListGroup>
                    {/* USE TRANSITION GROUP FROM CSS TRANSITION GROUPS TO WRAP ITEMS */}
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id != id)
                                            }));
                                        }}
                                    >
                                     x   
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;
