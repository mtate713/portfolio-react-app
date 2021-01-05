import styled, {keyframes} from 'styled-components'

const moveAnimation  = keyframes `
    0% {width: 7%; font-size: 0.25rem;}
    100% {width: 15%; font-size: 1rem;}
`



const Sidebar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    height: 100%;
    width: 15%;
    background: black;
    border-right: solid white 2px;
    display: flex;
    flex-direction: column;
    float: left;
    animation-name: ${moveAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
`


export default Sidebar;