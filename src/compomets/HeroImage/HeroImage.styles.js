

import styled from "styled-components";

export const Wrapper = styled.div`
background:linear-gradient(
    to bottom, rgba(0,0,0,0) 41%,
    rgba(0,0,0,0.65) 100%
), 
url(${({image}) => image}), var(--darkGrey);
background-size:100%, cover;
background-position: center;
height:500px;
position: relative;
animation:animatHeroImage 1s;

@keyframes animatHeroImage
{
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
}
`;
export const Content = styled.div`
padding:20px;
margin: 0 auto;
max-width: var(--maxWidth);
`;

export const Text = styled.div`
z-index:100;
max-width: 700px;
position:absolute;
bottom: 40px;
color:var(--white);
margin-right:20px;
min-height:100px;


h1{
    font-size: var(--fontSuperBig);

    @media screend and (max-width: 720px){
        front-size: var(--fontBig);
    }
}
p{
    font-size: var(--fontMed);
    @media screend and (max-width: 720px){
        front-size: var(--fontSmall);
    }
}
@media screend and (max-width: 720px){
    max-width: 100%;
}
`;