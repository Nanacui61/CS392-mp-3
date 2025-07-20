import {Link} from "react-router"
import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: #bbdefb;
  padding: 20px;

  @media (min-width: 751px) {
    flex: 0 0 30%;
    max-width: 30%;
  }
`;

export const StyledUl = styled.ul`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 751px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 750px) {
  nav ul {
    flex-direction: row;
    justify-content: center;
  }
}
`;

export const StyledLi = styled.li`
  margin: 10px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
`;
export default function Nav(){

    return(

        <StyledNav>
           <nav>
                
                <ul>
                <StyledUl>
                <StyledLi><li><Link to={`/`}>Home</Link></li> </StyledLi>
                <StyledLi><li><Link to={`/education.html`}>Education</Link></li></StyledLi>
                <StyledLi> <li><Link to={`/experiences.html`}>Experience</Link></li></StyledLi>
                <StyledLi><li><Link to={`/projects.html`}>Technical Projects</Link></li></StyledLi>
                <StyledLi><li><Link to={`/language.html`}>language</Link></li></StyledLi>
                </StyledUl>
                </ul>
                
            </nav>
        
        </StyledNav>
    )
}