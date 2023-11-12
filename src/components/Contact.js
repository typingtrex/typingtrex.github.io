import React from 'react';
import { Linkedin, Github, EnvelopePaperHeart } from 'react-bootstrap-icons';

export function Contact() {
  return (
    <div classname="container">
      <h2>Let's connect!</h2>
      <p>
        I received a lot of insight from many coffee chats, and I'd love to give
        back. Reach out for talks about transitioning to tech, interviewing, and
        coding!
      </p>
      <div className="iconContainer">
        <a href={'https://www.linkedin.com/in/ji-young-kim/'}>
          <Linkedin className="icon" />
        </a>
        <a href={'https://github.com/typingtrex'}>
          <Github className="icon" />
        </a>
        {/* <a href={resume}>
          <FilePerson className="icon" />
        </a> */}
        <a href={'mailto: jiyoung.kimmy@gmail.com'}>
          <EnvelopePaperHeart className="icon" />
        </a>
      </div>
    </div>
  );
}
