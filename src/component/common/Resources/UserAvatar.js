import styled from "styled-components";

const AvatarBlock= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 44px;
    border-radius: 20px;
    background: url(${ props => props.src});
    background-size: 40px
`;

const AvatarLevelBlock = styled.div`
    width: 18px;
    height: 20px;
    top: 60%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20px;
    border: 2px solid white;
    background-color: rgb(255,130,0);
    z-index: 4;
    
    ${ (props) => props.place === 'header' && `
        left: 8%;
    `}
    ${ (props) => props.place === 'setting' && `
        left: 16%;
    `}
}
`;

const AvatarLevel = styled.div`
    text-align: center;
    color: white;
    font-size: 1rem;
    z-index: 4;
    font-size: 0.6rem;
`;


export const HeaderPopAvatar = (props) => {
    return (
        <>
            <AvatarBlock src={props.src} />
            <AvatarLevelBlock place={props.place}>
                <AvatarLevel place={props.place}>
                    {props.level}
                </AvatarLevel>
            </AvatarLevelBlock>
        </>
    )
}



export const ContentAvatar = (props) => {
    return(
        <>
            <AvatarBlock src={props.src} place={props.place}/>
            <AvatarLevelBlock place={props.place}>
                <AvatarLevel place={props.place} >
                    {props.level}
                </AvatarLevel>
            </AvatarLevelBlock>
        </>
    )
}