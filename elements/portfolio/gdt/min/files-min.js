function getPageDefs(){var t=$('tr:contains("Anglais")').length-1,e=$($('tr:contains("Anglais")')[t]).next().children(".texte1").text();t=$('tr:contains("Français")').length-1;var n=$($('tr:contains("Français")')[t]).next().children(".texte1").html(),i=$.trim($($('tr:contains("Français")')[t]).next().next().text());return t=$('tr:contains("Synonyme(s) :")').length-1,t>2&&(n+=", "+$($('tr:contains("Synonyme(s) :")')[t]).next().children(".texte1").html()),'	"'+e+'": "'+n+" "+i+'"'}function onInitFs(t){t.root.getFile("gdt.json",{create:!0},function(e){e.createWriter(function(e){e.onwriteend=function(e){append(t,"gdt.json",5)};var n=new Blob(["{\n"],{type:"text/plain"});e.write(n)})})}function append(t,e,n){t.root.getFile(e,{create:!1},function(i){i.createWriter(function(i){i.onwriteend=function(i){n>0&&append(t,e,--n)},i.seek(i.length);var r=new Blob(["Hello\n"],{type:"text/plain"});i.write(r)})})}var head=document.getElementsByTagName("head")[0],script=document.createElement("script");script.type="text/javascript",script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js",head.appendChild(script),$('tr:contains("Anglais")'),'	"'+ang+'": "'+fr+" "+def+'"',window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem;var fs=null;window.requestFileSystem(window.TEMPORARY,1048576,onInitFs),$("ol"),link=$($("ol").children()[0]).children().attr("href"),$.get(link);
