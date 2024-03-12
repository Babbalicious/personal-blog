const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");

function createAndStoreBlog() {
  const blog = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  const blogs = JSON.parse(localStorage.getItem("blogs"));
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blog));
}

submitButton.addEventListener("click", function (event) {
  createAndStoreBlog();
});
