import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICANT_TITLE_FIELD } from "../applicant/ApplicantTitle";

export const InterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Interviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Applicant"
          source="applicant.id"
          reference="Applicant"
        >
          <TextField source={APPLICANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Feedback" source="feedback" />
        <TextField label="ID" source="id" />
        <TextField label="Level" source="level" />
        <TextField label="Rating" source="rating" />{" "}
      </Datagrid>
    </List>
  );
};
