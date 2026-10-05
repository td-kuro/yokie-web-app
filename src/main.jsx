import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Font Awesome webfont CSS: only the core, solid and brands styles used by the site.
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import './styles/index.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
