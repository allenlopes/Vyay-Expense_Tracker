import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="f1db262f-61fa-480b-a544-1b5252e10e42" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);
