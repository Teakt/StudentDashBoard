import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }



  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Student DashBoard
          </Typography>
          <Button color="inherit" onClick={handleClick}>Login</Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>

          <MenuItem  onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          
        </Menu>

        </Toolbar>
      </AppBar>

      <div style={{display:'flex',alignItems:'center'}}>

        <CardMedia
        
          image="./images/bob.png"
          title="bob"
        />
        
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



      </div>

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

    </div>
  );
}
