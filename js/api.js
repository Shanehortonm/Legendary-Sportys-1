// fetch('https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')

// .then((response) => {
//     return response.json()
//  })
//  .then((data) => {
//     console.log(data)
//  })

//  fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')

// .then((response) => {
//     return response.json()
//  })
//  .then((data) => {
//     console.log(data)
//  })


//  fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then(data => {
//     console.log(data);
//     displayCocktail(data)
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));


// function fetchTeamData(){
//    fetch('https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')
//    .then(response => {
//       if(!response.ok) {
//          throw Error('ERROR')
//       }
//       return response.json();
//    })
//    .then(data => {
//       console.log(data);
//       document.querySelector('#players').innerHTML = '<h1>hello</h1>'
//    })
//    .catch(error => {
//       console.log(error);
//    });
// }



 fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')
.then((response) => {
   if(!response.ok) {
      throw Error('ERROR')
   }
    return response.json()
 })
 .then((data) => {
    console.log(data)
    let tableData = '';
    data.map((values) => {
      tableData += `<tr>
      <td><img src = '${values.PhotoUrl}'/></td>
      <td>${values.Name}</td>
      <td>${values.Number}</td>
      <td>${values.Position}</td>
      <td>${values.College}</td>
    </tr>`
    })
    document.getElementById('tableBody').innerHTML = tableData
 })
 .catch(error => {
   console.log(error);
 });

