/* 
Title: header.js
Author: April Yang
Date: 07/06/2022
Description: Web component for Headers
*/

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<nav>
<div class="navbar">
  <div class="container-fluid">
    <span class="navbar-brand mb-0">April Yang Personal Portfolio</span>
  </div>
</div>
</nav>
<hr>

<nav class="nav-div">
<div class="listNavbar">
  <ul class="nav">
  <li class="nav-item">
    <a class="navLink" href="../index.html">Home</a>
  </li>
  <li class="nav-item">
    <a class="navLink" href="./projects.html">Projects</a>
  </li>
  <li class="nav-item">
    <a class="navLink" href="./database.html">Database Diagrams</a>
  </li>
  <li class="nav-item">
    <a class="navLink" href="./api.html">API Unit Tests</a>
  </li>
  <li class="nav-item">
    <a class="navLink" href="./resume.html">Resume</a>
  </li>
  <li class="nav-item">
    <a class="navLink" href="./about.html">About</a>
  </li>
</ul>
</div>
</nav>


      `;
  }
}

customElements.define("header-component", HeaderComponent);
