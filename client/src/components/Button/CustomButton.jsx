import Button from "@mui/material/Button";
import {  NavLink} from "react-router-dom";

const CustomButton = ({title, onClick, color, to}) => {
  return (
    <div>
      <Button size="large" as={NavLink} to={`/${to}`} color={`${color}`} onClick={onClick} disableElevation variant="contained" >{title}</Button>
    </div>
  );
};

export default CustomButton;
