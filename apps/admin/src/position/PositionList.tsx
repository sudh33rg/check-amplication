import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PositionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Positions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="Priority" source="priority" />
        <TextField label="Recruiter" source="recruiter" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Vacancies" source="vacancies" />{" "}
      </Datagrid>
    </List>
  );
};
