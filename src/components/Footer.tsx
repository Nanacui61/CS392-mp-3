import {Link} from "react-router"
import styled from "styled-components";
    
const StyledFooter=styled.footer`
background-color: #868B8E;
  text-align: center;
  padding: 15px;
  font-size: calc(12px + 0.3vw);
`

export default function Footer(){

    return(

        <StyledFooter>
         <footer>
            <p>&copy; 2025 Yuqian Cui. All rights reserved. <Link to="credits.html">Credits</Link></p>
        </footer>  
        
        </StyledFooter>
    )
}