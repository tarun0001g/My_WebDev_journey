document.addEventListener("DOMContentLoaded", function() {

    const searchButton = document.getElementById("srch-btn");
    const usernameInput = document.getElementById("username");
    const statsContainer = document.querySelector(".statsContainer");
    const easyProgressCircle = document.querySelector(".easyProgressItem circle");
    const mediumProgressCircle = document.querySelector(".mediumProgressItem circle");
    const hardProgressCircle = document.querySelector(".hardProgressItem circle");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".statsCardContainer");

    //This fn will validate true or false for username format using regex(regular expression)
    function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username cannot be empty!");
            return false;
        }
        const usernameRegex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = usernameRegex.test(username);
        if(!isMatching){
            alert("Invalid username format!");
            return false;
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        const apiUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            //way-1 of fetching data using api
            // const response = await fetch(apiUrl);
            // if(!response.ok) {
            //     throw new Error("Unable to find user details");
            // }
            // const data = await response.json();
            // console.log("Fetched data:",data);

            //way-2 of fetching data using api(another way of doing the same thing as above)
            //It is a POST request to fetch data from GraphQL endpoint
            const targetUrl = 'https://leetcode.com/graphql/';
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n        allQuestionsCount {\n            difficulty\n            count\n        }\n        matchedUser(username: $username) {\n            submitStats {\n                acSubmissionNum {\n                    difficulty\n                    count\n                }\n                totalSubmissionNum {\n                    difficulty\n                    count\n                }\n            }\n        }\n    }\n",
                variables: { "username": `${username}` }
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };
            const response = await fetch(targetUrl, requestOptions);
            if (!response.ok) {
                throw new Error("Unable to fetch the User details");
            }

            const data = await response.json();
            console.log("Logging data: ", data);
            //if we run this query then we will get the error for (alex) username because , in this post request we are sendong request to the leetcode server who is blocking our request
            // so now we will use proxy server (demo server) to bypass this requesst to the leetcode server

        }

        catch(error) {
            statsContainer.innerHTML= `<p>No data found</p>`
            }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener("click", function() {
        const username = usernameInput.value;
        console.log("logging username:",username);

        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    })


})