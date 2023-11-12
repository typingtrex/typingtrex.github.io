import AboutMe from './AboutMe';
import Welcome from './Welcome';
import { Contact } from './Contact';

export function Home() {
  return (
    <div>
      <div id="welcome">
        <Welcome />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
