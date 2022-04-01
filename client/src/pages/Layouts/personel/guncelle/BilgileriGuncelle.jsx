import { Button, IconButton, styled } from "@mui/material";
import {useState, useEffect} from "react";
import { useSelector } from "react-redux";
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
import {  useGetDistrictsQuery, useUpdateUserMutation ,useGetCitiesQuery, useGetDistrictsByCityidLazyQuery} from "generated/graphql";
import { toast, ToastContainer } from "react-toastify";
import Grid from "@mui/material/Grid";

function BilgileriGuncelle() {
  const [modelState, setModelState] = useState({})

  const user = useSelector((state) => state.users.user);
  console.log(user);
  const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation(
    {}
  );

  const { data: CitiesData } = useGetCitiesQuery({});

  const [GetDistrictById, {data: districtsByData}] = useGetDistrictsByCityidLazyQuery()


  const cities = CitiesData?.cities?.map((city) => {
    return {
      label: city.cityname,
      value: city.id,
    };
  })
  
  console.log(cities);


  // const CityDistrictFilter = (cityId) => {
  //   const { data: CitiesData } = useGetCitiesQuery({});
  //   const cities = CitiesData?.cities?.map((city) => {
  //     return {
  //       label: city.cityname,
  //       value: city.id,
  //       districts: city.districts?.map((district) => {
  //         return {
  //           label: district.districtname,
  //           value: district.id,
  //         };
  //       }),
  //     };
  //   });
  //   const city = cities.filter((city) => city.value === cityId);
    
  //   return city[0].districts;
  // }



  
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
    GetDistrictById({
      variables: {
        prmCityid:modelState.cityid,
      },
    })
  }, [modelState.cityid])

  console.log(districtsByData);
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
        onSubmit={handleSubmit}
        model={user}
        onChangeModel={(model) => setModelState(model)}
      >
        <div className="info">
          <span className="info">{user.name}</span>
        </div>

        <Grid 
         container
         direction="column"
         justifyContent="space-between"
         alignItems="stretch"
        spacing={2}>
          <Grid item xs={12} md={12}>
            <AutoField name={"name"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"surname"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"username"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"password"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"email"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"phonenumber"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"identificationnumber"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoField name={"adress"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectField name={"cityid"}  label={"City"}  options={cities ? cities : []} />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <SelectField name={"districtsid"} label={"Districts"}  /> */}
          </Grid>
        </Grid>

       

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
