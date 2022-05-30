import React from 'react';
import classes from './AllJobs.module.css';

import Job from '../Job/Job';

function AllJobs(props) {
    return (
        <div className={classes.component}>
            {props.jobs.map((job) => {
                return <Job key={job}/>
            })}
        </div>
    )
}

export default AllJobs;