import React from 'react';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';

export default function Dashboard() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Country of Origin',
        field: 'coo',
        width: 270,
      },
      {
        label: 'Sex',
        field: 'sex',
        width: 200,
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Health Records',
        field: 'healthrecord',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'Amir Hussein',
        coo: 'Syria',
        sex: 'Male',
        age: '19',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
      {
        name: 'Beckham Anan',
        coo: 'Portugal',
        sex: 'Male',
        age: '15',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
      {
        name: 'Alejandra Montilla',
        coo: 'Venezuela',
        sex: 'Female',
        age: '42',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
      {
        name: 'Peter Chuol',
        coo: 'Somalia',
        sex: 'Male',
        age: '32',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
      {
        name: 'Sahra Jelle',
        coo: 'Somalia',
        sex: 'Female',
        age: '65',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
      {
        name: 'Ahmad Reshad',
        coo: 'Somalia',
        sex: 'Male',
        age: '40',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
      {
        name: 'Asad Abdi',
        coo: 'Somalia',
        sex: 'Male',
        age: '40',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
      {
        name: 'Ahmad Reshad',
        coo: 'Syria',
        sex: 'Female',
        age: '30',
        healthrecord: (
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              Select
            </label>
          </div>
        ),
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
    />
  );
}
