function formatText(command) {
  let selection = window.getSelection();
  if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
    document.execCommand(command, false, null);
  } else if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "undo", "redo"].includes(command)) {
    document.execCommand(command, false, null);
  } else {
    alert("Please select some text first.");
  }
}

function changeColor(color) {
  let selection = window.getSelection();
  if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
    document.execCommand("foreColor", false, color);
  } else {
    alert("Please select some text to apply color.");
  }
}
