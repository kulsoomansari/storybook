import { useFormik } from 'formik'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Login() {
const classes = useStyles();
const formik = useFormik({
    initialValues:{
        email: '',
        password: ''
    },
    onSubmit:values=>{
        console.log(values)
    }
}) 

    return (
        <form onSubmit={formik.handleSubmit}>
      <div className="form">
      <TextField
          error
          id="standard-error-helper-text"
          label="error"
          type="email"
          placeholder="enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
         <div className={classes.root}>
     <Button variant="contained" color="primary">
        Login
      </Button>
      </div>
      </div>
      </form>
    )
}
