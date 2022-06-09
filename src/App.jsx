import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Leads from './pages/Leads';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import Messages from './pages/Messages';

function App() {
  const [getclients, setGetclients] = useState([]);
  const [getMessageId, setGetMessageId] = useState('');

  useEffect(() => {
    const clienteLS = localStorage.getItem('messageId') ?? '';
    if (clienteLS !== '') {
      setGetMessageId(clienteLS);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              setGetclients={setGetclients}
              setGetMessageId={setGetMessageId}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path='leads' element={<Leads getclients={getclients} />} />
          <Route
            path='messages'
            element={
              <Messages
                getMessageId={getMessageId}
                setGetMessageId={setGetMessageId}
                getclients={getclients}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
