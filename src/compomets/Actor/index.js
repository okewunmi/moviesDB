import react from "react";
// styled
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({name, charater, imageurl}) => (
<Wrapper>
    <Image src={imageurl} alt= 'actor-thumb' />
    <h3> {name}</h3>
    <p>{charater}</p>

</Wrapper>
)

export default Actor;
