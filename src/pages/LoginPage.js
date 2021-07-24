import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const LoginPage = () => {

    const history = useHistory()
    const location = useLocation()
    const previousObjectUrl = location.state?.from

    const auth = useAuth()
    const handleLogin = () => {
        auth.login()
        history.push(previousObjectUrl || '/dashboard')
    }

    return (
        <div>
            <h1>login page</h1>
            <button onClick={handleLogin}>
                Sign in
            </button>
        </div>
    )
}

export default LoginPage
