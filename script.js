//your JS code here. If required.
// const name=document.getElementById("name");
// const age=document.getElementById("age");
// const button=document.getElementById("btn");

// async function callme(){
// 	// let nameValue=name.value;
// 		if((age.value)>18){
// 		let x=new Promise((resolve,reject)=>{
		
// 				setTimeout(()=>{
// 					let text=`Welcome, ${name.value}. You can vote.`
// 					resolve(text);
					
// 				},4000)
// 			});
// 			x.then((data)=>{
// 			alert(data);
// 			})
			
// 		}
// 		else
// 		{
// 				alert(`Oh sorry ${name.value}. You aren't old enough.`)
// 		}
		
// 	};
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const ageInput = document.getElementById("age");
            const nameInput = document.getElementById("name");

            const age = parseInt(ageInput.value);
            const name = nameInput.value;

            if (isNaN(age) || age < 0) {
                alert("Please enter a valid age.");
                return;
            }

            if (name.trim() === "") {
                alert("Please enter a valid name.");
                return;
            }

            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        alert(`Welcome, ${name}. You can vote.`);
                        resolve();
                    } else {
                        alert(`Oh sorry ${name}. You aren't old enough.`);
                        reject();
                    }
                }, 4000);
            });

            promise.then(() => {
                console.log("Promise resolved: User is old enough.");
            }).catch(() => {
                console.log("Promise rejected: User is not old enough.");
            });
        });
    




button.addEventListener('click',callme)