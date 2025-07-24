function savePose() {
  let pose = [];
  for (let i = 1; i <= 6; i++) {
    pose.push(document.getElementById("motor" + i).value);
  }

  fetch("save_pose.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pose }),
  })
    .then((res) => res.text())
    .then((data) => alert(data));
}

function loadPose() {
  fetch("load_pose.php")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 1; i <= 6; i++) {
        let slider = document.getElementById("motor" + i);
        let valueDisplay = document.getElementById("value" + i);

        slider.value = data["motor" + i];
        valueDisplay.textContent = data["motor" + i];
      }
    });
}

function runPose() {
  let motors = [];
  for (let i = 1; i <= 6; i++) {
    motors.push(document.getElementById("motor" + i).value);
  }

  // فتح صفحة جديدة بالقيم
  let query = `motor1=${motors[0]}&motor2=${motors[1]}&motor3=${motors[2]}&motor4=${motors[3]}&motor5=${motors[4]}&motor6=${motors[5]}`;
  window.open("get_run_pose.php?" + query, "_blank");

  fetch("update_status.php?id=1");
}

function updateSliderValue(i) {
  let slider = document.getElementById("motor" + i);
  let valueDisplay = document.getElementById("value" + i);
  valueDisplay.textContent = slider.value;
}
