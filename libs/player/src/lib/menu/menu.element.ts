import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import './menu-panels.element';
import './menu-side.element';
import { MenuProvider } from './menu.provider';

@customElement('meta-player-menu', {
  providers: [MenuProvider],
})
export class MenuElement extends MetaElement {
  override render(): TemplateResult {
    const xrMode =
      this.el.sceneEl?.is('vr-mode') || this.el.sceneEl?.is('ar-mode');

    return html`
      <meta-menu
        rotation=${xrMode ? `-10 0 0` : `0 0 0`}
        position=${xrMode ? `-0.53 0 -0.5` : `-0.53 0 -1`}
      >
        <template slot="menu">
          <meta-player-menu-side></meta-menu-side>
        </template>

        <template slot="panel">
          <meta-player-menu-panels></meta-menu-panels>
        </template>
      </meta-menu>
    `;
  }
}
