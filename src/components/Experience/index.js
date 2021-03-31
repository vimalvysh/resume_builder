import React, { useContext } from "react";
import { Card, CardHeader, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
// Context.
import { AppContext } from "../";
const Index = () => {
  const fromPage = "experience";

  const { handleEducExpChange, handleAddFields, handleRemoveFields, formData } = useContext(AppContext);

  return (
    <div className="experience mt-2">
      <CardHeader>
        <h4>Educatiuonal Information</h4>
      </CardHeader>
      <Card body>
        <Form>
          {formData.experienceInformation.map((el, i) => (
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleEmail">Company</Label>
                  <Input
                    type="text"
                    name="company"
                    onChange={(e) => handleEducExpChange(e, i, "company", fromPage)}
                    value={formData.experienceInformation[i].company}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleEmail">Designation</Label>
                  <Input
                    type="text"
                    name="designation"
                    onChange={(e) => handleEducExpChange(e, i, "designation", fromPage)}
                    value={formData.experienceInformation[i].designation}
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="examplePassword">Year</Label>
                  <Input
                    type="number"
                    name="year"
                    onChange={(e) => handleEducExpChange(e, i, "year", fromPage)}
                    value={formData.experienceInformation[i].year}
                  />
                </FormGroup>
              </Col>
              <Col md={2} style={{ marginTop: "30px" }}>
                <div className="d-flex">
                  {i === formData.experienceInformation.length - 1 && (
                    <Button color="info" className="mr-2" onClick={() => handleAddFields(fromPage)}>
                      +
                    </Button>
                  )}
                  {i > 0 && (
                    <Button className="" color="danger" onClick={() => handleRemoveFields(fromPage, i)}>
                      -
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          ))}

          <Button type="submit" color="success">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
