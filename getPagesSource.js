function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.innerHTML;
            break;

        }
        node = node.nextSibling;
    }




    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html));
    element.setAttribute('download', 'informatio');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);




var splitted = html.split('<ta'); //this will output ["1234", "56789"]
var first = splitted[0]; //"1234"
var second = splitted[1]; //"56789"

var gimme = second.split('</table>');

var act = "<ta"+gimme[0]+"</table>";




return act;


}


chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
