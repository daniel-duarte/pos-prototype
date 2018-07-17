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
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import ChevronRight from '@material-ui/icons/ChevronRight';
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

    search: {
        '&:before': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.42)'
        },
    },

    // Cart
    list_root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: '#dedede',
        height: '100%',
        position: 'relative',
    },

    cartProductImage: {
        borderRadius: 0
    },

    payButtonContainer: {
        position: 'absolute',
        bottom: 0,
    },

    payButton: {
        width: '100%',
        margin: '1em',
    },


    // Layout Grid
    grid_root: {
        flexGrow: 1,
        height: '100%',
    },
    grid_paper: {
       // padding: theme.spacing.unit * 2,
       // textAlign: 'center',
       // color: theme.palette.text.secondary,
        height: '100%',
    },


    // Product Grid
    products_root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    products_gridList: {
        // width: 500,
        height: 'calc(100% - 37px)',
    },
    products_icon: {
        // color: 'rgba(255, 255, 255, 0.54)',
    },
    product: {
         border: '1px solid lightgray'
    },
    productImage: {
        width: '90%',
        height: 'auto',
    },

    // Bar buttons
    category_button: {
        //margin: theme.spacing.unit,
    },

    breadcrumb_button: {
        minWidth: 0,
        paddingLeft: 5,
        paddingRight: 5,
    },

    breadcrumbs: {
        marginLeft: 10
    },

    breadcrumb_separator: {
        position: 'relative',
        top: 7
    },

    // Customer

    customerGrid: {
        border: '1px solid blue'
    },
});


class MainBar extends Component {

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
            <AppBar position="static" className={classes.appbar_root}>
                <Toolbar>
                    <IconButton className={classes.appbar_menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.appbar_flex}>POS</Typography>
                    <div>
                        <Input className={classes.search}/>
                        <IconButton color="inherit">
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
                            // id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            // transformOrigin={{
                            //     vertical: 'top',
                            //     horizontal: 'right',
                            // }}
                            open={open}
                            onClose={this.handleClose}
                        >

                            <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

class ProductGrid extends Component {
    render() {
        const { classes } = this.props;

        return (
            <GridList className={classes.products_gridList} cols="4">
                {[...tileData, ...tileData].map(tile => (
                    <GridListTile key={tile.img} cols="1" className={classes.product} >
                        <img src={tile.img} alt={tile.title} className={classes.productImage} />
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
        );
    }
}

class ProductGridBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.products_root}>

                <div className={classes.breadcrumbs}>
                    <Button color="default" className={classes.breadcrumb_button}>
                        All
                    </Button>
                    <span>
                                            <ChevronRight className={classes.breadcrumb_separator} />
                                        </span>
                    <Button color="default" className={classes.breadcrumb_button}>
                        Cameras
                    </Button>
                </div>

                <div>
                    <Button color="primary" className={classes.category_button}>
                        Reflex
                    </Button>
                    <Button color="primary" className={classes.category_button}>
                        Compacts
                    </Button>
                    <Button color="primary" className={classes.category_button}>
                        Lens
                    </Button>
                </div>

            </div>
        );
    }
}

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                { title: 'Kodak AF7',          price:  '$120.95' },
                { title: 'Samsung Lens 0.8',   price:  '$210.00' },
                { title: 'Canon Reflex Ultra', price: '$1210.20' },
                { title: 'Lens Combo X2',      price:   '$20.50' },
            ],
            totals: [
                { title: 'Subtotal', value:  '$2050.95' },
                { title: 'Discount', value:  '-$10.00' },
                { title: 'Total',    value: '$2040.95', isGrandTotal: true },
            ],
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.list_root}>
                <List component="nav">{
                    this.state.items.map((item) => {

                        return (
                            <ListItem button divider dense>
                                <Avatar alt="Remy Sharp" src="/images/comp3.jpg" className={classes.cartProductImage} />
                                <ListItemText primary={item.title} secondary={item.price} />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );

                    })}
                </List>
                <List>{
                    this.state.totals.map((item) => {

                        let divider = item.isGrandTotal ? <Divider /> : '';

                        return (
                            <div>
                                {divider}
                                <ListItem dense={!item.isGrandTotal} >
                                    <ListItemText primary={item.title} />
                                    <ListItemSecondaryAction>
                                        <ListItemText primary={item.value} />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </div>
                        );

                    })}
                </List>

                <Grid container justify="center" alignContent="stretch" className={classes.payButtonContainer}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.payButton}
                        onClick={this.props.checkoutHandler}
                    >Pay</Button>
                </Grid>

            </div>
        );
    }
}

class Catalog extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.grid_root}>
                <Grid container spacing="8" alignItems="stretch">
                    <Grid item xs>
                        <ProductGridBar classes={classes}/>
                        <ProductGrid classes={classes}/>
                    </Grid>

                    <Grid item xs="3">
                        <Cart classes={classes} checkoutHandler={() => this.props.checkoutHandler()}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

class Customer extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.grid_root}>
                <Grid container spacing="8" alignItems="stretch">
                    <Grid item xs className={classes.customerGrid}>Select Customer</Grid>
                    <Grid item xs className={classes.customerGrid}>New Customer</Grid>
                </Grid>
            </div>
        );
    }
}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 'catalog'
        }
    }

    goTo(page) {
        this.setState({page: page});
    }

    renderComponent() {
        const { classes } = this.props;

        switch (this.state.page) {
            case 'catalog':
                return <Catalog classes={classes} checkoutHandler={() => this.goTo('customer')}/>;
            case 'customer':
                return <Customer classes={classes}/>;
        }

        return 'no page';
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <MainBar classes={classes}/>

                <div className="main-content">
                    {this.renderComponent()}
                </div>
            </div>
        );
    }
}


App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
