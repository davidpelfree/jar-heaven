var dataPoints = [];

function strip(html){
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || "";
    return text+" ";
}

$(document).ready(function() {
_.each(conflictsJson.conflicts,function(conflictsType,conflictTypeName){

    _.each(conflictsType,function(conflict){

        var conflictName = conflict["artifactName"] ? conflict["artifactName"] : conflict["className"];
        var tRow = '<th scope="row">'+conflictTypeName+'</th>';
        var name = Object.keys(conflict)[0];
        tRow += "<td>"+conflictName+"</td>";
        var issues = "";
        issues += "<div>";
        _.each(conflict["listOfPairs"],function(detail) {
            _.each(detail,function(detailValue,detailName) {
                detailName = (""+detailName).replace("_"," ")
                issues += "<p><b> "+detailName+" : </b> "+detailValue+";</p>";
            })
        })
        issues += "</div>";
        var length = conflict["listOfPairs"].length;
        tRow += "<td>"+ length+"</td>";
        tRow += "<td>"+issues+"</td>";
        dataPoints.push({  y: length, legendText:strip(conflictName)+"("+strip(conflictTypeName)+")", label: strip(issues) });
        $("table tbody").append("<tr>"+tRow+"</tr>");
    })
})
});

// <tr>
// <th scope="row">1</th>
//     <td>{{title}}</td>
// <td>Otto</td>
// <td>@mdo</td>
// </tr>
function getModal(){
    var modal = '<!-- Trigger the modal with a button -->\
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>\
\
    <!-- Modal -->\
    <div id="myModal" class="modal fade" role="dialog">\
        <div class="modal-dialog">\
\
        <!-- Modal content-->\
    <div class="modal-content">\
        <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal">&times;</button>\
    <h4 class="modal-title">Modal Header</h4>\
    </div>\
    <div class="modal-body">\
        <p>Some text in the modal.</p>\
    </div>\
    <div class="modal-footer">\
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
        </div>\
        </div>\
\
        </div>\
        </div>'
}