function quoteGenerator(event) {
    event.preventDefault();
    // let quotesElement = document.querySelector("h2")
    // quotesElement.innerHTML = "Love recognizes no barriers.It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. Maya Angelou"

    new Typewriter("h2", {
        strings: "Love recognizes no barriers.It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. Maya Angelou",
        autoStart: true,
        cursor: null,
        delay: 5,

    });

}



let quoteForm = document.querySelector("#quotes-form-generator");
quoteForm.addEventListener("submit", quoteGenerator);
