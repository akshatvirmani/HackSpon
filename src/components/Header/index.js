import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

export default (props) => (
  <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">HackSpon</Typography> 
          <Button onClick={props.openNewListModel} variant="contained" color="primary" disableElevation>
            Post a Sponsorship
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
