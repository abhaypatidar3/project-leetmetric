document.addEventListener("DOMContentLoaded", function(){
    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");


    function validateUsername(username){
        if(username.trim()==="")
        {
            alert("Username should not be empty");
            return false
        }
        const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching)
        {
            alert("Invalid Username");
        }
        return isMatching;


    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try{

            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            const response = await fetch(url);
            // console.log(response.ok);
            if(!response.ok)
            {
                throw new Error("Unable to fetch User details ");
            }
            const data = await response.json();
            console.log("Logging data: ", data); 
            displayUserData(data);
        }
        catch(error)
        {
            statsContainer.innerHTML = `<p>No data Found</p>`;
            // console.log("error aagay");
        }
        finally{
            searchButton.textContent = "Search hogya";
            searchButton.disabled = false;
        }
        
    }

    function updateprogress(solved, total, label, circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`; 
    }

    function displayUserData(data){
        const totalQues = data.totalQuestions;
        const totalEasyQues = data.totalEasy;
        const totalMediumQues = data.totalMedium;
        const totalHardQues = data.totalHard;

        const solvedtotalEasyQues = data.easySolved;
        const solvedtotalMediumQues = data.mediumSolved;
        const solvedtotalHardQues = data.hardSolved;

        // updateprogress(500, 1000, easyLabel, easyProgressCircle);
        // updateprogress(1500, 2000, mediumLabel, mediumProgressCircle);
        // updateprogress(2500, 3000, hardLabel, hardProgressCircle);
        // console.log(data.mediumSolved);

        updateprogress(solvedtotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateprogress(solvedtotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateprogress(solvedtotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: "Ranking" , value: data.ranking },
            {label: "Reputation" , value: data.reputation},
            {label: "Acceptance Rate" , value: data.acceptanceRate },
            {label: "Contribution Points" , value: data.contributionPoints}
        ];

        console.log(cardsData);

        cardStatsContainer.innerHTML = cardsData.map( 
            data => {
                return `
                    <div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>
                `
            }
        ).join("")
    }

    searchButton.addEventListener('click', function(){ 
        const username = usernameInput.value;
        console.log("Fetched username: ",username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })
})

//https://github.com/JeremyTsaii/leetcode-stats-api