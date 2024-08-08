import Navbar from "@/components/Navbar";
import Result_div from "@/components/results/domestic/result_div";
import React from "react";

const index = () => {


  return (
    <div>
      <div
        className="container-fluid banner-container"
        style={{
          backgroundImage: `url("/images/mainbg.jpg")`,
          height: "auto",
          backgroundBlendMode: "multiply",
          backgroundColor: "#0000006e",
        }}
      >
        <Navbar />
      </div>
      <div class="mt-5">
        <Result_div name={"item.currency_Name"}  />
      </div>
    </div>
  );
};

export default index;
