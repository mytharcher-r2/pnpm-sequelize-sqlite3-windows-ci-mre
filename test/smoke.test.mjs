import assert from "node:assert/strict";
import { Sequelize } from "sequelize";

async function main() {
  const sequelize = new Sequelize("sqlite::memory:", { logging: false });
  const [rows] = await sequelize.query("select 1 as ok");
  assert.equal(rows[0].ok, 1);
  await sequelize.close();
  console.log("OK");
}

main().catch((e) => {
  console.error("FAIL:", e);
  process.exit(1);
});
