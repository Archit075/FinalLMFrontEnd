import axios from 'axios';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
// import { toast } from 'react-toastify'
import { UrlResources } from '../../../config'
import './AddResource.css'
import { logDOM } from '@testing-library/react';


function TAddResource() {
    const [ResourceName, setResourceName] = useState("");
    const [ResourceCategory, setResourceCategory] = useState("");
    const [PdfFile, setPdfFile] = useState("");
    const { standard } = sessionStorage;

    
    const navigate = useNavigate()


    const addResource = () => {
      if (ResourceName.length === 0) {
        // toast.warning('please enter resource name')
        console.log("please enetr resource name");
      } else if (ResourceCategory.length === 0) {
        // toast.warning('Please enter resource category')
        console.log("Please enter resource category");
      } else if (standard.length === 0) {
        // toast.warning('Please enter standard')
        console.log("Please enter standard");
      } else if (PdfFile.length === 0) {
        // toast.warning('Please upload pdf file')
        console.log("Please upload pdf file");
      } else {
        const data = new FormData()
        data.append('ResourceName', ResourceName)
        data.append('ResourceCategory', ResourceCategory)
        data.append('Standard', standard)
        data.append('PdfFile', PdfFile)
        
        const url = `${UrlResources}/api/Pdf`
       
         axios.post(url, data).then((response) => {
          console.log('hello')
          const result = response.data
          console.log(result)
          console.log("Status code is : "+result['statusCode']);
          if(result['statusCode'] === 1) {
            // toast.success('resource successfully added')
            console.log("resource successfully added");

            navigate('/Resource-List', { state: { classtd: standard } })
          } else {
            // toast.error("something went wrong!!!")
            console.log("something went wrong");
          }
        })
      }
    }

    
  return (
    <div className="container">
      <h1 className="title" style={{padding: "50px"}}>Add Resource</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">


          <div className="form" style={{height: " 300px", width: "400px", borderRadius: "30px",backgroundColor: "#E18E56"}}>

            <div className="mb-3">
              <label  
                style={{alignItems: "center", justifyContent:"center", fontWeight: "bold"}}
                className="label-control">
                Resource Name
              </label>
              <input style={{position: "relative", left:"75px" , width: "250px",}}
                onChange={(e) => {
                  setResourceName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label  
                style={{alignItems: "center", justifyContent:"center", fontWeight: "bold"}}
                className="label-control">
                Resource Category
              </label>
              <input
                style={{position: "relative", left:"75px" , width: "250px",}}
                onChange={(e) => {
                  setResourceCategory(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label 
                style={{alignItems: "center", justifyContent:"center", fontWeight: "bold"}}
                htmlFor="" className="label-control">
                Standard 
              </label>
              <input
                style={{position: "relative", left:"75px" , width: "250px",}}
                value={standard}
                type="text"
                className="form-control"
              />
            </div>




            <div className="mb-3">
              <label 
                style={{alignItems: "center", justifyContent:"center", fontWeight: "bold"}}
                htmlFor="" className="label-control">
                Resource 
              </label>
              <input
                style={{position: "relative", left:"75px" , width: "250px",}}
                onChange={(e) => {
                  setPdfFile(e.target.files[0]);
                }}
                accept='pdf/*'
                type="file"
                className="form-control"
              />
            </div>

           
            <div className="mb-3">
              <button  onClick={addResource} className="btn btn-primary">
                Add
              </button>
            </div>
          </div>


        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default TAddResource;
