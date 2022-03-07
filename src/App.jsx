import logo from './logo.svg';
import './App.css';

function App() {
  const mystyle={
    color:"black",
    padding: "40px",
    margin: "10px",

  }
  const spaceC={
margin: "30px",
  }
  return (
   <>
  <div style={mystyle} className="addItem">
    <span style={mystyle}>Books:</span>
    <button  style={spaceC} className="addBook">
        +
    </button>
    <button  style={spaceC} className="remBook">
        -
    </button>
    <span style={mystyle}  className="totalBooks">13</span>
</div>
<div className="addItem">
    <span>Pens:</span>
    <button className="addPen">
        +
    </button>
    <button className="remPen">
        -
    </button>
    <span className="totalPen">10</span>
</div>
<div className="addItem">
    <span>Notebooks:</span>
    <button className="addNotebook">
        +
    </button>
    <button className="remNotebook">
        -
    </button>
    <span className="totalNotebook">44</span>
</div>
<div className="addItem">
    <span>Inkpens:</span>
    <button className="addInkpen">
        +
    </button>
    <button className="remInkpen">
        -
    </button>
    <span className="totalInkpen">78</span>
</div>
<div className="total">1</div>
   </>
  
  );
}

export default App;
