import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'antd/dist/antd.css'

//import screens
import SignUp from './screen/SignUp/SignUp'
import AddBill from './screen/AddBill/AddBill'
import ViewReport from './screen/ViewReport/ViewReport'


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<SignUp />}/> 
          <Route path="/add-bill" element={<AddBill />}/> 
          <Route path="/view-report" element={<ViewReport />}/> 
      </Routes>
    </Router>
  );
}

export default App;
