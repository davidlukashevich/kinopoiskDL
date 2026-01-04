import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/global.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './provider/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
