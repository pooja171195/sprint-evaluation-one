import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.jsx';

// export function addBook(){
//   const [count,setCount]=useState(13)
//   return <div>
//     <button onClick={()=>{
//       setCount(count+1)
//     }}>Add</button>
//       <button onClick={()=>{
//         if(count>=1){
//           setCount(count-1)
//         }
      
//     }}>Subtract</button>
//       document.getElementById('addBook')
//   </div>
// }
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
