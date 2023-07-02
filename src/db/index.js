const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./test.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQLite database.");

  db.run(
    `CREATE TABLE IF NOT EXISTS insurance(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        policy_number TEXT NOT NULL,
        state TEXT NOT NULL
    )`,
    async (err) => {
      if (err) {
        console.error(err.message);
      } else {
        const rows = await getAll("SELECT * FROM insurance");

        if (rows.length === 0) {
          runQuery(`
            INSERT INTO insurance(policy_number, state) VALUES ("TXW0031221", "INSURED")
          `);
          runQuery(`
            INSERT INTO insurance(policy_number, state) VALUES ("TXW0031222", "CANCELED")
          `);
        }
      }
    }
  );
});

export const runQuery = (query) => {
  console.log(query);
  return new Promise(function (resolve, reject) {
    db.run(query, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

export const getAll = (query) => {
  console.log(query);
  return new Promise(function (resolve, reject) {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
