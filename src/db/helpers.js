import { runQuery } from ".";

export const createInsurance = (policyNumber, state) => {
  const sql = `INSERT INTO insurance(policy_number, state) VALUES ("${policyNumber}", "${state}")`;

  return runQuery(sql);
};
