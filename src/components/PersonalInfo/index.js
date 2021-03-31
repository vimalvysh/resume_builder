import React, { useContext } from "react";
import { Card, CardHeader, Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
// Context.
import { AppContext } from "../";

const Index = (props) => {
  const { handlePersonalFieldChanges } = useContext(AppContext);
  const [tags, setTags] = React.useState([]);
  // function
  // function to handle set tag in FormData
  const handleSetTag = (newTags) => {
    setTags(newTags);
    let tempObj = { target: { name: "skill", value: newTags } };
    handlePersonalFieldChanges(tempObj);
  };
  return (
    <div className="personal_info">
      <CardHeader>
        <h4>Personal Information</h4>
      </CardHeader>
      <Card body>
        <Form>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="name" placeholder="Enter Name" onChange={handlePersonalFieldChanges} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" placeholder="Enter Email" onChange={handlePersonalFieldChanges} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Phone</Label>
                <Input type="text" name="phoneNum" placeholder="Enter Phone number" onChange={handlePersonalFieldChanges} />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="exampleText">Address</Label>
            <Input type="textarea" name="address" onChange={handlePersonalFieldChanges} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Skills</Label>
            {/* <Input type="text" name="skills" onChange={handlePersonalFieldChanges} /> */}
            <ReactTagInput tags={tags} onChange={(newTags) => handleSetTag(newTags)} />
          </FormGroup>
          <Button type="submit" color="success">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
