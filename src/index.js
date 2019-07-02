

document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:3000/pups")
    .then(response=>response.json())
    .then(result=>{result.forEach(addPops)})


    function addPops(puppy){
        // object is a puppy
        let status =  puppy.isGoodDog
        let divTag=document.getElementById("dog-bar")

        let spanTag=document.createElement('span')
        spanTag.innerHTML=puppy.name
        divTag.append(spanTag)

        spanTag.addEventListener('click',function(e){
            // e.preventDefault()
            let divTag2=document.getElementById("dog-info")
            let imageTag=document.createElement('img')
            imageTag.src=puppy.image
            divTag2.append(imageTag)

            let h1=document.createElement('h1')
            h1.innerHTML=puppy.name
            divTag2.append(h1)
            
            let buttonTag=document.createElement('button')
            divTag2.append(buttonTag)
            if(puppy.isGoodDog==true){

            buttonTag.innerHTML="Good Dog"
            }
            else{
                buttonTag.innerHTML="Bad Dog"  
            }

            buttonTag.addEventListener('click',function(e){  
            //    e.preventDefault(e)
            //   fetchPatch(object) 
           
            fetch(`http://localhost:3000/pups/${puppy.id}`, {
                
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "isGoodDog": !status
                })
            }).then(function(res){
                return res.json()
            })
            .then(function(data){
                status = !status
                if(buttonTag.innerHTML=="Good Dog"){
                buttonTag.innerHTML="Bad Dog"
                }
                else if(buttonTag.innerHTML=="Bad Dog"){
                buttonTag.innerHTML="Good Dog"
                }
                console.log('is good' + status)
            })
            
      
           })
      
    
            
        })
        

    
    }
})

    