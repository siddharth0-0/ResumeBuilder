import React from 'react'
import { PDFExport } from '@progress/kendo-react-pdf';
import classes from "./Preview.module.css";

const Preview = () => {

  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const check = JSON.parse(localStorage.getItem('personalData'));

  return (
    <>
      {console.log('da', typeof(check))}
      <button onClick={exportPDFWithComponent}>
        Export with component
      </button>
      <PDFExport ref={pdfExportComponent} paperSize="A4" margin={40} fileName={'sample'} multiPage={"false"}>
        <div className={classes.previewWrap}>
          {check.map((item) => {
            return (
              <div className={classes.headWrap}>
                <h2>Siddharth Agrawal</h2>

                <div className={classes.info}>
                  <p>c23, vasnat vihar | Indore</p>
                  <p>agrawalsid05@gmail.com</p>
                  <p>+91 9109919280</p>
                  <p>github.com/siddharth0-0</p>
                  <p>github.com/siddharth0-0</p>
                </div>
              </div>
            )
          })}


          <div className="detailWrapper">
            <div className="main-edu-wrap">
              <h3>Education History</h3>
              <div className="edu-wrap">
                <h4>St. Arnold Hr. Sec School</h4>
                <p>Degree</p><p>Stert - End Month</p>
              </div>
              <div className="edu-wrap">
                <h4>St. Arnold Hr. Sec School</h4>
                <p>Degree</p><p>Stert - End Month</p>
              </div>
            </div>
            <div className="main-exp-wrap">
              <h3>Experience</h3>
              <div className="exp-history">
                <h4>Company Name</h4>
                <p>Position Name</p> <p>Place</p> <p>From - End Month</p>
                <p>Decription <br />second line <br />third line</p>
              </div>
              <div className="exp-history">
                <h4>Company Name</h4>
                <p>Position Name</p> <p>Place</p> <p>From - End Month</p>
                <p>Decription <br />second line <br />third line</p>
              </div>
              <div className="exp-history">
                <h4>Company Name</h4>
                <p>Position Name</p> <p>Place</p> <p>From - End Month</p>
                <p>Decription <br />second line <br />third line</p>
              </div>
              <div className="exp-history">
                <h4>Company Name</h4>
                <p>Position Name</p> <p>Place</p> <p>From - End Month</p>
                <p>Decription <br />second line <br />third line</p>
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </>
  )

};

export default Preview