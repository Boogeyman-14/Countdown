//Set Count Down Date
let countDown = new Date("Sep 21, 2020 20:40:00").getTime();

function startCount() {
  //Get every second update
  let EverySecUpdate = setInterval(function () {
    //Get today's time
    let recentTime = new Date().getTime();

    //Get the difference from ending time with today's time
    let remainTime = countDown - recentTime;

    //Calculation of days, hours, minutes, seconds
    let days = Math.floor(remainTime / (24 * 60 * 60 * 1000));

    let hours = Math.floor(
      (remainTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );

    let minutes = Math.floor((remainTime % (60 * 60 * 1000)) / (60 * 1000));

    let seconds = Math.floor((remainTime % (60 * 1000)) / 1000);

    //Displaying the values
    document.querySelector("#day").innerHTML = days + "d ";
    document.querySelector("#hr").innerHTML = hours + "h ";
    document.querySelector("#min").innerHTML = minutes + "m ";
    document.querySelector("#sec").innerHTML = seconds + "s ";

    //Clearing out when time expires
    if (remainTime < 0) {
      clearInterval(EverySecUpdate);
      document.querySelector("#day").innerHTML = "";
      document.querySelector("#hr").innerHTML = "";
      document.querySelector("#min").innerHTML = "";
      document.querySelector("#sec").innerHTML = "";
      document.querySelector("#timesup").innerHTML = "Expired!";
      document.querySelector("#timesup").style.color = "red";
    }
  }, 1000); //Updates every 1 seconds
}

//Hide the Start Button
$(window).ready(function () {
  $("#btn-hide").click(function () {
    $(this).hide();
  });
});
