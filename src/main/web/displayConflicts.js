
_.each(conflictsJson.conflicts,function(conflicts){

    _.each(conflicts,function(conflictType, conflictTypeName){
        
        _.each(conflictType,function(conflict) {
            var tRow = '<th scope="row">'+conflictTypeName+'</th>';
            var name = Object.keys(conflict)[0];
            tRow += "<td>"+name+"</td>";
            tRow += "<td>"+name+"</td>";
            debugger;
        })
            
        
        
    })
})

// <tr>
// <th scope="row">1</th>
//     <td>{{title}}</td>
// <td>Otto</td>
// <td>@mdo</td>
// </tr>
