//your JS code here. If required.
let timer=document.getElementById("timer");
setInterval(()=>{
	let date=new Date();
	timer.innerText=date.toLocaleString();
},1000)