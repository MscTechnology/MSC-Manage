import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton.jsx";
import "./Home.css";
import { gql, useQuery } from '@apollo/client';
import { List } from 'antd';
import {useState} from 'react'

const GET_USER = gql`
  query GetUser{
    usertypes {
      id
      typename
    }
}
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { loading, error, data } = useQuery(GET_USER);

  const handlePersonelButton = () => {
    console.log("fonksşyon");
  }
  const handleAdminButton = () => {

  }

  if(loading){
    <div>loading..</div>
  }

  if(error){
    <div>error</div>
  }
  console.log(data)


  return (
    <>
       <div className="home">
        <div>
        {
         data?.usertypes?.map(p=> <div>{p?.typename}</div>)
       }
          <div className="msc-title">
            MSC Teknoloji
          </div>

          <div className="login-button">
            <Box className="personal-button">
              <CustomButton mt={1} className="btn-btn" color={"primary"} components={Link} to="personelLogin" onClick={handlePersonelButton} title={"Personel Girişi"} />
            </Box>
            <div className="admin-button">
              <CustomButton color={"success"} components={Link} to="adminLogin" onClick={handleAdminButton} title={"Yönetici Girişi"} />
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Home;
