// main.js 

/*



Based on the Expandable Listmenu Script by Daniel Nolan
http://www.bleedingego.co.uk/webdev.php

Modified by Cory S.N. LaViska
http://abeautifulsite.net/
  
== WHAT IT DOES ==

This script makes the nested lists created by PHP File Tree
expand and collapse dynamically.

== USAGE ==

Include the script into the <head></head> section of the
appropriate page(s) as shown below:

<script src="php_file_tree.js"
  type="text/javascript"></script>

All file trees generated by PHP File Tree will automatically
collapse to the top level (as specified by $directory) and become
dynamic.

*/

function init_php_file_tree() {
  if (!document.getElementsByTagName) return;

  var aMenus = document.getElementsByTagName("li");
  for (var i = 0; i < aMenus.length; i++) {
    var mclass = aMenus[i].className;
    if (mclass.indexOf("pft-directory") > -1) {
      var submenu = aMenus[i].childNodes;
      for (var j = 0; j < submenu.length; j++) {
        if (submenu[j].tagName == "A") {

          submenu[j].onclick = function() {
            var node = this.nextSibling;

            while (1) {
              if (node != null) {
                if (node.tagName == "UL") {
                  var d = (node.style.display == "none")
                    node.style.display = (d) ? "block" : "none";
                  this.className = (d) ? "open" : "closed";
                  return false;
                }
                node = node.nextSibling;
              } else {
                return false;
              }
            }
            return false;
          }

          submenu[j].className = (mclass.indexOf("open") > -1) ? "open" : "closed";
        }

        if (submenu[j].tagName == "UL")
          submenu[j].style.display = (mclass.indexOf("open") > -1) ? "block" : "none";
      }
    }
  }
  return false;
}

window.onload = init_php_file_tree;

