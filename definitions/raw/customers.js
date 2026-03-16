const tables = [
  "raw_customers"
];

tables.forEach(table_name => {
  declare({
    schema: "raw",
    name: table_name
  });
});


