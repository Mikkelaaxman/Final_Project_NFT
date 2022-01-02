
const provider = new ethers.providers.Web3Provider(window.ethereum)
var signer;
var account;
var contract;

async function connectMetaMask() {
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    account = await signer.getAddress();
    contract = new ethers.Contract('0x82c0a5E2F69d7D280cb7B685f0d9A8626E97F14E', abi, signer);
}

async function QueryApi(url = '', method = '', data = {}) {
    const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      });
      return response.json(); // parses JSON response into native JavaScript objects
};

window.addEventListener("load", connectMetaMask);

document.getElementById("connect").addEventListener("click", connectMetaMask);

document.getElementById("currentAddress").addEventListener("click", async () => {
    try {
        signer.getAddress()
    } catch(e) {
        alert("Metamask is not connected");
        console.log(e);
        return
    }finally {
        document.getElementById("targetAddress").value = account;
    }
});

document.getElementById("mintNFT").addEventListener("click", async () => {
    let uri = document.getElementById("url").value;
    let address = document.getElementById("targetAddress").value;
    if (!uri || !address) {
        alert("incorrect data in form fields!");
        return
    }

    contract.once("nftCreated", (from, tokenID, returnedURI) => {
        console.log(`${ from } sent ${ tokenID } with URI ${ returnedURI }`);
        document.getElementById("returnData").innerText = tokenID;
    });

    await contract.createNFT(uri, address).then(console.log);
});
