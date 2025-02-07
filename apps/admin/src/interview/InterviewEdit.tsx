import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="applicant.id"
          reference="Applicant"
          label="Applicant"
        >
          <SelectInput optionText={ApplicantTitle} />
        </ReferenceInput>
        <TextInput label="Feedback" source="feedback" />
        <NumberInput step={1} label="Level" source="level" />
        <NumberInput step={1} label="Rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
