import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import { Route, Routes } from "react-router"; // if you use react-router-dom, change to "react-router-dom"
import Home from "../main/Home";
import Edu from "../main/Edu.tsx";
import Exp from "../main/Exp.tsx";
import Prj from "../main/Prj.tsx";
import Lang from "../main/Lang.tsx";

import styled, { createGlobalStyle } from "styled-components";

/* --- Global polish (font, colors, smoothing) --- */
const GlobalStyle = createGlobalStyle`
  :root{
    --bg:#EEEDE7;
    --panel:#FFFFFF;
    --ink:#1f2937;
    --muted:#6b7280;
    --accent:#3b82f6;
    --border:#e5e7eb;
    --shadow:0 8px 24px rgba(0,0,0,.06);
    --radius:16px;
  }
  *,*::before,*::after{ box-sizing:border-box; }
  html,body,#root{ height:100%; }
  body{
    margin:0;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    color:var(--ink);
    background:var(--bg);
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }
  a{ color:var(--accent); text-decoration:none; }
  a:hover{ text-decoration:underline; }
`;

/* --- Page layout --- */
const Page = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr; /* header | content | footer */
  min-height: 100vh;
  background: #EEEDE7;
`;
export const Wrapper = styled.div`
 
  display: grid;
  grid-template-columns:  280px 1fr ;
  gap: 24px;
  padding: 24px 24px 48px;
    

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 16px 16px 32px;
  }
`;

/* Keep Nav tidy on desktop; let it flow on mobile */
export const Sidebar = styled.aside`
  //position: sticky;
  //top: 16px;
  align-self: start;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px;
    

  @media (max-width: 900px) {
    position: static;
    padding: 12px;
  }
`;

/* Main content area */
export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

/* Card for routed content */
const Panel = styled.section`
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px;
  min-height: 60vh;

  @media (max-width: 900px) {
    padding: 20px;
    border-radius: 14px;
  }
`;

/* Optional header spacing under <Header/> */
const Spacer = styled.div`
  height: 8px;
`;

export default function Root() {
    return (
        <>
            <Page>
            <GlobalStyle />
            <Header />
            <Spacer />
            <Wrapper>
                <Sidebar>
                    <Nav />
                </Sidebar>

                <Container>
                    <Panel>
                        <Routes>
                            <Route path={`/`} element={<Home />} />
                            <Route path={`/education.html`} element={<Edu />} />
                            <Route path={`/experiences.html`} element={<Exp />} />
                            <Route path={`/projects.html`} element={<Prj />} />
                            <Route path={`/language.html`} element={<Lang />} />
                        </Routes>
                    </Panel>
                </Container>
            </Wrapper>
            <Footer />
            </Page>
        </>
    );
}
