import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBox,
} from 'mdbreact';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <MDBBox display="flex" justifyContent="center">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Subscribe</p>
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <div style={{ marginTop: 30 }}>
                    <select className="browser-default custom-select">
                      <option>Choose your portal</option>
                      <option value="1">Provider Portal</option>
                      <option value="2">Personal Portal</option>
                    </select>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn btn-outline-purple" type="submit">
                      <Link to="/dashboard">Login</Link>
                      <MDBIcon far icon="sign-in" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBBox>
  );
};

export default Signin;
