import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
//-components
import Navbar from '../components/Navbar'
//-pages
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import DashboardPage from '../pages/DashboardPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import PaymentsPage from '../pages/PaymentsPage'
import ProfilePage from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'
// private route
import CategoriesRouter from './CategoriesRouter'
import PrivateRoute from './PrivateRoute'
import PublicRouter from './PublicRouter'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={HomePage} />
                {/* <Route exact path='/'>
                    <HomePage />
                </Route> */}
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route path='/categories' component={CategoriesRouter} />
                <Route exact path='/profile/:username' component={ProfilePage} />

                {/* components private */}
                <PublicRouter exact path='/login' component={LoginPage} />
                <PublicRouter exact path='/register' component={RegisterPage} />

                <PrivateRoute exact path='/dashboard' component={DashboardPage} />
                <PrivateRoute exact path='/payments' component={PaymentsPage} />

                <Route path='/404' component={NotFoundPage} />
                <Route path='*'>
                    <Redirect to='/404' />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
