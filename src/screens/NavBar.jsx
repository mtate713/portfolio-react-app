import Sidebar from '../components/nav/Sidebar'
import Backdrop from '../components/nav/Backdrop'
import MiniSidebar from '../components/nav/MiniSideBar'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {BsArrowBarRight, BsInfoCircle, BsAwardFill, BsTools, BsFillBriefcaseFill, BsFileEarmarkText, BsHouseFill, BsArrowBarLeft} from 'react-icons/bs'


import classes from '../cssModules/NavBar.module.css'

const NavBar = () => {

    const [active, setActive] = useState(false)
    const [retract, setRetract] = useState(false)

    const history = useHistory()

    function routeChange(link) { 
        if (active) {
            setActive(false)
        }
        let path = link; 
        history.push(path);
    }


    let miniSideBarRetract = undefined;
    if (retract) {
        miniSideBarRetract = classes.retractBar
    }
  

    

    let miniSidebar = <MiniSidebar className={miniSideBarRetract}>
                                    <BsArrowBarRight className= {classes.navLinkMini} onClick = {event => {setActive(true); setRetract(true)}}/>
                                    <BsHouseFill className= {classes.navLinkMini} onClick={event => routeChange('/')}/>
                                    <BsInfoCircle className= {classes.navLinkMini} onClick={event => routeChange('bio')}/>
                                    <BsTools className= {classes.navLinkMini} onClick={event => routeChange('skills')}/>
                                    <BsAwardFill className= {classes.navLinkMini} onClick={event => routeChange('projects')}/>
                                    <BsFillBriefcaseFill className= {classes.navLinkMini} onClick={event => routeChange('work')}/>
                                    <BsFileEarmarkText className= {classes.navLinkMini} onClick={event => routeChange('resume')}/>
                                    
                           
                            
                      </MiniSidebar>

    let sidebar = <section>
                        <Backdrop onClick={event => setActive(false)} />
                        <Sidebar>
                                <div className= {classes.navLink} onClick = {event => setActive(false)}>
                                    <p className= {classes.navLinkTitle}>Marcus Tate</p>
                                    
                                </div>
                                <div className= {classes.navLink} onClick={event => routeChange('/')}>
                                    <BsHouseFill className= {classes.navLinkIcon} />
                                    <p className= {classes.navLinkText}>Home</p>
                                </div>
                                <div className= {classes.navLink} onClick={event => routeChange('bio')}>
                                    <BsInfoCircle className= {classes.navLinkIcon} />
                                    <p className= {classes.navLinkText}>About</p>
                                </div>
                                <div className= {classes.navLink} onClick={event => routeChange('skills')}>
                                    <BsTools className= {classes.navLinkIcon}/>
                                    <p className= {classes.navLinkText}>Skills</p>
                                </div>
                                <div className= {classes.navLink} onClick={event => routeChange('projects')}>
                                    <BsAwardFill className= {classes.navLinkIcon} />
                                    <p className= {classes.navLinkText}>Projects</p>
                                </div>
                                <div className= {classes.navLink} onClick={event => routeChange('work')}>
                                    <BsFillBriefcaseFill className= {classes.navLinkIcon}/>
                                    <p className= {classes.navLinkText}>Work Experience</p>
                                </div>
                                <div className= {classes.navLink} onClick={event => routeChange('resume')}>
                                    <BsFileEarmarkText className= {classes.navLinkIcon} />
                                    <p className= {classes.navLinkText}>Resume</p>
                                </div>


                        </Sidebar>

                  </section>
     
     
    if (active) {
        return sidebar
    }
    else {
        return miniSidebar
    }

}

export default NavBar; 