var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/dothraki.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}


function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with the server! try again after some time")
}


function eventHandler() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};


buttonTranslate.addEventListener("click", eventHandler)