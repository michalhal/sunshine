const passwordAgents = "dupa1";
const passwordRecruitment = "dupa2";
const passwordPartners = "dupa3";

function showAbout() {
  document.getElementById("content").innerHTML =
    "<h1>About us</h1><p>We are a leading provider of security and intelligence services, serving clients around the world. Our team of highly trained professionals is dedicated to providing the best possible service, no matter the situation.</p>";
}

function showAgents() {
  const password = prompt("Enter the password to access the agents page:");
  if (password === passwordAgents) {
    document.getElementById("content").innerHTML =
      "<h1>Agents</h1><p>Our agents are highly trained professionals, ready to handle any situation that may arise. With years of experience and access to the latest technology, they are the best in the business.</p>";
  } else {
    alert("Incorrect password");
  }
}

function showRecruitment() {
  const password = prompt("Enter the password to access the recruitment page:");
  if (password === passwordRecruitment) {
    document.getElementById("content").innerHTML =
      "<h1>Recruitment</h1><p>We are always looking for talented individuals to join our team. If you think you have what it takes, visit our recruitment page to learn more about our opportunities.</p>";
  } else {
    alert("Incorrect password");
  }
}

function showPartners() {
  const password = prompt("Enter the password to access the partners page:");
  if (password === passwordPartners) {
    document.getElementById("content").innerHTML =
      "<h1>Partners</h1><p>We value our partnerships with other organizations and businesses. By working together, we are able to provide our clients with the best possible service and solutions.</p>";
  } else {
    alert("Incorrect password");
  }
}
