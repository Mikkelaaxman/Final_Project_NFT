pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract nftCreator is ERC721URIStorage, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private tokenId;

    event nftCreated(address _from, uint tokenID, string URI);

    constructor() ERC721("testnft", "test") {
    }

    function createNFT(string memory URI, address owner) public payable onlyOwner{
        tokenId.increment();
        uint currentId = tokenId.current();

        _safeMint(owner,currentId);
        _setTokenURI(currentId, URI);

        emit nftCreated(owner, currentId, URI);
    }
}
