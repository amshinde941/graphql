import React from 'react'
import CreateLink from './CreateLink';
import Header from './Header';
import{ Switch, Route} from 'react-router-dom';
import Linklist from './LinkList';
import Login from './Login';

const App = () =>(
    <div className="center w85">
        <Header/>
        <div className="ph3 pv1 background-gray">
            <Switch>
                <Route exact path="/" component={Linklist}/>
                <Route exact path="/create" component={CreateLink}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </div>
    </div>
)

export default App;