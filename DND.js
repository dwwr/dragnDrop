const dragStart = event => {
  event.currentTarget.classList.add('dragging');
};

const dragEnd = event => {
  event.currentTarget.classList.remove('dragging');
};

const dragEnter = event => {
  event.currentTarget.classList.add('drop');
};

const dragLeave = event => {
  event.currentTarget.classList.remove('drop');
};

const drag = event => {
  event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
  event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
};

const drop = event => {
  document.querySelectorAll('.column').forEach(column => column.classList.remove('drop'));
  document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`).remove();

  event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html');
};

const allowDrop = event => {
  event.preventDefault();
};

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.column').forEach(column => {
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
});