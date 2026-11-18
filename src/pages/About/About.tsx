import React from "react";
import joe from "/images/About/joseph-perkins-profile.webp";
import "./About.css";

const About: React.FC = () => {
  const user = "josephperkins1999";
  const domain = "gmail.com";

  return (
    <div>
      <div className="imageWrapper">
        <div className=" max-w-2xl mx-auto mb-12 overflow-hidden">
          <img
            src={joe}
            alt="Joseph Perkins smiling outside a wooden barn"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="textWrapper space-y-6 ">
          <p className="text">
            Hello, I’m Joe Perkins, an illustrator and software engineer based
            in Manchester.
          </p>

          <p className="text">
            The silly cartoon business may seem jovial, but know I approach any
            commission with military discipline and precision. I have been
            enlisted to create children’s books, editorial illustrations and
            book covers. I am always up for trying new things, so if you have an
            idea that I haven’t previously made, please feel free to contact me
            as I’m sure I could give it a go.
          </p>

          <p className="text">
            I’m currently open to commissions. If you’d like to work together,
            I’d love to hear from you at{" "}
            <a href={`mailto:${user}@${domain}`}>
              {user}@{domain}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
