function check(string, obj) {
    for (let key in obj) {
    var k = 0;
      
      if (obj[key] == string) {
        k++;
      }
    }
    
      if (k != 0) return console.log(true)
      else return console.log(false)
  }
  
  var Alexander = {
    name: 'Alexander',
    age: 22,
    hobby: 'GoGo'
  }
  
  var randomHobby = 'GoGo';
  
  check(randomHobby, Alexander);