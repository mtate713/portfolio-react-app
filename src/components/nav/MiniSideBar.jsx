import styled from 'styled-components'

const MiniSidebar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    height: 100%;
    width: 3%;
    background: black;
    border-right: solid white 2px;
    display: flex;
    float: left;
    flex-direction: column;
`
export default MiniSidebar;