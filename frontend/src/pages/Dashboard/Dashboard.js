import React from "react";
import { Grid } from "@mui/material";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import useScreenWidth from "../../hooks/useScreenWidth";

function Dashboard() {
  const width = useScreenWidth();
  // 1242
  return (
    <div>
      <Grid container>
        <div className="absoluteNav">
          <Nav roleId={1} />
        </div>
        
        {width > 1250 && (
          <Grid item xs={2}>
            <Nav roleId={1} />
          </Grid>
        )}

        <Grid item xs={width > 1250 ? 10 : 12}>
          <Grid container direction={"column"}>
            <Grid item xs={1}>
              <Header />
            </Grid>
            <Grid item xs={11}>
              Dashboard
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
