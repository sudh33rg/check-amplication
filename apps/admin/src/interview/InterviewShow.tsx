import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPLICANT_TITLE_FIELD } from "../applicant/ApplicantTitle";

export const InterviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
