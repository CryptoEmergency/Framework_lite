import {
  jsx,
  jsxFrag,
  Variable,
  load,
  setStorage,
} from "@betarost/cemserver/cem.js";

const mainHeader = async function () {
  load({
    ID: "mainHeader",
    fn: () => {
      return (
        <div></div>
      );
    },
  });
  return;
};

export { mainHeader };
