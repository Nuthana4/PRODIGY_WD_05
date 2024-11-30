const getweather = (city) => {
    cityName.innerHTML = city;
    
    // Correct template literal with backticks for the URL
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c97175f52bb5eb5b685a0b10726af015&units=metric`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // Assigning values to the HTML elements
            temp.innerHTML = response.main.temp;
            feels_like.innerHTML = response.main.feels_like;
            humidity.innerHTML = response.main.humidity;
            min_temp.innerHTML = response.main.temp_min;
            max_temp.innerHTML = response.main.temp_max;
            wind_speed.innerHTML = response.wind.speed;
        })
        .catch(err => console.error("Error:", err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    getweather(city.value.trim()); // Get weather for the entered city
});

// Call the function to test with a default city
getweather("Warangal");
