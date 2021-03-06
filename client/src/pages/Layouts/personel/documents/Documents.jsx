import React from "react";
import "../personel.css";
import {
  AutoForm,
  HiddenField,
  SubmitField,
  SelectField,
} from "uniforms-material";
import {
  useAddUserFileMutation,
  useGetFileTypesQuery,
} from "generated/graphql";
import { useSelector } from "react-redux";
import { bridge as schema } from "./DocumentsSchema";
import { connectField } from 'uniforms';
//import { Upload } from '@progress/kendo-react-upload';
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";
import { useTranslation } from "react-i18next";

// const UploadFile = () => {
//   return <Upload batch={false} multiple={true} defaultFiles={[]} withCredentials={false} saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'} removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'} />;
// };

function Documents() {
  const { t } = useTranslation();

  const [addUserFileMutation] = useAddUserFileMutation({});

  const user = useSelector((state) => state.users.user);

  const { data: FileTypesData , loading, error} = useGetFileTypesQuery({
  });

  if(loading){
    return <Loading />
  }

  if(error){
    return <NoMatch/>
  }

  const filetypes = FileTypesData?.filetypes?.map((filetype) => {
    return {
      label: filetype.typename,
      value: filetype.id,
    };
  })

  const handleSave = (model) => {
    addUserFileMutation({
      variables: {
        prmUserFile: model
      },
    });
  };


  const Image = ({ onChange, value }) => {
    return (
      <div className="ImageField">
        <label htmlFor="file-input">
          <div style={{ marginBottom: "10%" }}>{t("uploadDocument.label.choose")}</div>
          <img
            alt=""
            src={value || 'https://picsum.photos/150?grayscale'}
            style={{ cursor: 'pointer', width: '150px', height: '150px' }}
          />
        </label>
        <input
          accept="image/*"
          id="file-input"
          onChange={({ target: { files } }) => {
            if (files && files[0]) {
              onChange(URL.createObjectURL(files[0]));
            }
          }}
          style={{ display: 'none' }}
          type="file"
        />
      </div>
    );
  };
  
  const ImageField = connectField(Image);
  //const UploadField = connectField(UploadFile);

  



  return (
    <div className="bg-primary h-screen text-center py-5 text-2xl text-black">
      <div className="mx-auto justify-center">
        
        <div className="documents-content">
        {t("uploadDocument.title")}
        </div>
      </div>
      <AutoForm
        schema={schema}
        onSubmit={(model) => {
          handleSave(model);
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="start"
          alignItems="center"
          spacing={3}
        >
            <Grid item xs={12} md={6} className="dcs-grid">
              <SelectField name="filetypesid" label={t("uploadDocument.label.documentType")} options={filetypes ? filetypes : []} />
            </Grid>
         
            <Grid item xs={12} md={6} className="dcs-grid">
              <ImageField name="data" field="data" />
            </Grid>

        </Grid>

        <SubmitField onSubmit={handleSave} label={t("uploadDocument.button")}/>

        <HiddenField name="id" value={0} />
        <HiddenField name="usersid" value={user.id} />
        <HiddenField name="createuser" value={user.createuser} />
        <HiddenField name="changeuser" value={user.changeuser} />
        <HiddenField name="extensitions" value={"png"} />

      </AutoForm>

      {/* 
      <div className="docs-title"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/personel">
        <ArrowBackIcon />
      </IconButton>Documents</div>

      <TableContainer className="table">
        <Table sx={{ maxWidth: 800, textAlign: 'center' }} aria-label="simple table">

          <TableHead >
            <TableRow>
              <TableCell align="center">Kimlik</TableCell>
              <TableCell align="center">Diploma</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>


          <TableBody>

            <TableRow

              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">123</TableCell>
              <TableCell align="center">123</TableCell>
              <Button onClick={() => alert("docs info")}>Open</Button>

            </TableRow>



          </TableBody>
        </Table>
      </TableContainer>

      <div className="upload-btns">
        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your image</span>

            <div className="input">
              <input type="file" name="file" onChange={changeHandler} />

            </div>

          </div>
        </div>

        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your student certificate</span>
            <label htmlFor="contained-button-file">
              <div className="input">
                <input type="file" name="file" onChange={changeHandler} />

              </div>
              


            </label>
          </div>
        </div>

        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your certificate of graduation</span>

            <div className="input">
              <input type="file" name="file" onChange={changeHandler} />

            </div>

          </div>
        </div>
      </div>
      <div className="save-btn">

        <Button variant="outlined" onClick={handleSave}>Save</Button>
      </div> */}
    </div>
  );
}

export default Documents;
