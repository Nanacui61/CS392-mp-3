import Header from "./Header.tsx"
import Nav from "./Nav.tsx"
import Footer from "./Footer.tsx"
import { Route, Routes } from "react-router"
import Home from "../main/Home"
import Edu from "../main/Edu.tsx"
import Exp from "../main/Exp.tsx"
import Prj from "../main/Prj.tsx"
import Lang from "../main/Lang.tsx"


import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: #e8f5e9;
  min-height: 100vh;
   display: flex;
  flex-direction: column;

  @media (min-width: 751px) {
    flex-direction: row;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding:20px;
    display: flex;
    flex-direction: row;
    
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
       
`;


export default function Root(){

    return(

        <>
        <Header/>
        <Wrapper>
        <Nav/>
        
      <Container>
        <Routes>
            <Route
                path={`/`}
                element={<Home/>}
            />
            <Route
                path={`/education.html`}
                element={<Edu/>}
            />
            <Route
                path={`/experiences.html`}
                element={<Exp/>}
            />
            <Route
                path={`/projects.html`}
                element={<Prj/>}
            />
            <Route
                path={`/language.html`}
                element={<Lang/>}
            />
        </Routes>
        </Container>
        </Wrapper>
        <Footer/>
        


        
        </>
    );
}