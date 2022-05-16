import Alert from '@mui/material/Alert';


//! Error Types: error, warning, info, success

const MuiAlert = ({severity, text}) => {
  return (
    <Alert severity={severity}>{text}</Alert>
  )
}

export default MuiAlert