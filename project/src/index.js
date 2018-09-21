import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import messenger from 'longbow-messenger.js'

messenger.listen('ask_for_sum', (num1, num2)=>{
    return num1 + num2;
})
messenger.emit('ask_for_sum', 1, 2).onResponse((result, msgInfo)=>{    
    console.log('sum:', result);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
