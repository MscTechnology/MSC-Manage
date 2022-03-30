import { useGetUserTypesQuery , useAddUserMutation, } from "generated/graphql";
import React from "react";
import {
  AutoForm,
  SelectField,
  AutoField,
  HiddenField,
  SubmitField,
  DateField,
  ErrorsField,
} from "uniforms-material";
import { bridge as schema } from "./Schema";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const PersonelEkle = () => {
  const { data, loading, error } = useGetUserTypesQuery();
  const [addUserMutation, {data:dataMutation,loading:loadingMutation}] = useAddUserMutation();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  const userTypeData = data?.usertypes?.map((usertype) => {
    return {
      label: usertype.typename,
      value: usertype.id,
    };
  });
  const handleSubmit = (model) => {
    addUserMutation({
      variables: {
        prmUser: model
      }
    });
    toast.success("Personel Eklendi");
    console.log(model);
  };

  const createDate = new Date().toUTCString();
  const changeDate = new Date().toUTCString();

  return (
    <div className="container">
      <h1 className="admin-title">Personel Ekleme Sayfası </h1>
      <div>
        <AutoForm schema={schema} onSubmit={handleSubmit} onChangeModel={(model)=> console.log(model)}>
          <ErrorsField />
          <HiddenField name="id" value={0} />
          <AutoField name="name" label="* Name" />
          <AutoField name={"surname"} />
          <AutoField name={"username"} />
          <AutoField name={"password"} />
          <SelectField
            name={"usertypesid"}
            label="Select User Type"
            options={userTypeData}
          />
          <HiddenField name="createuser" />
          <HiddenField name="createtime" value={createDate} />
          <HiddenField name="changeuser" />
          <HiddenField name="changetime" value={changeDate} />

          <SubmitField value="Submit" />
        </AutoForm>

        <ToastContainer />
      </div>
    </div>
  );
};

export default PersonelEkle;
