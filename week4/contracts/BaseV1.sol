// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BaseV1  {
    uint256 private number;

    //设置number的十倍
    function setNumber(uint256 _number) public {
        number = _number*10;
    }

    // 读取值
    function getNumber() public view returns (uint256) {
        return number;
    }
}