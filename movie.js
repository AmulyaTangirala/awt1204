async function movies(){
    //let cityname=document.getElementById("city");
    const url="https://imdb-api.com/en/API/Top250Movies/k_24vpmvd7"
    const resp=await fetch(url);
    var data=await resp.json();
   console.log(data);
   let { items}=data;
   items.forEach(ele=>{
       let{title,imDbRating}=ele;
       console.log("movie name is "+title+"\nIMDB rating value "+imDbRating);
   });
}   