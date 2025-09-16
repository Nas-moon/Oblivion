function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const message = document.getElementById("message");

  if (input === "Picture") {
    message.style.color = "lime";
    message.textContent = "✅ Access Granted! Redirecting...";
    setTimeout(() => {
      window.location.href = "gallery-page.html"; 
      // Replace with your actual gallery page file
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "❌ Incorrect Password. Try Again.";
  }
}