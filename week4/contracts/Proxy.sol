// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBase {
    //设置number的十倍
    function setNumber(uint256 _number) external;

    // 读取值
    function getNumber() external view returns (uint256);
}

contract Proxy{
    IBase public base;
    function setBaseAddress(address _baseAddress) public{
        base = IBase(_baseAddress);
    }
    function getBaseAddress()public view returns(address){
        return address(base);
    }

        //设置number的十倍
    function setNumber(uint256 _number) public {
        base.setNumber(_number);
    }

    // 读取值
    function getNumber() public view returns (uint256) {
         base.getNumber();
    }
}