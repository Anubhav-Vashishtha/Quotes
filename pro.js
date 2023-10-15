// Website to fetch data from https://type.fit/api/quotes

let url = "https://type.fit/api/quotes";
let res = fetch(url);
let num;
let body = document.body ;
console.log(num);





res.then((response)=>{
    return response.json();
}).then((value)=>{
    body.addEventListener("click",(e)=>{
         num= Math.floor(Math.random()*1645)

         if(value[num].author==null){
            body.innerHTML=`<div class="card car" id="car" style="width: 40vw; position: relative; top: ${e.clientY}px; left: ${e.clientX}px;">
        
        <div class="card-body">
          <p class="card-text car2">${value[num].text}</p>
          <h5 class="card-title">Unknown</h5>
        </div>
      </div>`
         }else{
         
        body.innerHTML=`<div class="card car" style="width: 40vw; position: relative; top: ${e.clientY}px; left: ${e.clientX}px;">
        
        <div class="card-body">
        <p class="card-text car2">${value[num].text}</p>
        <h5 class="card-title">${value[num].author}</h5>
        </div>
      </div>`}
    })
});