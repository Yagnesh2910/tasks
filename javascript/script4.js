function showdate() {
    const t = new Date();
    d = t.toDateString();
    arr = d.split(" ");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    dateinformat = arr[2] + "/" + months[t.getMonth()] + "/" + arr[3];
    document.getElementById("date").innerHTML = dateinformat;
  }
  function showtime() {
    const t = new Date();
    document.getElementById("time").innerHTML = t;
  }