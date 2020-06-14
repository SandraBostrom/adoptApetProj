function validate() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value === "" || password.value === "") {
    alert("Fyll i båda fälten");
    return false;
  } else if (username.value === "SandraAdmin" && password.value === "1234") {
    return true;
  } else {
    alert("Fel användarnamn/lösenord");
    return false;
  }
}
