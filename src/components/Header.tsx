import styled from "styled-components";

const StyledHeader=styled.header`
    background-color: #e3f2fd;
    padding: 20px;

    @media (max-width: 750px) {
    text-align: center;
  }
    @media (min-width: 751px) {
    text-align: left;
  }
`;

export default function Header(){
    return(
        <StyledHeader>
            <div>
            <h1>Yuqian (Nana) Cui</h1>
            <p>Welcome to my online resume!</p>
            </div>
        </StyledHeader>
    )
}