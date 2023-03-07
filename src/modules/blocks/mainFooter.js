import {
  jsx,
  jsxFrag,
  load,
} from "@betarost/cemserver/cem.js";

const mainFooter = async function () {

  load({
    ID: "mainFooter",
    fn: () => {
      return (
        <div>
        </div>
      );
    },
  });
  return;
};

export { mainFooter };
