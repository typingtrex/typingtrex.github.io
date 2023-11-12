import AboutMe from './AboutMe';
import Welcome from './Welcome';

export function Home() {
  return (
    <div>
      <div id="welcome">
        <Welcome />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
    </div>
  );
}
