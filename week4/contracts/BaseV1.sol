// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Base.sol";
contract BaseV1 is Base {
    
    string public name;

    function increment() public {
        setValue(retrieve()+1);
    }
    function reduce() public {
        setValue(retrieve()-1);
    }
    
}