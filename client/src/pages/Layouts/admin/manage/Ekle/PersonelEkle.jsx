import { useGetUserTypesQuery, useAddUserMutation } from "generated/graphql";
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
import "../../../../../styles.css";
import { NavLink } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";
import { useTranslation } from "react-i18next";

const PersonelEkle = () => {
  const { t } = useTranslation();

  const { data, loading, error } = useGetUserTypesQuery();

  const [addUserMutation] = useAddUserMutation();

  const user = useSelector((state) => state.users.user);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
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
        prmUser: model,
      },
    })
      .then((res) => {
        if (res.data.addUser.resultType === "SUC") {
          toast.success("Personel Added");
        } else {
          toast.error(res.data.addUser.messageText);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const createDate = new Date().toUTCString();

  return (
    <div className="bg-primary h-screen text-center px-12 pt-5 text-2xl text-black">
      <div>
        
        {t("addpersonelpage.title")}
      </div>
      <div className="mx-auto  ">
        <AutoForm schema={schema} onSubmit={handleSubmit}>
          <ErrorsField />
          <HiddenField name="id" value={0} />
          <HiddenField name="createuser" value={user.id} />
          <HiddenField name="createtime" value={createDate} />
          <HiddenField name="changeuser" value={user.id} />
          <HiddenField name="changetime" value={null} />
          <HiddenField name="status" value={1} />
          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <AutoField name="name" label={t("addpersonelpage.name")} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutoField
                name={"surname"}
                label={t("addpersonelpage.surname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutoField
                name={"username"}
                label={t("addpersonelpage.username")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutoField
                name={"password"}
                label={t("addpersonelpage.password")}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <SelectField
                name={"usertypesid"}
                label={t("addpersonelpage.usertype")}
                options={userTypeData}
              />
            </Grid>
          </Grid>

          <div className="personel-ekle-buttons">
            <SubmitField value="Submit" label={t('addpersonelpage.submitbutton')} />
          </div>
        </AutoForm>

        <ToastContainer />
      </div>
    </div>
  );
};

export default PersonelEkle;
