import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from 'react-swipeable-views';
import Home from './Home'
import Profile from './Profile'
import Skills from './Skills'
import Samples from './Samples'
import Contact from './Contact'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

import '../styles/navigationOverwrite.scss';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

export function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "transparent",
        display: "flex",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: '60px',
    },
    contentWrap: {
        width: 'calc(100vw - 61px)',
        minHeight: '100vh',
    },
    samples:{
        padding: '0px',
    },
}));

export default function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

  return (
    <div className={classes.root}>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            textColor="primary"
            indicatorColor="primary"
        >
            <Tab icon={<HomeRoundedIcon/>} {...a11yProps(0)} aria-label="Home"/>
            <Tab icon={<PersonRoundedIcon/>} {...a11yProps(1)} aria-label="Profile" />
            <Tab icon={<SettingsIcon/>} {...a11yProps(2)} aria-label="Skills" />
            <Tab icon={<WorkRoundedIcon/>} {...a11yProps(3)} aria-label="Work Samples" />
            <Tab icon={<EmailRoundedIcon/>} {...a11yProps(4)} aria-label="Contact" />
        </Tabs>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} className={classes.contentWrap}>
                <Home></Home>
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.contentWrap}>
                <Profile></Profile>
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.contentWrap}>
                <Skills></Skills>
            </TabPanel>
            <TabPanel value={value} index={3} className={classes.contentWrap}>
                <Samples></Samples>
            </TabPanel>
            <TabPanel value={value} index={4} className={classes.contentWrap}>
                <Contact></Contact>
            </TabPanel>
        </SwipeableViews>
    </div>
  );
}