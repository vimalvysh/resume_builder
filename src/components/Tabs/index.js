import { Children, useState } from "react";
import { Button } from "reactstrap";
// Compoents.

import PersonalInfo from "../PersonalInfo";
import Education from "../Education";
import Experience from "../Experience";

const Index = ({ children, ...props }) => {
  const [activeTab, setActiveTab] = useState("personalInformation");

  return (
    <div className="tabs">
      <div className="buttons">
        <div>
          <Button className="" color="success" onClick={() => setActiveTab("personalInformation")}>
            {" "}
            Personal Information{" "}
          </Button>
        </div>
        <div>
          <Button className="" color="info" onClick={() => setActiveTab("educationInformation")}>
            Educational Information{" "}
          </Button>
        </div>
        <div>
          <Button className="" color="warning" onClick={() => setActiveTab("experienceInformation")}>
            Experience Information{" "}
          </Button>
        </div>
      </div>
      {activeTab === "personalInformation" && <PersonalInfo></PersonalInfo>}
      {activeTab === "educationInformation" && <Education></Education>}
      {activeTab === "experienceInformation" && <Experience></Experience>}
    </div>
  );
};

export default Index;
