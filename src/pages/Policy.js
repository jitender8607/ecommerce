import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <span><b>Privacy policy : </b>Our Privacy Policy outlines how we collect, use, and safeguard the data you provide to us. </span>
          <br/>
          <span><b>Shipping and Delivery Policy : </b>We outline any restrictions, international shipping policies, and procedures for tracking your package.</span>
          <br/>
          <span><b>Return and Refund Policy : </b>Our Return and Refund Policy explains the process for returning items and receiving refunds or exchanges. </span>
          <br/>
          <span><b>Terms and Conditions : </b>It covers various aspects such as intellectual property rights, user conduct, limitations of liability, and dispute resolution.</span>
          <br/>
           <span><b>Cookie Policy : </b>It provides information on the types of cookies we use, the purpose of each cookie, and how you can manage your cookie preferences.</span>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;