import classes from '../cssModules/Projects.module.css'
const Project = (props) => {

    let assignment = props.obj

    return (
        <section className={classes.projectContainer}>
                 <h3 className={classes.projectTitle}>{assignment.title}</h3>
                 <p>{assignment.extraInfo}</p>
                 <p>{assignment.description}</p>
                 <a  className={classes.codeRepoButton} href={assignment.codeRepo.url} target="_blank"  rel='noreferrer' >{assignment.codeRepo.name}</a>

        </section>
    )

}

export default Project; 