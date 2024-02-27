const task_arr = [];
const input = document.getElementById("task-input");
const inp_value = input.value;
function fun() {
  if (input.value === '' ) {
    alert("Please fill the input field.");
    return;
}
  task_arr.push(input.value);
  input.value = "";
  ol();
}
const add_btn = document.getElementById("add");
function ol() {
  const listItems = document.getElementById("list");
  listItems.innerHTML = "";
  task_arr.map((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = task;
    listItems.appendChild(li);
    const div = document.createElement("div");
    const btn_2 = document.createElement("button");
    btn_2.innerHTML = "Edit";
    div.appendChild(btn_2);
    btn_2.classList.add("buton");
    btn_2.addEventListener("click", () => {
        input.value = task;
        task_arr.splice(index, 1);
        add_btn.innerHTML = "Done";
        add_btn.addEventListener("click", () => {
          const editedTask = input.value;
          task=editedTask;
            add_btn.innerHTML = "Add";
        });
      });

    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    div.appendChild(btn);
    btn.classList.add("buton");
    li.appendChild(div);
    btn.addEventListener("click", () => {
      task_arr.splice(index, 1);
      ol();
    });
  });
}
