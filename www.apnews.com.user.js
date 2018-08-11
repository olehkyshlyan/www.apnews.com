// ==UserScript==
// @name         Associated Press | News
// @namespace    https://www.apnews.com/
// @noframes
// @version      0.1
// @description  Associated Press | www.apnews.com | News
// @author       oleh.kyshlyan
// @match        https://apnews.com/*
// @match        https://www.apnews.com/*
// @grant        none
// ==/UserScript==

var AssociatedPressNews = new function(){

  this.articleBody = function(){
    var articleBodyInclosure = function(){
      var articleBodyCollection = document.getElementsByClassName('articleBody');
      if(articleBodyCollection.length > 0){
        var artBodyZeroEl = articleBodyCollection[0];
        if(artBodyZeroEl != undefined){
          var artBodyZeroElChildren = artBodyZeroEl.children;
          var artBdZrElChLen = artBodyZeroElChildren.length;

          for(var i=0; i<artBdZrElChLen; i++){
            var currEl = artBodyZeroElChildren[i];

            if(currEl.id.indexOf('div-gpt-ad') != -1){
              currEl.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(articleBodyInclosure,4800);
  }

  this.taboolaContainer = function(){
    var taboolaContainerInclosure = function(){
      var taboolaContainer = document.getElementById('taboolaContainer');
      if(taboolaContainer != null){
        taboolaContainer.style.display = 'none';
      }
    }
    setTimeout(taboolaContainerInclosure,4900);
  }

  this.sideRail = function(){
    var sideRailInclosure = function(){
      var sideRailCollection = document.getElementsByClassName('sideRail rightRail');
      if(sideRailCollection.length > 0){
        var sideRailZeroEl = sideRailCollection[0];
        if(sideRailZeroEl != undefined){
          var sideRailZrElChildren = sideRailZeroEl.children;
          var sdRlZrElChLen = sideRailZrElChildren.length;

          for(var i=0; i<sdRlZrElChLen; i++){
            var currEl = sideRailZrElChildren[i];

            if(currEl.id.indexOf('div-gpt-ad') != -1){
              currEl.style.display = 'none';
            }

            if(currEl.id == 'bottomAd'){
              currEl.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(sideRailInclosure,5000);
  }

}

AssociatedPressNews.articleBody();
AssociatedPressNews.taboolaContainer();
AssociatedPressNews.sideRail();
