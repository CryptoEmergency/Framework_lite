import {
  jsx,
  jsxFrag,
  load
} from "@betarost/cemserver/cem.js";

const start = function (data, ID) {
  load({
    ID,
    fn: () => {
      return (
        <div>
          Error
        </div>
      )
    }
  })
};

export default start;