// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Base  {
    uint256 private number;

    //初始化函数
    function setNumber(uint256 _number) public {
        number = _number;
    }

    // 读取值
    function getNumber() public view returns (uint256) {
        return number;
    }
}