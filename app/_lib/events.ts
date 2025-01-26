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
