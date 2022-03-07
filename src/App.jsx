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
  const total={
    align:"center",
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
<div style={mystyle} className="addItem">
    <span style={mystyle}>Pens:</span>
    <button style={spaceC} className="addPen">
        +
    </button>
    <button style={spaceC} className="remPen">
        -
    </button>
    <span style={mystyle} className="totalPen">10</span>
</div>
<div style={mystyle} className="addItem">
    <span style={mystyle}>Notebooks:</span>
    <button style={spaceC} className="addNotebook">
        +
    </button>
    <button style={spaceC} className="remNotebook">
        -
    </button>
    <span style={mystyle} className="totalNotebook">44</span>
</div>
<div style={mystyle} className="addItem">
    <span style={mystyle}>Inkpens:</span>
    <button style={spaceC} className="addInkpen">
        +
    </button>
    <button style={spaceC} className="remInkpen">
        -
    </button>
    <span style={mystyle} className="totalInkpen">78</span>
</div>
<div style={total} className="total">1</div>
   </>
  
  );
}

export default App;
