import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'rc-vertical-timeline';
import 'rc-vertical-timeline/build/rc-vertical-timeline.min.css';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TutorIcon from '@material-ui/icons/RecordVoiceOver';

import '../styles/profileOverwrite.scss';

export default function Profile() {
  return (
    <div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff'}}
            date="9/2017 - present"
            iconStyle={{ background: '#404040', color: '#4ecca3' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Business &amp; Information Systems Engineering BISE (Wirtschafts&shy;informatik)</h3>
            <h4 className="vertical-timeline-element-subtitle">Brandenburg University of Applied Sciences, Germany</h4>
            <p>
            Currently writing the bachelor thesis with the topic “visualization of a data warehouse using virtual reality”, passed all 30 lectures with ⌀1,7 (German grade system)
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="6/2018 - 5/2020"
            iconStyle={{ background: '#404040', color: '#4ecca3' }}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Working Student for Business &amp; Information Systems Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Perfacct UG, Germany</h4>
            <p>
            Programming of a progressive web application, development of Ul/UX designs
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="9/2019"
            iconStyle={{ background: '#404040', color: '#4ecca3' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Summer School on Entrepreneurship</h3>
            <h4 className="vertical-timeline-element-subtitle">Coimbra Business School (ISCAC), Portugal</h4>
            <p>
            Interdisciplinary and intercultural compact seminar focused on the topic of entrepreneurship using case studies
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10/2018 - 12/2018"
            iconStyle={{ background: '#404040', color: '#4ecca3' }}
            icon={<TutorIcon />}
        >
            <h3 className="vertical-timeline-element-title">Academic Tutor for the module “Project Studies and Scientific Work”</h3>
            <h4 className="vertical-timeline-element-subtitle">Brandenburg University of Applied Sciences, Germany</h4>
            <p>
            Moderating of group work for students, support on a subject-specific level in the field of BISE
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="9/2014 - 6/2017"
            iconStyle={{ background: '#404040', color: '#4ecca3' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">General Qualification for University Entrance (German Abitur)</h3>
            <h4 className="vertical-timeline-element-subtitle">Gesamtschule Peter Joseph Lenné Potsdam, Germany</h4>
            <p>
            School graduation with focus on computer science, physics, mathematics, English and law
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
}
