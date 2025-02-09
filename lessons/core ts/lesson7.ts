enum ModalStatus {
  Opened = 0,
  Closed = 1,
}

function buildModal(text: string, ModalStatus: number): Object {
  return {
    text: text,
    status: ModalStatus,
  };
}
