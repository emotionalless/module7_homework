function objInCons(obj) {
  
    for(let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ": " + obj[key]);
      }
      
    }
  }
  
  var info = {
    city: 'Barnaul',
    university: 'AltSTU'
  }
  
  objInCons(info);