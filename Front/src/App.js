import React, { Component } from "react";
import {useState} from 'react';
import { useGlobal } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MailIcon from '@material-ui/icons/Mail';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Bob from './images/bob.png';
import TextField from '@material-ui/core/TextField';
import Bg from './images/bg2.jpg';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import Calendar from "./components/Calendar";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'url(' + Bg + ')',
    backgroundSize: 'cover',


  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 275,
    marginLeft: theme.spacing(2),
  },
  mailNotification: {
    width: 275,
    marginLeft: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.😎',
  },
  pos: {
    marginBottom: 12,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
    media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
    info: {
    display: 'flex',
    alignItems:'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    justifyContent:'center',
    flexWrap: 'wrap',
  },
    profile: {
    display: 'flex',
    alignItems:'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    marginLeft: 50, 
    padding: theme.spacing(1),
  },
    bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
    chip: {
    margin: theme.spacing(1),
  },
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const rows = [
  { matiere:'Matière 1', bloc:'Bloc 1', note:10},
  { matiere:'Matière 2', bloc:'Bloc 2', note:10},
  { matiere:'Matière 3', bloc:'Bloc 2', note:10},
  { matiere:'Matière 4', bloc:'Bloc 3', note:10},
  { matiere:'Matière 5', bloc:'Bloc 2', note:10},
  { matiere:'Matière 6', bloc:'Bloc 2', note:10},
  { matiere:'Matière 7', bloc:'Bloc 1', note:10},
  { matiere:'Matière 8', bloc:'Bloc 2', note:10},
]

const data = [
  {
    subject: 'Math', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Chinese', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'English', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Geography', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Physics', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'History', A: 65, B: 85, fullMark: 150,
  },
];

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

export default function SignIn() {
  
  const classes = useStyles();

  const [form, setValues] = useState({
    username: '',
    password: '',
    boolean: true,
  });



  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);


  function body(){
    
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function puteuh(){

setValues(prev => ({ 
    ...prev,
    boolean: true,
}));
  }

 
   function doGetTEXT()  {

    var url = "http://127.0.0.1:8081/authentification/";

    url += form.username + "/" + form.password;

    var aPromise = fetch(url);
   
    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.text();
      })
      .then(function(data){
          console.log(data);

          if(data === "OK"){
            alert("Correct");
            
          }
          else if(data === "PWD"){
            alert("Bad password !");
            setValues(prev => ({ 
              ...prev,
              boolean: false,
            }));
          }
          else if(data === "EMAIL"){
            alert("Bad email !");
          }

          console.log(url);

      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);

      });
   
  }

 function rendering() {
    if(form.boolean === true){
      return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Dashboard
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              autoFocus
              value={form.username}
              onChange={updateField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={form.password}
              onChange={updateField}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={doGetTEXT}
            >
              Login
            </Button>

          </form>
        </div>
      </Container>  
        );
    }
    else{
      return(
      <div className={classes.root}>

<Router>
    <div>

        <AppBar position="static">
          <Toolbar>
          <Link to="/body">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            </Link>
            
            <Typography variant="h6" className={classes.title}>
              Student DashBoard
            </Typography>
            <Link to="/calendar"><Button color="inherit">Calendar</Button></Link>
            <Button color="inherit" onClick={puteuh}>Disconnect</Button>
            
            

          </Toolbar>
        </AppBar>

       

       
     
      <Route path="/body" component={Body} />
      <Route path="/calendar" component={Calendar} />
      
    </div>
      </Router>


      </div>
      );
    }
  } 


  return (
    <div>
    {rendering()}
    </div>
  );
}


 function Body(){

  const classes = useStyles();
   return(
     <div>
       <Chip label="Basic Chip" className={classes.chip} color='primary'/>
        <Chip label="Basic Chip" className={classes.chip} color='secondary'/>
        <Chip label="Basic Chip" className={classes.chip} color='primary'/>
        <Chip label="Basic Chip" className={classes.chip} color='secondary'/>
        <Chip label="Basic Chip" className={classes.chip} color='primary'/>
        <Chip label="Basic Chip" className={classes.chip} color='secondary'/>
        <Chip label="Basic Chip" className={classes.chip} color='primary'/>
        <Chip label="Basic Chip" className={classes.chip} color='secondary'/>
        <Chip label="Basic Chip" className={classes.chip} color='primary'/>

        <div className={classes.profile}>

        <Avatar alt="Bob" src={Bob} className={classes.bigAvatar} />

        <Card className={classes.card} >
          <CardContent>



            <Typography className={classes.title} color="textSecondary" gutterBottom>
              4ème année
            </Typography>
            <Typography variant="h5" component="h2">
            Prénom Nom
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Filières
            </Typography>
            <Typography variant="body2" component="p">
              Adresse
              <br />
              adresse@email.fr
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.mailNotification}>
          <CardContent>



            <Typography className={classes.title} color="textSecondary" gutterBottom>
              4ème année
            </Typography>
            <Typography variant="h5" component="h2">
            Prénom Nom
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Filières
            </Typography>
            <Typography variant="body2" component="p">
              Adresse
              <br />
              adresse@email.fr
            </Typography>
          </CardContent>
        </Card>


        </div>


        <div className={classes.info}>

        <Paper>
          <Table minWidth="650">
            <TableHead>
              <TableRow>
                <TableCell align="left">Matière</TableCell>
                <TableCell align="left">Bloc</TableCell>
                <TableCell align="left">Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.matiere}>
                  <TableCell align="left">
                    {row.matiere}
                  </TableCell>
                  <TableCell align="left">{row.bloc}</TableCell>
                  <TableCell align="left">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>

                

        

      </div>

     </div>
   );
}