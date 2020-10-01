import { FactoryTag } from "./factoryTag.js";
export function FactoryMenu() {
  const API = {};
  const factoryTag = new FactoryTag();
  let params = {};

  API.index = function () {
    const href = [
      "assets/subpage/home.html",
      "assets/subpage/login.html",
      "assets/subpage/register.html",
      "assets/subpage/contacto.html",
    ];
    const text = ["home", "Login", "Register", "Contacto"];

    params.class = "header-content container";
    const section = factoryTag.section(params);
    params.class = "menu";
    const nav = factoryTag.nav(params);
    params = {};
    for (let i = 0; i < href.length; i++) {
      params.href = href[i];
      params.text = text[i];
      const a = factoryTag.a(params);
      nav.appendChild(a);
    }
    /*
    params = {};
    params.href = "assets/subpage/home.html";
    params.text = "Home";
    const home = factoryTag.a(params);
    nav.appendChild(home);*/

    section.appendChild(nav);

    //**************Botón claro oscuro */

    return section;
  };

  return API;
}