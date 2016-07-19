$(document).ready(function() {
_.each(conflictsJson.conflicts,function(conflictsType,conflictTypeName){

    _.each(conflictsType,function(conflict){

        var conflictName = Object.keys(conflict)[0];
        var tRow = '<th scope="row">'+conflictTypeName+'</th>';
        var name = Object.keys(conflict)[0];
        tRow += "<td>"+name+"</td>";
        var issues = "";
        issues += "<div>";
        _.each(conflict[conflictName],function(detail) {
            _.each(detail,function(detailValue,detailName) {
                detailName = (""+detailName).replace("_"," ")
                issues += "<p><b>"+detailName+":</b> "+detailValue+"</p>";
            })
        })
        issues += "</div>";
        tRow += "<td>"+conflict[conflictName].length+"</td>";
        tRow += "<td>"+issues+"</td>";
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
