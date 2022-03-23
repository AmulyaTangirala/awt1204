async function weather(){
    let cityname=document.getElementById("city");
    let url="https://api.openweathermap.org/data/2.5/weather?q="+cityname.value+"&appid=08b13c9102921d534ef352561eda33d6&unit:metrics;"
    const response=await fetch(url);
    const data=await response.json();
    let{main:{temp,humidity,pressure}}=data;
    console.log("temp:"+temp+"humidity:"+humidity+"pressure:"+pressure);
}   