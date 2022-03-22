import Button from "@mui/material/Button";





const CustomButton = ({title, onClick, color}) => {
  return (
    <div>
      <Button size="large"  color={`${color}`} onClick={onClick} disableElevation     variant="contained" >{title}</Button>
    </div>
  );
};

export default CustomButton;
