export class Column {
    name ?: string;
    dataType ?: string;
    constraints ?: string[];
}

export class Relationship {
    type ?: string;
    referenceTable ?: string;
    sourceColumn ?: string;
    referenceColumn ?: string;
}

export class EmployeeTable {
    tableName ?: string;
    columns ?: Column[];
    relationships ?: Relationship[];
}