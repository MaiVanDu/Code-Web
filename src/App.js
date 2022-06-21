import './static/css/app.css';
import './static/css/global.css';
import './pages/auth/index.css';

import { BrowserRouter } from "react-router-dom";
import RouterClient from './router/RouterClient';
function App() {
  return (
    <BrowserRouter>
      <RouterClient />
    </BrowserRouter>
  );
}

export default App;
