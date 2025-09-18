import styled from "styled-components";
export const StyledImg = styled.img`
 display: block;
    max-width: 200px;
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 0 auto 20px auto;
`;


export default function Home(){
    
    return(

        
         <main>
            
                <StyledImg id="profile-image" src={`/Cui.jpg`} alt="Profile img"/>
        
                <h2>About Me</h2>
                
                <p>Hello! I'm Yuqian Cui, a student pursuing a dual Bachelor of Arts in Computer Science and Economics at Boston University. I’m deeply interested in building impactful digital solutions, especially in areas like web development, algorithm design, and data-driven decision-making.</p>

                <p>Whether I’m creating clean, responsive interfaces or analyzing policy impact using econometrics, I strive to merge logic with creativity. Explore this site to learn more about my education, professional experiences, and the projects that define my growth as a technologist and creative thinker.</p>

        </main>
        
        
    );
}