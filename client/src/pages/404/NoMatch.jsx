import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import '../../styles.css'
const NoMatch = () => {
  return (
    <div className="NoMatch">
        <div className="splash-title">
        <h1 className="title-404">404</h1>
        <h2 className="title-404">Aradığınız Sayfa Bulunamadı.</h2>

        </div>
        <Button color={"primary"} variant="outlined" as={NavLink} to="/"> Go Back</Button>
    </div>
  )
}

export default NoMatch