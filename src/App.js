import AuthProvider from './auth/AuthProvider'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}

export default App
