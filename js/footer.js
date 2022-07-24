/* 
Title: footer.js
Author: April Yang
Date: 07/06/2022
Description: Web component for footer
*/

class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <footer>

    <div class="grid">
    <div class="row footerRow">
    <div class="col-4">
    <p class="copyRight">&copy; Copyright April Yang</p>
    </div>
    <div class="col-8">

<div class="listFooter">
  <ul class="nav">
  <li class="nav-item">
    <a class="navLink footerLink" href="https://www.linkedin.com/feed/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
  </li>
  <li class="nav-item">
    <a class="navLink footerLink" href="https://github.com/aprilyanggarwood/personal-portfolio" target="_blank"><i class="fa-brands fa-github"></i></a>
  </li>
  <li class="nav-item">
    <a class="navLink footerLink" href="Web Development Degree" target="_blank"><i class="fa-solid fa-file-lines"></i><span style="font-size:1rem;">Degree</span></a>
  </li>

  <li class="nav-item">
  <span class="vl footerLink"></span>
</li>
<li class="nav-item">
  <p class="footerBU"><a style="text-decoration:none;color:black;"href="https://www.bellevue.edu/" target="_blank">BU</a></p>
</li>
   <li class="nav-item">
    <a class="navLink footerLink" href="https://github.com/buwebdev" target="_blank"><i class="fa-brands fa-github"></i></a>
  </li>
  <li class="nav-item">
    <a class="navLink footerLink" href='https://www.youtube.com/c/bellevueuniversity' target="_blank"><i class="fa-brands fa-youtube"></i></a>
  </li>
</ul>
</div>
</div>

</footer>
  
        `;
  }
}

customElements.define("footer-component", FooterComponent);
