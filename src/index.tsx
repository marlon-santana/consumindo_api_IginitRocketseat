/*import React from 'react'
import ReactDom from 'react-dom'
import  './style.css'
import './repositories.css'
import { RepositoryList } from './components/RepositoryList'





export function App(){
const elements = (
        <div>
        <RepositoryList />
        
        </div>

    );
    ReactDom.render( elements, document.getElementById('root'));
}
App();*/

import { render } from 'react-dom';
import { App } from './App'

render(<App />,document.getElementById('root'))

