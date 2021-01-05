import Project from '../components/Project'
import classes from '../cssModules/Screen.module.css'
import projectClasses from '../cssModules/Projects.module.css'
const Projects = () => {

    let module = require('../lib/ProjectList.js')

    let projectList = module.array

    const projectComponentsList = projectList.map(project => <Project obj = {project} />) 


    return (
        <section className={classes.pageContainer}>
             <h2 className={classes.pageTitle}>Projects</h2>
             <section className={projectClasses.projectListContainer}>
               { projectComponentsList} 
             </section>
             
        </section>
       

    );



}

export default Projects;