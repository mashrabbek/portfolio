import React from "react";
import {
  Card,
  CardBody,
  Badge,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { toast } from "react-nextjs-toast";

import { Fade } from "react-reveal";
import axios from "axios";

const BACKEND_SERVICE_URL =
  "https://m8fy24e5zh.execute-api.us-east-1.amazonaws.com/dev";

const initialState = {
  messageTitle: "",
  message: "",
  email: "",
  phone: "",
  guestName: "",
};

const FormCard = () => {
  const [state, setState] = React.useState(initialState);

  function handleChange(e) {
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    //let formData = new FormData();

    // for (let [key, value] of Object.entries(state)) {
    //   formData.append(key, value);
    // }

    console.log(state);
    // Use fetch or axios to submit the form
    await axios
      .post(`${BACKEND_SERVICE_URL}/send-form`, state, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        console.log({ res: data });
        toast.notify(`Successfully sent`);
        setState({ ...initialState });
      })
      .catch((e) => {
        console.error(e);
        toast.notify(`Oops, something went wrong`, {
          duration: 5,
          type: "error",
        });
        //window.location.href = e.response.data.redirect;
      });
  }
  return (
    <div>
      <Fade bottom duration={2000}>
        <Card className="card-lift--hover shadow mt-4">
          <CardBody>
            <Form className="container" onSubmit={handleSubmit}>
              <div className="row">
                <FormGroup className="col">
                  <Label>Message Title</Label>
                  <Input
                    type="text"
                    name="messageTitle"
                    onChange={handleChange}
                    value={state.messageTitle}
                    required
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label>Guest Name</Label>
                  <Input
                    type="text"
                    name="guestName"
                    placeholder=""
                    onChange={handleChange}
                    value={state.guestName}
                    required
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={state.email}
                    required
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label>Phone</Label>
                  <Input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value={state.phone}
                    pattern="^[0-9]{3}[0-9]{3}[0-9]{4}$"
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col">
                  <Label>Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    onChange={handleChange}
                    value={state.message}
                  />
                </FormGroup>
              </div>
              <Button type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Fade>
    </div>
  );
};

export default FormCard;
