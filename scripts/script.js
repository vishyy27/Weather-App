const APIkey="25f04ea36271d8cc77727d4f16c3d3b9";
    const APIurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function checkweather(city){
        const response = await fetch(APIurl + city +`&appid=${APIkey}`);

        if(response.status===404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{
            var data = await response.json();
                if(data.weather[0].main == "Clouds"){
                weatherIcon.src ="assets/images/clouds.png";
            }
            else if(data.weather[0].main == "drizzle"){
                weatherIcon.src ="assets/images/drizzle.png";
            }
            else if(data.weather[0].main == "mist"){
                weatherIcon.src ="assets/images/mist.png";
            }
            else if(data.weather[0].main == "rain"){
                weatherIcon.src ="assets/images/rain.png";
            }
            else if(data.weather[0].main == "snow"){
                weatherIcon.src ="assets/images/snow.png";
            }
            else if(data.weather[0].main == "clear"){
                weatherIcon.src ="assets/images/clear.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display="none";
        }

        

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°";
        document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
        document.querySelector(".wind").innerHTML= data.wind.speed+"kmph";

        
    }
    searchBtn.addEventListener("click", ()=>{
        checkweather(searchBox.value);
    })

    searchBox.addEventListener("keydown",(event)=>{
        if(event.key==="Enter"){
        checkweather(searchBox.value);
        }
    })