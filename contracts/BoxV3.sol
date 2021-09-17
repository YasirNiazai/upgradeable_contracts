
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./BoxV2.sol";


contract BoxV3 is BoxV2{
    function div()public{
        value = value/2;
        emit ValueChanged(value);

    }
}