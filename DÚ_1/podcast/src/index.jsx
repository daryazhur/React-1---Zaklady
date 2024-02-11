import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import {Episode} from "./component/Epizodes/epizoda";

const episodes = [
  { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
  { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
  { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
  { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
  { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
  { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
  { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
  { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
];

const App = () => (
  <div className='container'>
  <div className="app">
    <h1 className="app__title">Epizody podcastu</h1>
    <div className="app__episodes">
      {episodes.map((episode) => (
        <Episode
          key={episode.num} 
          num={episode.num}
          title={episode.title}
          guest={episode.guest}
        />
      ))}
    </div>
  </div>
  </div>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);



