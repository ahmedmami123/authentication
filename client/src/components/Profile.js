import React, { useEffect } from "react";
import { useSelector } from "react-redux";



function Profile() {

const user=useSelector((state)=>state.user.user);
console.log(user)

  return <div>hello {user? user.name:<h1>loading ...</h1>}</div>;
}

export default Profile;
