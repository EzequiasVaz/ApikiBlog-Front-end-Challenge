import { Route, Routes } from 'react-router-dom'
import { LoadingPage } from './components/Loadings/LoadingPage'
import { APIContextProvider } from './contexts/apiContext'
import Home from './pages/Home'
import PostContent from './pages/PostContent'


export function App() {

  return (
    <APIContextProvider>
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path={'/:slug/'} element={
          <PostContent />
        }
        />
      </Routes>
    </APIContextProvider>
  )

}

