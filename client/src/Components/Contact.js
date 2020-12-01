import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteContact, getContact } from "../JS/actions/contacts";
import { toggleTrue } from "../JS/actions/edit";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{contact.name}</Card.Header>
            <Card.Meta>{contact.email}</Card.Meta>
            <Card.Description>
              <strong>{contact.Phone}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Link to={`/edit/${contact._id}`}>
                <Button
                  basic
                  color="green"
                  onClick={
                    (() => dispatch(getContact(contact._id)),
                    dispatch(toggleTrue()))
                  }
                >
                  EDIT
                </Button>{" "}
              </Link>
              <Button
                basic
                color="red"
                onClick={() => dispatch(deleteContact(contact._id))}
              >
                DELETE BOUTON
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};
export default Contact;
