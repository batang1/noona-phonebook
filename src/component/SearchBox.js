import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    const searchByName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_NAME", payload: { keyword } });
    };

    return (
        <Form onSubmit={searchByName}>
            <Row>
                <Col lg={10}>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요."
                        onChange={(event) => setKeyword(event.target.value)}
                    />
                </Col>
                <Col lg={2}>
                    <Button type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;
