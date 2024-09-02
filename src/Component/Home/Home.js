import { Row, Col, Tooltip } from "antd";
import React from "react";
import portfolio from "../../asset/photo.jpeg";
import linkedin from "../../asset/linkedin.png"
import phone from "../../asset/phone.png"
import mail from "../../asset/email.png"
function Home() {
  return (
    <Row className="container" style={{backgroundColor:"#454679"}}>
        {/* <div className="container h-96 flex justify-center items-center mt-24 md:mt-5 sm:mt-20"> */}
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <div className="flex justify-center items-center h-full">
            <div className="text-center font-bold text-4xl text-white">
              <div>
                Hey,I am
                <span className="" style={{color:"#ffc900"}}> AJITH C</span>
              </div>
              <div></div>
              <div>Frontend Developer</div>
            <div className="text-sm text-center mt-2">
            Frontend Developer with over 2.6 years of experience in React and SPFx, specializing in
 creating user-centric web applications. Seeking to leverage my skills in innovative and efficient solutions
 to enhance user experience and drive business success in a dynamic team environment.
            </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="mt-5">
          <div className="flex justify-center items-center h-full">
            <div className="text-center font-bold text-4xl">
              <div className="mb-2 text-white">Contact</div>

              <div className="flex justify-between items-center h-10 rounded-md" style={{backgroundColor:"#ffc900"}}>
                <div>
                  <Tooltip title="https://www.linkedin.com/in/ajith-c-/">

                <img  className="b"src={linkedin} width="25px" alt="linkedin" />
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="ajithchandran1264@gmail.com">

                <img src={mail} width="25px" alt="mail" />
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="+91-8547071264">

                <img src={phone} width="25px" alt="phone" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div className="mt-2 overflow-hidden">
            <img
              src={portfolio}
              alt="portfolio"
              className="object-contain h-96 "
            />
          </div>
        </Col>
    {/* </div> */}
      </Row>
  );
}

export default Home;
