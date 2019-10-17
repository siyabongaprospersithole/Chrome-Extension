chrome.runtime.onMessage.addListener(function(request, sender) {




  $.ajax({
type:     "GET",
url:      "https://manati.taskflow.co.za/web#id=414&view_type=form&model=res.partner&action=102", // <-- Here
dataType: "jsonp",
success: function(data){
message.innerText = data;
}
});




    var downloadLink;
    var filename = "";
       var dataType = 'application/vnd.ms-excel';
       var tableSelect = request.source;
       var tableHTML = tableSelect.replace(/ /g, '%20');


       filename = filename?filename+'.xls':'excel_data.xls';


       downloadLink = document.createElement("a");

       document.body.appendChild(downloadLink);

       if(navigator.msSaveOrOpenBlob){
           var blob = new Blob(['\ufeff', tableHTML], {
               type: dataType
           });
           navigator.msSaveOrOpenBlob( blob, filename);
       }else{

           downloadLink.href = 'data:' + dataType + ', ' + tableHTML;


           downloadLink.download = filename;


           downloadLink.click();
       }
  }
});

function onWindowLoad() {
  var message = document.querySelector('#message');


  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });





}

window.onload = onWindowLoad;
