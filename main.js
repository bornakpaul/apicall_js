function getDatas(){
   fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(json =>{
       console.log(json.data);
        const markup = json.data.map(el => {
        return `
        <li class="card-container">
           <div class = "image-container">
              <img class = "round" src = "${el.avatar}">

           </div>
           <div class = "name-container">
              <span class = "firstname">${el.first_name}</span>  
              <span class = "lastname">${el.last_name}</span>
           </div>
           <p class="email">${el.email}</p>
        </li>   
        `
        })
        
        document.querySelector('.list-container').innerHTML = markup;
    });
}

    function postData(){
      fetch("https://reqres.in/api/register",{
         method : "Post",
         headers : {
            "Content-Type": "application/json"
         },
         body : JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
         })
      })
      .then(response => {
         if(!response.ok){
            throw Error("ERROR");
         }
         return response.json;
      })
      .then(data =>{
         console.log(data);
      })
      .catch(error => {
         console.log(error);
      })
    }

    postData();