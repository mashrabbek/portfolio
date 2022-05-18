import React from "react";

//import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
//import { Fade } from "react-reveal";
import FormCard from "../components/FormCard";

const Form = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Contact me</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          <FormCard />
        </Row>
      </Container>
    </section>
  );
};

export default Form;
