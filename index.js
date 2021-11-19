// https://unsplash.com/photos/tNd8VXPjq0Q?utm_source=Start&utm_medium=referral&utm_campaign=api-credit
setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            let am_pm = "";
  
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":" 
                + min;
  
            document.getElementById("clock")
                .innerText = currentTime;
            
            
        }
  
showTime();

const elem = document.getElementById('searchInput')

function Search(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'https://www.google.com/search?q=' + elem.value;
    }
}
elem.addEventListener("keyup", Search); 