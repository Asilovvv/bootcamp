import './App.css'
import Router from '../src/root/Router'
import { AuthProvider } from './contexts/AuthContexts'
import LogButton from './components/LogButton/LogButton'

function App() {
  
  return (
    <>
    <AuthProvider>
      <Router/>
    </AuthProvider>
    </>
  )
}

export default App
