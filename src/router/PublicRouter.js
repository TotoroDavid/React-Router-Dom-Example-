import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const PublicRouter = ({ component: Component, ...rest }) => {

    const auth = useAuth()

    return (
        <>
            <Route {...rest}>
                {!auth.isLogged() ?
                    <Component />
                    : <Redirect to='/dashboard' />
                }
            </Route>
            {/* <Route exact={props.exact} path={props.path} component={props.component} /> */}
        </>
    )
}

export default PublicRouter
