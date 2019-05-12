# c-coin
A simple blockchain cryptocurrency developed in Javascript. 

## How to test that the data saved on a blockchain can't be changed: 

Clone the repo donwn to your local machine, then at the end of all methods add 

console.log('is valide is + cCoin.sChainValid()')

Then on your terminal run node src/index.js 

This should return true, 

Now if you go and try to change this any of the data, it will return false because data  on blockchain can't be changed. 
