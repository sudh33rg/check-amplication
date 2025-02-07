import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
      </SimpleForm>
    </Create>
  );
};
