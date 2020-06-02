import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import '../styles/contactOverwrite.scss';

import { ReactComponent as HTMLIcon} from '../icons/linkedin.svg';
import { ReactComponent as SassIcon} from '../icons/gmail.svg';



export default function Contact() {  
    return (
        <div className="contact-wrapper">
            <Grid container
            direction="row"
            justify="center" spacing={6}>
                <Grid item xs={12} md={6} className="section-wrapper">
                    <div className="title">
                        CONTACT
                    </div>
                    <div className="seperator"></div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <a target="_blank" href="https://www.linkedin.com/in/georg-david-ritterbusch/">
                                <HTMLIcon className="custom-icon" title="LinkedIn"></HTMLIcon>
                            </a>
                            <div className="sub-title">
                                Georg Ritterbusch
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <a target="_blank" href="mailto:georg.ritterbusch@gmail.com">
                                <SassIcon className="custom-icon" title="Gmail"></SassIcon>
                            </a>
                            <div className="sub-title email">
                                georg.ritterbusch@gmail.com
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}  