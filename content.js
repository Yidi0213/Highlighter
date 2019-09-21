console.log("Chrome extension is working!");

// Starts listening for changes in the root HTML element of the page.
var mutationObserver = new MutationObserver(function(mutations) {
    if (mutations !== null) {
        text = document.body.innerText;
        var result = generateKeyPhrase(text);

    }
});

mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});

function generateKeyPhrase(s) {
    var find = '"';
    var re = new RegExp(find, 'g');
        s = s.replace(re, "\\\"");

    //Microsoft Azure
    let url = "https://gosrgeowgrmep.cognitiveservices.azure.com/text/analytics/v2.1/keyPhrases";
    let data = '{"documents": [{"language": "en", "id": "1", "text": "' + s + '"}]}';


    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    //Microsoft Azure
    xhr.setRequestHeader('Ocp-Apim-Subscription-Key', '8c8a84402f3440f8a55039d115c54a88');
    xhr.setRequestHeader('Content-Type', 'application/json');


    xhr.send(data);
    xhr.onreadystatechange = function() {
        return xhr.responseText;
    };
}

var text = document.body.innerText
console.log(text);
var result = generateKeyPhrase(text);