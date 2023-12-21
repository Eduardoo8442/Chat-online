import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/index.jsx';
import { Provider } from 'react-redux';
import store from './store/store';
import Chat from './components/Chat/index.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}> 
 <BrowserRouter>
  <App />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
  </Provider>,
)
