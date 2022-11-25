import styled from 'styled-components';

const StyledButton = styled.button`
        width:100%;
        padding: 0 26px;
        margin-right: 2.5rem;
        display: inline-block;
        height:54px;
        border-radius: 10px;
        background-color: rgb(255,100,0);
        color:#fff;
        font-size: .875rem;
        font-weight: 700;
        text-align: center;
        line-height: 54px;
        cursor: pointer;
        transition: background-color .2s ease-in-out, color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;
        box-shadow: 3px 5px 10px 0 rgb(62 63 94 / 20%);
        
        &:hover {
            background-color: rgb(255,160,0);
        }
    `;

const Button = props => <StyledButton {...props}/>;

export default Button;