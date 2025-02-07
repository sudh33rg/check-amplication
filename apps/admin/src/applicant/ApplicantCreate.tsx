import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InterviewTitle } from "../interview/InterviewTitle";
import { PositionTitle } from "../position/PositionTitle";

export const ApplicantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <ReferenceArrayInput source="interviews" reference="Interview">
          <SelectArrayInput
            optionText={InterviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <ReferenceInput
          source="position.id"
          reference="Position"
          label="Position"
        >
          <SelectInput optionText={PositionTitle} />
        </ReferenceInput>
        <TextInput label="Resume" source="resume" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
