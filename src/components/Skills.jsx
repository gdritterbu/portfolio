import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import '../styles/skillsOverwrite.scss';

import { ReactComponent as HTMLIcon} from '../icons/html.svg';
import { ReactComponent as SassIcon} from '../icons/sass.svg';
import { ReactComponent as JSIcon} from '../icons/javascript.svg';
import { ReactComponent as AngularIcon} from '../icons/angular.svg';
import { ReactComponent as ReactIcon} from '../icons/react.svg';
import { ReactComponent as XDIcon} from '../icons/adobexd.svg';
import { ReactComponent as IllustratorIcon} from '../icons/illustrator.svg';
import { ReactComponent as PhotoshopIcon} from '../icons/photoshop.svg';
import { ReactComponent as GitIcon} from '../icons/git.svg';
import { ReactComponent as GitlabIcon} from '../icons/gitlab.svg';
import { ReactComponent as OfficeIcon} from '../icons/microsoftoffice.svg';
import { ReactComponent as PHPIcon} from '../icons/php.svg';
import { ReactComponent as MySQLIcon} from '../icons/mysql.svg';
import { ReactComponent as BPMNIcon} from '../icons/bpmnalt.svg';
import { ReactComponent as VSCodeIcon} from '../icons/visualstudiocode.svg';
import { ReactComponent as CMMIIcon} from '../icons/cmmi.svg';
import { ReactComponent as PythonIcon} from '../icons/python.svg';
import { ReactComponent as JavaIcon} from '../icons/java.svg';
import { ReactComponent as SAPIcon} from '../icons/sap.svg';


export default function Skills() {  
    return (
        <div className="skills-wrapper">
            <Grid container
            direction="row"
            justify="center" spacing={6}>
                <Grid item xs={12} md={6} className="section-wrapper">
                    <div className="title">
                        FRONT END
                    </div>
                    <div className="seperator"></div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.w3.org/html/">
                                <HTMLIcon className="custom-icon" title="HTML"></HTMLIcon>
                            </a>
                            <div className="sub-title">
                                HTML
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://sass-lang.com/">
                                <SassIcon className="custom-icon" title="SASS"></SassIcon>
                            </a>
                            <div className="sub-title">
                                SASS
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">
                                <JSIcon className="custom-icon" title="JavaScript"></JSIcon>
                            </a>
                            <div className="sub-title">
                                JavaScript
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://angular.io/">
                                <AngularIcon className="custom-icon" title="Angular"></AngularIcon>
                            </a>
                            <div className="sub-title">
                                Angular
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://reactjs.org/">
                                <ReactIcon className="custom-icon" title="React"></ReactIcon>
                            </a>
                            <div className="sub-title">
                                React
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="section-wrapper">
                    <div className="title">TOOLS</div>
                    <div className="seperator"></div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.adobe.com/products/xd.html">
                                <XDIcon className="custom-icon" title="Adobe XD"></XDIcon>
                            </a>
                            <div className="sub-title">
                                Adobe XD
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.adobe.com/products/illustrator.html">
                                <IllustratorIcon className="custom-icon" title="Illustrator"></IllustratorIcon>
                            </a>
                            <div className="sub-title">
                                Illustrator
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.adobe.com/products/photoshop.html">
                                <PhotoshopIcon className="custom-icon" title="Photoshop"></PhotoshopIcon>
                            </a>
                            <div className="sub-title">
                                Photoshop
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://git-scm.com/">
                                <GitIcon className="custom-icon" title="Git"></GitIcon>
                            </a>
                            <div className="sub-title">
                                Git
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://about.gitlab.com/">
                                <GitlabIcon className="custom-icon" title="GitLab"></GitlabIcon>
                            </a>
                            <div className="sub-title">
                                GitLab
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.office.com/">
                                <OfficeIcon className="custom-icon" title="Microsoft Office"></OfficeIcon>
                            </a>
                            <div className="sub-title">
                                Microsoft Office
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="section-wrapper">
                    <div className="title">BACK END</div>
                    <div className="seperator"></div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.php.net/">
                                <PHPIcon className="custom-icon" title="PHP"></PHPIcon>
                            </a>
                            <div className="sub-title">
                                PHP
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.mysql.com/">
                                <MySQLIcon className="custom-icon" title="MySQL"></MySQLIcon>
                            </a>
                            <div className="sub-title">
                                MySQL
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="section-wrapper">
                    <div className="title">OTHER</div>
                    <div className="seperator"></div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <a target="_blank" href="http://www.bpmn.org/">
                                <BPMNIcon className="custom-icon" title="BPMN"></BPMNIcon>
                            </a>
                            <div className="sub-title">
                                BPMN
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://code.visualstudio.com/">
                                <VSCodeIcon className="custom-icon" title="MySQL"></VSCodeIcon>
                            </a>
                            <div className="sub-title">
                                Visual Studio Code
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://cmmiinstitute.com/">
                                <CMMIIcon className="custom-icon" title="CMMI"></CMMIIcon>
                            </a>
                            <div className="sub-title">
                                CMMI
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="section-wrapper">
                    <div className="title">BASICS</div>
                    <div className="seperator"></div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.python.org/">
                                <PythonIcon className="custom-icon" title="Python"></PythonIcon>
                            </a>
                            <div className="sub-title">
                                Python
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.java.com/">
                                <JavaIcon className="custom-icon" title="Java"></JavaIcon>
                            </a>
                            <div className="sub-title">
                                Java
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a target="_blank" href="https://www.sap.com/">
                                <SAPIcon className="custom-icon" title="SAP ERP"></SAPIcon>
                            </a>
                            <div className="sub-title">
                                SAP ERP
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="section-wrapper">
                </Grid>
            </Grid>
        </div>
    );
}  