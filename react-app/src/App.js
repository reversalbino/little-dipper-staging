import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginPage from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AddPost from './components/AddPost/addPost';
import FeedPage from './components/FeedPage';
import SinglePostPage from './components/SinglePostPage';
import Footer from './components/Footer/index';
import SearchResultsPage from './components/SearchResultsPage/index';

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async() => {
        await dispatch(authenticate());
        setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/login' exact={true}>
                    <LoginPage />
                </Route>
                <Route path='/sign-up' exact={true}>
                    <SignUpForm />
                </Route>
                <ProtectedRoute path='/users' exact={true} >
                    <UsersList/>
                </ProtectedRoute>
                {/* <ProtectedRoute path='/users/:userId' exact={true} >
                    <User />
                </ProtectedRoute> */}
                <ProtectedRoute path='/' exact={true} >
                    <FeedPage />
                </ProtectedRoute>
                <ProtectedRoute path='/pictures/new' exact={true} >
                    <AddPost />
                </ProtectedRoute>
                <ProtectedRoute path='/pictures/:id'>
                    <SinglePostPage />
                </ProtectedRoute>
                <ProtectedRoute path='/search/:query'>
                    <SearchResultsPage />
                </ProtectedRoute>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
