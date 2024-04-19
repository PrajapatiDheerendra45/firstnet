import React from "react";

const featuresData = [
  {
    icon: "fa fa-bullhorn",
 
    title: "Services Offered",
    text: "Explore our comprehensive range of cutting-edge solutions tailored to meet your unique business needs. From software development and cloud computing to cybersecurity and digital transformation, our services empower your organization to stay ahead in today's dynamic market."
  },
  {
     icon: "fa fa-android",
    title: "Technologies",
    text: "Dive into our robust tech stack, featuring the latest tools and platforms driving innovation across industries. With expertise in a diverse array of technologies including AI, machine learning, blockchain, and more, we deliver scalable and future-proof solutions to propel your business forward."
  },
  {
    icon: "fa fa-folder-open",
    title: "Case Studies",
    text: "Discover real-world examples of how our solutions have transformed businesses like yours. Through detailed case studies, explore the challenges our clients faced, the strategies we implemented, and the tangible results achieved, showcasing the impact of our expertise and commitment to excellence."
  },
  {
    icon: "fa fa-group",
    title: "Client Testimonials",
    text: "Hear directly from our satisfied clients about their experience partnering with us. Our client testimonials offer authentic insights into the quality of our services, our dedication to client success, and the value we bring to every project. Join the ranks of delighted clients who have benefited from our expertise and partnership."
  }
];


export const Features = () => {
  return (
    <div id="features" className="text-center">
    <div className="container">
      <div className="col-md-10 col-md-offset-1 section-title">
        <h2>Features</h2>
      </div>
      <div className="row">
      
        {featuresData.map((d, i) => (
          <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3   ">
            <i className={d.icon}></i>
            <h3 className="text-3xl font-bold">{d.title}</h3>
            <p className=" text-left text-justify">{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};
