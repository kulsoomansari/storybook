import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Login(props) {
  const {} = props;
  return (
    <Card className="card" variant="outlined">
      <form className="form">
      <CardContent>
        <Typography>
        <TextField
          id="standard-email-input"
          label="email"
          type="email"
          autoFocus
          required
        />
        </Typography>
        <Typography> 
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoFocus
          required
        />
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="primary">login</Button>
      </CardActions>
      </form>
      
    </Card>
  );
}