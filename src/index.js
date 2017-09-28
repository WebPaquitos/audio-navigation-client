import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import PromiseMiddleware from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import { Main } from './components/elements';
import Footer from './components/footer';
import Home from './components/home';
import Gallery from './components/gallery';
import Contacts from './components/contacts';
import NotFound404 from './components/not_found';
import Jarvis from './containers/jarvis';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware)(createStore);
const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const JarvisWithRouter = withRouter(Jarvis);

ReactDOM.render(
    <Provider key="main" store={store}>
        <Router>
            <div className="app">
                <Header/>
                <Main>
                    <Switch>
                        <Redirect from="/home" to="/"/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route component={NotFound404}/>
                    </Switch>
                </Main>
                <JarvisWithRouter/>
                <Footer/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
