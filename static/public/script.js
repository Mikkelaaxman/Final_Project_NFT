let accounts =[];

document.getElementById("signIn").addEventListener('click', async () => {
  // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            alert(accounts[0]);
        } catch (error) {
            // User denied account access...
        }
    }
    // Non-dapp browsers...
    else {
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    
});
