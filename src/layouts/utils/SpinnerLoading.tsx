import React from "react";
import Spinner from "./../../Images/PublicImages/Spinner.gif";

export default function SpinnerLoading() {
  return (
    <div className="text-center">
      <img src={Spinner} alt="" />
    </div>
  );
}
