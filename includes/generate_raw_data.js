async function fetchData(resource, page_number) {
  const url = "https://swapi.dev/api/" + resource + "/?page=" + page_number
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    const dataResults = data.results;
    console.log(dataResults)
    const planetObjects = [];
    const filename = "./raw_data/" + resource + ".json";
    const fs = require("fs");

    dataResults.forEach(async (planet) => { 

      const dataString = JSON.stringify(planet);
      const planetObjects = JSON.stringify(planet)

      fs.appendFileSync(filename, dataString + "\n", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`File ${filename} written successfully.`);
        }
      });
      return planetObjects;
    })
    return planetObjects;
  }
  else {
    return Promise.reject(new Error("Error fetching JSON data"));
  }
}


fetchData('films', 1);
fetchData('people', 1);
fetchData('planets', 1);
fetchData('species', 1);
fetchData('starships', 1);
fetchData('vehicles', 1);
  
// pii_tables.forEach(table =>
//   operate(`gdpr_cleanup: ${table}`,
//     ctx => `
//       LOAD DATA OVERWRITE dataform_training.${table} 
//       FROM FILES (
//       format = "JSON",
//       uris = ["./raw_data/${table}.json"])   
//     `)
//     .tags(["gdpr_deletion"])
// );

// datasetNames.forEach(datasetNames => {
//   fetchData('films', 1);

//   operate(datasetNames + "_blacklist_added")
//     .query(
//       ctx => `
//         LOAD DATA OVERWRITE ${ctx.self()}
//         FROM FILES (
//         format = "JSON",
//         uris = ["./raw_data/${datasetNames}.json"] 
//         )
//       `
//     );
// });
