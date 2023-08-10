import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <b>   Welcome to our ecommerce site! Here, we are dedicated to providing you with an exceptional online shopping experience. </b> 
<br/>
<span>Customer Satisfaction</span>
<br/>

<span>Secure Shopping</span>
<br/>

<span>Easy Services</span>
  <br/>
  <b>Thank you for taking the time to learn about our ecommerce site.</b> 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;