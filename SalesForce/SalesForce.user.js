// ==UserScript==
// @name        SalesForce
// @namespace   SF
// @description Enhances SalesForce beacause our version of it is shitty
// @include     https://na15.salesforce.com/500*
// @version     1
// @grant       none
// ==/UserScript==
var caseNumberContainer = document.querySelector('.pageDescription');

var caseNumberText = caseNumberContainer.textContent;

var caseSubjectContainer = document.getElementById('cas14_ileinner');

var caseSubjectText = caseSubjectContainer.textContent;

var caseStatusContainer = document.getElementById('cas7_ileinner');

var caseStatusText = caseStatusContainer.textContent;

caseNumberContainer.innerHTML = caseNumberText + ' - ' + caseSubjectText + ' - <strong class="emphasize-1">' + caseStatusText + '</strong>';

var emphasizeStyle1 = document.querySelector('.emphasize-1');
emphasizeStyle1.style.color="red";