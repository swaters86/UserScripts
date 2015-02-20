// ==UserScript==
// @name        Display Site Information
// @namespace   DSI
// @description Overlays Infomration on Website
// @include     http://*.dailynews.com/*
// @include     http://*.presstelegram.com/*
// @include     http://*.sgvtribune.com/*
// @include     http://*.pasadenastarnews.com/*
// @include     http://*.whittierdailynews.com/*
// @include     http://*.dailybulletin.com/*
// @include     http://*.sbsun.com/*
// @include     http://*.redlandsdailyfacts.com/*
// @include     http://*.dailybreeze.com/*
// @include     http://*.nhregister.com/*
// @include     http://*.middletownpress.com/*
// @include     http://*.registercitizen.com/*
// @include     http://*.delcotimes.com/*
// @include     http://*.morningjournal.com/*
// @include     http://*.news-herald.com/*
// @include     http://*.theoaklandpress.com/*
// @include     http://*.oneidadispatch.com/*
// @include     http://*.troyrecord.com/*
// @include     http://*.saratogian.com/*
// @include     http://*.timesherald.com/*
// @include     http://*.dailytribune.com/*
// @include     http://*.morningsun.com/*
// @include     http://*.macombdaily.com/*
// @include     http://*.dailylocal.com/*
// @include     http://*.pottsmerc.com/*
// @include     http://*.thereporteronline.com/*
// @include     http://*.trentonian.com/*
// @include     http://*.berksmontnews.com/*
// @include     http://*.phoenixvillenews.com/*
// @include     http://*.southernchestercountyweeklies.com/*
// @include     http://*.dailyfreeman.com/*
// @include     http://*.chicoer.com/*
// @include     http://*.orovillemr.com/*
// @include     http://*.paradisepost.com/*
// @include     http://*.redbluffdailynews.com/*
// @include     http://*.santacruzsentinel.com/*
// @include     http://*.montereyherald.com/*
// @include     http://*.thereporter.com/*
// @include     http://*.timesheraldonline.com/*
// @include     http://*.dailydemocrat.com/*
// @include     http://*.times-standard.com/*
// @include     http://*.redwoodtimes.com.com/*
// @include     http://*.humboldtbeacon.com/*
// @include     http://*.advocate-news.com/*
// @include     http://*.mendocinobeacon.com/*
// @include     http://*.marinij.com/*
// @include     http://*.ukiahdailyjournal.com/*
// @include     http://*.record-bee.com/*
// @exclude     */status
// @version     1
// @grant       none
// @noframes
// @run-at document-body
// ==/UserScript==

var mainInfoContainerDiv = document.createElement('DIV');

mainInfoContainerDiv.className = 'main-info-container';      

var mainInfoContainerStyle = 'min-width:200px;' 
+ 'min-height:50px;'
+ 'padding:10px;'
+ 'background:#14171A;'
+ 'border:2px #000 solid;'
+ 'color:#A9BACB;'
+ 'position:fixed;'
+ 'top:50px;'
+ 'right:50px;'
+ 'z-index:1'
+ 'border:2px #efefef solid';

mainInfoContainerDiv.setAttribute('style', mainInfoContainerStyle);

