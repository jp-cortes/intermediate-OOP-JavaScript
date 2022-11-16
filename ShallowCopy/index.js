const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
};
  //this will modify obj3 but not the originaland viceversa
    //exception objects inside objects



const obj2 = {};
    for(prop in obj1) {
        //for ( item in obj1) i for non iterable data such as object literals
        obj2[prop] = obj1[prop];

        //for strings and arrays and iterable object wi will use  for(item of array)
    }

    const obj3 = Object.assign({},obj1);
    //this will modify obj3 but not the originaland viceversa
    //exception objects inside objects

    const obj4 = Object.create(obj1);
    //in console obj4 will have __proto__ obj1
    //if  we modify obj4.a ="AAAAA" will a create new instance a:"AAAAA" and will not  modify obj1
    //exceptions in obj4 for object inside object will chanche the original. check c:{d:"d",e: "e"} in obj1
    // however if we modify obj1 will chanche the __proto__ in obj4

    //conclusion the original can modify the inerith always th ineriths cannot exept for objects inside objects
