function EwillHeader() {
  return (
    <>
      <div className="row header ">
        <div className="first-bubble"></div>
        <div className="sec-bubble"></div>
        <div className="white-sea"></div>
        <div className="col-12 d-flex flex-column align-items-center header-content-area">
          <h1 className="header-title text-center text-white">
            There is no one
          </h1>
          <h2 className="header-stitle text-center text-white">
            who loves pain
          </h2>

          <a href="#thisform">
            <div className="form-btn text-center text-white">FORM</div>
          </a>

          <div className="header-content d-flex flex-column justify-content-center ">
            <img src="images/sup.svg" alt="sup" className="sup" />
            <img src="images/sup2.svg" alt="sup2" className="sup-sec" />
            <img src="images/fire.svg" alt="fire" className="fire" />
            <div className="header-content-title d-flex justify-content-center">
              <p className="m-0 align-self-center text-center">paragrph</p>
            </div>
            <ol className="header-first-content-text">
              <li>
                <p className="m-0">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                </p>
              </li>
            </ol>
            <div className="header-content-title d-flex justify-content-center">
              <p className="m-0 align-self-center text-center">paragrph</p>
            </div>
            <ol className="header-sec-content-text m-0">
              <li>
                Quisque sodales leo{" "}
                <span className="header-content-span txd-underline">
                  vitae vulputate auctor.
                </span>
              </li>
              <li>
                Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra
                libero a pellentesque blandit.
              </li>
              <li>
                Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
              </li>
              <li>
                Donec ultrices sapien{" "}
                <span className="header-content-span">
                  vitae leo venenatis ullamcorper.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 g-0">
          <div className="sea-area">
            <img src="images/longsea.png" alt="sea" className=" sea" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EwillHeader;