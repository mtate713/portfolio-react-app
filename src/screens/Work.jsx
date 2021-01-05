import Job from '../components/Job'
import classes from '../cssModules/Screen.module.css'
import workClasses from '../cssModules/Work.module.css'
const Work = () => {

    let module = require('../lib/WorkExp.js')

    let workList = module.array

    const jobComponentsList = workList.map(position => <Job obj = {position} />) 



    return (
        <section className={classes.pageContainer}>
             <h2 className={classes.pageTitle}>Work Experience</h2>
             <section className = {workClasses.jobListContainer}>
                 {jobComponentsList} 
             </section>
             
        </section>
       

    );



}

export default Work;