import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import "./Single-page.css";
import { UrlResources } from "../../../config";
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  const { state } = useLocation();

  const { pdfName } = state;

  console.log("book pdf is :" + pdfName);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(pageNumber);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <PDFDocumentWrapper >
        <Document
          file={`${UrlResources}/api/Pdf/get/pdf/` + pdfName}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </PDFDocumentWrapper>
      <div className="btndiv">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          class="btn btn-primary"
          id="btnn"
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          id="btnn"
          class="btn btn-primary"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const PDFDocumentWrapper = styled.div`
  canvas {
    width: 600px !important;
    height: 800px !important;
    margin-top: 90px;
    marfin-bottom: 90px;
    margin-right: 300px;
    margin-left: 330px;

  }
`;
