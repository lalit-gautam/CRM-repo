import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
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

const type = ["one to one", "one to many", "many to one", "many to many"];

const referenceTable = [
  "studentTable",
  "employeesTable",
  "usersTable",
  "departmentTable",
];

const initialValues = {
  tableName: "",
  columns: [{ name: "", dataType: "", constraints: [] }],
  relationships: [
    { type: "", referenceTable: "", sourceColumn: "", referenceColumn: "" },
  ],
};

const handleSubmit = (value) => {
  console.log(value);
};

export default function FormikDataTable() {
//   const handleAddColumn = (arrayHelpers: any) => {
//     console.log("new column created");
//     arrayHelpers.push({
//       name: "",
//       dataType: "",
//       constraints: [],
//     });
//   };

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

            <FieldArray
              name="columns"
              render={(arrayHelpers) => (
                <>
                  {values.columns.map((column, index) => {
                    return (
                      <div key={index}>
                        <div className="grid">
                          <div className="md:col-3">
                            <InputText
                              name={`columns.${index}.name`}
                              type="text"
                              placeholder="Enter Column Name"
                              value={column.name}
                              className="p-inputtext w-full"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="md:col-3">
                            <Dropdown
                              name={`columns.${index}.dataType`}
                              value={column.dataType}
                              onChange={handleChange}
                              options={SQLdataTypes}
                              placeholder="Select Datatype"
                              className="w-full"
                            />
                          </div>

                          <div className="md:col-3">
                            <Dropdown
                              name={`columns.${index}.constraints`}
                              value={column.constraints}
                              onChange={handleChange}
                              options={SQLconstraints}
                              placeholder="Select Constraints"
                              className="w-full"
                            />
                            
                          </div>
                          
                        </div>
                      </div>
                    );
                  })}
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        name: "",
                        dataType: "",
                        constraints: [],
                      })
                    }
                  >
                    Add Column
                  </Button>
                </>
              )}
            />

            <FieldArray
              name="relationships"
              render={(arrayHelpers) => (
                <>
                  {values.relationships.map((relationship, index) => (
                    <div key={index}>
                      <div className="grid">
                        <div className="md:col-3">
                          <Dropdown
                            name={`relationships.${index}.type`}
                            value={relationship.type}
                            options={type}
                            onChange={handleChange}
                            placeholder="Select Relation"
                            className="w-full"
                          />
                        </div>

                        <div className="md:col-3">
                          <Dropdown
                            name={`relationships.${index}.referenceTable`}
                            value={relationship.referenceTable}
                            onChange={handleChange}
                            options={referenceTable}
                            placeholder="Select ReferenceTable"
                            className="w-full"
                          />
                        </div>

                        <div className="md:col-3">
                          <InputText
                            type="text"
                            name={`relationships.${index}.sourceColumn`}
                            className="p-inputtext w-full"
                            placeholder="Enter Source Column"
                            value={relationship.sourceColumn}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-3">
                          <InputText
                            type="text"
                            name={`relationships.${index}.referenceColumn`}
                            className="p-inputtext w-full"
                            placeholder="Enter Reference Column"
                            value={relationship.referenceColumn}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: "",
                        referenceTable: "",
                        sourceColumn: "",
                        referenceColumn: "",
                      })
                    }
                  >
                    Add RelationShip
                  </Button>
                </>
              )}
            />

            <br />

            <Button type="submit">Create Table</Button>

          </Form>
        )}
      </Formik>
    </div>
  );
}
