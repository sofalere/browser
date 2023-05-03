  // <script src="ex.js" async></script>


function getSiblingArray(startingElementId, endingElementId) {
 let result = [];
 let element = document.getElementById(String(startingElementId));
 let parent = element;
 do {
  parent = parent.parentNode
  result.push([...parent.childNodes])
 } while (parent.id !== String(endingElementId));

 return result;
}


console.log(getSiblingArray(9, 1));
 // [[idEl, sibling, sibling], [idElParent, parentSibling, parentSibling] ...]