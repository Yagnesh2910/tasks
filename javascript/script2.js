function Sort() {
    var x = document.getElementById("inp").value;
    document.getElementById("result").textContent = x
      .split("")
      .sort()
      .join("");
}