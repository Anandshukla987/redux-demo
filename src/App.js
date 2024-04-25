import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from './redux/fileSlice';

function App() {
  const dispatch = useDispatch()
  const fileData = useSelector(state => state.file?.data)
  const [inputData, setInputData] = useState('');

  return (
    <>
      <div className="App">
        <input type="text" onChange={(e) => { setInputData(e.target.value) }} value={inputData} />
        <button onClick={() => dispatch(updateData(inputData))}>Set data in redux</button>
      </div>

      <div className="App">
        <p>{fileData ? fileData : "set value in redux using above input field"}</p>
      </div>
    </>
  );
}

export default App;
