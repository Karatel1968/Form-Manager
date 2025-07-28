import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './shared/lib/store/store'
//import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
