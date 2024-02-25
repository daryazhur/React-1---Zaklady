import { createRoot } from 'react-dom/client';
//import { HomePage } from './pages/HomePage';

import './global.css';

import { HomePage } from './components/HomePage';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
