function Resume() {
  return (
    <div className="m-auto p-10">
  <object data="resume.pdf" type="application/pdf" width="100%" height="1100px">
  <p>It appears you don't have a PDF plugin for this browser.
   No biggie... you can <a href="resume.pdf">click here to
  download the PDF file.</a></p>
  </object>
  </div>
  );
}

export default Resume;
