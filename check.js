require('dotenv').config();
const { ACCOUNT_SID, AUTH_TOKEN } = process.env;

console.log(`🐞 Started...`);

const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

let totalPrice = 0;
client.usage.records.lastMonth.list({
  includeSubaccounts: true,
}).then(async (records) => {
  records.filter((record) => record.count > 0).forEach((record) => {
    console.log(`${record.category} count:${record.count} price:${record.price}`);
    totalPrice += Math.ceil(record.price);
  })
})
.finally(() => {
  console.log(`🐞 Total price: ${totalPrice}`);
});
// console.log(`🐞 Total price: ${totalPrice}`);