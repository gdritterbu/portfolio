import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import {  NewsHeaderCard } from 'react-ui-cards';

import '../styles/samplesOverwrite.scss';

import VRImage from '../assets/vr2.png'
import PWAImage from '../assets/pwa.png'
import KakuroImage from '../assets/kakuro.PNG'
import StockRatingImage from '../assets/stockrating.png'

import KakuroNXTDark from '../assets/kakuronxt_dark.gif'
import KakuroNXTLight from '../assets/kakuronxt_light.gif'
import StockRatingOverview from '../assets/stockrating_overview.gif'
import StockRatingSearch from '../assets/stockrating_search.gif'
import AFrame from '../assets/aframe.png'
import AFrameDocs from '../assets/aframe_docs.png'
import VrTool from '../assets/vr-tool.gif'
import PortfolioHome from '../assets/portfolio_home.png'
import PortfolioSkills from '../assets/portfolio_skills.png'



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);


  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };

  return (
    <div>
      <div className="skills-wrapper">
        <Grid container
        direction="row"
        justify="center" spacing={6}>
          {/*
          <Grid item xs={12} className="section-wrapper">
            <div className="title sample-title">
                CURRENT PROJECTS
            </div>
            <div className="seperator sample-seperator"></div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <div className="sample-wrapper" onClick={handleClickOpen1}>
                  <div>
                    <img className="samples-preview" src={VRImage}/>
                  </div>
                  <div className="sample-subtitle">
                    <div className="sample-subtitle-wrapper">
                      DWH Visualization
                    </div>
                  </div>
                </div>
                </Grid>
            </Grid>
          </Grid>
          */}
          
          <Grid item xs={12} className="section-wrapper">
            <div className="title sample-title">
            {/*PAST */}PROJECTS
            </div>
            <div className="seperator sample-seperator"></div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <div className="sample-wrapper" onClick={handleClickOpen1}>
                  <div>
                    <img className="samples-preview" src={VRImage}/>
                  </div>
                  <div className="sample-subtitle">
                    <div className="sample-subtitle-wrapper">
                      DWH Visualization
                    </div>
                  </div>
                </div>
                </Grid>
              <Grid item xs={12} sm={6}>
                <div className="sample-wrapper" onClick={handleClickOpen2}>
                  <div>
                    <img className="samples-preview" src={PWAImage}/>
                  </div>
                  <div className="sample-subtitle">
                    <div className="sample-subtitle-wrapper">
                      Portfolio PWA
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="sample-wrapper" onClick={handleClickOpen3}>
                  <div>
                    <img className="samples-preview" src={KakuroImage}/>
                  </div>
                  <div className="sample-subtitle">
                    <div className="sample-subtitle-wrapper">
                      kakuroNXT
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="sample-wrapper" onClick={handleClickOpen4}>
                  <div>
                    <img className="samples-preview" src={StockRatingImage}/>
                  </div>
                  <div className="sample-subtitle">
                    <div className="sample-subtitle-wrapper">
                      StockRating
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Dialog fullScreen open={open1} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="dialog-app-bar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <div className="app-bar-title">
              DWH Visualization
            </div>
          </Toolbar>
        </AppBar>
        <Grid container
        direction="row"
        justify="center" spacing={6} className="dialog-content-wrapper dialog-text">
          <Grid item xs={12} justify="center" className="dialog-gif-wrapper">
            <p>
            My Bachelor Thesis was dedicated to the topic <i><b>“Visualization of data warehouse data using Web-VR technologies”</b></i>. This was being done together with my fellow student Long Hoang Ngyuen. For that purpose we have developed our own tool for the visualization of data warehouse data. 
            <br/>
            <br/>
            The data is not only be displayed, but is also more accessible for the user. The user has the possibility to navigate through the various data and their data types in order to gain in-depth knowledge of the data more quickly. The technical development was done using the JavaScript based web framework A-Frame and a PHP environment. A-Frame is a framework for building Virtual Reality (VR) experiences.
            </p>
          </Grid>
        </Grid>
        <Grid container
        direction="row"
        justify="center" spacing={6}
        className="dialog-content-wrapper">
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-img" src={AFrame}/>
          </Grid>
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-img" src={VrTool}/>
          </Grid>
        </Grid>
      </Dialog>

      <Dialog fullScreen open={open2} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="dialog-app-bar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <div className="app-bar-title">
              Portfolio PWA
            </div>
          </Toolbar>
        </AppBar>
        <Grid container
        direction="row"
        justify="center" spacing={6} className="dialog-content-wrapper dialog-text">
          <Grid item xs={12} justify="center" className="dialog-gif-wrapper">
            <p>
            This portfolio is actually one of my latest projects. I always wanted to have my own portfolio. Therefore I took the opportunity to realize this wish as a challenging task. So I built this site as a Progressive Web App with React according to my own ideas. The goal was to create a compact digital business card for myself using modern technologies and ideas. 
            <br/>
            <br/>
            You can install this portfolio as an app on your smartphone or desktop computer. Just add this page to your smartphone's start screen. Alternatively, you can install the Progressive Web App on your desktop computer using a chromium based web browser by pressing the plus button in the URL bar.
            </p>
          </Grid>
        </Grid>
        <Grid container
        direction="row"
        justify="center" spacing={6}
        className="dialog-content-wrapper">
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-img" src={PortfolioHome}/>
          </Grid>
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-img" src={PortfolioSkills}/>
          </Grid>
        </Grid>
      </Dialog>

      <Dialog fullScreen open={open3} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="dialog-app-bar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <div className="app-bar-title">
              kakuroNXT
            </div>
          </Toolbar>
        </AppBar>
        <Grid container
        direction="row"
        justify="center" spacing={6} className="dialog-content-wrapper dialog-text">
          <Grid item xs={12} justify="center" className="dialog-gif-wrapper">
            <p>
            KakuroNXT is a design of a gaming app I created for the Japanese sum puzzle Kakuro, which I built with Adobe XD. This work was part of my compulsory internship for my studies at university. The goal of this design is to be a template for a competitive Kakuro App. The main focus of this design is therefore the user experience, which is based on putting the core of the game into the foreground. Here, for example, care is taken to ensure that the integration of the advertising banners does not negatively influence the gaming experience and thus directly attacks the weak points of the competitors on the app market.  
            </p>
          </Grid>
        </Grid>
        <Grid container
        direction="row"
        justify="center" spacing={6}
        className="dialog-content-wrapper">
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-gif" src={KakuroNXTLight}/>
          </Grid>
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-gif" src={KakuroNXTDark}/>
          </Grid>
        </Grid>
      </Dialog>

      <Dialog fullScreen open={open4} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="dialog-app-bar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <div className="app-bar-title">
              StockRating
            </div>
          </Toolbar>
        </AppBar>
        <Grid container
        direction="row"
        justify="center" spacing={6} className="dialog-content-wrapper dialog-text">
          <Grid item xs={12} justify="center" className="dialog-gif-wrapper">
            <p>
              StockRating is a prototype developed by me for a complete evaluation of the German stock index. This project was realized in two university subjects <i><b>“Usability and Software Ergonomics”</b></i> and <i><b>“Database Systems -  Modelling and Design”</b></i>. The goal of the project StockRating was to achieve a technical and automated solution for stock rating according to the Levermann strategy, taking into account the aspects of usability.
              <br/>
              <br/>
              The Levermann strategy was developed by former DWS fund manager Susan Levermann and was published in her book "Der entspannte Weg zum Reichtum". It is a quantitative valuation strategy based on key business figures or financial data that have historically generated excess return. The strategy is based on 13 key figures, for which a score is calculated in each case (-1, 0, 1). The points of these key figures are added up and result in an overall score.
              <br/>
              <br/>
              The technologies used are PHP, JavaScript, HTML, CSS, MySQL and Excel. The financial data is automatically retrieved, calculated and prepared by Excel from free data sources. Afterwards the data is imported into a MySQL database on a regular basis via phpMyAdmin. This data can then be shown on the PHP-based website.
            </p>
          </Grid>
        </Grid>
        <Grid container
        direction="row"
        justify="center" spacing={6}
        className="dialog-content-wrapper">
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-gif" src={StockRatingSearch}/>
          </Grid>
          <Grid item xs={12} sm={6} justify="center" className="dialog-gif-wrapper">
            <img className="dialog-gif" src={StockRatingOverview}/>
          </Grid>
        </Grid>
      </Dialog>

    </div>
  );
}