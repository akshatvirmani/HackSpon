import React from 'react'
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
import {format} from 'date-fns'
import {Close as CloseIcon} from '@material-ui/icons'

const useStyles =makeStyles((theme)=> ({
    info:{
        '& > *': {
            margin:'4px'
        
        }
    },
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "13px",
        borderRadius: "5px",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
        
      },
}))

export default (props)=>{
    const classes=useStyles();

    return (
    <Dialog open={!!Object.keys(props.list).length} fullWidth>
        <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {props.list.title} @ {props.list.organizationName}
          <IconButton onClick={props.closeModel}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent> 
       <Box>
        <Box className={classes.info} display='flex'>
            <Typography variant='caption'>Posted On:</Typography>
            <Typography variant='body2'>{props.list.postedOn && format(props.list.postedOn, 'dd/MMM/yyyy HH:MM')}</Typography>
        </Box>
        <Box className={classes.info} display='flex'>
            <Typography variant='caption'>Type</Typography>
            <Typography variant='body2'>{props.list.type }</Typography>
        </Box>
        <Box className={classes.info} display='flex'>
            <Typography variant='caption'>Scale</Typography>
            <Typography variant='body2'>{props.list.scale }</Typography>
        </Box>
        <Box className={classes.info} display='flex'>
            <Typography variant='caption'>Organization Name</Typography>
            <Typography variant='body2'>{props.list.organizationName }</Typography>
        </Box>
        <Box className={classes.info} display='flex'>
            <Typography variant='caption'>organizationURL</Typography>
            <Typography variant='body2'>{props.list.organizationURL }</Typography>
        </Box>
        <Box className={classes.info} display='flex'>
            <Typography variant='caption'>Description</Typography>
            <Typography variant='body2'>{props.list.description }</Typography>
        </Box>
        <Box ml={0.5}>
            <Typography variant='caption'>Skills</Typography>
            <Grid container alignItems='center'>
                {props.list.skills && 
                 props.list.skills.map((skill)=>(
                    <Grid item key={skill} className={classes.skillChip}>
                    {skill}
                    </Grid>
                 ))}
            </Grid>
        </Box>
       </Box>
      </DialogContent>
    <DialogActions>
        <Button variant='outlined' component='a' href={props.list.link} target='_black' >Apply</Button>
    </DialogActions>
    </Dialog>
)
    }