import React, { useState } from "react";
import "./scss/style.scss";
import i0 from "./images/logo.svg";
import i1 from "./images/icon-online.svg";
import i2 from "./images/icon-budgeting.svg";
import i3 from "./images/icon-api.svg";
import i4 from "./images/icon-api.svg";
import i5 from "./images/image-currency.jpg";
import i6 from "./images/image-restaurant.jpg";
import i7 from "./images/image-plane.jpg";
import i8 from "./images/image-confetti.jpg";
import i9 from "./images/icon-facebook.svg";
import i10 from "./images/icon-youtube.svg";
import i11 from "./images/icon-pinterest.svg";
import i12 from "./images/icon-instagram.svg";
import { useEffect } from "react";
function Landing() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  });
  return (
    <div className="landing_cont">
      <header className="header">
        <nav className="flex flex-jc-sb flex-ai-c">
          <a className="header__logo">
            <img src={i0} alt="" />
          </a>
          <a
            id="hamBTN"
            className={`header__menu hide-for-desktop ${open && "open"}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className="header__links hide-for-mobile">
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
            <a>Blog</a>
            <a>Careers</a>
          </div>
          <a className="button hide-for-mobile">Request invite</a>
        </nav>
        <div className={`menu_active_back hide-for-desktop ${open && "trn0"}`}>
          <div className="menu_active">
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
            <a>Blog</a>
            <a>Careers</a>
          </div>
        </div>
      </header>
      <section>
        <div className="hero">
          <div className="hero_back"></div>
          <div className="hero_cont">
            <h1> Next generation digital banking</h1>
            <p>
              {" "}
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <a className="button">Request Invite</a>
          </div>
        </div>
      </section>
      <main className="mainpr">
        <div className="part">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="products">
          <div className="product">
            <img src={i1} alt="" />
            <h2>Online Banking</h2>
            <p>
              {" "}
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div class="product">
            <img src={i2} alt="" />
            <h2>Simple Budgeting</h2>
            <p>
              {" "}
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="product">
            <img src={i3} alt="" />
            <h2>Fast Onboarding</h2>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="product">
            <img src={i4} alt="" />
            <h2> Open API</h2>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </main>
      <div className="article_cont">
        <div className="article_title">
          <h2>Latest Articles</h2>
        </div>
        <div className="articles">
          <div className="article">
            <img src={i5} alt="" />
            <div className="in_article">
              <p>By Claire Robinson</p>
              <h3>Receive money in any currency with no fees</h3>
              <h6>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </h6>
            </div>
          </div>
          <div className="article">
            <img src={i6} alt="" />
            <div className="in_article">
              <p>By Wilson Hutton</p>
              <h3>Treat yourself without worrying about money</h3>
              <h6>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </h6>
            </div>
          </div>
          <div className="article">
            <img src={i7} alt="" />
            <div className="in_article">
              <p>By Wilson Hutton</p>
              <h3> Take your Easybank card wherever you go</h3>
              <h6>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </h6>
            </div>
          </div>
          <div className="article">
            <img src={i8} alt="" />
            <div className="in_article">
              <p>By Claire Robinson</p>
              <h3>Our invite-only Beta accounts are now live!</h3>
              <h6>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </h6>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer_image">
          <img src={i0} alt="" />
          <div className="icons">
            <img src={i9} alt="" />
            <img src={i10} alt="" />
            <img src={i11} alt="" />
            <img src={i12} alt="" />
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_links1">
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </div>
          <div class="footer_links2">
            <a href="">Careers</a>
            <a href="">Support</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div className="footer_BTN">
          <a href="" className="button">
            Request Invite
          </a>
          <h6> © Easybank. All Rights Reserved </h6>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
