import "../../../../styles.css";
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material'

const PersonelEkle = () => {

  const handleSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  }

  return <div className="adminPage">
    <div className="admin-title">Personel Ekle</div>
    <div className="formik">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="formArea">
            <label htmlFor="Name" className="form-label">Name</label>
            <Field id="Name" name="Name" placeholder="Jane" />
          </div>

          <div className="formArea">
            <label htmlFor="Surname" className="form-label">Surname</label>
            <Field id="Surname" name="Surname" placeholder="Doe" />
          </div>

          <div className="formArea">
            <label htmlFor="Username" className="form-label">Username</label>
            <Field
              id="Username"
              name="Username"
              placeholder="jane123"
            />
          </div>

          <Button type="submit" variant="outlined">Submit</Button>
        </Form>
      </Formik>
    </div>

  </div>;
};

export default PersonelEkle;
