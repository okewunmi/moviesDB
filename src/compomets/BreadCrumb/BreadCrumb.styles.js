import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
width:100%;
height:70px;
background:var(--MedGrey);
color:var(--white); 
`
export const Content = styled.div`
display:flex;
padding: 0 20px;
max-width: var(--maxWidth);
width:100%;

span{
    font-size:var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and  (max-width: 768px){
        font-size: var(--fontsmall);  
    }


}


`
