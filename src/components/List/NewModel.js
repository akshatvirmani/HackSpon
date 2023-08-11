import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  makeStyles,
  DialogActions,
  Menu,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";

import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "13px",
    borderRadius: "5px",
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
  included: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}));

const initState={    title: "",
type: "Online",
organizationName: "",
organizationURL: "",
scale: "Large Scale",
link: "",
description: "",
skills: [],}

export default (props) => {
  const [loading,setLoading]=useState(false)
  const [details, setDetails] = useState(initState);

  const handleChange = (e) => {
    e.persist();
    setDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const addRemoveSkill = (skill) =>
    details.skills.includes(skill)
      ? setDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.filter((s) => s === skill),
        }))
      : setDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.concat(skill),
        }));


        const handleSubmit=async()=>{

          for(const field in details){
            if(typeof details[field]==='string'&& !details[field]) return;
          }
          if(!details.skills.length) return;
          setLoading(true)
          await props.postList(details);
          closeModel();
        }

const closeModel =()=>{
  setDetails(initState);
  setLoading(false);
  props.closeModel();
}

  const classes = useStyles();
  const skills = [
    "Web3",
    "AI/ML",
    "App Development",
    "Meme Creation",
    "Competitive Coding",
  ];

  console.log(details);

  return (
    <Dialog open={props.newListModel} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post a Sponsorship
          <IconButton onClick={closeModel}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="title"
              value={details.title}
              autoComplete="off"
              placeholder="Title *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="type"
              value={details.type}
              fullWidth
              disableUnderline
              variant="filled"
            >
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="Offline">Offline</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="organizationName"
              value={details.name}
              autoComplete="off"
              placeholder="Organization Name *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="organizationURL"
              value={details.organizationURL}
              autoComplete="off"
              placeholder="Organization URL *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="scale"
              value={details.scale}
              fullWidth
              disableUnderline
              variant="filled"
            >
              <MenuItem value="Large Scale">Large Scale</MenuItem>
              <MenuItem value="Small Scale">Small Scale</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="link"
              value={details.link}
              autoComplete="off"
              placeholder="Apply Link/Contact Us Page *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              onChange={handleChange}
              name="description"
              value={details.description}
              autoComplete="off"
              placeholder="Description *"
              disableUnderline
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex">
            {skills.map((skill) => (
              <Box
                onClick={() => addRemoveSkill(skill)}
                className={`${classes.skillChip} ${
                  details.skills.includes(skill) && classes.included
                }`}
                key={skill}
              >
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          color="red"
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant="caption">Required fields*</Typography>
          <Button onClick={handleSubmit} variant="contained" disabledElevation color="primary" disabled={loading}>
           {loading?(
            <CircularProgress color="secondary" size={22}/>
           ):(
              " Post a Sponsorship"
           )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
