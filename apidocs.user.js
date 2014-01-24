// ==UserScript==
// @name          My First GM script
// @namespace     http://htmlblog.net
// @description   basic Greasemonkey script
// @include       http://developer.authorize.net/
// ==/UserScript==
try{
	var linkItem = document.getElementsByClassName('third_hero')[0];
	var oldanchor = linkItem.children[0];
	var newanchor = document.createElement('a');

	newanchor.setAttribute('href', 'http://www.paymentdemos.com/docs/home');
	newanchor.setAttribute('target', '_blank');
	newanchor.appendChild(document.createTextNode('New API Docs (Beta)'));
	var newpara = document.createElement('p');
	newpara.appendChild(document.createTextNode("Don\'t worry it\'s not another PDF!"));
	newanchor.appendChild(newpara);

	linkItem.removeChild(oldanchor);
	linkItem.appendChild(newanchor);
}
catch(e){};