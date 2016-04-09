import React from 'react';
import ReactDOM from 'react-dom';
import ChatBox from './chatbox';
import ActionsBox from './actions';
import List from './list';

//import AllProjects from './allProjects';

//import AllCustomersORAgents from './allcustomersOrAgents';

//import Front from './front_facer';
//import Message from './message';

//import AboveDetail from './aboveDetails';
//import ActionBox from './actionBox';

ReactDOM.render(<ChatBox isAgentSide="true"/>,document.getElementById('root'));
ReactDOM.render(<ActionsBox survey='false' report='false'/>,document.getElementById('actions'));
ReactDOM.render(<List/>,document.getElementById('sideList'));

//ReactDOM.render(<AllProjects/>,document.getElementById('root'));

//ReactDOM.render(<AllCustomersORAgents customer="false"/>,document.getElementById('root'));

//ReactDOM.render(<Message/>,document.getElementById('message'));
//ReactDOM.render(<Front/>,document.getElementById('front'));

//ReactDOM.render(<AboveDetail/>,document.getElementById('details'));
//ReactDOM.render(<ActionBox heading="ACTIONS" surveyAnswer="not available" reportAnswer="not available"/>,document.getElementById('actions'));
