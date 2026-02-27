import './App.css'
import Title from "./Title.jsx"
import ProductTab from './ProductTab.jsx';
import MsgBox from './msgbox.jsx';

function App() {
  return (
    <>
    <MsgBox name="Aaryan" textColor="red"/>
    <MsgBox name="Aman" textColor="green"/>

    <ProductTab/>
    </>
  );
}

export default App
