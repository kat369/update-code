import React, { useState } from "react";

function Signup() {
  const [file, setfile] = useState("Plz Choose pdf file");
  const [data, setdata] = useState({
    "name": "kathir",
    "date": "2023-05-10",
    "email" : "kat@gmail.com",
    "file" : "katcv.pdf"
  });
  const [update, setupdate] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const frmdata = new FormData(e.target);
    const value = Object.fromEntries(frmdata.entries());
    console.log(value);
  };

  const handleupdate = async (e) => {
    e.preventDefault();
    setupdate(true);
  };

  const handlecancelupdate = async (e) => {
    e.preventDefault();
    setupdate(false);
  };

  return (
    <>
      <div className="container">
        <div className="inpform">
          <form onSubmit={handlesubmit}>
            <div className="frm-group">
              <lable>Name</lable>
              <input type="text" name="name" required value={data.name}></input>
            </div>
            <div className="frm-group">
              <lable>Date</lable>
              <input type="date" name="date" required value={data.date} ></input>
            </div>
            <div className="frm-group">
              <lable>Email</lable>
              <input type="text" name="email" required value={data.email}></input>
            </div>
            {!update ? (

             <div>
               <label>Uploaded file</label>
              <div className="inpfile">
                <div className="filname">{data.file}</div>
              </div>
             </div>
            ) : (
              <div className="inpfile">
                <input
                  type="file"
                  name="file"
                  required
                  onChange={(e) => {
                    setfile(e.target.files[0].name);
                  }}
                ></input>
                <label>{file}</label>
              </div>
            )}

            <button className="sub" >
              submit
            </button>
          </form>

          <button className="subx" onClick={handleupdate}>
              Update File
            </button>

            <button className="subx" onClick={handlecancelupdate}>
              Cancel Update File
            </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
