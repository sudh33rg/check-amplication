import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POSITION_TITLE_FIELD } from "../position/PositionTitle";

export const ApplicantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Applicants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <ReferenceField
          label="Position"
          source="position.id"
          reference="Position"
        >
          <TextField source={POSITION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Resume" source="resume" />
        <TextField label="Status" source="status" />{" "}
      </Datagrid>
    </List>
  );
};
