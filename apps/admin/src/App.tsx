import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PositionList } from "./position/PositionList";
import { PositionCreate } from "./position/PositionCreate";
import { PositionEdit } from "./position/PositionEdit";
import { PositionShow } from "./position/PositionShow";
import { ApplicantList } from "./applicant/ApplicantList";
import { ApplicantCreate } from "./applicant/ApplicantCreate";
import { ApplicantEdit } from "./applicant/ApplicantEdit";
import { ApplicantShow } from "./applicant/ApplicantShow";
import { InterviewList } from "./interview/InterviewList";
import { InterviewCreate } from "./interview/InterviewCreate";
import { InterviewEdit } from "./interview/InterviewEdit";
import { InterviewShow } from "./interview/InterviewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"trackhire"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Position"
          list={PositionList}
          edit={PositionEdit}
          create={PositionCreate}
          show={PositionShow}
        />
        <Resource
          name="Applicant"
          list={ApplicantList}
          edit={ApplicantEdit}
          create={ApplicantCreate}
          show={ApplicantShow}
        />
        <Resource
          name="Interview"
          list={InterviewList}
          edit={InterviewEdit}
          create={InterviewCreate}
          show={InterviewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
