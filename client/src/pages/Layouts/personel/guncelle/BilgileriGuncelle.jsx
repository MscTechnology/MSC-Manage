import {IconButton, styled } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
  SelectField
} from "uniforms-material";
import { bridge as schema } from "./guncelleSchema";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useUpdateUserMutation,
  useGetCitiesQuery,
  useGetDistrictsByCityidLazyQuery,
} from "generated/graphql";
import { toast, ToastContainer } from "react-toastify";
import Grid from "@mui/material/Grid";
import "../personel.css"

function BilgileriGuncelle() {
  const [modelState, setModelState] = useState({});
  const user = useSelector((state) => state.users.user);
  console.log(user)
  const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation(
    {}
  );

  const { data: CitiesData } = useGetCitiesQuery({});

  const [GetDistrictById, { data: districtsByData }] =
    useGetDistrictsByCityidLazyQuery();

  const cities = CitiesData?.cities?.map((city) => {
    return {
      label: city.cityname,
      value: city.id,
    };
  });

  const createDate = new Date().toUTCString();
  const changeDate = new Date().toUTCString();

  const handleSubmit = (model) => {
    updateUserMutation({
      variables: {
        prmUser: model,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.updateUser.resultType === "SUC") {
          toast.success("Bilgiler Güncellendi");
        } else {
          toast.error(res.data.updateUser.messageText);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  useEffect(() => {
    if (modelState.cityid) {
      GetDistrictById({
        variables: {
          prmCityid: modelState.cityid,
        },
      });
    }
    
  }, [modelState.cityid]);
  const districtData = districtsByData?.districts?.map((district) => {
    return {
      label: district.districtname,
      value: district.id,
    };
  });

 
  return (
    <div className="bilgileriguncelle">
      <div className="bilgileriguncelle-title">
        <IconButton
          size="large"
          color="primary"
          component="span"
          as={NavLink}
          to="/personel"
        >
          <ArrowBackIcon />
        </IconButton>
        Update Your Informations
      </div>
      <AutoForm
        schema={schema}
        onSubmit={(model)=>{
          console.log(model)
          delete model.usertypes
          delete model.userfiles
          delete model.usersmovements
          handleSubmit(model)}}
        model={user}
        onChangeModel={(model) => {
          console.log(model)
          setModelState(model);
          // dispatch(setUser(modelState));
        }}
      >

        <Grid
          
          direction="column"
          justifyContent="start"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={6} md={6}>
            <AutoField name={"name"} label="Name: " />
          </Grid>
          <Grid item xs={6} md={6}>
            <AutoField name={"surname"} label="Surname: " />
          </Grid>
          <Grid item xs={6} md={6}>
            <AutoField name={"username"} label="Username: " />
          </Grid>
          <Grid item xs={6} md={6}>
            <AutoField name={"password"} label="Password: " />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <AutoField name={"email"} label="Email: " />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <AutoField name={"phonenumber"} label="Phone Number: " />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"schoolname"} label="School: " />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField
              name={"identificationnumber"}
              label="Identification Number: "
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"adress"} label="Adress: " />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectField
              name={"cityid"}
              label={"City"}
              options={cities ? cities : []}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {
              modelState.cityid && ( <SelectField
                name={"districtsid"}
                label={"Districts"}
                options={districtData ? districtData : []}
              />)
            }
            
           
          </Grid>
        </Grid>
        <HiddenField name="usertypesid" value={user.usertypesid} />
        <HiddenField name="email" value={"kubra"} />
        <HiddenField name="id" value={user.id} />
        <HiddenField name="status"  value={user.status}/>
        <HiddenField name="createuser" value={user.createuser} />
        <HiddenField name="createtime" value={user.createtime} />
      <HiddenField name="changeuser"  value={user.createuser}/>
        {/* <HiddenField name="changetime" value={changeDate} /> */}


        {/* <MSCTableField name="userinfos" columns={["phonenumber","identificationnumber","adress","email","gender","schoolname"]}> 
            <MSCTableRowField name="$">
              <MSCTableCell name="phonenumber" />
              <MSCTableCell name="identificationnumber" />
              <MSCTableCell name="adress" />
              <MSCTableCell name="email" />
              <MSCTableCell name="gender" />
              <MSCTableCell name="schoolname" />
              </MSCTableRowField>
          </MSCTableField> */}

        <div className="btn-2">
          <SubmitField value="Update Informations" label="Save" />
        </div>
      </AutoForm>
      <ToastContainer />
    </div>
  );
}

export default BilgileriGuncelle;