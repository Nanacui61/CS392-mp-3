
import Calc from "../main/Calc";
// import "./Calculator.css"; 

export default function Prj(){

    return(
        <main>
            <section>
                <h2>Ravenous — Yelp-Powered Restaurant Search App</h2>
                <p><em>Developer</em> | August 2025</p>

                <ul>
                    <li>Built a full-stack web app that allows users to search for local restaurants, filter results by location, category, and sort criteria, and view real-time business data via the Yelp Fusion API.</li>
                    <li>Implemented modular React components with state management to handle dynamic search, filtering, and data rendering.</li>
                    <li>Integrated secure API key handling (moved credentials to .env) and deployed the project using Vercel for production readiness.</li>
                    <li>Designed responsive UI with reusable CSS components, improving user experience and cross-device accessibility.</li>
                </ul>
            </section>
            <section>
                <h2>Entity Hunt Web Game </h2>
                <p><em>Developer</em> | August 2025</p>
                <p><a href="https://final-project-opal-one.vercel.app/" target="_blank">Project Link</a></p>
                <ul>
                    <li> Designed and developed a narrative-driven point-and-click puzzle game using Next.js, TypeScript, and MongoDB.</li>
                    <li>Implemented dynamic grid logic, contextual message updates, and glitch-style UI effects using styled-components
                        and CSS animations.</li>
                    <li>Created persistent game state tracking and automatic recording of win/loss data to a MongoDB backend.</li>
                    <li>Deployed fully responsive and stylized game UI to Vercel, incorporating client/server rendering and secure API
                        routing.</li>
                </ul>
            </section>
        <section>
          <h2>Smart Meals Recipe App</h2>
          <p><em>Developer</em> | June 2025</p>
          <p><a href="https://cs-webapps.bu.edu/yqcui/project/" target="_blank">Project Link</a></p>
          <ul>
            <li>Built a full-stack Django application using MVC architecture, with HTML/CSS templates and JavaScript for interactive UI.</li>
            <li>Designed relational database models with SQLite and Django ORM; implemented user authentication and modular OOP structure across views, forms, and models.</li>
            <li>Created a custom recipe recommendation algorithm based on ingredient availability and expiration dates; integrated external APIs and dynamic grocery list generation.</li>
          </ul>
        </section>
    
        <section>
          <h2>Mini Facebook Web App</h2>
          <p><em>Developer</em> | June 2025</p>
          <p><a href="https://cs-webapps.bu.edu/yqcui/mini_fb/" target="_blank">Project Link</a></p>
          <ul>
            <li>Built a Django-based social platform with MVC architecture, supporting user registration, profile creation, and friend connections.</li>
            <li>Implemented core features including news feed generation, image uploads, and status updates using Django models, forms, and authentication system.</li>
            <li>Applied access control and ownership filtering to enforce data privacy; designed modular, reusable views and templates.</li>
          </ul>
        </section>
    
        <section id="calculator">
        <h2>JavaScript Calculator</h2>
        <Calc />
      </section>
    </main>
    );
}