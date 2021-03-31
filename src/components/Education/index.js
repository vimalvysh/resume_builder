import React, { useContext } from "react";
import { Card, CardHeader, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
// Context.
import { AppContext } from "../";

const Index = ({ children, ...props }) => {
  const fromPage = "education";
  const { handleEducExpChange, handleAddFields, handleRemoveFields, formData } = useContext(AppContext);

  return (
    <>
      <div className="education">
        <CardHeader>
          <h4>Educatiuonal Information</h4>
        </CardHeader>
        <Card body>
          <Form>
            {formData.educationInformation.map((el, i) => (
              <Row form>
                <Col md={5}>
                  <FormGroup>
                    <Label for="exampleEmail">Institution</Label>
                    <Input
                      type="text"
                      name="institution"
                      onChange={(e) => handleEducExpChange(e, i, "institution", fromPage)}
                      value={formData.educationInformation[i].institution}
                    />
                  </FormGroup>
                </Col>

                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Degree</Label>
                    <Input
                      type="text"
                      name="degree"
                      onChange={(e) => handleEducExpChange(e, i, "degree", fromPage)}
                      value={formData.educationInformation[i].degree}
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
                      value={formData.educationInformation[i].year}
                    />
                  </FormGroup>
                </Col>
                <Col md={2} style={{ marginTop: "30px" }}>
                  <div className="d-flex">
                    {i === formData.educationInformation.length - 1 && (
                      <Button color="info" className="mr-2" onClick={() => handleAddFields(fromPage)}>
                        +
                      </Button>
                    )}
                    {i > 0 && (
                      <Button color="danger" onClick={() => handleRemoveFields(fromPage, i)}>
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
      {children}
    </>
  );
};

export default Index;
