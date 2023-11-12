import React from 'react';
import {
  Linkedin,
  Github,
  EnvelopePaperHeart,
  CalendarHeartFill,
} from 'react-bootstrap-icons';
import '../styles/contact.css';
import { HeartFill } from 'react-bootstrap-icons';

export function Contact() {
  return (
    <div className="contactContainer">
      <h2>Let's connect!</h2>
      <p>
        I'm always thankful for all the coffee chats I received as I waded for
        insight as a junior dev. I'd love to connect and give back :) Please
        reach out for calls about career transitions, coding bootcamps, and
        bugs!
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
        <a href={'https://calendly.com/jiyoung-kimmy/30min'}>
          <CalendarHeartFill className="icon" />
        </a>
      </div>
    </div>
  );
}
