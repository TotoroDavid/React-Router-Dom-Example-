import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const auth = useAuth()
    const location = useLocation()

    return (
        <>
            <Route {...rest}>
                {auth.isLogged() ?
                    <Component />
                    : <Redirect to={{ pathname: '/login', state: { from: location } }} />
                }
            </Route>
            {/* <Route exact={props.exact} path={props.path} component={props.component} /> */}
        </>
    )
}

export default PrivateRoute
