import styled from "styled-components";

export const Spinner = styled.div`
border: 5px solid var(--lightGray);
border-top: 5px solid var(--MedGrey);
border-radius: 50%;
width: 50px;
height: 50px;

animation: animateSpinner .8s linear infinite;
margin: 20px auto;

@keyframes animateSpinner {
    0% {
         transform: rotate(0deg); 
    }
    100% {
        transform: rotate(360deg);
    }

}
`;
