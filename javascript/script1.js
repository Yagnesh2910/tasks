function Reverse() {
    var x = parseInt(document.getElementById("inp").value);
    var rev = 0;
    while (x > 0) {
      rev = rev * 10 + (x % 10);
      x = parseInt(x / 10);
    }
    document.getElementById("result").textContent = rev.toString();
  }