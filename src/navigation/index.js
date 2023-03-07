import {
  jsx,
  jsxFrag,
  load
} from "@betarost/cemserver/cem.js";

import { fn } from "@src/functions/export.js";
import svg from "@assets/svg/index.js";
import images from "@assets/images/index.js";


const start = function (data, ID) {
  let [Static] = fn.GetParams({ data, ID, initData: "index" });
  load({
    ID,
    fn: () => {
      return (
        <div>
          Home {Static.test}
        </div>
      );
    },
  });
};

export default start;
