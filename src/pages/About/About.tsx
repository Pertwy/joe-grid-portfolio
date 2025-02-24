import React from "react";
import joe from "/images/About/joseph-perkins-profile.jpeg";
import "./About.css";

const About: React.FC = () => {
  const user = "josephperkins1999";
  const domain = "gmail.com";

  return (
    <div className=" bg-white">
      <div className="imageWrapper">
        <div className=" max-w-md mx-auto mb-12 overflow-hidden">
          <img
            src={joe}
            alt="Portrait with a chihuahua"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="textWrapper space-y-6 ">
          <p className="text">
            I’m Joseph Perkins, an illustrator and comic artist from Birmingham,
            born in 1999. I hold an Illustration Degree from Falmouth University
            and now work across comics, editorial illustration, and children’s
            books.
          </p>

          <p className="text">
            My work has been published in Clunk Magazine and The European Go
            Journal. I focus on creating clear, engaging visuals that
            communicate ideas and stories effectively.
          </p>

          <p className="text">
            You can see more of my work on{" "}
            <a
              href="https://www.instagram.com/perkins.ink"
              target="_blank"
              className="instaLinksta"
            >
              Instagram
            </a>{" "}
            or get in touch at{" "}
            <a href={`mailto:${user}@${domain}`}>
              {user}@{domain}
            </a>{" "}
            if you'd like to collaborate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
