import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import cardImage from "../../images/card.jpg";

const ServiceCard = () => {
  return (
    <CRow xs={{ cols: 3, gutter: 4 }} md={{ cols: 3 }}>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={cardImage} />
          <CCardBody>
            <CCardTitle>Eductation Sign Up</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CCardText>
          </CCardBody>
          <CButton href="/login">Go somewhere</CButton>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={cardImage} />
          <CCardBody>
            <CCardTitle>Medical Sign Up</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CCardText>
          </CCardBody>
          <CButton href="/login">Go somewhere</CButton>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ServiceCard;
