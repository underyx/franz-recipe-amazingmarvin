module.exports = (Franz) => {
  function getTasks() {
    let tasks = document.querySelectorAll('.Task').length;
    let done = document.querySelectorAll('.DoneTasks .Task').length;

    Franz.setBadge(tasks - done);
  }

  Franz.loop(getTasks);
}