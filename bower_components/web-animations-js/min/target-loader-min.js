!function(){var e=webAnimationsTargetConfig.defaultTarget;"undefined"!=typeof webAnimationsSourceTarget&&(e=webAnimationsSourceTarget);var t=document.getElementsByTagName("script"),n=t[t.length-1].src.replace(/[^\/]+$/,"");webAnimationsTargetConfig[e].src.forEach(function(e){document.write('<script src="'+n+e+'"></script>')})}();
