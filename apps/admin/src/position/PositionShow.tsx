import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POSITION_TITLE_FIELD } from "./PositionTitle";

export const PositionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="Priority" source="priority" />
        <TextField label="Recruiter" source="recruiter" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Vacancies" source="vacancies" />
        <ReferenceManyField
          reference="Applicant"
          target="positionId"
          label="Applicants"
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
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
