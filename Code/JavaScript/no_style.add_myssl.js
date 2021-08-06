/**
 * @name 全自动为MDx主题添加MySSL认证签章
 * @author AHdark
 * @copyright 2021 AHdark Blog
 * @license GPLv3
 */

document.getElementsByClassName("mdx-clean-footer")[0].insertBefore(document.createElement("ssl"), document.getElementsByClassName("mdx-clean-footer")[0].childNodes[4]);
var sslElement = document.getElementsByTagName("ssl")[0];
sslElement.className = "footer-myssl";
sslElement.innerHTML = '<div mdui-tooltip="{content: \'MySSL 安全签章\', position: \'top\'}" id="myssl_seal" onclick="myssl_open()"><img src="https://sealres.myssl.com/seal/img/1x/seal.svg?domain=' + location.hostname + '" alt="MySSL 安全签章"></div>';
const myssl_open = (() => window.open('https://myssl.com/seal/detail?domain=' + location.hostname, 'MySSL安全签章', 'height=800,width=470,top=0,right=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no'));