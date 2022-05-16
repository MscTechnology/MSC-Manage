import { useState, useEffect } from "react";

//? Uniforms
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
  SelectField,
  ErrorsField,
  NumField,
} from "uniforms-material";

//? Design
import "../personel.css";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

//? Redux Graphql Router
import { bridge as schema } from "./guncelleSchema";
import {
  useUpdateUserMutation,
  useGetCitiesQuery,
  useGetDistrictsByCityidLazyQuery,
} from "generated/graphql";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BilgileriGuncelle() {
  const { t } = useTranslation();

  const [modelState, setModelState] = useState({});
  const user = useSelector((state) => state.users.user);

  const [updateUserMutation] = useUpdateUserMutation({});
  const { data: CitiesData } = useGetCitiesQuery({});
  const [GetDistrictById, { data: districtsByData }] =
    useGetDistrictsByCityidLazyQuery();

  const cities = CitiesData?.cities?.map((city) => {
    return {
      label: city.cityname,
      value: city.id,
    };
  });

  //const createDate = new Date().toUTCString();
  const changeDate = new Date().toUTCString();

  const handleSubmit = (model) => {
    updateUserMutation({
      variables: {
        prmUser: model,
      },
    })
      .then((res) => {
        if (res.data.updateUser.resultType === "SUC") {
          toast.success(t("updateInformations.success"))
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
    <div className="bg-primary h-screen text-center px-12 pt-5 text-2xl text-black">
      <div className="mx-auto justify-center">
        
        <div className="update-title">{t("updateInformations.title")}</div>
      </div>
      <AutoForm
        schema={schema}
        onSubmit={(model) => {
          delete model.usertypes;
          delete model.userfiles;
          delete model.usersmovements;
          handleSubmit(model);
        }}
        model={user}
        onChangeModel={(model) => {
          setModelState(model);
          // dispatch(setUser(modelState));
        }}
      >
        <ErrorsField/>
        <Grid container
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <AutoField name={"name"} label={t("updateInformations.label.name")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField name={"surname"} label={t("updateInformations.label.surname")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField name={"username"} label={t("updateInformations.label.username")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField name={"password"} label={t("updateInformations.label.password")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField name={"email"}  label={t("updateInformations.label.email")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumField max={11} min={0} name={"phonenumber"}  label={`${t("updateInformations.label.phone")} (5xx)`} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField name={"schoolname"} label={t("updateInformations.label.school")}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField
              name={"identificationnumber"}
              label={t("updateInformations.label.tc")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField name={"adress"} label={t("updateInformations.label.address")} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectField
              name={"cityid"}
              label={t("updateInformations.label.city")}
              options={cities ? cities : []}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <SelectField
              name={"districtsid"}
              label={t("updateInformations.label.district")}
              options={districtData ? districtData : []}
            />
          </Grid>
        </Grid>

        <HiddenField name="usertypesid" value={user.usertypesid} />
        <HiddenField name="id" value={user.id} />
        <HiddenField name="status" value={user.status} />
        <HiddenField name="createuser" value={user.createuser} />
        <HiddenField name="createtime" value={user.createtime} />
        <HiddenField name="changeuser" value={user.createuser} />
        <HiddenField name="changetime" value={changeDate} />
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
          <SubmitField value="Update Informations" label={t("updateInformations.button")} />
        </div>
      </AutoForm>
      <ToastContainer />
    </div>
  );
}

export default BilgileriGuncelle;
