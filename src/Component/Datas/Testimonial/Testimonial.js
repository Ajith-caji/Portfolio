import React from 'react'
import { Carousel } from 'antd';
import isdbDash from "../../../asset/Isdb/isdb dashboard.jpg"
import isdb from "../../../asset/Isdb/isdb.png"
import isdbForm from "../../../asset/Isdb/isdb-forms.jpg"
import home from "../../../asset/neweast/neweast-home.jpg"
import innerpage from "../../../asset/neweast/inner-page.jpg"
import document from "../../../asset/neweast/document-page.jpg"
import description from "../../../asset/neweast/neweat-desc.jpg"
import dashboard from "../../../asset/Mom/dashMom.jpg"
import mom from "../../../asset/Mom/mom-design.jpg"
import mom1 from "../../../asset/Mom/mom-designs.jpg"
import dashboardArc from "../../../asset/Arc/dashArc.jpg"
import view from "../../../asset/Arc/viewArc.jpg"
import form1 from "../../../asset/Arc/formArc.jpg"
import form2 from "../../../asset/Arc/formArc1.jpg"
import table from "../../../asset/Arc/tableArc.jpg"
function Testimonial() {
    const testimonialData = [
        {
          id: 1,
          name: "Isdb E-Forms",
          images: [
            isdbDash, 
            isdb, 
            isdbForm,
          ],
        },
        {
          id: 2,
          name: "Neweast Intranet Portal",
          images: [home,innerpage,document,description], 
        },
        {
          id: 3,
          name: "MOM Application",
          images: [dashboard,mom,mom1], 
        },
        {
            id: 4,
            name: "POA Application for Al-Rajhi Bank",
          
            images: [dashboardArc,view,form1,form2,table], 
          },
      ];
  return (
    <div className="flex flex-wrap justify-evenly items-center space-y-4" >
      {testimonialData.map((testimonial) => (
        <div
          key={testimonial.id}
          className="border-2 rounded-md text-white font-semibold p-4 w-full max-w-md"
          style={{ backgroundColor: "#454679",height:"640px" }}
        >
          <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
          <Carousel autoplay>
            {testimonial.images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image}
                  alt={`${testimonial.name} ${index + 1}`}
                  className="w-full max-h-[580px] rounded-md mb-2 object-cover" 
                  style={{
                    maxHeight: "580px", 
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Carousel>
         
        </div>
      ))}
    </div>
  )
}

export default Testimonial