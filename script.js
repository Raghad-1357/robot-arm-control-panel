function updateValue(i) {
    let slider = document.getElementById("motor" + i);
    let valueDisplay = document.getElementById("value" + i);
    valueDisplay.textContent = slider.value;
}

function reset() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById("motor" + i).value = 90;
        document.getElementById("value" + i).textContent = "90";
    }
}

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
    .then((data) => {
        alert(data);
        loadPoseTable();
    });
}

function loadPose(id) {
    fetch(load_pose_values.php?id=${id})
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

function removePose(id) {
    if (confirm("Are you sure you want to remove this pose?")) {
        fetch(remove_pose.php?id=${id})
            .then(() => loadPoseTable());
    }
}

function runPose() {
    let motors = [];
    for (let i = 1; i <= 6; i++) {
        motors.push(document.getElementById("motor" + i).value);
    }

    let query = motor1=${motors[0]}&motor2=${motors[1]}&motor3=${motors[2]}&motor4=${motors[3]}&motor5=${motors[4]}&motor6=${motors[5]};
    window.open("run_pose.php?" + query, "_blank");
}

function loadPoseTable() {
    fetch("get_run_pose.php")
        .then(res => res.text())
        .then(html => {
            document.getElementById("tableBody").innerHTML = html;
        });
}

// Initialize table on page load
window.onload = function() {
    loadPoseTable();
    // Initialize slider values
    for (let i = 1; i <= 6; i++) {
        updateValue(i);
    }
};
