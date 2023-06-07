import React, { useState } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const initialValues = {
  tableName: "",
  columns: [],
  relationships: [],
};

const handleSubmit = (values) => {
  console.log(values);
};

const dataTypes = [
  "bigint",
  "bigserial",
  "bit",
  "boolean",
  "byte",
  "char",
  "date",
  "double precision",
  "integer",
  "json",
  "money",
  "numeric",
  "real",
  "smallint",
  "text",
  "time",
  "timestamp",
  "uuid",
  "xml",
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

const relationshipTypes = [
  "One To One",
  "One To Many",
  "Many To One",
  "Many To Many",
];

const tableOptions = ["company", "department", "employee", "project"];

const DynamicTableForms = () => {
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(null);

  const handleAddColumn = (arrayHelpers: any) => {
    arrayHelpers.push({ name: "", dataType: "", constraints: [] });
    setSelectedColumnIndex(arrayHelpers.length - 1);
  };

  const handleAddConstraint = (arrayHelpers: any) => {
    if (selectedColumnIndex !== null) {
      arrayHelpers.push("");
    }
  };

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <span>Enter Table Name : </span>
              <InputText
                type="text"
                name="tableName"
                className="p-inputtext-sm"
                value={values.tableName}
                onChange={handleChange}
              />
            </div>

            <FieldArray name="columns">
              {({ push, remove }) => (
                <div>
                  {values.columns.map((column, index) => {
                    return (
                      <div key={index}>
                        <div className="grid">
                          <div className="md:col-3">
                            <InputText
                              type="text"
                              id={`columns[${index}].name`}
                              name={`columns[${index}].name`}
                              placeholder="Enter column Name"
                              value={column.name}
                              className="p-inputtext w-full"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="md:col-3">
                            <Dropdown
                              id={`columns[${index}].dataType`}
                              name={`columns[${index}].dataType`}
                              value={column.dataType}
                              onChange={handleChange}
                              options={dataTypes}
                              placeholder="Select Datatype"
                              className="w-full"
                            />
                          </div>

                          {selectedColumnIndex === index && (
                            <FieldArray
                              name={`columns[${index}].constraints`}
                              render={(arrayHelpers) => (
                                <div>
                                  {values.columns[index].constraints.map(
                                    (constraint, constraintIndex) => (
                                      <div key={constraintIndex}>
                                        
                                        <Dropdown
                                          id={`columns[${index}].constraints[${constraintIndex}]`}
                                          name={`columns[${index}].constraints[${constraintIndex}]`}
                                          value={column.constraints}
                                          onChange={handleChange}
                                          options={SQLconstraints}
                                          placeholder="Select Constraints"
                                          className="w-full"
                                        />
                                        
                                        <Button
                                          type="button"
                                          onClick={() =>
                                            arrayHelpers.remove(constraintIndex)
                                          }
                                        >-</Button>
                                      </div>
                                    )
                                  )}
                                  <Button
                                    type="button"
                                    onClick={() =>
                                      handleAddConstraint(arrayHelpers)
                                    }
                                  >+</Button>
                                </div>
                              )}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>

            <div>
              <Button
                type="button"
                onClick={() => handleAddColumn(values.columns)}
              >
                Add Column
              </Button>

              <br />
              <br />

              <FieldArray name="relationships">
                {({ push, remove }) => (
                  <div>
                    {values.relationships.map((relationship, index) => (
                      <div key={index}>
                        <div className="grid">
                          <div className="md:col-3">
                            <Dropdown
                              id={`relationships[${index}].type`}
                              name={`relationships[${index}].type`}
                              value={relationship.type}
                              options={relationshipTypes}
                              onChange={handleChange}
                              placeholder="Select Relation"
                              className="w-full"
                            />
                          </div>

                          <div className="md:col-3">
                            <Dropdown
                              id={`relationships[${index}].referenceTable`}
                              name={`relationships[${index}].referenceTable`}
                              value={relationship.referenceTable}
                              options={tableOptions}
                              onChange={handleChange}
                              placeholder="Select Relation"
                              className="w-full"
                            />
                          </div>

                          <div className="md:col-3">
                            <InputText
                              type="text"
                              name={`relationships[${index}].sourceColumn`}
                              className="p-inputtext w-full"
                              placeholder="Enter source Column"
                              value={relationship.sourceColumn}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="md:col-3">
                            <InputText
                              type="text"
                              name={`relationships[${index}].referenceColumn`}
                              className="p-inputtext w-full"
                              placeholder="Enter source Column"
                              value={relationship.referenceColumn}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button type="button" onClick={() => push("")}>
                      Add Relationship
                    </Button>
                  </div>
                )}
              </FieldArray>
              <br/>
              <Button type="submit">Create Table</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicTableForms;
