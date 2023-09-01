//your JS code here. If required.
const name=document.getElementById("name");
const age=document.getElementById("age");
const button=document.getElementById("btn");

async function callme()
	{
		if((age.value)>18){
		let x=await new Promise((resolve,reject )=>{
		
				setTimeout(()=>{
					let text=`Welcome, ${name.value}. You can vote.`
					resolve(text);
					
				},4000)
			
			});
			x.then(()=>{
				alert(text);
			})
		}
		else
		{
			alert(`Oh sorry ${name.value}. You aren't old enough`)
		}
		
	}
button.addEventListener('click',callme)