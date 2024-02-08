function displayQuote(response) {

    new Typewriter("h2", {
        strings: `${response.data.answer}`,
        autoStart: true,
        cursor: null,
        delay: 5,

    });
    console.log(response.data);


}


function quoteGenerator(event) {
    event.preventDefault();
    let apiKey = "at7ddf3o73b01eae74140de7cdd2c6b9";
    let topicElement = document.querySelector("#topic");
    let prompt = `User instrustions: Generate a nice single-line quote on ${topicElement.value}`;
    let context = "You are a wise and helpful assistant who love to share knwoledge. Please share your knowledge based on User instrustions in each line.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    // console.log(topicElement.value);
    console.log('Generating quotes');
    console.log(`Prompt: ${prompt}`);
    console.log(`Prompt: ${context}`);



    axios.get(apiURL).then(displayQuote)



}



let quoteForm = document.querySelector("#quotes-form-generator");
quoteForm.addEventListener("submit", quoteGenerator);
