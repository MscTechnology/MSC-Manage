import { useGetUserTypesQuery , useAddUserMutation, } from "generated/graphql";
import React from "react";
import {
  AutoForm,
  SelectField,
  AutoField,
  HiddenField,
  SubmitField,
  ErrorsField,
} from "uniforms-material";
import { bridge as schema } from "./Schema";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "../../../../../styles.css"
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useSelector} from "react-redux";
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

const PersonelEkle = () => {
  const { data, loading, error } = useGetUserTypesQuery();

  const [addUserMutation] = useAddUserMutation();
  
  const user = useSelector((state) => state.users.user);

  if(loading){
    return <Loading />
  }

  if(error){
    return <NoMatch/>
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
    }).then((res)=>{
      if(res.data.addUser.resultType==="SUC"){
        toast.success("Personel Eklendi");

      }else{
        toast.error(res.data.addUser.messageText);
      }
    }).catch((err)=>{
      toast.error(err);
    });
  };

  const createDate = new Date().toUTCString();

  return (
    <div className="Addpersonel-page">
      <h1 className="personel-ekle-title"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/admin">
        <ArrowBackIcon />
      </IconButton>Add Personel </h1>
      <div>
        <AutoForm schema={schema} onSubmit={handleSubmit} >
          <ErrorsField />
          <HiddenField name="id" value={0} />
          <AutoField name="name" label="Name*" />
          <AutoField name={"surname"} label="Surname*"/>
          <AutoField name={"username"} label="Username*"/>
          <AutoField name={"password"} label="Password*"/>
          <SelectField
            name={"usertypesid"}
            label="Select User Type*"
            options={userTypeData}
          />
          <HiddenField name="createuser" value={user.id} />
          <HiddenField name="createtime" value={createDate} />
          <HiddenField name="changeuser"  value={user.id}/>
          <HiddenField name="changetime" value={null} />
          <HiddenField name="status" value={1} />

          <div className="personel-ekle-buttons">
           
              <SubmitField value="Submit"label="Add"/>
           
          </div>
        </AutoForm>

        <ToastContainer />
      </div>
    </div>
  );
};

export default PersonelEkle;
