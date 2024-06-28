// copy links
const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));


    // show toast notification
    document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ Link <strong> ${action.parentElement.innerText} </strong> copied!</p>
        </div>
    `;

    // hide toast notification
    setTimeout(() => {
      document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
  });
});