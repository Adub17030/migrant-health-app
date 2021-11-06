import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBox,
} from 'mdbreact';
import Table from '../Table/table';
import { list } from '@chakra-ui/styled-system';

class ModalPage extends Component {
  state = {
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBContainer>
          <h1
            style={{
              fontSize: 60,
              marginBottom: 30,
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            Refugee Health Identities
          </h1>
        </MDBContainer>
        <Table />
        <MDBBox display="flex" justifyContent="center">
          <MDBBtn color="primary" onClick={this.toggle(4)}>
            View Selected Record
          </MDBBtn>
        </MDBBox>

        <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="lg">
          <MDBModalHeader toggle={this.toggle(4)}>
            Health record (Id: 1)
          </MDBModalHeader>
          <MDBModalBody>
            <list>
              <li>Name: Amir Hussein</li>
              <li>Country of Origin: Syria</li>
              <li>Sex: Male</li>
              <li>Age: 19</li>
              <li>Height: 5'10</li>
              <li>Weight: 150</li>
              <li>Blood Type: O</li>
              <li>Immunizations: n/a</li>
              <li>Allergies: Nuts</li>
              <li>Medications: Insulin</li>
              <li>Surgical History: None</li>

              <li>Vaccination Record: Satisfied</li>
              <li>Family: Satisfied</li>

              <li>
                <a style={{ textDecorationLine: 'underline', color: 'blue' }}>
                  Link to Health Record
                </a>
              </li>
            </list>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(4)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBBox display="flex" justifyContent="center">
          <MDBBtn color="secondary">
            <a href="https://forms.gle/nDP4wcnTf6AajmFM7">
              Create Refugee Health Identity
            </a>
          </MDBBtn>
        </MDBBox>
      </MDBContainer>
    );
  }
}

export default ModalPage;
