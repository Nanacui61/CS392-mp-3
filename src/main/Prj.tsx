
import Calc from "../main/Calc";
// import "./Calculator.css"; 

export default function Prj(){

    return(
        <main>
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