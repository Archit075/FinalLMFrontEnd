import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserHome from './Pages/User/UHome';
import USignin from './Pages/Home/USignIn';
import SProfile from './Pages/User/Profile';
import THome from './Pages/Teacher/THome';
import ClassCard from './Pages/Teacher/ClassesCard/ClassesCard';
import UResourceList from './Pages/Teacher/ResourceList';
import PDF from './Pages/Teacher/ViewPdf';
import AddResource from './Pages/Teacher/AddResource';
import PDFUser from './Pages/User/PDFView';
import Home from './Pages/Home/Home/Home';
import UPublishList from './Pages/Teacher/Publishable';
import TResourceDel from './Pages/Teacher/Bin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/User-UserSignin' element ={<USignin/>}/>
          <Route path='/UHome' element = {<UserHome/>}/>
          <Route path="/SProfile" element={<SProfile />} />


          <Route path="/TeacherHome" element={<THome/>} />
         {/* <Route path = "/Teacher-Signin" element={<TSignin/>}/> */}

          <Route path='/Cards' element ={<ClassCard/>}/>
          <Route path='/Resource-List' element={<UResourceList/>}/>
          {/* <Route path='/TResourceDel-List' element={<TResourceDel />} />           */}
          <Route path='/Publish-List' element={<UPublishList/>}/>          
          <Route path="/pdfPage" element={<PDF />} />
          <Route path="/pdfUser" element={<PDFUser/>}/>
          <Route path="/TAddResource" element={<AddResource/>}/>

        </Routes>
      </BrowserRouter>
      <ToastContainer theme='colored'/>
    </div>
  );
}

export default App;
