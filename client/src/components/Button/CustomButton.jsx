import Button from "@mui/material/Button";
import {  NavLink} from "react-router-dom";
import '../../pages/Home/Home.css';
const CustomButton = ({title, onClick, color, to}) => {
  return (
    <div>
      <Button  as={NavLink} to={`/${to}`} color={`${color}`} onClick={onClick} disableElevation variant="outlined"className="custombutton" >{title}</Button>
    </div>
  );
};

export default CustomButton;
