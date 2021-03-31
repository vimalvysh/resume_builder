import React, { createContext, useState } from "react";
import "./index.css";

// Component.
import Tabs from "./Tabs";

import ViewResume from "./viewResume";

export const AppContext = createContext();

const initialDsEducationInfo = { year: "", institution: "", degree: "" };
const initialDsExperienceInfo = { year: "", company: "", designation: "" };

const Index = () => {
  const [formData, setFormData] = useState({
    educationInformation: [{ ...initialDsEducationInfo }],
    experienceInformation: [{ ...initialDsExperienceInfo }],
  });
  // funtions.
  // funtion t handle input field values change.
  const handlePersonalFieldChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // function to handle input of educational information.
  const handleEducExpChange = (e, index, field, fromPage) => {
    let formDataKey = null;
    if (fromPage === "education") {
      formDataKey = "educationInformation";
    } else if (fromPage === "experience") {
      formDataKey = "experienceInformation";
    }
    let tempObj = formData[formDataKey];
    tempObj[index][field] = e.target.value;
    setFormData({
      ...formData,
      [formDataKey]: tempObj,
    });
  };

  // funtion add fields to education & experience.
  const handleAddFields = (fromPage) => {
    const { formDataKey, initialDs } = handleFromPage(fromPage);
    console.log("initialDs", initialDs);
    setFormData({
      ...formData,
      [formDataKey]: [...formData[formDataKey], initialDs],
    });
  };

  // funtion to remove fields form education & experience.
  const handleRemoveFields = (fromPage, index) => {
    const { formDataKey } = handleFromPage(fromPage);
    let tempArr = formData[formDataKey];
    tempArr.splice(index, 1);
    setFormData({
      ...formData,
      [formDataKey]: tempArr,
    });
  };

  const handleFromPage = (fromPage) => {
    let formDataKey = null;
    let initialDs = null;
    if (fromPage === "education") {
      formDataKey = "educationInformation";
      initialDs = { ...initialDsEducationInfo };
    } else if (fromPage === "experience") {
      formDataKey = "experienceInformation";
      initialDs = { ...initialDsExperienceInfo };
    }
    return { formDataKey, initialDs };
  };

  console.log("formData", formData);
  return (
    <div className="home">
      <AppContext.Provider value={{ handlePersonalFieldChanges, handleEducExpChange, handleAddFields, handleRemoveFields, formData }}>
        <Tabs></Tabs>
        <ViewResume></ViewResume>
      </AppContext.Provider>
    </div>
  );
};

export default Index;
