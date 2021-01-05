import {BsDownload} from 'react-icons/bs'
import classes from '../cssModules/Screen.module.css'
import resumeClasses from '../cssModules/Resume.module.css'

const Resume = () => {


    let resumePdf = <iframe src="https://onedrive.live.com/embed?cid=989DFC0CCC41A76A&resid=989DFC0CCC41A76A%211721&authkey=AN5TQGFWrrhzotA&em=2"/>

    return (
        <section className={classes.pageContainer}>
            <h2 className={classes.pageTitle}>Resume</h2>
            {resumePdf}
            <a className= {resumeClasses.downloadLink} href="https://1drv.ms/w/s!AmqnQcwM_J2YjTmMQWhtSBX-bPYC?e=Mwftzc" download><BsDownload /> Download </a>
        </section>
    );
}

export default Resume; 