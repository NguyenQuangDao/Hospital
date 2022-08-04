import React from "react";
import { db } from "../../firebase/config";
import { collection } from "firebase/firestore";

function User() {
  function ABC() {
    const User = collection(db, "User");
    console.log(User);
  }
  ABC();
  return <></>;
}
export default User;
