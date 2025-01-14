//SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Strings.sol";
import './SVG.sol';
import './Utils.sol';

contract Renderer {
    function render(uint256 _tokenId) public pure returns (string memory) {
        // string memory ownerAddress = Strings.toHexString(
        //     uint256(uint160(msg.sender))
        // );
        return
            string.concat(
                // abi.encodePacked(
                //     '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="360">',
                //     '<rect x="0" y="0" width="100%" height="100%" fill="blue"></rect>',
                //     '<text x="20" y="40" fill="white" font-size="20px">',
                //     ownerAddress,
                //     "</text>",
                //     "</svg>"
                // ),
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" style="background:#c0fbec">',
                '<defs>',
                    svg.path(
                        string.concat(
                            svg.prop('id', 'path-1'),
                            svg.prop('d', 'M300, 500 q0, 525 250, 10 q250, -525 250, 10 q0, 500 -250, -10 q-250, -500 -250, -10'),
                            svg.prop('align', 'stretch')
                        ),
                        utils.NULL
                        // svg.animateMotion(
                        //         string.concat(
                        //             svg.prop('attributeName', 'motion'),
                        //             svg.prop('path', 'M300, 500 q0, 500 250, 10 q250, -500 250, 10 q0, 500 -250, -10 q-250, -500 -250, -10'),
                        //             svg.prop('begin', '0.0s'),
                        //             svg.prop('dur', '5s'),
                        //             svg.prop('rotate', 'auto'),
                        //             svg.prop('repeatCount', 'indefinite') 
                        // )
                    ),
                '</defs>',
                    svg.text(
                        string.concat(
                            svg.prop('x', '20'),
                            svg.prop('y', '40'),
                            svg.prop('fill', 'black'),
                            svg.prop('font-size', '20px')
                        ),
                        string.concat(
                            svg.textPath(
                                svg.prop('href', '#path-1'),
                                '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
                            ),
                            utils.NULL
                            // svg.animateMotion(
                            //         string.concat(
                            //             svg.prop('attributeName', 'motion'),
                            //             svg.prop('path', 'M300, 500 q0, 500 250, 10 q250, -500 250, 10 q0, 500 -250, -10 q-250, -500 -250, -10'),
                            //             svg.prop('begin', '0.0s'),
                            //             svg.prop('dur', '5s'),
                            //             svg.prop('repeatCount', 'indefinite')
                            //         )
                            // )
                        )
                        // string.concat(
                        //     '0x',
                        //     Strings.toHexString(
                        //         uint256(uint160(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266))
                        //     )
                        // )
                    ),
                    svg.circle(
                        string.concat(
                            svg.prop('fill', 'grey'),
                            svg.prop('stroke', 'black'),
                            svg.prop('transform-origin', '50% 50%'),
                            svg.prop('stroke-width', '5'),
                            svg.prop('cx', utils.uint2str(0)),
                            svg.prop('cy', utils.uint2str(0)),
                            svg.prop('r', utils.uint2str(10))
                        ),
                        // utils.NULL
                        svg.animateMotion(
                                string.concat(
                                    svg.prop('attributeName', 'motion'),
                                    svg.prop('path', 'M300, 500 q0, 525 250, 10 q250, -525 250, 10 q0, 500 -250, -10 q-250, -500 -250, -10'),
                                    svg.prop('begin', '0.0s'),
                                    svg.prop('dur', '5s'),
                                    svg.prop('repeatCount', 'indefinite')
                                )
                        )
                    ),
                    // svg.path(
                    //     string.concat(
                    //         // svg.prop('d', 'M 10 60 C 20 80, 40 80, 50 120, 40 40, 40 20, 20 40'),
                    //         svg.prop('d', 'M170.5 1c.3.5 1.2 1 2 1s1.6.4 2 1c.3.6-3.1.7-9.2.4-9.2-.6-9.9-.5-11.1 1.5-1.4 2.4-1.9 2.1 6.3 4.4 13 3.8 27.3 10.6 40.7 19.4 3.7 2.4 7.2 4.2 7.8 3.8 2-1.3 33.2 21.3 38.9 28.2 1.7 2.1 3.8 3.8 4.6 3.8.7 0 5 3.5 9.3 7.8l8 7.8 8.8 1c4.9.5 9.4 1.5 10 2.2.8.8 1.4 7.3 1.6 18.2.3 9.3.3 16.4 0 15.7-1.1-3.4-2.2-.4-2.2 6.3 0 6.9-2.5 20.4-5 26.9-.6 1.6-4.3 8.3-8.2 14.8-3.9 6.6-8.1 14.3-9.2 17.1-1.2 2.9-3.8 7.7-5.9 10.8-2 3.1-4.5 7.6-5.6 10-2.4 5.5-5.6 20.2-4.8 22.3.5 1.3-.1 1.6-2.8 1.6-1.9 0-5.7.9-8.5 1.9-2.8 1.1-5.2 1.5-5.6 1-.3-.5-2.3-1.8-4.5-2.9-2.1-1.1-3.9-2.7-3.9-3.5 0-.7-1-1.7-2.2-2.1-1.3-.4-3.6-1.7-5.1-3-1.6-1.3-3.5-2.4-4.2-2.4-.7 0-3.6-1.8-6.4-4-2.8-2.2-5.5-4-6.2-4-1.5 0-13.9-8.2-13.9-9.2 0-.4-.6-.8-1.3-.8-1.4 0-11.1-5.9-13.9-8.3-.9-.8-2.6-1.8-3.7-2.2-1.2-.4-3.9-2.8-6-5.5-3.7-4.7-3.8-5.1-4.5-15.2-1.8-28.4-2.7-35.1-5.4-40.7-.9-1.9-1.5-5.3-1.4-7.5.1-2.3-.3-5.7-.9-7.6-1.4-4.7-5.1-13-5.8-13-.3 0-.5-3.9-.3-8.7.3-8.6.2-8.9-3.3-14.8-4.9-8.1-7.2-10.3-11.9-11.7-2.3-.6-4.4-1.4-4.9-1.8-1.3-1.1-17.6 2.8-20.3 4.9-1.5 1.2-3.1 2.1-3.6 2.1s-2.5 1.7-4.5 3.7c-4.4 4.6-7.3 13.1-7.1 21 .2 12.7 12.4 27.1 22.9 27.3 2.4 0 4.3.8 5.8 2.3 3 3.3 6.1 9.6 5.4 11.3-.3.8.1 2.4 1 3.7.8 1.2 1.8 3.8 2.2 5.7.4 1.9 1.2 4 1.7 4.7 1.5 1.8.6 21.5-.9 22.1-.9.2-1.3 2.4-1.3 6.2 0 8.4-3.3 16.6-7.3 18-2.5.8-3.7.7-6.6-.8-2-1.1-3.8-2.7-4-3.7-.2-1.1-1.4-2.7-2.7-3.7-1.2-1-3.7-4.1-5.5-6.8-1.8-2.8-3.6-5-4-5-.5 0-4.5-3.8-8.9-8.4-6.6-6.8-9.2-8.8-13.8-10.5-6.2-2.3-11.8-2.4-14.2-.3-.8.7-4.5 3.5-8.1 6.2-3.7 2.7-7.6 6.1-8.8 7.7-7.5 9.7-11 15.5-12.4 20.3-2.8 9.5-2.7 10.9 2 16.1 3.6 3.9 3.9 4.1 8.3 3.6 2.6-.3 6.2-1.2 8.1-2.1 6-2.6 7.3-3 10.4-3.1 1.7 0 4-.4 5.3-.9 1.6-.5 2.2-.4 2.2.8 0 .9 1.1 1.8 2.5 2.2 1.4.3 4.9 3.2 7.7 6.3 2.9 3.1 4.6 4.8 3.9 3.8-.8-.9-.9-1.7-.3-1.7 1.2 0 5.3 5.2 7.6 9.7 1 2 1.2 3.3.6 3.3s-.9.4-.5.9c.3.6-.9 3-2.7 5.5-3.2 4.4-4.1 4.7-8.1 3.1-1.6-.6-1.8-.4-1.5 1.5.2 1.6 1.2 2.6 3.3 3.2 3.8 1 5.5.4 5.5-2 0-1 1.3-3.3 3-5.2 2.5-2.9 3.1-3.2 3.9-2 .5.8 1.6 2.4 2.4 3.4 1.3 1.8 1.4 1.8 1.9-.8.4-2-.7-4.9-4.3-11.1-2.7-4.7-4.9-8.9-4.9-9.3 0-.4.5 0 1 .8.7 1.1 1 1.1 1 .2 0-2.4-4.9-8.5-9.2-11.3-2.5-1.7-3.6-2.9-2.6-2.9.9 0 2.3-.6 3-1.3.7-.7 3.8-2.8 6.8-4.7 6.9-4.2 6.4-3.9 5.7-4.6-.3-.4-3.7.6-7.4 2.1s-8.1 3.1-9.8 3.6c-3.8 1.2-13.5.1-13.5-1.5 0-.6 1.3-2.7 3-4.6 3.8-4.5 4.1-8.7.4-6.2-.6.4-4.1 4.7-7.8 9.7-5.2 7-7.8 9.5-11.4 11.2-5.8 2.7-7.7 2.8-9.4.5-.7-1-2.1-2.1-3-2.5-3-1.1-2.4-7.3 1.1-10.8 1.6-1.6 3.5-2.9 4.3-2.9 2.5-.1 5.7-3.6 5.2-5.7-.7-2.5 1.5-7 5-10.2 3.2-3 3.3-4.1.4-4.1-2 0-1.9-.3 1.2-3.5 4.2-4.3 10.5-7.5 14.9-7.5 3.5 0 14.1 4.8 17.6 8 1.1.9 3 2.3 4.3 2.9 3 1.6 15.2 17 15.2 19.3 0 1.1 2.2 3.2 5.6 5.4 5.8 3.7 12.4 5.6 12.4 3.5 0-.6 1-1.5 2.3-2 2.3-.9 5-7.5 6.2-15.5.8-4.7 3.5-10.7 4.7-10 .4.3.8 2.7.8 5.3 0 4.7 2.1 9.3 3.6 7.8.4-.4.2-3.6-.4-7.1-.7-3.5-1.2-7.9-1.2-9.7 0-1.9-.9-5.1-2-7.2-2-3.7-2.8-12.3-1.1-11.3.5.4 2.1 3.9 3.6 7.9 1.5 3.9 2.9 7.9 3.2 8.7.5 1.2.7 1.2 1-.3.3-.9.9-1.7 1.4-1.7.5 0 .9-.8.9-1.9 0-2-9.7-21.5-13.1-26.2-3.2-4.6-1.8-5.2 3-1.4 2.4 1.9 4.8 3.5 5.3 3.5 1.8 0 .3-3.5-2-4.6-2.4-1.2-11.1-12.2-11.2-14.1 0-.6 1.9-2.2 4.3-3.6 4.3-2.6 12-10.1 12.9-12.8.9-2.3 2.7.2 3.7 5.1 5.4 26.4 5.3 26.4 4.8 37-.3 5.8-.9 11.6-1.3 12.9-.5 1.6-.4 2.2.4 1.7.6-.3 1.4-2.8 1.7-5.4 1.3-10.4 1.6-11.6 2.6-10.1.5.8.9 6.1.9 11.9 0 5.8.7 14.8 1.6 20l1.7 9.5 5.6 3.6c3.1 2.1 7 4.4 8.6 5.2 5.1 2.6 16.6 10.6 21.7 15.2 3 2.7 5.5 4.1 6.6 3.9 2-.6 14.6 7.2 13.8 8.5-1.1 1.7-8.3 2.1-13.7.7-6.3-1.7-7.3-1.4-3 .9 2.2 1.1 6.2 1.6 13.2 1.7 8.1.2 10.6.6 12.4 2 1.3 1 2.8 1.8 3.3 1.8.6 0 3.3 1.6 6.2 3.5 6.1 4.1 6.2 4.1 9.8 1.6 1.5-1.1 4.2-2.2 6-2.6 2.9-.6 3.2-.4 3.2 1.8 0 3.6 1.1 8.7 2 8.7.3 0 .5-2.5.2-5.6-.3-4.1-.1-5.9.9-6.5 1.2-.7 1.2-.9 0-.9-1 0-1.2-1.5-.6-7.3 1.1-12 5.1-22.4 10.9-29.1 1.4-1.6 2.6-3.2 2.6-3.5.1-.3 1.7-2.4 3.6-4.6 2.1-2.4 2.9-2.9 1.9-1.3-1.6 2.6-1.6 2.6.5 2.1 2.1-.6 2.2-.3 1.6 3.3-1 6.9-1.9 23.9-1.2 23.3.4-.4 1.1-4.9 1.6-10.1.5-5.1 1.6-11 2.5-13.2 1.1-2.5 1.2-3.5.4-3-.9.5-1-.4-.5-3.6.4-2.9.3-4.6-.5-5.1s-.4-1.7 1.3-4c3.9-5.1 5.5-8.9 7.3-16.5.9-3.8 2.1-7.8 2.6-8.9 1.7-3.8 4.9-21.7 4.9-27.6 0-3.2.4-5.9.9-5.9.4 0 .6 1.1.3 2.5-.6 3.1.5 3.3 1.9.2.8-1.8.8-1.5.3 1.3-.3 1.9-.6 4.7-.5 6.2.1 1.5-.3 2.9-.9 3.3-.5.3-1 3.4-.9 6.8 0 5.2.2 5.8 1 3.7.6-1.4 1.7-3.7 2.4-5.2.9-1.7 1-2.8.3-3-.7-.3-.6-3.1.1-8.8 1.6-11.9 1.7-12.6 2.5-13.8.4-.7.4-1.7 0-2.3-.4-.8-.9-.7-1.4.2-1.2 1.8-2.4-5.4-1.6-8.7.6-2.3.4-2.6-1.3-2.1-1.7.4-2.2-.2-2.9-3.7-.5-2.2-.8-4.2-.7-4.4.9-1.2 18.7 4.8 18.7 6.3 0 .5 1.9 1.7 4.2 2.5 3.8 1.5 4.1 1.8 3.8 5-.2 1.9-1.2 4.9-2.3 6.6-1 1.7-1.9 3.8-1.9 4.7 0 3.2-6.9 16.9-8.1 16.1-.7-.4-.9-.3-.5.4.3.6-.4 2.6-1.6 4.4-1.3 1.9-3.4 5.8-4.7 8.8-6.1 14.1-12.1 26-13.1 26-.5 0-1 .7-1 1.5 0 2.6 1.6 1.6 3.5-2.3 2.2-4.5 3-3 1.5 2.9-2.4 9.3-2.8 12.9-1.3 12.9.7 0 1.3-.9 1.3-2 0-1.2.5-1.7 1.3-1.4.7.2 2.6-1 4.2-2.7 2.9-3 2.9-3.1.5-2-2.3 1.1-2.3 1.1-.7-.3 1.1-.8 2.5-1.2 3.2-1 .7.3 1.6.1 2-.5.3-.6 1.5-1.1 2.5-1.1 1.1 0 4.8-1.8 8.2-4 3.5-2.2 7.2-4 8.4-4 2.7 0 11.7-3.1 11-3.8-.4-.3.1-1.4 1.1-2.4 2.3-2.6.1-2.3-5.6.6-2.5 1.3-6.2 3-8.1 3.7-1.9.7-5.8 2.8-8.5 4.6-2.8 1.8-6.4 3.4-8.1 3.6-1.8.2-5 1.8-7.3 3.6-4.6 3.7-4.7 3.4-2.5-5.3 1.4-5.7 11.3-28 12.1-27.3.1.2-1.1 4.4-2.7 9.3-1.7 4.9-2.9 9.6-2.7 10.4.1.8 1.3-1.7 2.5-5.5 1.2-3.9 3.3-8.7 4.7-10.8 1.4-2 2.3-4.2 2-4.7-.7-1.2 2.6-7.8 6-11.9 2.1-2.4 2.3-3.1 1.1-3.1-.9 0-1.6-.2-1.6-.5s2-4.9 4.5-10.2c2.5-5.3 4.5-10.9 4.5-12.5v-2.9l5.8 3.1c6.4 3.4 26.2 17.6 30.6 21.9 2.7 2.7 2.8 3.1 1.6 6.7-.7 2.2-2.4 5.2-3.9 6.9-1.5 1.6-4 4.7-5.5 6.7-2.4 3.3-2.5 3.8-.9 3.8 1.2.1.8.6-1.2 1.6-2.6 1.2-2.7 1.4-.5.9 1.4-.3 3.9-.8 5.5-1l3-.5-2.6 1.2c-1.4.7-2.4 1.9-2.2 2.5.3.7-.1 1.3-.9 1.4-3.5.3 4.4 1.7 9.2 1.7 3-.1 4.5-.3 3.3-.5-1.3-.2-2.3-.8-2.3-1.3s-1.9-1-4.2-1.2l-4.3-.4 4.8-1.4c5.1-1.5 5.7-2.3 3-3.9-1.5-.9-1.4-1 1-1.1 1.5 0 2.7.4 2.7 1 0 .5.7 1 1.7 1 2.7 0 9.3 7.9 9.3 11.1 0 3.9-2.8 10.6-4.8 11.5-.9.4-8.7.8-17.2 1-15.3.2-15.6.3-23.9 3.8-7.8 3.3-16.6 8.4-15.8 9.2.2.2 3.3-.9 7-2.5 3.7-1.5 6.5-3 6.2-3.3-.3-.3.1-.8 1-1.2.9-.3 1.3-.2 1 .4-.4.6.5.5 1.9-.2 1.4-.6 2.6-1.5 2.6-1.9 0-.4.8-.8 1.8-.7.9 0 3.1-.3 4.9-.7l3.2-.7-.6 3.6c-.5 3.4-.4 3.6 2 3.6 1.4 0 2.8.4 3.1.9.3.4 3.3 1.4 6.6 2 3.3.7 5.9 1.7 5.7 2.3-.1.6 2.1 1.6 4.8 2.2 5.5 1.4 9.5 3.2 9.5 4.5 0 .5-1.8 3.1-4.1 6-4.8 6-3.9 6.7 1.8 1.3 3.5-3.1 4-4.2 3.6-6.6-.5-2.2-1.7-3.3-5.4-5.1-2.7-1.2-4.6-2.5-4.2-2.9.3-.3-.4-.6-1.6-.6-1.2 0-3.8-.7-5.9-1.6-2-.9-5.9-2.2-8.7-2.9-4.6-1.1-5-1.4-5-4.1v-2.9l10.9.4c8.4.3 11 0 11.7-1 .8-1.2 1.1-1.2 1.8.1.8 1.2 1.4 1.1 3.6-1 4.5-4.2 5.7-7.5 4.9-13.6-.6-5.2-.9-5.7-5.1-8.4-2.9-1.7-4-2.9-3.2-3.3 3-1.1-4.7-2.9-10.3-2.4l-5.8.5 5-5.6c2.8-3.1 6.1-6.3 7.3-7l2.2-1.3-2.4.5c-2.1.4-2.3.2-1.9-2.5.4-2.7-.3-3.7-6.6-9.1C333.8 97 296 79 277.4 79h-5.6l-8.2-7.7C239.9 49 216.4 31.5 197 21.7c-7.4-3.8-12.5-6.6-11.2-6.2 3.7 1.1 2.5-1.2-1.3-2.5-1.9-.6-3.5-1.6-3.5-2.1 0-.6-.3-.8-.7-.6-.5.3-3-.6-5.8-1.9-2.7-1.3-4.3-2.3-3.4-2.4 3 0 11.1 2.9 14.9 5.4 2.5 1.7 4 2.1 4.2 1.4.3-.8 1.6-.5 4.2 1 2 1.2 4.5 2.2 5.4 2.2.9 0 4.8 1.4 8.7 3 3.8 1.7 7.4 3 8 3 1.6-.1-3.6-4-5.4-4-.9-.1-5-1.9-9.1-4-8.2-4.3-7-5.3 2.5-2 3.2 1.1 6.7 2 7.7 2 1.1 0 1.6.4 1.3 1-.3.5 0 .7.8.4.7-.2 6 1.9 11.7 4.7 7.6 3.9 9.8 5.4 8.5 5.9-1.7.6-1.8.7-.1 1.3 2.4 1 2.8.9 2-.4-.8-1.3-.5-1.3 6.2 2.3 4.7 2.5 10.4 4.3 10.4 3.3 0-.9-7.8-4.4-8.3-3.8-.9.9-5.2-3-5.5-5-.3-1.5.1-1.7 2-1.2 5.2 1.6 15.3 6.7 16.1 8 .9 1.7 3.8 2 5.3.5 1.2-1.2 4.4-.3 4.4 1.3 0 .7-.4.7-1.2-.1-1.6-1.6-2.5-1.5-2.5.3 0 .8 2.1 2.5 4.6 3.7 2.5 1.2 6 3.1 7.6 4.3 4.2 3.1 6.6 4.1 3.1 1.3-1.6-1.3-4.1-3.3-5.5-4.6l-2.6-2.2 2.5 1c1.4.6 3.3 1.3 4.3 1.6.9.4 1.7 1.1 1.7 1.6 0 .6.7.7 1.6.4 3-1.1 24.6 13.1 22.2 14.5-.7.5-2.6-.3-4.5-1.7-5-3.8-3.9-2.1 1.5 2.2 2.6 2.1 4.1 3.1 3.3 2.1-1.2-1.5-1.1-1.6 1.8-1.1 3.4.7 4.3-.8 1.4-2.5-1-.6-1.4-1.1-.9-1.1 1.8 0 10.6 6.2 10.7 7.6.1.8.3 1.8.4 2.4.1.5.3 1.3.4 1.6 0 .4.8.1 1.6-.6 1.3-1 2.3-.5 6.3 3 2.6 2.4 6 5.7 7.6 7.4 2 2.1 3.1 2.7 3.4 1.8.3-1 .8-.9 2.2.3 1 .9 1.6 2.3 1.3 3-.3.9.2 1.4 1.4 1.3 1 0 2.7.3 3.7.7 1.4.6 1.7.5 1.1-.4-3.6-5.9 25.7 21.7 30.4 28.7 1.2 1.8 2.7 3 3.2 2.7.5-.4.6.2.2 1.1-.4 1.2-.3 1.5.5 1 1.4-.9 7.5 7.3 6.8 9.1-.3.8 1.7 4.4 4.4 8.1 2.7 3.7 6.9 10.4 9.2 14.9 2.3 4.6 4.5 8.3 4.9 8.3.3 0 .6-1.7.5-3.8-.2-4.4-5.8-16.6-11.2-24.2-9.8-13.9-34.8-42.5-36.3-41.5-.5.2-3.3-1.5-6.3-3.8-38.1-29.2-95-59.7-123.3-66.1C209.4 10.2 198.9 8 193 7c-7.7-1.3-12-2.6-17.8-5.1-4.9-2.2-5.6-2.3-4.7-.9Zm-46.3 65.8c-.1.8.2 1.1.8.7.6-.4 2.3-.4 3.9 0 2.2.5 3.3 1.6 4.5 4.7 3.7 9.2 3.1 15.1-2.1 19.1-1.2 1-2.3 2.7-2.3 3.7 0 .9-.7 2.3-1.5 3-.8.7-1.5 1.9-1.5 2.6 0 2.6-7.4 5.3-15.9 5.9-4.4.2-8.4.6-8.8.7-1.1.4-4.4-3.2-6.7-7.1-2.4-4.3-3.2-13.9-1.6-19.5.9-3.4 2.2-5.1 4.8-6.8 1.9-1.3 4.9-3.2 6.6-4.3 5.4-3.5 20.4-5.5 19.8-2.7Z'),
                    //         svg.prop('fill', '#755e36'),
                    //         svg.prop('transform-origin', '50% 50%')
                    //         // svg.prop('stroke-width', '2'),
                    //         // svg.prop('fill', 'none')
                    //     ),
                    //     // svg.animateTransform(
                    //     //         string.concat(
                    //     //             svg.prop('attributeName', 'transform'),
                    //     //             svg.prop('type', 'translate'),
                    //     //             svg.prop('from', '0 0'),
                    //     //             svg.prop('to', '0 330'),
                    //     //             svg.prop('dur', '20s'),
                    //     //             svg.prop('repeatCount', 'indefinite')
                    //     //         )
                    //     // )
                    //     svg.animateMotion(
                    //             string.concat(
                    //                 svg.prop('attributeName', 'motion'),
                    //                 svg.prop('path', 'M100, 500 q600, 500 100, 10 q600, -500 100, 10'),
                    //                 svg.prop('begin', '0.0s'),
                    //                 svg.prop('dur', '5s'),
                    //                 svg.prop('repeatCount', 'indefinite')
                    //             )
                    //     )
                    // ),
                    // svg.path(
                    //     string.concat(
                    //         svg.prop('d', 'M113 76.8c-2.9 1.4-3.6 2.3-3.8 5.4-.4 4.8 1 9.9 3.1 11.2 1.3.8 2.5.7 4.8-.7 1.7-.9 3.7-1.7 4.5-1.7 2.1 0 3.4-4.3 2.5-7.8-.8-2.7-5.4-8.2-6.9-8.2-.4 0-2.3.8-4.2 1.8Zm228.8 51.8c-.4.3-1.2.7-2 .8-3.1.5-5.8 1.8-5.4 2.5.7 1-5.1 6.5-8.4 8-1.7.8-1.1-.1 2-2.9 3.1-2.9 3.5-3.5 1.4-2.1-1.7 1.1-5.7 4.5-9 7.6-3.2 3-8.2 6.9-11.1 8.5-5.6 3.2-8 5.7-4.4 4.5 1.6-.5 2-.3 1.5 1-.5 1.1.7.7 3.7-1.3 2.4-1.7 10.7-6.3 18.4-10.3 7.7-4.1 13.3-7.5 12.4-7.7-.8-.1-3.7.6-6.3 1.8-2.6 1.1-5 2-5.2 2-1.5 0 1.7-2.7 7.7-6.6 3.9-2.4 6.7-4.9 6.4-5.4-.7-1.2-1-1.2-1.7-.4ZM327 161.3c-11.7 4.8-26.7 15.4-25.7 18.1.3.6-.6 3.1-1.8 5.6-1.3 2.5-2.8 5.6-3.4 7-1.5 3.3-6.1 9.6-6.1 8.3 0-.6.7-3 1.5-5.3 1.9-5.3 1.9-6 0-6s-3.6 4-2.9 6.7c.3 1-2 9.4-5 18.5-3.1 9.1-5.6 17.6-5.5 18.9 0 2.1.2 2 1.2-.8 2.1-5.6 3-5.1 2.4 1.5-.3 3.6-.1 6 .4 5.6.5-.3.9-2 1-3.7.1-3.1.1-3.1 1.1.8.5 2.2.7 6.5.4 9.5-.3 3.5 0 6.4.8 7.9 1.3 2.3 1.3 2.2 2.5-2.2.6-2.5 1.1-6.1 1.1-7.9 0-1.9.5-3.9 1-4.4.7-.7.2-2.8-1.5-6.7l-2.6-5.6 2.2-9.2c4.1-17.4 6.4-20.2 21-24.3 8.3-2.4 22-5.4 24.9-5.6.8 0 4.3-.4 7.8-.8 3.4-.4 6.8-.4 7.5 0 .7.4 2.2.8 3.4.8 2.7 0 5.6 4 4.7 6.4-.7 1.9.7 2.1 2.4.4 1.5-1.5 1.5-4.5 0-5.4-.7-.4-.8-.3-.4.4s.2 1.2-.3 1.2c-.6 0-1.1-.6-1.1-1.4 0-.8-.6-1.7-1.2-1.9-1-.4-1-.7 0-1.4 2.3-1.7-7.8-3.5-12.9-2.4-5.8 1.4-5.9 1.4-5.3-.4.4-1 0-1.5-1.2-1.6-7.3-.6-25.5 2.6-31.4 5.5-2.9 1.4-5.7 2.6-6.1 2.6-.5 0-.3-1.4.3-3.1 1.2-3.5 12.4-15.9 14.3-15.9.7 0 1.9-.7 2.6-1.7 1.5-1.7 14.5-8.3 16.6-8.3.6 0 1.5-.5 1.8-1 1-1.7-2.7-1.1-8.5 1.3Zm69.5 31.6c-6.6 5.4-12 11.5-24.7 27.3-2.9 3.7-9.8 11.5-15.2 17.3-5.4 5.8-9.6 10.9-9.2 11.3.4.4 1.9-.7 3.3-2.3 3.3-4 14.9-17 19.3-21.7 1.9-2 5.1-5.7 7-8.2 1.9-2.5 4.1-4.3 4.7-4.1.7.2 2-1 2.9-2.8 2.7-5.3 8.1-11.4 14.5-16.2 5.3-4.2 7.2-6.5 5.2-6.5-.5 0-3.9 2.7-7.8 5.9Z'),
                    //         svg.prop('fill', '#95783d')
                    //     ),
                    //     // svg.animateTransform(
                    //     //         string.concat(
                    //     //             svg.prop('attributeName', 'transform'),
                    //     //             svg.prop('type', 'translate'),
                    //     //             svg.prop('from', '0 0'),
                    //     //             svg.prop('to', '0 330'),
                    //     //             svg.prop('dur', '20s'),
                    //     //             svg.prop('repeatCount', 'indefinite')
                    //     //         )
                    //     // )
                    //     svg.animateMotion(
                    //             string.concat(
                    //                 svg.prop('attributeName', 'motion'),
                    //                 svg.prop('path', 'M100, 500 q600, 500 100, 10 q600, -500 100, 10'),
                    //                 svg.prop('begin', '0.0s'),
                    //                 svg.prop('dur', '5s'),
                    //                 svg.prop('repeatCount', 'indefinite')
                    //             )
                    //     )
                    // ),
                    svg.path(
                        string.concat(
                            svg.prop('id', 'myTextPath'),
                            svg.prop('d', 'M300, 500 q0, 525 250, 10 q250, -525 250, 10 q0, 500 -250, -10 q-250, -500 -250, -10'),
                            svg.prop('fill', 'none'),
                            svg.prop('stroke', '#95783d'),
                            svg.prop('stroke-width', '2')
                        ),
                        utils.NULL
                    ),
                    // svg.path(
                    //     string.concat(
                    //         svg.prop('d', 'M337 188.6c0 .5 1.8 4.4 4.1 8.7 2.6 5.1 4.4 7.5 5.2 7 .7-.4.3.6-.7 2.2-1.3 1.9-2.1 5.2-2.3 9.5-.5 8.5-2.1 15.6-3.9 17.1-.8.6-1.4 2.6-1.4 4.3l.1 3.1 1.5-2.8c1.5-2.8 6.4-18.2 6.3-19.5-.5-3.6.3-8.2 1.5-8.2.7 0 1.9-.7 2.6-1.5.7-.8 1.7-1.2 2.2-.9 1.3.9 9.8-3.8 9.8-5.4 0-1.6-3-.9-7.8 1.9-1.8 1-3.7 1.9-4.2 1.9-.6 0-2.4-2.9-4.1-6.4-2.9-5.9-8.9-13.3-8.9-11ZM23.4 232.7c-1.1.2-4.1 2.5-6.5 5-2.4 2.6-3.5 4-2.5 3.2 1.8-1.3 1.9-1.2 1.3 1.1-.4 1.4-.7 2.8-.7 3.2 0 1.3-1.8.9-2.3-.5-.2-.6-.2-.3 0 .8.6 2.6.6 2.4-.1 14.1-.4 5.6-.3 11.9.2 14 .5 2.5.4 6.5-.4 11.1-.6 3.9-1.1 13.4-1 21 .3 15.8-1.1 23.2-6.9 36.7-4.5 10.6-4.4 14.2.1 5.1 4.9-9.6 7.6-16.9 8.8-23.9l1.1-5.9 5.5-1.8c6.7-2.2 11.5-7.1 13.2-13.5 1.1-4 2.1-5.2 8.3-9.7 3.8-2.8 8.2-6.2 9.7-7.5 2.3-2.1 3-2.3 4.3-1.2 1.3 1.1 1.5.8 1.5-1.7 0-1.7 1-4.5 2.3-6.4 2.2-3.2 2.7-3.4 7.3-3.2 4.3.2 4.7.1 3.1-1.1-.9-.7-4.5-1.9-8-2.6-10-2-10.7-2.3-6.7-3.2 2.2-.4.5-.6-4.7-.3l-8.2.3-.6-3.9c-.6-3.6-2-5.7-3.1-4.6-.2.2.1 2.7.8 5.5 1 4.7.9 5.4-.8 7.3-1.4 1.5-1.5 2-.4 1.7 1.9-.4 1.5 4.7-.5 7.8-.7 1.1-1.5 3.1-1.7 4.5-.2 1.9-.8 2.3-2.7 2.1-1.9-.2-2.2.1-1.6 1.5.4 1 1 3.9 1.2 6.4.6 5.2-1.6 10.5-6.8 16.4-2.5 2.9-3.8 3.5-7 3.5-7.2 0-7.2-5.3.1-9 2.1-1.1 4.1-2.3 4.4-2.8.2-.4.8-4.1 1.2-8.1.5-5.4.4-7.2-.5-6.7-.6.4-1.1 2.6-1.2 4.9-.2 6.8-1.2 9.1-4.9 10.9-1.9.9-3.9 1.7-4.3 1.8-1 0-.2-21.4.9-23.1.4-.7.7-6.5.5-12.8-.2-12 1.2-22.3 3-23 .6-.2 1.4-1.4 1.9-2.7 1-2.5 1.5-2.8 6.1-3.8 1.8-.4 2.6-1.2 2.5-2.3-.1-1.6 1.1-1.8 13.3-1.6 7.4.1 13.7.7 14 1.2.7 1.1 10.8 3.1 11.6 2.3.3-.3.5-1.4.5-2.4 0-1.5-.8-1.8-5.4-1.8-2.9 0-6.6-.4-8.2-.9-3.1-1-27.6-2.1-31-1.4Zm34 37.9c1 .4.6 1.9-1.5 5.8-2.4 4.3-4.4 6.3-11.5 11-6.2 4.1-8.9 5.5-9.7 4.7-.8-.8-.2-2.4 2.2-5.7 1.9-2.8 3.7-6.9 4.3-10.3.6-3.1 1.6-6 2.2-6.4 1.1-.8 11.4-.1 14 .9ZM279 260c-1.1 2.2-2.5 4-3 4-1.6 0-3.4 4.2-2.1 4.9 1.1.7-21.8 24.1-23.7 24.1-.5 0-2.1 1.1-3.6 2.3-3 2.6-16 7.1-22 7.6-.5.1-.3.7.3 1.5 2.1 2.5 8.2 1.3 18.3-3.7 5.3-2.6 10.3-4.7 11-4.7 1.6-.1 10.7-4.9 9.3-4.9-.5 0-2.1.6-3.5 1.4-5.5 3.1-4 1.1 6.3-8.8 9.6-9.1 17.7-19.4 17.7-22.2 0-2.2-1.3-5.5-2.1-5.5-.5 0-1.8 1.8-2.9 4Zm-79 1c0 2-.9 4-2.5 5.6-1.4 1.4-2.3 2.9-2.1 3.3 1.1 1.7-10.9 15.1-21.8 24.5-2 1.6-3.2 3.5-2.9 4.5.2 1-1 2.5-3.2 4-1.9 1.3-3.3 2.6-3 2.9.6.6-2.5 4.2-3.7 4.2-.4 0-1.7.9-2.8 2-1.1 1.1-2.7 2-3.5 2-.8 0-1.5.6-1.5 1.4 0 1.6-2.1 2.6-5.3 2.6-1.7 0-1.9.2-.8.9 1.1.7.5 1.4-2.5 3-3.3 1.9-3.5 2.1-1.2 1.8 1.9-.3 2.5 0 2.1 1-.3.7-.1 1.3.5 1.3.5 0 1.2-.9 1.5-1.9.2-1.1 2-2.7 3.8-3.7 1.9-.9 4.5-2.7 5.8-4 1.3-1.4 3-2.3 3.7-2.2.7.2 4.1-3.3 7.7-7.7 3.6-4.4 11.5-13 17.5-19.2 6.3-6.3 11.8-12.7 12.7-14.9.8-2 2.1-4.2 2.9-4.8 1.6-1.3 2.8-6.9 1.3-5.9-.6.4-.8-.2-.5-1.5.4-1.5.2-2.2-.8-2.2-.9 0-1.4 1.1-1.4 3Zm-24 7.5c-.7.8-1.6 1.3-2 1-.4-.2-1.3.7-2 2-.7 1.4-1.7 2.5-2.2 2.5-1.7 0-2.3.2-3.5 1.2-.6.5-1 1.5-.8 2.1.3.7-2 2.7-5 4.5-3 1.8-5.2 3.8-5 4.5.3.7-1.8 2.7-4.5 4.6-3 2-5 4.1-5 5.2 0 1.1-.7 1.9-1.5 1.9-1.3 0-3.9 3.4-4 5.2 0 .4-.6 1.3-1.2 1.9-.7.7-1.3 1.8-1.3 2.4 0 .5-.9 1.6-2 2.3-2.4 1.5-2.8 4.7-.5 3.8 1-.3.6.7-1.1 2.9-1.5 2-2.1 3.5-1.4 3.5 2.2 0 9.2-8.4 11.7-14.4 1.1-2.5 1.1-2.7-.3-2.2-1.4.5-1.5.4-.4-.9.7-.8 1.6-1.2 2.1-.9.5.3 1.7-1.2 2.7-3.3 2.2-5 4.7-7.6 9.7-10.1 2.6-1.3 5.6-4.2 8.3-8.1 2.4-3.3 6-7.3 8.2-8.8 3.8-2.7 5-4.3 3.1-4.3-.5 0-1.4.7-2.1 1.5Z'),
                    //         svg.prop('fill', '#b59344')
                    //     ),
                    //     // svg.animateTransform(
                    //     //         string.concat(
                    //     //             svg.prop('attributeName', 'transform'),
                    //     //             svg.prop('type', 'translate'),
                    //     //             svg.prop('from', '0 0'),
                    //     //             svg.prop('to', '0 330'),
                    //     //             svg.prop('dur', '20s'),
                    //     //             svg.prop('repeatCount', 'indefinite')
                    //     //         )
                    //     // )
                    //     svg.animateMotion(
                    //             string.concat(
                    //                 svg.prop('attributeName', 'motion'),
                    //                 svg.prop('path', 'M100, 500 q600, 500 100, 10 q600, -500 100, 10'),
                    //                 svg.prop('begin', '0.0s'),
                    //                 svg.prop('dur', '5s'),
                    //                 svg.prop('repeatCount', 'indefinite')
                    //             )
                    //     )
                    // ),
                    svg.path(
                        string.concat(
                            // svg.prop('d', 'M74.4 299.5c-1.52.6-5.3 6.9-8.6 9.6-5.2 4.3-6.4 4.9-10.6 4.9-4.7 0-12.2 1.9-16.1 4-2.1 1.1-2.6.5-2.2-2.7.1-.6-.3-1.4-.8-1.7-1.1-.7-2.6 3.8-3.6 10.4-1.4 9.2-8.3 22.7-11.1 21.6-1.8-.7-2.7 1.1-3 5.9-.1 2.2-.9 5.7-1.8 7.8-1.4 3.2-2 3.7-3.9 3.1-1.9-.6-2-.5-.9.9 1.1 1.2.8 1.8-1.4 3.6-1.5 1.2-3.1 2.2-3.5 2.2-1.9.3-2.5.5-4.7 1.7-1.2.7-2 1.7-1.7 2.3.8 1.2 11.5-4.5 14.8-7.9 1.4-1.5 3.7-5.7 5-9.3 1.4-3.7 4.1-8.9 6.1-11.6 2-2.8 3.6-5.3 3.6-5.7 0-.3 1.8-4.3 4-8.9 3.8-8 4.1-8.3 9.5-10.5 3-1.2 6.1-2.2 6.9-2.2.7 0 5 3.4 9.5 7.5 7.6 7 11.1 9.6 8 5.9-1-1.2-.4-1.1 2.6.5 2.2 1.1 4.7 2.1 5.7 2.1 2.9 0 4.8 1.2 4.8 2.9 0 .9 3.5 5.8 7.8 10.9 7.3 8.8 8.1 9.5 14.7 11.8 3.9 1.4 8.7 3.2 10.8 4 2.1.8 9.5 1.9 16.5 2.5 11.4.9 13 .8 16.4-.8 2.1-1 3.8-2.1 3.8-2.5 0-.4 2.1-1.9 4.8-3.4 2.6-1.5 6.1-3.9 7.7-5.4 4.7-4.1 12.9-9.7 15.6-10.5 2.3-.7 2.3-.7.4.9-1.1.8-1.6 1.6-1.2 1.6 2.1 0 22.7-18.6 22.7-20.6 0-2.4-3.7-1.5-6.2 1.4-1.3 1.6-4.3 4.4-6.8 6.3-2.5 1.9-4.7 3.6-5 3.9-.6.7-12.1 9.2-19.5 14.4-2.7 1.9-8.2 5.6-12.2 8.1l-7.2 4.6h-9.8c-16.1 0-32.6-6.5-43-16.8-5.5-5.5-9.2-11.3-7.3-11.3 2.5 0-.6-2.3-6.4-4.9-3.3-1.6-7.5-4-9.3-5.5-1.7-1.4-3.7-2.5-4.4-2.4-.7.2-1.3-.2-1.4-.9 0-.6-.4-1.5-.9-2s-.6-.2-.1.6c.5.9.3 1.2-.5.9-2.3-.7-2.2-4.6.2-5.4 3.5-1.1 12.6-10.3 15-15 2.9-6 1.6-6.6-1.8-.9ZM244 310.3c0 1.2 1.4 4.9 3 8.1 1.7 3.2 3 6.7 3 7.7s.4 2.1 1 2.4c.6.3.7-.1.4-1.2-.5-1.7-.5-1.7.6 0 .6.9.9 2.1.5 2.6-.3.5 0 1.3.6 1.7.8.5.9.3.4-.6-.5-.9-.4-1.1.3-.6.7.4 1.2 1.4 1.2 2.3 0 1.3 6.8 13.3 7.6 13.3.4 0-3.7-9.3-4.8-10.6-.5-.7-1.1-2.2-1.3-3.4-.2-1.2-1.2-3.4-2.1-4.9l-1.7-2.6 2.6 2.4c2.3 2.1 8.3 11.6 14.4 22.6 1.2 2.2 2.2 3.6 2.3 3.2 0-.5-.5-1.7-1.1-2.9-.6-1.1-.8-2.2-.6-2.5.3-.2 3.1 4.2 6.2 9.9s7.4 12.3 9.6 14.8c4.1 4.6 4.3 2.9.4-2.5-1.2-1.7-3.2-4.9-4.4-7.3-3.2-6.2-13.9-22.6-23.2-35.5-4.5-6.1-8.9-12.6-9.8-14.4-2-3.9-5.1-5.1-5.1-2Zm-21.7 12.3c-.3.8-.3 4.3.1 7.7 2 19.7 2.4 22.7 3.3 23.9 1 1.2 3.9 8.9 8.4 22.3 2.2 6.6 3.4 8.5 2.4 4-.3-1.8 1.1.2 3.5 4.7 2.2 4.3 4.5 7.8 5 7.8.6 0-.7-3.3-2.9-7.3-2.1-3.9-4.4-8.9-5.1-11-.6-2-1.5-3.7-2-3.7-1.5 0-5.5-17.6-7.9-34.3-.5-3.8-1.7-7.4-2.6-8.4-1.1-1.1-1.5-2.6-1.1-4.5.6-3-.1-3.8-1.1-1.2Zm-65.8 41.9c.4 2.2 1.2 4.9 1.7 6 .9 1.8 11.5 16.3 12.8 17.5.3.3 5.2 5.9 11 12.5 9.7 11.3 14 15.5 14 13.9 0-.4-1.7-2.6-3.7-4.9-4-4.4-16.3-20-17.8-22.5-.5-.8 1 .1 3.4 2 2.3 1.9 5.1 4 6.2 4.6 1.1.6 2.6 2 3.4 3 .8 1.1 1.5 1.6 1.5 1.2 0-.4 3.7 1.9 8.3 5.1 10.1 7 23.7 15.4 24.3 14.8.2-.2-1.3-1.5-3.4-2.8-8-5.3-17.9-12.4-22.2-15.8-2.4-2-4.9-3.6-5.5-3.6-.6 0-4.2-2.5-7.9-5.5-3.8-3-8.8-7.1-11.2-9-2.4-1.9-5.8-5.5-7.6-8l-3.3-4.5 5.5 4.5c3 2.5 9.2 7.7 13.6 11.7 4.5 4 8.5 7.3 9 7.3.4 0 3 1.8 5.8 3.9 6 4.6 16.5 11.1 18 11.1.6 0-1.5-1.5-4.6-3.3-8.5-4.8-29.9-21.8-41.6-33.2l-10.4-10 .7 4Z'),
                            svg.prop('d', 'M120 15a55 55 0 0 1 33.52 98.6c18.88 10.5 31.48 29.6 31.48 51.4 0 33.14 -29.1 60 -65 60s-65 -26.86 -65 -60c0 -21.81 12.61 -40.9 31.47 -51.41A55 55 0 0 1 120 15zm0 110c-25.2 0 -45 18.28 -45 40 0 21.72 19.8 40 45 40s45 -18.28 45 -40c0 -21.72 -19.8 -40 -45 -40zm0 -90a35 35 0 1 0 0 70 35 35 0 0 0 0 -70z'),
                            svg.prop('stroke', '#000'),
                            svg.prop('stroke-width', '2')
                        ),
                        utils.NULL
                    ),
                    svg.rect(
                        string.concat(
                            svg.prop('x', '0'),
                            svg.prop('y', '0'),
                            svg.prop('stroke-width', '1px'),
                            svg.prop('fill', '#d5b04a'),
                            svg.prop('fill-opacity', '0.5'),
                            svg.prop('width', utils.uint2str(30)),
                            svg.prop('height', utils.uint2str(15))
                        ),
                        // utils.NULL
                        svg.animateMotion(
                                string.concat(
                                    svg.prop('attributeName', 'motion'),
                                    svg.prop('path', 'M120 15a55 55 0 0 1 33.52 98.6c18.88 10.5 31.48 29.6 31.48 51.4 0 33.14 -29.1 60 -65 60s-65 -26.86 -65 -60c0 -21.81 12.61 -40.9 31.47 -51.41A55 55 0 0 1 120 15zm0 110c-25.2 0 -45 18.28 -45 40 0 21.72 19.8 40 45 40s45 -18.28 45 -40c0 -21.72 -19.8 -40 -45 -40zm0 -90a35 35 0 1 0 0 70 35 35 0 0 0 0 -70z'),
                                    svg.prop('begin', '0.0s'),
                                    svg.prop('dur', '5s'),
                                    svg.prop('repeatCount', 'indefinite')
                                )
                        )
                    ),
                    // svg.rect(
                    //     string.concat(
                    //         svg.prop('fill', '#d5b04a'),
                    //         svg.prop('x', '0'),
                    //         svg.prop('y', '0'),
                    //         // svg.prop('stroke-width', '1px'),
                    //         // svg.prop('fill', '#d5b04a'),
                    //         // svg.prop('fill-opacity', '0.5'),
                    //         svg.prop('width', utils.uint2str(30)),
                    //         svg.prop('height', utils.uint2str(15))
                    //     ),
                    //     svg.animateMotion(
                    //             string.concat(
                    //                 svg.prop('attributeName', 'motion'),
                    //                 svg.prop('path', 'M10, 50 q60, 50 100, 0 q60, -50 100, 0'),
                    //                 svg.prop('begin', '0.0s'),
                    //                 svg.prop('dur', '50s'),
                    //                 svg.prop('repeatCount', 'indefinite')
                    //             )
                    //     )
                    // ),
                    // svg.rect(
                    //     string.concat(
                    //         svg.prop('fill', 'orange'),
                    //         svg.prop('x', '10'),
                    //         svg.prop('y', '10'),
                    //         svg.prop('width', utils.uint2str(980)),
                    //         svg.prop('height', utils.uint2str(10))
                    //     ),
                    //     utils.NULL
                    // ),
                    svg.rect(
                        string.concat(
                            svg.prop('fill', 'orange'),
                            svg.prop('x', '10'),
                            svg.prop('y', '10'),
                            svg.prop('width', utils.uint2str(10)),
                            svg.prop('height', utils.uint2str(980))
                        ),
                        utils.NULL
                    ),
                    '</svg>'
            );
    }

    function example() external pure returns (string memory) {
        return render(1);
    }
}
