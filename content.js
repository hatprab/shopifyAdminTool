console.log("Shopify admin tool is loaded")

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage( message , sender , sendResponse ){
    $('.line-items-section .aspect-ratio--square--50').css({width:"150px",height:"150px"})
}