const blogSection = document.getElementById("blogSection");

blogs = [];

function renderBlogs() {
  for (let i = 0; i < blogs.length; i++) {
    //create a div and elements for each blogPost
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    //add the new elements
    blogSection.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p2);

    //add classes to each element for CSS
    div.setAttribute("class", "blogPost");
    h2.setAttribute("class", "blogTitle");
    p.setAttribute("class", "blogContent");
    p2.setAttribute("class", "user");

    // render the text
    h2.textContent = blogs[i].title;
    p.textContent = blogs[i].content;
    p2.textContent = `Posted by: ${blogs[i].username}`;
  }
}

function init() {
  const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
  if (storedBlogs !== null) {
    blogs = storedBlogs;
  }
  renderBlogs();
}

init();
