
// CAT FACTS API
async function getCatFact() {

    const catFactElement =
        document.getElementById("catFact");

    catFactElement.textContent =
        "Loading cat facts...";

    try {

        const response = await fetch(
            "https://catfact.ninja/fact"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        catFactElement.textContent = data.fact;

    } catch (error) {

        console.error("Cat Facts Error:", error);

        catFactElement.textContent =
            "Unable to load cat facts. Please try again.";

    }
}


// JOKE API
async function getJoke() {

    const setupElement =
        document.getElementById("jokeSetup");

    const punchlineElement =
        document.getElementById("jokePunchline");

    setupElement.textContent =
        "Loading a joke...";

    punchlineElement.textContent = "";

    try {

        const response = await fetch(
            "https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error("Unable to get joke");
        }

        setupElement.textContent = data.setup;

        punchlineElement.textContent =
            data.delivery;

    } catch (error) {

        console.error("Joke API Error:", error);

        setupElement.textContent =
            "Unable to load joke.";

        punchlineElement.textContent =
            "Please try again later.";

    }
}


// LOAD API DATA WHEN WEBSITE OPENS
window.addEventListener("DOMContentLoaded", function() {

    getCatFact();
    getJoke();

});
