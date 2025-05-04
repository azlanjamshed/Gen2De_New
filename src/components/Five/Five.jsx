import "./five.css";
import B from "../img/logo2.png";

import React from "react";

const Five = () => {
  return (
    <div className="fi">
      <div className="blog-back">
        <div className="blog-head">Services</div>
        <p className="blog-about">
          {/* Many voices, one blog. A first impression of how we tick. Also: <br />
          Developments, trends and opinions that move us in digitalwerk, but
          also <br />
          beyond. And of course a look behind the scenes - about the development
          of our projects and <br />
          work come from. */}
          Our team employs a cutting-edge and versatile tech stack to deliver
          high-performance and scalable web applications. We use
          <span> React </span>
          for building dynamic and responsive user interfaces, while
          <span> Tailwind CSS</span> enables us to design custom and efficient
          layouts. For backend development, we rely on <span> Node.js </span>and
          <span> Express</span>, ensuring robust and scalable server-side
          functionality. To manage data, we utilize both <span> MongoDB </span>
          and <span> PostgreSQL </span>, offering flexibility for
          <span> NoSQL </span>and relational database requirements. This diverse
          tech stack, complemented by other modern tools, ensures the seamless
          development, deployment, and maintenance of our applications.
        </p>
        <div className="cards">
          <div className="card-head">
            WEBSITE DESIGN AND DEVELOP
            <br />
            MENT
          </div>
        </div>
        <div className="cards-2">
          <div className="card-head-2">WEBSITE DEPLOYMENT AND MAINTENANCE</div>
        </div>
        <div className="cards-3">
          <div className="card-head-2">SEO OPTIMIZATION</div>
        </div>
        <div className="cards-4">
          <div className="card-head-2">BRANDING AND GRAPHICS</div>
        </div>
        <div className="cards-5">
          <div className="card-head-2">MOBILE RESPONSIVE WEBSITE</div>
        </div>
        <div className="cards-6">
          <div className="card-head-6">Upcoming...</div>
        </div>
      </div>
      <div className="footer">
        <p className="digi">Let's get physical or keep it digital</p>
        <h1 className="get-in">Get in touch</h1>
      </div>
      <div className="social">
        <a
          href="https://www.instagram.com/gen2de/"
          target="_blank"
          className="credit"
        >
          gen2de &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Instagram
        </a>
        <a
          href="mailto:gen2de.business@gmail.com"
          id="e-mail"
          className="credit"
        >
          gen2de.business@gmail.com &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;E-Mail
        </a>
        <a
          href="https://www.linkedin.com/in/gen2de-web-developer-and-designer-116ab1361/
"
          target="_blank"
          className="credit"
        >
          Gen2De - Web Developer and Designer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;LinkedIn
        </a>
      </div>
      <div className="copyright">
        <hr />
        <img src={B} alt="" />
      </div>
    </div>
  );
};

export default Five;
