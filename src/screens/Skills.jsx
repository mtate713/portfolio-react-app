import Skill from '../components/Skill'
import classes from '../cssModules/Screen.module.css'
import skillsClasses from '../cssModules/Skills.module.css'


const Skills = () => {

    let module = require('../lib/Skills.js')

    let skillList = module.array

    const skillComponentsList = skillList.map(talent => <Skill obj = {talent} />) 


    return (
        <section className={classes.pageContainer}>
             <h2 className={classes.pageTitle}>Skills</h2>
             <section className= {skillsClasses.skillListContainer}>
                {skillComponentsList} 
             </section>
             
        </section>
       

    );



}

export default Skills;