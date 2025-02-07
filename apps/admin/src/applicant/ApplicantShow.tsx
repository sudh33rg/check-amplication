import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPLICANT_TITLE_FIELD } from "./ApplicantTitle";
import { POSITION_TITLE_FIELD } from "../position/PositionTitle";

export const ApplicantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Interview"
          target="applicantId"
          label="Interviews"
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
            <TextField label="Rating" source="rating" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
