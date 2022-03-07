import logo from './logo.svg';
import './App.css';
function App(){
  const [count1,setCount1] = useState(13)
  const [count2,setCount2] = useState(10)
  const [count3,setCount3] = useState(44)
  const [count4,setCount4] = useState(78)
  const [total,setTotal] = useState(145)
  return(
    <div className='body'>
      <div className='additems'>
        <span>Books:</span>
        <button  style={spaceC} className="addBook" onClick={()=>{
          setCount1(count+1)
          setTotal(total+1)
        }}>
        +
    </button>
    <button  style={spaceC} className="remBook" onClick={()=>{
      setCount1(count-1)
      setTotal(total-1)
    
    }}>
        -
    </button>
        </div>
      </div>
  )
}

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
  <div  className="addItem">
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
    <span style={mystyle}>Pens:</span>
    <button style={spaceC} className="addPen">
        +
    </button>
    <button style={spaceC} className="remPen">
        -
    </button>
    <span style={mystyle} className="totalPen">10</span>
</div>
<div  className="addItem">
    <span style={mystyle}>Notebooks:</span>
    <button style={spaceC} className="addNotebook">
        +
    </button>
    <button style={spaceC} className="remNotebook">
        -
    </button>
    <span style={mystyle} className="totalNotebook">44</span>
</div>
<div  className="addItem">
    <span style={mystyle}>Inkpens:</span>
    <button style={spaceC} className="addInkpen">
        +
    </button>
    <button style={spaceC} className="remInkpen">
        -
    </button>
    <span style={mystyle} className="totalInkpen">78</span>
</div>
<span style={mystyle}>Total Items:</span>
<div style={total} className="total">1</div>
   </>
  
  );
}

export default App;
