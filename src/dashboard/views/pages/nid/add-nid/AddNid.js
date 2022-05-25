import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from "@coreui/react";
import React, { useRef } from "react";

const AddNid = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <CCard>
      <CCardHeader>Add NID</CCardHeader>
      <CCardBody>
        <CForm className="row g-3" ref={form} onSubmit={handleSubmit}>
          <CCol md={6}>
            <CFormLabel htmlFor="name">Name</CFormLabel>
            <CFormInput type="email" id="name" />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="inputPassword4">Password</CFormLabel>
            <CFormInput type="password" id="inputPassword4" />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
            <CFormInput id="inputAddress" placeholder="1234 Main St" />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="inputAddress2">Address 2</CFormLabel>
            <CFormInput
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="inputCity">City</CFormLabel>
            <CFormInput id="inputCity" />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="inputState">State</CFormLabel>
            <CFormSelect id="inputState">
              <option>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={2}>
            <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
            <CFormInput id="inputZip" />
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
          </CCol>
          <CCol xs={12}>
            <CButton type="submit">Add NID</CButton>
          </CCol>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AddNid;
