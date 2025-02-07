import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";

export const PositionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="applicants" reference="Applicant">
          <SelectArrayInput
            optionText={ApplicantTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <TextInput label="Notes" source="notes" />
        <TextInput label="Priority" source="priority" />
        <TextInput label="Recruiter" source="recruiter" />
        <TextInput label="Status" source="status" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Vacancies" source="vacancies" />
      </SimpleForm>
    </Create>
  );
};
