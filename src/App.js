import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserHome from './Pages/User/UHome';
import USignin from './Pages/Home/USignIn';
import THome from './Pages/Teacher/THome';
import ClassCard from './Pages/Teacher/ClassesCard/ClassesCard';
import UResourceList from './Pages/Teacher/ResourceList';
import PDF from './Pages/Teacher/ViewPdf';
import AddResource from './Pages/Teacher/AddResource';
import PDFUser from './Pages/User/PDFView';
import Home from './Pages/Home/Home/Home';
import UPublishList from './Pages/Teacher/Publishable';
import TResourceDel from './Pages/Teacher/Bin';
// import AddUser from './Pages/Teacher/AddStudents/AddStudents';
// import AllUsers from './Pages/Teacher/viewStudents/viewStudents';
import AddStudents from './Pages/Teacher/AddStudents';
import ViewUsers from './Pages/Teacher/viewStudents';
// import BinStudent from './Pages/Teacher/BinStudent/BinStudent';
import ViewBinUsers from './Pages/Teacher/BinStudent';
// import UpdateInfo from './Pages/User/UpdateProfile/updateProfile';
// import UProfile from './Pages/User/Profile';
import SProfile from './Pages/User/Profile';
import UProfile from './Pages/User/UpdateProfile';
// import TProfile from './Pages/Teacher/Profile/TProfile';
import TeacherProfile from './Pages/Teacher/Profile';
import UpdateTProfile from './Pages/Teacher/UpdateProfile';
import Video from './Pages/Teacher/ViewVideo';
import VIDEOUser from './Pages/User/VideoView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/User-UserSignin' element ={<USignin/>}/>
          <Route path='/UHome' element = {<UserHome/>}/>
          <Route path="/SProfile" element={<SProfile />} />
          <Route path='/Tprofile' element={<TeacherProfile />} />
          <Route path='/updateTProfile' element={<UpdateTProfile />} />
          <Route path='/UpdateProfile' element={<UProfile />} />


          <Route path="/TeacherHome" element={<THome/>} />
         {/* <Route path = "/Teacher-Signin" element={<TSignin/>}/> */}

          <Route path='/Cards' element ={<ClassCard/>}/>
          <Route path='/AddStudent' element={<AddStudents />} />
          <Route path='/ViewStudent' element={<ViewUsers />} />
          <Route path='/BinStudent' element={<ViewBinUsers />} />
          <Route path='/Resource-List' element={<UResourceList/>}/>
          <Route path='/TResourceDel-List' element={<TResourceDel />} />          
          <Route path='/Publish-List' element={<UPublishList/>}/>          
          <Route path="/pdfPage" element={<PDF />} />
          <Route path="videoPage" element={<Video/>}/>
          <Route path="/pdfUser" element={<PDFUser/>}/>
          <Route path="/videoUser" element={<VIDEOUser/>}/>
          <Route path="/TAddResource" element={<AddResource/>}/>
          {/* <Route path='/Login' element={<} /> */}

        </Routes>
      </BrowserRouter>
      <ToastContainer position= "top-center" theme='colored' />
    </div>
  );
}

export default App;
