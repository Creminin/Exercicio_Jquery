$(document).ready(() => {
  $('form').on('submit', (e) => {
    e.preventDefault();
    const nameTask = $('#Name-task').val();
    const newTask = $(`<li>${nameTask}</li>`).appendTo('ul');

    $('#Name-task').val('');

    $(newTask).click(() => {
      $(newTask).toggleClass('Active-line-through');
    });
  })
})