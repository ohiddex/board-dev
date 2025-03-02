let buttons = document.querySelectorAll(".btn-complete");
let activitiesLog = document.getElementById("act-log");
let counterDisplay = document.getElementById("count-increse");
let counterDisplayM = document.getElementById("count-reduce");
let clickedCount = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() { 
        let taskName = document.getElementsByTagName("h3")[i].innerText; 
        let date =  new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

        let newLog = document.createElement("div");
        newLog.innerHTML = `<p class="m-2 p-2">You have completed ${taskName} at ${date}</p>`;

        newLog.classList.add('bg', 'rounded-lg', 'mx-4', 'shadow-md');
        activitiesLog.appendChild(newLog);

        buttons[i].disabled = true;
        buttons[i].innerText = "Completed";

        alert("Board updated successfully");

        clickedCount++;
       
        let currentCount = parseInt(counterDisplay.innerText);
        counterDisplay.innerText = currentCount + 1;
        
        let currentCountM = parseInt(counterDisplayM.innerText);
        counterDisplayM.innerText = currentCountM - 1;

        if (clickedCount === buttons.length) {
            alert("Congrats, you've completed all the tasks!");
        }
    });
}

document.getElementById("clear").addEventListener("click", function() {
    activitiesLog.innerHTML = "";
});