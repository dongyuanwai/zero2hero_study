// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Base is Initializable {
    uint256 private value;
    event ValueChanged(uint256 newValue);

    //初始化函数
    function initialize(uint256 _initValue) public initializer {
        value = _initValue;
    }

    // 设置新值
    function setValue(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // 读取值
    function retrieve() public view returns (uint256) {
        return value;
    }
}