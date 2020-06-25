// ==UserScript==
// @name           giffgaff Flarum better ignores
// @description    Make ignoring people easier
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-better-ignores)
// @namespace      https://github.com/davwheat/giffgaff-flarum-better-ignores
// @version        1.0
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

$(() => {
  $.get(
    "https://raw.githubusercontent.com/davwheat/giffgaff-flarum-better-ignores/master/styles.css"
  ).done(data => {
    $("head").append("<style>" + data + "</style>");

    console.log("Applied better ignore styles!");
  });
});
