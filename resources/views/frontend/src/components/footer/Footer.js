import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white big-padding pb-0">
        <div className="container-xl ">
          <div className="row">
            <div className="col-md-4">
              <div className="aboutcol bg-gray fs-7 bg-dark shadow-lg p-5">
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
                <p className="mb-2">
                  Rerit libero pellentesque libero interdum, id mattis felis
                  dictum. Praesent eget lacus tempor justo efficitur malesuada.
                  Cras ut suscipit nisi.
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  hendrerit libero pellentesque libero interdum, id mattis felis
                  dictum. Praesent eget lacus tempor justo efficitur malesuada.
                  Cras ut suscipit nisi.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2 text-center text-primary">
                      <i className="bi fs-1  bi-geo-alt"></i>
                    </div>
                    <div className="col-md-10">
                      <h5 className="text-light fw-bolder fs-3">
                        Coimbatore, Tamilnadu
                      </h5>
                      <p className="fs-6">1010 Grand Avenue</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2 text-center text-primary">
                      <i className="bi fs-1 bi-telephone-inbound"></i>
                    </div>
                    <div className="col-md-10">
                      <h5 className="text-light fw-bolder fs-3">
                        +987 3123 9210 787
                      </h5>
                      <p className="fs-6">Give us Call</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pt-5">
                  <h4 className="fs-5 fw-bolder text-white">Useful Links</h4>
                  <ul className="row">
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="/">
                        {" "}
                        Home
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="/about">
                        {" "}
                        About Us
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="/services">
                        {" "}
                        Services
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="/blog">
                        {" "}
                        Blog
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="/contact">
                        {" "}
                        Contact Us
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="">
                        {" "}
                        Features
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="">
                        {" "}
                        Privacy Policy
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="">
                        {" "}
                        Refund Policy
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="">
                        {" "}
                        Gallery
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder text-decoration-none" href="">
                        {" "}
                        Albums
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6  pt-5">
                  <h4 className="fs-5 fw-bolder text-white">Useful Links</h4>

                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam justo neque, vehicula eget eros.{" "}
                  </p>

                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control mb-0"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text bg-primary"
                        id="basic-addon2"
                      >
                        <i className="bi text-white bi-send"></i>
                      </span>
                    </div>
                  </div>

                  <ul className="text-white pt-1 float-end">
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-facebook"></i>
                    </li>
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-twitter"></i>
                    </li>
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-instagram"></i>
                    </li>
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-linkedin"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy">
        <div className="container">
          <a href="https://www.smarteyeapps.com/" className="text-decoration-none">
            2022 &copy; All Rights Reserved | Designed and Developed by
            Smarteyeapps.com
          </a>

          <span>
            <a href="">
              <i className="bi bi-github"></i>
            </a>
            <a href="">
              <i className="bi bi-google"></i>
            </a>
            <a href="https://in.pinterest.com/prabnr/pins/">
              <i className="bi bi-pinterest"></i>
            </a>
            <a href="https://twitter.com/prabinraja89">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.facebook.com/freewebtemplatesbysmarteye">
              <i className="bi bi-facebook"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
