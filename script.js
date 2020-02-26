let streak =0;
document.getElementById('streakSaver').addEventListener('click',()=>{
  streak+=1;
  document.getElementById('ss').innerHTML = streak
})
