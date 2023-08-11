import React, {useState} from "react";
import {Box, Button, Select, MenuItem, makeStyles, CircularProgress} from '@material-ui/core'

const useStyles= makeStyles({
    wrapper: {
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius:'5px',
        "& > *":{
            flex:1,
            height:"45px",
            margin:"8px",
        }
    }
})

export default (props) =>{
    const[loading,setLoading]=useState(false)
    const[search,setSearch]=useState({
        type:"Online",
        scale:"Large Scale"
    });

    const handleChange=(e)=>{
        e.persist();
        setSearch((oldState)=>({
            ...oldState,
            [e.target.name]:e.target.value,
        }))
    };

    const searching=async()=>{
        setLoading(true)
        await props.fetchListCustom(search)
        setLoading(false)
    }

   console.log(search)

    const classes = useStyles();
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} value={search.type} name="type" disableUnderline variant="filled" defaultValue="Online">
                <MenuItem value="Online">Online</MenuItem>
                <MenuItem value="Offline">Offline</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
            <Select onChange={handleChange} value={search.scale} name="scale" disableUnderline variant="filled" defaultValue="Large Scale">
                <MenuItem value="Large Scale">Large Scale</MenuItem>
                <MenuItem value="Small Scale">Small Scale</MenuItem>
            </Select>
            <Button disabled={loading} variant="contained" color="primary" disableElevation onClick={searching}>
            {loading?(
            <CircularProgress color="secondary" size={22}/>
           ):(
              " Search"
           )}
          </Button>
        </Box>
    )
}