var sites = {
  site1: {
      domain: 'dailynews.com',
      siteCode: 'LA',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site2: {
      domain: 'presstelegram.com',
      siteCode: 'LB',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site3: {
      domain: 'sgvtribune.com',
      siteCode: 'LC',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site4: {
      domain: 'pasadenastarnews.com',
      siteCode: 'LD',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site5: {
      domain: 'whittierdailynews.com',
      siteCode: 'LE',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site6: {
      domain: 'dailybulletin.com',
      siteCode: 'LF',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site7: {
      domain: 'sbsun.com',
      siteCode: 'LG',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site8: {
      domain: 'redlandsdailyfacts.com',
      siteCode: 'LH',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site9: {
      domain: 'dailybreeze.com',
      siteCode: 'LI',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site10: {
      domain: 'middletownpress.com',
      siteCode: 'MI',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site11: {
      domain: 'registercitizen.com',
      siteCode: 'NH',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site12: {
      domain: 'delcotimes.com',
      siteCode: 'DC',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site13: {
      domain: 'morningjournal.com',
      siteCode: 'MJ',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site14: {
      domain: 'news-herald.com',
      siteCode: 'HR',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site15: {
      domain: 'theoaklandpress.com',
      siteCode: 'OP',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site16: {
      domain: 'oneidadispatch.com',
      siteCode: 'OD',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site17: {
      domain: 'troyrecord.com',
      siteCode: 'TR',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site18: {
      domain: 'saratogian.com',
      siteCode: 'ST',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site19: {
      domain: 'timesherald.com',
      siteCode: 'JR',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site20: {
      domain: 'dailytribune.com',
      siteCode: 'DT',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site21: {
      domain: 'morningsun.com',
      siteCode: 'MS',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site22: {
      domain: 'macombdaily.com',
      siteCode: 'MD',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site23: {
      domain: 'dailylocal.com',
      siteCode: 'DL',
      customerName: 'JRC/21st Century MediaG',
      customerGroup: 'DFM'
  },
  site24: {
      domain: 'pottsmerc.com',
      siteCode: 'MP',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site25: {
      domain: 'thereporteronline.com',
      siteCode: 'RO',
      customerName: 'MN1/LANG',
      customerGroup: 'DFM'
  },
  site26: {
      domain: 'trentonian.com',
      siteCode: 'TT',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site27: {
      domain: 'berksmontnews.com',
      siteCode: 'BM',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site28: {
      domain: 'phoenixvillenews.com',
      siteCode: 'PV',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site29: {
      domain: 'southernchestercountyweeklies.com',
      siteCode: 'SC',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site30: {
      domain: 'dailyfreeman.com',
      siteCode: 'DF',
      customerName: 'JRC/21st Century Media',
      customerGroup: 'DFM'
  },
  site31: {
      domain: 'chicoer.com',
      siteCode: 'NA',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site32: {
      domain: 'orovillemr.com',
      siteCode: 'NB',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site33: {
      domain: 'paradisepost.com',
      siteCode: 'NC',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site34: {
      domain: 'redbluffdailynews.com',
      siteCode: 'ND',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site35: {
      domain: 'santacruzsentinel.com',
      siteCode: 'NE',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site36: {
      domain: 'montereyherald.com',
      siteCode: 'NF',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site37: {
      domain: 'thereporter.com',
      siteCode: 'NG',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site38: {
      domain: 'timesheraldonline.com',
      siteCode: 'NH',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site39: {
      domain: 'dailydemocrat.com',
      siteCode: 'NI',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site40: {
      domain: 'times-standard.com',
      siteCode: 'NJ',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site41: {
      domain: 'redwoodtimes.com.com',
      siteCode: 'NK',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site42: {
      domain: 'humboldtbeacon.com',
      siteCode: 'NL',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site43: {
      domain: 'advocate-news.com',
      siteCode: 'NM',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site44: {
      domain: 'mendocinobeacon.com',
      siteCode: 'NN',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site45: {
      domain: 'marinij.com',
      siteCode: 'NO',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site46: {
      domain: 'ukiahdailyjournal.com',
      siteCode: 'NP',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site47: {
      domain: 'record-bee.com',
      siteCode: 'NQ',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  },
  site48: {
      domain: 'willitsnews.com',
      siteCode: 'NR',
      customerName: 'MN5/NorCal',
      customerGroup: 'DFM'
  }
}

var siteDomain = 'Domain Not Recognized'; 
var siteCode =  'Site Code N/A'; 
var customerName = 'Customer Name N/A';
var customerGroup = 'Customer Group N/A';

var documentDomain = document.domain; 

var alteredDocumentDomain = documentDomain.replace(/www.|edit.saxo.|web.saxo.|stage.saxo.|dev.saxo.|/g, '');

for each (site in sites) {
  if (alteredDocumentDomain === site.domain ) {
     var siteDomain = site.domain; 
     var siteCode = site.siteCode; 
     var customerName = site.customerName;
     var customerGroup = site.customerGroup;
     /** 
     * The following script can access all of the header information for a page.
     * http://stackoverflow.com/questions/220231/accessing-the-web-pages-http-headers-in-javascript
     **/
     var req = new XMLHttpRequest();
     req.open('GET', document.location, false);
     req.send(null);
     //var headers = req.getAllResponseHeaders().toLowerCase();
     var servedBy = req.getResponseHeader("ServedBy");
     var xActualURL = req.getResponseHeader("X-Actual-URL");
      
     delete site.domain;
     delete site.siteCode;
     delete site.customerName; 
     delete site.customerGroup;
  }
}

mainInfoContainerDiv.innerHTML = '<header style="color:#666;text-align:center">' + document.domain + '</header>' 
+ '<div class="site-code"><strong>Site Code: </strong>' + siteCode + '</div>' 
+ '<div class="customer-name"><strong>Customer Name: </strong>' + customerName + '</div>'
+ '<div class="customer-group"><strong>Customer Group: </strong>' + customerGroup + '</div>'
+ '<div class="served-by"><strong>Served By: </strong>' + servedBy + '</div>'
+ '<div class="x-actual-url"><strong>X-Actual-URL: </strong>' + xActualURL + '</div>';

var body = document.body;

body.appendChild(mainInfoContainerDiv);   
