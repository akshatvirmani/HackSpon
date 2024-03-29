import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import {differenceInMinutes} from 'date-fns'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor: "pointer",
    transition:".5s",

    "&:hover":{
      boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
      borderLeft: "6px solid #808080",
    }
  },
  organizationName: {
    fontSize: "13px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillChip: {
    marginBottom:"40px",
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "13px",
    borderRadius: "5px",
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container>
        <Grid item xs>
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.organizationName} variant="subtitle1">
           {props.organizationName}
          </Typography>
        </Grid>
        <Grid item container xs>
          {props.skills.map((skill) => (
            <Grid key={skill} className={classes.skillChip} item>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
          <Grid item>
            <Typography variant="caption">
              {differenceInMinutes(Date.now(),props.postedOn)} min ago | {props.type} | {props.scale}
            </Typography>
          </Grid>
          <Grid item>
            <Box mt={2}>
              <Button onClick={props.open} variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
