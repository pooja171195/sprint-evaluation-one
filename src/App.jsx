import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
  <div className="addItem">
    <span>Books:</span>
    <button className="addBook">
        +
    </button>
    <button className="remBook">
        -
    </button>
    <span className="totalBooks">1</span>
</div>
<div className="addItem">
    <span>Books:</span>
    <button className="addPen">
        +
    </button>
    <button className="remPen">
        -
    </button>
    <span className="totalPen">1</span>
</div>

   </>
  
  );
}

export default App;
