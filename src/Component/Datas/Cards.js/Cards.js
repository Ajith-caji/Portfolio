import React from "react";
const expArray = [
  {
    id: 1,
    Title: "e-Forms Project for Islamic Development Bank (IsDB)",
    description: ` Digitized and streamlined the process of creating, managing, and processing forms within the organization.
 Utilized SharePoint Online and SPFx to build a user-friendly forms management system.
 Conducted thorough testing and debugging of web parts and solutions to ensure high-quality
 deliverables.
 Technologies used: SharePoint Framework (SPFx), SharePoint Online, React, Antd, JavaScript, HTML,
 CSS.`
  },
  {id: 2,
    Title: "Intranet Portal for Neweast Group UAE",
    description: `Contributed to the creation of an intranet portal hosted on Microsoft SharePoint.
 Worked on the front-end using SPFx and utilized SharePoint lists as the backend data source.
 Participated in daily stand-up meetings and sprint retrospectives to track progress and identify areas
 for improvement.`},{
    id: 3,
    Title: "Minutes of Meeting (MOM) Application",
    description: `Designed and developed a web-based MOM application, increasing meeting organization efficiency
 by 40%.
 Built using React, the MOM application was developed as a commercial product for sale to clients,
 showcasing the capability to deliver high-quality solutions addressing common business needs.`
 },{
    id: 4,
    Title: "POA Application for Al-Rajhi Bank",
    description: `Fully developed a POA application using the low-code/no-code platform Joget.
 Utilized JavaScript for additional customization`
 }
];
function Cards() {
  return (
    <>
      {expArray.map((item) => (
        <div
          key={item.id} 
          className="h-52 w-96 overflow-auto bg-slate-50 rounded-sm p-2"
        >
          <ul>
            <li>
              <div className="text-cyan-900 text-lg font-semibold">
                {item.Title}
              </div>
            </li>
            <li>
              <div className="text-black text-sm">{item.description}</div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Cards;
