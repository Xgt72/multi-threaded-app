import Viewport from "../../../node_modules/neo.mjs/src/container/Viewport.mjs";
import HeaderContainer from "./HeaderContainer.mjs";

/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
  static getConfig() {
    return {
      className: "Covid.view.MainContainer",
      layout: { ntype: "vbox", align: "stretch" },
      itemDefaults: {
        ntype: "component",
      },
      items: [
        HeaderContainer,
        { vdom: { innerHTML: "Center" } },
        { vdom: { innerHTML: "Footer" } },
      ],
    };
  }
}

Neo.applyClassConfig(MainContainer);

export { MainContainer as default };
