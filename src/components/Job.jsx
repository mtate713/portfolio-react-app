import classes from '../cssModules/Work.module.css'

const Job = (props) => {

    const career = props.obj

    const bulletpointsList = career.bulletpoints.map(bullet => <li>{bullet}</li>)


    return (
               <section className={classes.jobContainer}>
                    <div className={classes.companyContainer}>
                        <p className={classes.jobCompany}>{career.company} - {career.location}</p>
                        <p className={classes.jobPosition}>{career.positionName}</p>
                        <p>{career.dates}</p>
                    </div>

                    <div className={classes.workDescription}>
                        <ul>
                            {bulletpointsList}
                        </ul>
                    </div>
               </section>
    )

}

export default Job; 