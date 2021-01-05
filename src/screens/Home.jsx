import classes from '../cssModules/Screen.module.css'
import homeClasses from '../cssModules/Home.module.css'
import recordImage from '../lib/img/45_rpm_record.png'
import {useState} from 'react'
const Home = () => {

    const[recordSpin, setRecordSpin] = useState(true)

    function handleClick() {
        if (recordSpin) {
            setRecordSpin(false)
        }
        else {
            setRecordSpin(true)
        }
    }

    let imgSpin = homeClasses.recordImage

    if (!recordSpin) {
        imgSpin = homeClasses.recordImageSpinOff
    }


    return (
        <section className={classes.pageContainer}>
            <h2 className={classes.pageTitle}>Marcus Tate</h2>
            <section className={homeClasses.content}>
                <p className={homeClasses.text}>As a developer, I specialize in full-stack development, creating modular and scalable front-end and back-end architectures, and embedded software development, creating automation systems from bare-metal microprocessors. As an engineer, I focus on designing cloud infrastucture that can host and monitor applications and data over time using DevOps procedures and practices.</p>
                <div className={homeClasses.recordImageContainer} onClick = {event => handleClick()}>
                    <img className={imgSpin} src = {recordImage} alt ='Record' />
                </div>
                <p className={homeClasses.text}>As a music producer, I strive to combine many different genres of music, such as classical, jazz, techno, and hip hop/rap, to create innovative and creative songs and compositions. I am also interested in combining electronics and software development with music to create new analog and digital music instruments.</p>
            </section>
            
            
        </section>
    )

}

export default Home; 