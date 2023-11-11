  //json To js 
 // const thisIsFormServer=`{
  //   "name":"amran"
  // }`

  // thisIsFormJs=JSON.parse(thisIsFormServer);

  // console.log(thisIsFormJs.name);

  //js to json

  const thisIsFormJs={
    name:"arman",
    fatherName:"abdulmomen",
  }

  const thisIsFormJson=JSON.stringify(thisIsFormJs,null,500);

  console.log(thisIsFormJson);