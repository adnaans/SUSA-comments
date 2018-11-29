var jsonn
$.getJSON("combined_means.json", function(json) {
    jsonn = json; // this will show the info it in firebug console
    console.log(json)
});