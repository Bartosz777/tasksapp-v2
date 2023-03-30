import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskContextProvider } from './context/TaskContext'
import { AuthContextProvider } from './context/AuthContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
);
