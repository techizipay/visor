import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA1 from 'crypto-js/hmac-sha1';
 

export const createSignature = async (data) => { 

    let content = '';
    let firma = 'GetvgxK3Vs4jXirU';
    let vads = []
    for (let key in data) {
        vads.push(key) 
    } 
    vads = vads.sort();
    for (let key in vads) { 
            content = content + data[vads[key]] + "+";
         
    }  
    content += firma;  
    var signature = Base64.stringify(hmacSHA256(content, firma)); 
    return signature;
}

export const createSignaturePW = async (data) => { 

    let content = '';
    let firma = 'VErethUtraQuxas57wuMuquprADrAHAb';
 
    for (let key in data) { 
        content = content + data[key] ; 
    }
    content += firma;  

    console.log(content)
    var sha1 = HmacSHA1(content, firma); 
    var signature = Base64.stringify(sha1); 
    return signature;
}