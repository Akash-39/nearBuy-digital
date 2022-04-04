import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        style={{ width: "700px", height: "32px" }}
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      />
      <Button
        type="submit"
        variant="outline-success"
        className="p-1 mr-2"
        // inline
        style={{ marginLeft: "20px" }}
      >
        <i class="fas fa-search"></i> &nbsp; Search
      </Button>
    </Form>
  );
};

export default SearchBox;
