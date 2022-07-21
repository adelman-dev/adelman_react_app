import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Button, Container, Form, Header, Icon, Segment, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Button>
            Click this shit
        </Button>
        <div class="ui animated button" tabindex="0">
            <div class="visible content">Next</div>
            <div class="hidden content">
                <i class="right arrow icon"></i>
            </div>
        </div>
        <div class="ui labeled button" tabindex="0">
            <div class="ui red button">
                <i class="heart icon"></i> Like
            </div>
            <a class="ui basic red left pointing label">
                1,048
            </a>
        </div>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
