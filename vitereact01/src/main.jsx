import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page from './Page.jsx';



const anotherElement = "Coffee Rs 20";
/**
 * first param - tag name
 * second param - attributes as Json
 * third param - innerHTML content
 * fourth param - variable injection
 */
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherElement
)

const anotherElement2 = (
  <a href='https://youtube.com' target='_blank'>Visit YouTube</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
  // here we are passing object as parameter
  // reactElement

  
    <React.StrictMode>
    <Page />
   </React.StrictMode>

)
