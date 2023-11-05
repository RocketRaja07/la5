import React from 'react';
import ReactDOM from 'react-dom';
import KeeperApp from './components/KeeperApp';
import './index.css'; // If you have a global CSS file
ReactDOM.render(
<React.StrictMode>
<KeeperApp />
</React.StrictMode>,
document.getElementById('root')
);
