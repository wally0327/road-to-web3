const axios = require("axios");

const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/MN_nkNBzjWsyn1O6KunrF65HBFieNjq1";

axios.post(
    ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBlockByNumber",
    params: [
        "0x00", // block 46147
        false  // retrieve the full transaction object in transactions array
  ]
}).then(
    (response) => {
        console.log(response.data.result);
    }
)

