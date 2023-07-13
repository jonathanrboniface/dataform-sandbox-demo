/* 
learn more on https://docs.dataform.co/guides/javascript/js-api
learn more on https://cloud.google.com/dataform/docs/reuse-code-includes
*/

const homeworlds = [
    'people',
    'planets',
  ];
  
  const keys = "Name, Planet"

homeworlds.forEach(homeworld => {
  publish("consolidated_" + homeworld, {
    type: "table",
  }).preOps(ctx => `
      CREATE TABLE IF NOT EXISTS ${ctx.self()} (
        Name STRING NOT NULL OPTIONS(description="Locations address details.")
        , planet STRING OPTIONS(description="Locations Longitude.")
      ) 
    `)
    .query(ctx => `SELECT '${homeworld}' as planet FROM ${ctx.ref("people_planets")}`)
    .dependencies(["people_planets"])
});



