import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: #E7D2CC; /* sidebar background */
    padding: 20px;

    @media (min-width: 751px) {
        flex: 0 0 260px;
        max-width: 260px;
    }
`;

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;

    @media (min-width: 751px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const NavButton = styled(Link)`
    display: block;
    padding: 12px 16px;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;

    background: #acaab1; /* button background */
    color: ghostwhite; /* button text */
    border: 1px solid #868B8E; /* subtle border */
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        background: #868B8E; /* darker on hover */
        color: #EEEDE7; /* keep light text */
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <NavList>
                <li><NavButton to="/">Home</NavButton></li>
                <li><NavButton to="/education.html">Education</NavButton></li>
                <li><NavButton to="/experiences.html">Experience</NavButton></li>
                <li><NavButton to="/projects.html">Technical Projects</NavButton></li>
                <li><NavButton to="/language.html">Languages</NavButton></li>
            </NavList>
        </StyledNav>
    );
}
