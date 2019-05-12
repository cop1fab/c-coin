const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timeStamp, data, previousHash =''){
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash
    } 
    createHash(){
         return SHA256(this.index + this.timeStamp + 
            this.previousHash + JSON.stringify('data')).toString();
    }
}

class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock];
    }
    createGenesisBlock(){
        return new Block(0, '10/5/2019', 'Genesis block', '0')
    };
    getLatestBlocks(){
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlocks().hash;
        newBlock.hash = newBlock.createHash();
        this.chain.push(newBlock);
    }
    isChainValid(){
        for( let i=1; i < this.chain.length; i++ ) {
            const currentBlock = chain[i];
            const previousBlock = chain[i-1];

            if (currentBlock.hash !== currentBlock.createHash()){
                return false;
            }

            if (previousBlock.hash !== previousBlock.hash){
                return false;
            }

            return true;
        }
    }
}

let cCoin = new BlockChain();
cCoin.addBlock(new Block(1, '10/5/2019', { amount: 4000 }));
cCoin.addBlock(new Block(2, '10/5/2019', { amount: 9000 }));
cCoin.addBlock(new Block(3, '10/5/2019', { amount: 12000 }));

console.log(JSON.stringify(cCoin, null, 4));