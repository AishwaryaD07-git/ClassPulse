function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function runClassroomScan() {

    const button = document.getElementById("scanButton");
    const buttonText = document.getElementById("scanButtonText");
    const buttonIcon = document.getElementById("scanButtonIcon");

    const progressContainer = document.getElementById("scanProgress");
    const progressFill = document.getElementById("progressFill");
    const scanStatus = document.getElementById("scanStatus");

    const responses = document.getElementById("responsesAnalyzed");
    const flagged = document.getElementById("studentsFlagged");
    const confidence = document.getElementById("scanConfidence");

    const result = document.getElementById("aiResult");

    button.disabled = true;
    button.classList.add("scanning");

    buttonIcon.textContent = "◌";
    buttonText.textContent = "Scanning classroom...";

    progressContainer.classList.add("active");
    result.classList.remove("show");

    progressFill.style.width = "0%";
    responses.textContent = "0";
    flagged.textContent = "0";
    confidence.textContent = "0%";


    setTimeout(() => {
        progressFill.style.width = "25%";
        scanStatus.textContent =
            "Collecting recent student responses...";
        responses.textContent = "12";
    }, 600);


    setTimeout(() => {
        progressFill.style.width = "50%";
        scanStatus.textContent =
            "Analyzing answer patterns...";
        responses.textContent = "27";
    }, 1300);


    setTimeout(() => {
        progressFill.style.width = "75%";
        scanStatus.textContent =
            "Detecting recurring misconceptions...";

        responses.textContent = "42";
        flagged.textContent = "18";
    }, 2000);


    setTimeout(() => {

        progressFill.style.width = "100%";

        scanStatus.textContent =
            "Analysis complete — misconception detected.";

        responses.textContent = "42";
        flagged.textContent = "18";
        confidence.textContent = "94%";

        button.classList.remove("scanning");
        button.disabled = false;

        buttonIcon.textContent = "✓";
        buttonText.textContent = "Scan Complete";

        const recursionScore =
            document.getElementById("recursionScore");

        const recursionBar =
            document.getElementById("recursionBar");

        const recursionStatus =
            document.getElementById("recursionStatus");

        recursionScore.textContent = "38%";
        recursionBar.style.width = "38%";

        recursionStatus.textContent =
            "AI detected a major learning gap";


        setTimeout(() => {
            result.classList.add("show");
        }, 500);

    }, 2800);
}
function nextRescueStep(step) {

    document.querySelectorAll(".rescue-panel").forEach(panel => {
        panel.classList.remove("active");
    });

    document.getElementById("rescueStep" + step).classList.add("active");

    document.querySelectorAll(".rescue-step").forEach(item => {
        item.classList.remove("active");
    });

    document.getElementById("stepIndicator" + step).classList.add("active");
}


function checkRescueAnswer(button, correct) {

    const buttons = document.querySelectorAll(".answer-option");
    const feedback = document.getElementById("answerFeedback");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (correct) {

        button.classList.add("correct");

        feedback.innerHTML =
            "✓ Correct. <strong>0</strong> is the base case because it tells the recursion when to stop.";

        feedback.style.color = "#38d39f";

        setTimeout(() => {
            nextRescueStep(3);
        }, 1200);

    } else {

        button.classList.add("wrong");

        feedback.textContent =
            "Not quite. Think about the condition that eventually stops factorial(n).";

        feedback.style.color = "#ff5d73";

        setTimeout(() => {
            buttons.forEach(btn => {
                btn.disabled = false;
            });

            button.classList.remove("wrong");
        }, 900);
    }
}


function checkChallenge(button, correct) {

    const feedback = document.getElementById("challengeFeedback");

    if (correct) {

        button.style.borderColor = "#38d39f";
        button.style.color = "#38d39f";

        feedback.textContent =
            "✓ Correct! factorial(3) = 3 × 2 × 1 = 6.";

        feedback.style.color = "#38d39f";

        setTimeout(() => {
            nextRescueStep(4);
        }, 1200);

    } else {

        button.style.borderColor = "#ff5d73";
        button.style.color = "#ff7b8d";

        feedback.textContent =
            "Not quite. Follow the recursion down to the base case.";

        feedback.style.color = "#ff5d73";
    }
}