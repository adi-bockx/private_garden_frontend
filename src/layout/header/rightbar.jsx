import React, { Fragment, useState, useEffect } from "react";
import { Maximize } from "react-feather";
import { useTranslation } from "react-i18next";
import { English, Español } from "../../constant";


const Rightbar = () => {
  const [langdropdown, setLangdropdown] = useState(false);
  const [moonlight, setMoonlight] = useState(true);
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("en");


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelected(lng);
  };

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  //full screen function
  function goFull() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const LanguageSelection = (language) => {
    if (language) {
      setLangdropdown(!language);
    } else {
      setLangdropdown(!language);
    }
  };

  const MoonlightToggle = (light) => {
    if (light) {
      setMoonlight(!light);
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
      // document.body.className = "light"
      localStorage.setItem("layout_version", "light");
    } else {
      setMoonlight(!light);
      document.body.classList.remove("light");
      document.body.classList.add("dark-only");
      // document.body.className = "dark-only"
      localStorage.setItem("layout_version", "dark-only");
    }
  };

  return (
    <Fragment>
      <div className="nav-right col-8 pull-right right-header p-0">
        <ul className="nav-menus">
          <li className="language-nav">
            <div
              className={`translate_wrapper ${langdropdown ? "active" : ""}`}
            >
              <div className="current_lang">
                <div
                  className="lang"
                  onClick={() => LanguageSelection(langdropdown)}
                >
                  <i
                    className={`flag-icon flag-icon-${
                      selected === "en"
                        ? "us"
                        : selected === "du"
                        ? "de"
                        : selected
                    }`}
                  ></i>
                  <span className="lang-txt">{selected}</span>
                </div>
              </div>
              <div className={`more_lang ${langdropdown ? "active" : ""}`}>
                <div className="lang" onClick={() => changeLanguage("en")}>
                  <i className="flag-icon flag-icon-us"></i>
                  <span className="lang-txt">
                    {English}
                    <span> {"(US)"}</span>
                  </span>
                </div>
                <div className="lang" onClick={() => changeLanguage("es")}>
                  <i className="flag-icon flag-icon-es"></i>
                  <span className="lang-txt">{Español}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="mode" onClick={() => MoonlightToggle(moonlight)}>
              {moonlight ? (
                <i className="fa fa-lightbulb-o"></i>
              ) : (
                <i className="fa fa-moon-o"></i>
              )}
            </div>
            {/* <div className="mode" onClick={() => MoonlightToggle(moonlight)}><i className={`fa ${moonlight ? 'fa-lightbulb-o' : 'fa-moon-o'}`}></i></div> */}
          </li>
          <li className="maximize">
            <a className="text-dark" href="#javascript" onClick={goFull}>
              <Maximize />
            </a>
          </li>
          <li className="profile-nav onhover-dropdown p-0">
            {/* Wallet Connect Button */}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
// export default translate(Rightbar);
export default Rightbar;
