// Task 1: Declare Task Array and Interval ID
const oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function

function addOneTimeTask(func, delay) {
    oneTimeTasks.push({function: func, delay: delay});
}

// Task 3: Run One-time Task Function

function runOneTimeTask() {
    for (let task of oneTimeTasks) {
        setTimeout(task.function, task.delay);
    }
}

// Task 4: Start Monitoring Function

function startMonitoring() {
    function printMessage() {
        console.log("System Check");
    }
    monitoringTaskId = setInterval(printMessage, 2000);
}


// Task 5: Stop Monitoring Function

function stopMonitoring() {
    clearInterval(monitoringTaskId);
}

// Task 6: Start Countdown Function

function startCountdown(duration) {
    let count = duration;
    console.log(`countdown started: ${count} seconds`);
    
    const countId = setInterval(
        function () {
            count --;
            console.log(count);

            if (count <= 0) {
                clearInterval(countId);
                console.log("Liftoff!");
            }
        }, 1000
    );
}

// Task 7: Schedule Pre-launch Activities and Launch
function scheduleMission() {
    startMonitoring();
    addOneTimeTask(function() {
        console.log("System check complete.");
    }, 5000);
    addOneTimeTask(stopMonitoring, 5000);
    addOneTimeTask(function() {
        startCountdown(10);
    }, 10000);
    runOneTimeTask();
}

// Task 8:

scheduleMission();