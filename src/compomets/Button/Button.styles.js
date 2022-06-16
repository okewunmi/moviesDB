import styled from "styled-components";
export const Wrapper = styled.button`
display: block;
background:var(--darkGrey);
width:25%;
min-width: 200px;
height: 60px;
border-radius: 30px;
color:var(--white);
border: 0;
margin: 20px auto;
font-size: var(--fontBig);
cursor: pointer;
transition: all .3s;
outline:none;

:hover{
   opacity: .8; 
}


`;