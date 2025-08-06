import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import IntroContextProvider from './context/IntroContext.jsx';

createRoot(document.getElementById('root')).render(
  <IntroContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntroContextProvider>
)
