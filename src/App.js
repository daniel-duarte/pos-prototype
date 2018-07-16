import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const styles = theme => ({

    // App bar
    appbar_root: {
        flexGrow: 1,
    },
    appbar_flex: {
        flex: 1,
    },
    appbar_menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },


    // List (cart)
    list_root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
    },


    // Layout Grid
    grid_root: {
        flexGrow: 1,
        height: '100%',
    },
    grid_paper: {
       // padding: theme.spacing.unit * 2,
       //  textAlign: 'center',
       //  color: theme.palette.text.secondary,
        height: '100%',
    },


    // Product Grid
    products_root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    products_gridList: {
        // width: 500,
        height: 600,
    },
    products_icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


class App extends Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <div className={classes.appbar_root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.appbar_menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.appbar_flex}>POS</Typography>
                            <div>
                                <TextField/>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>

                <Toolbar>

                    <Typography variant="title" color="inherit" className={classes.appbar_flex}>
                        Television | Home Teathers | Audio | Game
                    </Typography>

                </Toolbar>

                <div className="main-content">
                    <div className={classes.grid_root}>
                        <Grid container spacing={8} alignItems="stretch">
                            <Grid item xs>

                                <div className={classes.products_root}>
                                    {/*<Typography variant="title" color="inherit" className={classes.appbar_flex}>All > Cameras</Typography>*/}
                                    <div>
                                        <Button color="primary" className={classes.button}>
                                            Reflex
                                        </Button>
                                        <Button color="primary" className={classes.button}>
                                            Compacts
                                        </Button>
                                        <Button color="primary" className={classes.button}>
                                            Lens
                                        </Button>
                                    </div>

                                    <GridList className={classes.products_gridList} cols="4">
                                        <GridListTile key="Subheader" cols="4" style={{ height: 'auto' }}>
                                            <ListSubheader component="div">Cameras</ListSubheader>
                                        </GridListTile>
                                        {[...tileData, ...tileData].map(tile => (
                                            <GridListTile key={tile.img} cols="1" >
                                                <img src={tile.img} alt={tile.title} />
                                                <GridListTileBar
                                                    title={tile.title}
                                                    subtitle={<span>by: {tile.author}</span>}
                                                    actionIcon={
                                                        <IconButton className={classes.products_icon}>
                                                            <InfoIcon />
                                                        </IconButton>
                                                    }
                                                />
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>






                            </Grid>
                            <Grid item xs={3}>

                                <div className={classes.list_root}>
                                    <List component="nav">
                                        <ListItem button>
                                            <ListItemIcon>
                                                <PhotoCamera />
                                            </ListItemIcon>
                                            <ListItemText primary="Canon GTX 2" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <PhotoCamera />
                                            </ListItemIcon>
                                            <ListItemText primary="Kodak PM" />
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List component="nav">
                                        <ListItem button>
                                            <ListItemText primary="Discount:  -$10.00" />
                                        </ListItem>
                                        <ListItem button component="a" href="#simple-list">
                                            <ListItemText primary="Total:  $95.50" />
                                        </ListItem>
                                    </List>
                                </div>

                            </Grid>
                        </Grid>
                    </div>
                </div>



            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
