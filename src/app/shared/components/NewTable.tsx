import { useState } from "react";
import { Column, EmployeeTable, Relationship } from "../Model/BiprosTableModel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const SQLdataTypes = [
  "INTEGER",
  "BIGINT",
  "DECIMAL",
  "FLOAT",
  "CHARACTER",
  "VARCHAR",
  "TEXT",
  "DATE",
  "TIME",
  "DATETIME",
];

const SQLconstraints = [
  "NONE",
  "PRIMARY KEY",
  "FOREIGN KEY",
  "NOT NULL",
  "UNIQUE",
  "CHECK",
  "DEFAULT",
  "INDEX",
];

const relation = {
  type: ["one to one", "one to many", "many to one", "many to many"],
  referenceTable: [
    "studentTable",
    "employeesTable",
    "usersTable",
    "departmentTable",
  ],
  sourceColumn: "",
  referenceColumn: "",
};

export default function DynamicTable() {
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState([]);
  const [relationships, setRelationships] = useState([]);

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      {
        name: "",
        dataType: "",
        constraints: [],
      },
    ]);
  };

  const handleAddRelationship = () => {
    setRelationships([
      ...relationships,
      {
        type: "",
        referenceTable: "",
        sourceColumn: "",
        referenceColumn: "",
      },
    ]);
  };

  const handleColumnNameChange = (index, event) => {
    const newColumns = [...columns];
    newColumns[index].name = event.target.value;
    setColumns(newColumns);
  };

  const handleDataTypeChange = (index, event) => {
    const newColumns = [...columns];
    newColumns[index].dataType = event.target.value;
    setColumns(newColumns);
  };

  const handleConstraintsChange = (index, event) => {
    const newColumns = [...columns];
    newColumns[index].constraints = [event.target.value];
    setColumns(newColumns);
  };

  const handleRelationshipTypeChange = (index, event) => {
    const newRelationships = [...relationships];
    newRelationships[index].type = event.target.value;
    setRelationships(newRelationships);
  };

  const handleReferenceTableChange = (index, event) => {
    const newRelationships = [...relationships];
    newRelationships[index].referenceTable = event.target.value;
    setRelationships(newRelationships);
  };

  const handleSourceColumnChange = (index, event) => {
    const newRelationships = [...relationships];
    newRelationships[index].sourceColumn = event.target.value;
    setRelationships(newRelationships);
  };

  const handleReferenceColumnChange = (index, event) => {
    const newRelationships = [...relationships];
    newRelationships[index].referenceColumn = event.target.value;
    setRelationships(newRelationships);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ tableName, columns, relationships });
    const data = {
      tableName,
      columns,
      relationships,
    };
    localStorage.setItem("myTableData", JSON.stringify(data));
    console.log("Data saved to localStorage:", data);
  };

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <span>Enter Table Name : </span>
        <InputText
          type="text"
          className="p-inputtext-sm"
          value={tableName}
          onChange={(event) => setTableName(event.target.value)}
        />
      </div>
      <div className="md:col-3">
        <Button
          icon="pi pi-plus"
          onClick={handleAddColumn}
          style={{ marginLeft: "1rem" }}
        >
          Add Table Column
        </Button>
      </div>

      <div className="container">
        <p>Table Columns : </p>

        {columns.map((column, index) => {
          return (
            <div key={index}>
              <div className="grid">
                <div className="md:col-3">
                  <InputText
                    type="text"
                    value={column.name}
                    className="p-inputtext w-full"
                    onChange={(event) => handleColumnNameChange(index, event)}
                  />
                </div>
                <div className="md:col-3">
                  <Dropdown
                    value={column.dataType}
                    onChange={(event) => handleDataTypeChange(index, event)}
                    options={SQLdataTypes}
                    optionLabel=""
                    placeholder="Select Datatype"
                    className="w-full"
                  />
                </div>
                <div className="md:col-3">
                  <Dropdown
                    value={column.constraints[0]}
                    onChange={(event) => handleConstraintsChange(index, event)}
                    options={SQLconstraints}
                    optionLabel=""
                    placeholder="Select Constraints"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="md:col-3">
          <Button
            icon="pi pi-plus"
            onClick={handleAddRelationship}
            style={{ marginLeft: "1rem" }}
          >
            Add RelationShip
          </Button>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <span>Relation :</span>
          {relationships.map((relationship, index) => {
            return (
              <div key={index}>
                <div className="grid">
                  <div className="md:col-3">
                    <Dropdown
                      value={relationship.type}
                      onChange={(event) =>
                        handleRelationshipTypeChange(index, event)
                      }
                      options={relation.type}
                      optionLabel=""
                      placeholder="Select Relation"
                      className="w-full"
                    />
                  </div>

                  <div className="md:col-3">
                    <Dropdown
                      value={relationship.referenceTable}
                      onChange={(event) =>
                        handleReferenceTableChange(index, event)
                      }
                      options={relation.referenceTable}
                      optionLabel=""
                      placeholder="Select ReferenceTable"
                      className="w-full"
                    />
                  </div>
                  <div className="md:col-3">
                    <InputText
                      type="text"
                      className="p-inputtext w-full"
                      placeholder="Enter Source Column"
                      value={relationship.sourceColumn}
                      onChange={(event) =>
                        handleSourceColumnChange(index, event)
                      }
                    />
                  </div>
                  <div className="md:col-3">
                    <InputText
                      type="text"
                      className="p-inputtext w-full"
                      placeholder="Enter Reference Column"
                      value={relationship.referenceColumn}
                      onChange={(event) => {
                        handleReferenceColumnChange(index, event);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button className="btn" onClick={handleSubmit}>
          Create Table
        </Button>
      </div>
    </>
  );
}
