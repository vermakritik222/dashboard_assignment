import React from "react";
import "./Nav.scss";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import getRoutes from "../../Data/access";

function Nav(props) {
  const {roleId} = props
  const Routs = getRoutes(roleId);
  return (
    <div className="nav">
      <Grid container direction="column" spacing={1}>
        <Grid item xs={2}>
          <div className="nav__avatar">
            <Avatar />
            <p>Avtar name</p>
          </div>
        </Grid>
        {Routs?.map((el) => (
          <Grid item xs={1} key={el.id}>
            <ButtonBase sx={{ width: "100%", borderRadius: "10px" }}>
              <div className="nav__item active">
                <div className="center">{el.icon}</div>
                <p>{el.itemName}</p>
              </div>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Nav;
