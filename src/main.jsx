import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SidebarContextProvider } from './context/sidebarContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarContextProvider>
      <App />
    </SidebarContextProvider>
  </StrictMode>
);
