import React from "react";
const socialSites = [
  {
    link: "https://www.facebook.com/profile.php?id=100009908867090",
    icon: "icon-social-facebook"
  },
  {
    link: "https://twitter.com/Chrischengwill",
    icon: "icon-social-twitter"
  },
  {
    link: "https://github.com/Krischengwill",
    icon: "icon-social-github"
  }
];
const FooterSection = () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link} target="_blank">
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <p className="mb-5"> Tel:647-936-2708 </p>
      <p className="mb-5"> Email:chris.qi@syanptop.com / chrischengwill@gmail.com </p>
      <p className="text-muted small mb-0">
        Copyright &copy; Cheng Qi's Website 2018
      </p>
    </div>
  </footer>
);
export default FooterSection;
