import { Button, IconButton, styled } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
  SelectField,
  ListItemField,
  ListField,
} from "uniforms-material";
import { bridge as schema } from "./guncelleSchema";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useGetDistrictsQuery,
  useUpdateUserMutation,
  useGetCitiesQuery,
  useGetDistrictsByCityidLazyQuery,
} from "generated/graphql";
import { toast, ToastContainer } from "react-toastify";
import Grid from "@mui/material/Grid";
import {setUser} from '../../../../store/User/UserSlice'
function BilgileriGuncelle() {
  const [modelState, setModelState] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
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

  const Input = styled("input")({
    display: "none",
  });
  return (
    <div className="bilgileriguncelle">
      <div className="title">
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
          handleSubmit(model)}}
        model={user}
        onChangeModel={(model) => {
          
          setModelState(model);
          // dispatch(setUser(modelState));
        }}
      >

        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12} md={12}>
            <AutoField name={"name"} label="Name: " />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"surname"} label="Surname: " />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"username"} label="Username: " />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"password"} label="Password: " />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"email"} label="Email: " />
          </Grid>
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
              modelState.cityid &&  <SelectField
              name={"districtsid"}
              label={"Districts"}
              options={districtData ? districtData : []}
            />
           }  
          </Grid>
        </Grid>

        <HiddenField name="id" value={user.id} />
        <HiddenField name="status"  value={1}/>
        <HiddenField name="createuser" value={user.createuser} />
        <HiddenField name="createtime" value={createDate} />
      <HiddenField name="changeuser"  value={user.createuser}/>
        <HiddenField name="changetime" value={changeDate} />


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
          <SubmitField value="Update Informations" />
        </div>
      </AutoForm>
      <ToastContainer />
    </div>
  );
}

export default BilgileriGuncelle;
