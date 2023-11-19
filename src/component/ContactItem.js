import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({item}) => {
    return (
        <Row>
            <Col lg={2}>
                <img
                    width={50}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXxHqLHond94VlxMaccRGbDsQ-VGhuD9jaQ&usqp=CAU"
                />
            </Col>
            <Col lg={10}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    );
};

export default ContactItem;
