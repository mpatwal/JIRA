import React from "react";
import { CCard, CCardBody, CCardHeader, CRow, CCol } from "@coreui/react";

const DashboardUI = ({ data }) => {
  // Show loading or fallback if data is not yet loaded
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CCard>
          <CCardHeader>User Role</CCardHeader>
          <CCardBody>{data.role}</CCardBody>
        </CCard>
      </CCol>
      {data.metrics &&
        Object.entries(data.metrics).map(([key, value]) => (
          <CCol sm={6} lg={3} key={key}>
            <CCard>
              <CCardHeader>{key}</CCardHeader>
              <CCardBody>{value}</CCardBody>
            </CCard>
          </CCol>
        ))}
    </CRow>
  );
};

export default DashboardUI;
