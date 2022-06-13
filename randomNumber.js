function myFunction() {
    let x = document.getElementById("minInput").value;
    let y = document.getElementById("maxInput").value;
    let min = Math.ceil(x);
    let max = Math.floor(y);
  
    const randNum = Math.floor((Math.random()*(max-min+1))+min);
    document.getElementById("display").innerHTML = randNum;
  }