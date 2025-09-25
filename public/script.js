console.log('USIU First-Year Companion loaded successfully');

const studentName = prompt("Welcome to USIU! What's your first name?");

if (studentName && studentName.trim() !== '') {
    alert("Karibu, " + studentName + "!");
    console.log("Student entered name:", studentName);
    document.getElementById("greeting").textContent = "Hello, " + studentName + " 👋";

    // Add personalized context to summary
    const summaryElement = document.getElementById("summary");
    summaryElement.textContent = "Welcome " + studentName + "! Run the estimator to see your weekly plan…";
} else {
    console.log("No name provided, using default greeting");
    document.getElementById("greeting").textContent = "Hello, Student! 👋";
}


function runEstimator() {
    console.log('Starting cost estimator...');

    const days = Number(prompt("How many days per week do you plan to come to campus? (e.g., 3)"));
    const costPerTrip = Number(prompt("Average transport cost per trip to USIU in KSh? (e.g., 120 for Thika Rd matatu)"));
    const snacksPerDay = Number(prompt("How many snacks do you plan to buy per day on campus? (e.g., 2)"));
    const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80 for samosa/mandazi)"));

    if (isNaN(days) || isNaN(costPerTrip) || isNaN(snacksPerDay) || isNaN(snackPrice)) {
        alert("Please enter valid numbers for all fields. Try again!");
        console.log("Invalid input detected, aborting calculation");
        return;
    }

    if (days <= 0 || days > 7) {
        alert("Please enter a realistic number of days (1-7). Try again!");
        console.log("Invalid days value:", days);
        return;
    }

    const transportWeekly = days * costPerTrip * 2;
    const snacksWeekly = days * snacksPerDay * snackPrice;
    const totalWeekly = transportWeekly + snacksWeekly;
    const save10 = totalWeekly * 0.10; 
    const totalWithSavings = totalWeekly - save10;

    // Log all calculations for debugging
    console.log({
        days: days,
        costPerTrip: costPerTrip,
        snacksPerDay: snacksPerDay,
        snackPrice: snackPrice,
        transportWeekly: transportWeekly,
        snacksWeekly: snacksWeekly,
        totalWeekly: totalWeekly,
        totalWithSavings: totalWithSavings
    });

    const summary = `
Weekly Transport: KSh ${transportWeekly}
Weekly Snacks: KSh ${snacksWeekly}
-------------------------------
Weekly Total: KSh ${totalWeekly}
If you cut 10%: KSh ${Math.round(totalWithSavings)}

💡 Savings Tip: Consider car-pooling 1-2 days per week 
   or bringing homemade snacks to save money!`;

    document.getElementById("summary").innerText = summary;

    alert("Check your weekly summary below! All details logged to console for your reference.");
    console.log("Estimator calculation completed successfully");
}


// ✅ Theme toggle (day/night or USIU accent)
function toggleTheme() {
    console.log('Theme toggle requested...');

    const currentBg = document.body.style.backgroundColor;

    if (currentBg === "" || currentBg === "white" || currentBg === "rgb(255, 255, 255)") {
        // Night / USIU Accent theme
        document.body.style.backgroundColor = "#111"; // dark night mode
        document.body.style.color = "white";

        // Make sure headings and summary are visible
        document.getElementById("greeting").style.color = "white";
        document.getElementById("summary").style.backgroundColor = "#222";
        document.getElementById("summary").style.color = "#eee";

        console.log("Switched to dark theme");
        alert("Dark theme activated!");
    } else {
        // Day theme
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        // Reset element colors
        document.getElementById("greeting").style.color = "black";
        document.getElementById("summary").style.backgroundColor = "#f5f5f5";
        document.getElementById("summary").style.color = "#333";

        console.log("Switched to light theme");
        alert("Light theme activated!");
    }

    console.log("Theme toggled. New background:", document.body.style.backgroundColor);
}


// Reset function
function resetSummary() {
    document.getElementById("summary").textContent = "Run the estimator to see your weekly plan…";
    console.log("Summary reset to default state");
}

// Log successful script loading
console.log('USIU First-Year Companion script loaded successfully');
console.log('Available functions: runEstimator(), toggleTheme(), resetSummary()');
