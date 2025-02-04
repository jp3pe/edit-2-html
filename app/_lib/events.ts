export function getDraggedElementId(event: DragEvent) {
  const format = "id";
  let draggedId = "";

  if (event.dataTransfer) {
    draggedId = event.dataTransfer.getData(format);
  }

  console.debug(`draggedId: ${draggedId}`);
}

export function getDraggedText() {
  console.debug(`draggedText: `);
  console.log(`draggedText: `);
}

export function focusContentEditableTextToEnd(element: HTMLElement) {
  if (element.innerText.length === 0) {
    element.focus();

    return;
  }

  const selection = window.getSelection();
  const newRange = document.createRange();

  newRange.selectNodeContents(element);
  newRange.collapse(false);
  selection?.removeAllRanges();
  selection?.addRange(newRange);
}
