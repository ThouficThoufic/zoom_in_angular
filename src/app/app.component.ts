import { Component } from '@angular/core';
import './js/meeting/preview/preview.js';
import './js/meeting/preview/preview-video-props.js';
import './js/meeting/session/simple-state.js';
import './js/meeting/session/client-event-listeners.js';
import './js/meeting/session/button-click-handlers.js';
import './js/meeting/session/video/video-render-props.js';
import './js/meeting/session/video/video-toggler.js';
import './js/meeting/session-joiner.js';
import './js/meeting/simple-view-switcher.js';
import './js/config.js';
import './js/index.js';
import './js/tool.js'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./css/index.css']
})
export class AppComponent {
  title = 'zoom_pocc';
}
