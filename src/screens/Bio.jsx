import classes from '../cssModules/Screen.module.css'
import bioClasses from '../cssModules/Bio.module.css'
import profileImage from '../lib/img/profile.jpg'
const Bio = () => {

    return (
        <section className={classes.pageContainer}>
            <h2 className={classes.pageTitle}>About Me</h2>
            <section className={bioClasses.content}>
                <section className={bioClasses.text}>
                    <p >My name is Marcus Tate, and I am from Memphis, TN. I had graduated from Rhodes College in May 2019 with a Bachelor of Science Degree in Computer Science and a Bachelor of Arts Degree. What initially started my interest in technology was tinkering with computers at a very young age. When I was little, I was fascinated by computer software and how you can make different types of things. It was when I also applied my other passion of music that made my interest in technology advance tenfold. I was fascinated on how you can use technology and software to create so many different sounds and sound effects that never been made before because it was never possible to do so. While attending Rhodes College, I was the Technical Manager of the Mike Curb Institute department. The Mike Curb Institute at Rhodes College was in a small house called the Harris Lodge, which used to be the house of the Dean of Rhodes College. We planned to use that space as an audio recording/video editing lab, and I was tasked with designing and configuring all the technology and software that was needed. I like to use technology to create unique sounds and music and challenge the idea of what makes a music instrument a music instrument. Coming from an impoverish family, I was not able to afford music lessons or buy a music instrument. However, technology has allowed me to create my own music despite the large amount of costs. Technology also allows me to explore the various frequencies and sound waves of music and create completely unique sounds that never have been created before.  In my free time, I produce music, tinker with electronics such as an Arduino Microcontroller, and program. I volunteer as an audio engineer in various places. My last event was for the Springboard Memphis Festival where many different artists come to Memphis and perform in venues on Beale Street.</p>
                    <p>
                        
                    </p>
                </section>
                
                <img className={bioClasses.profileImage} src={profileImage} alt='Marcus Tate'></img>
            </section>
        </section>
    )


}

export default Bio; 