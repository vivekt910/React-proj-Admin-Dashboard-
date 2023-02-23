import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import noImage from '../../assets/noImage.jpg'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./new.scss"

const New = ({inputs, title}) => {

   const [file, setFile] = useState("");

  return (
    <div className='new' >
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : noImage} alt="" />
          </div>
          <div className="right">

            <form>

              <div className="formInput">
                <label htmlFor='file' >
                Image: <DriveFolderUploadIcon className='icon' />
                </label>
                <input type="file" id='file' onClick={e =>setFile(e.target.files[0])
                } style={{display:
                "none"}} />
              </div>

              {inputs.map((input)=>(
              <div className="formInput" key={input.id} >
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))}

              {/* <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder='John Doe' />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='John@gmail.com' />
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder='+1 234 5678 90' />
              </div>

              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder='117, Chappan dukan, Indore, MP(IN)' />
              </div>

              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder='India' />
              </div> */}

              <button>Send</button>

            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default New