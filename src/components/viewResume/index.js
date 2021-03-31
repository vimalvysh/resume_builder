import React, { useContext } from "react";
import { Card, CardHeader } from "reactstrap";
// Context.
import { AppContext } from "..";

const Index = () => {
  const { formData } = useContext(AppContext);
  return (
    <div className="view_resume">
      <div className="left_side">
        <Card body className="mr-2 h-100">
          <div className="label ">
            <div className="underline"> Name </div> <span className="personal_info"> {formData?.name ?? ""} </span>
          </div>
          <div className="label">
            <div className="underline"> Phone </div> <span className="personal_info">{formData?.phoneNum ?? ""}</span>
          </div>
          <div className="label">
            <div className="underline"> Email </div> <span className="personal_info">{formData?.email ?? ""}</span>
          </div>
          <div className="label">
            <div className="underline"> Adress </div>
            <span className="personal_info"> {formData?.address ?? ""}</span>{" "}
          </div>
          <div className="label">
            <div className="underline"> Skill </div> <span className="personal_info">{formData.skill && formData.skill.map((el) => `${el},`)}</span>
          </div>
        </Card>
      </div>

      <div className="right_side">
        <CardHeader>
          <h4>Education information</h4>
        </CardHeader>
        <Card body className="mt-1">
          {formData.educationInformation.map((el) => (
            <div className="education_info personal_info">
              <div>{el.institution}</div>
              <div>
                {el.degree}
                <div className="text-muted year text-right "> {el.year}</div>
              </div>
            </div>
          ))}
        </Card>
        <CardHeader className="mt-4">
          <h4>Experience information</h4>
        </CardHeader>
        <Card body className="mt-1">
          {formData.experienceInformation.map((el) => (
            <div className="education_info personal_info">
              <div>{el.company}</div>
              <div>
                {el.designation}
                <div className="text-muted year text-right "> {el.year}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default Index;
