var t = {
    113: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".croppie-container {\n    width: 100%;\n    height: 100%;\n}\n\n.croppie-container .cr-image {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform-origin: 0 0;\n    max-height: none;\n    max-width: none;\n}\n\n.croppie-container .cr-boundary {\n    position: relative;\n    overflow: hidden;\n    margin: 0 auto;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n}\n\n.croppie-container .cr-viewport,\n.croppie-container .cr-resizer {\n    position: absolute;\n    border: 2px solid #fff;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    box-shadow: 0 0 2000px 2000px rgba(0, 0, 0, 0.5);\n    z-index: 0;\n}\n\n.croppie-container .cr-resizer {\n  z-index: 2;\n  box-shadow: none;\n  pointer-events: none;\n}\n\n.croppie-container .cr-resizer-vertical,\n.croppie-container .cr-resizer-horisontal {\n  position: absolute;\n  pointer-events: all;\n}\n\n.croppie-container .cr-resizer-vertical::after,\n.croppie-container .cr-resizer-horisontal::after {\n    display: block;\n    position: absolute;\n    box-sizing: border-box;\n    border: 1px solid black;\n    background: #fff;\n    width: 10px;\n    height: 10px;\n    content: '';\n}\n\n.croppie-container .cr-resizer-vertical {\n  bottom: -5px;\n  cursor: row-resize;\n  width: 100%;\n  height: 10px;\n}\n\n.croppie-container .cr-resizer-vertical::after {\n    left: 50%;\n    margin-left: -5px;\n}\n\n.croppie-container .cr-resizer-horisontal {\n  right: -5px;\n  cursor: col-resize;\n  width: 10px;\n  height: 100%;\n}\n\n.croppie-container .cr-resizer-horisontal::after {\n    top: 50%;\n    margin-top: -5px;\n}\n\n.croppie-container .cr-original-image {\n    display: none;\n}\n\n.croppie-container .cr-vp-circle {\n    border-radius: 50%;\n}\n\n.croppie-container .cr-overlay {\n    z-index: 1;\n    position: absolute;\n    cursor: move;\n    touch-action: none;\n}\n\n.croppie-container .cr-slider-wrap {\n    width: 75%;\n    margin: 15px auto;\n    text-align: center;\n}\n\n.croppie-result {\n    position: relative;\n    overflow: hidden;\n}\n\n.croppie-result img {\n    position: absolute;\n}\n\n.croppie-container .cr-image,\n.croppie-container .cr-overlay,\n.croppie-container .cr-viewport {\n    -webkit-transform: translateZ(0);\n    -moz-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n}\n\n/*************************************/\n/***** STYLING RANGE INPUT ***********/\n/*************************************/\n/*http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html */\n/*************************************/\n\n.cr-slider {\n    -webkit-appearance: none;\n/*removes default webkit styles*/\n\t/*border: 1px solid white; *//*fix for FF unable to apply focus style bug */\n    width: 300px;\n/*required for proper track sizing in FF*/\n    max-width: 100%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background-color: transparent;\n}\n\n.cr-slider::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 3px;\n    background: rgba(0, 0, 0, 0.5);\n    border: 0;\n    border-radius: 3px;\n}\n\n.cr-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ddd;\n    margin-top: -6px;\n}\n\n.cr-slider:focus {\n    outline: none;\n}\n/*\n.cr-slider:focus::-webkit-slider-runnable-track {\nbackground: #ccc;\n}\n*/\n\n.cr-slider::-moz-range-track {\n    width: 100%;\n    height: 3px;\n    background: rgba(0, 0, 0, 0.5);\n    border: 0;\n    border-radius: 3px;\n}\n\n.cr-slider::-moz-range-thumb {\n    border: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ddd;\n    margin-top: -6px;\n}\n\n/*hide the outline behind the border*/\n.cr-slider:-moz-focusring {\n    outline: 1px solid white;\n    outline-offset: -1px;\n}\n\n.cr-slider::-ms-track {\n    width: 100%;\n    height: 5px;\n    background: transparent;\n/*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\n\tborder-color: transparent;/*leave room for the larger thumb to overflow with a transparent border */\n\tborder-width: 6px 0;\n\tcolor: transparent;/*remove default tick marks*/\n}\n.cr-slider::-ms-fill-lower {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tborder-radius: 10px;\n}\n.cr-slider::-ms-fill-upper {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tborder-radius: 10px;\n}\n.cr-slider::-ms-thumb {\n\tborder: none;\n\theight: 16px;\n\twidth: 16px;\n\tborder-radius: 50%;\n\tbackground: #ddd;\n\tmargin-top:1px;\n}\n.cr-slider:focus::-ms-fill-lower {\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n.cr-slider:focus::-ms-fill-upper {\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n/*******************************************/\n\n/***********************************/\n/* Rotation Tools */\n/***********************************/\n.cr-rotate-controls {\n\tposition: absolute;\n\tbottom: 5px;\n\tleft: 5px;\n\tz-index: 1;\n}\n.cr-rotate-controls button {\n\tborder: 0;\n\tbackground: none;\n}\n.cr-rotate-controls i:before {\n\tdisplay: inline-block;\n\tfont-style: normal;\n\tfont-weight: 900;\n\tfont-size: 22px;\n}\n.cr-rotate-l i:before {\n\tcontent: '↺';\n}\n.cr-rotate-r i:before {\n\tcontent: '↻';\n}\n",
        "",
      ]);
      const s = a;
    },
    711: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".cr-slider-wrap {\n  /* background: gray; */\n}\n.cr-slider {\n}\n\n.cr-slider::-webkit-slider-thumb {\n  -webkit-appearance: none; /* Override default look */\n  appearance: none;\n\n  background: var(--crop-slider-thumb-color); /* Green background */\n  cursor: pointer; /* Cursor on hover */\n}\n\n.cr-slider::-moz-range-thumb {\n  -webkit-appearance: none; /* Override default look */\n  appearance: none;\n\n  background: var(--crop-slider-thumb-color); /* Green background */\n  cursor: pointer; /* Cursor on hover */\n}\n\n.cr-slider::-webkit-slider-runnable-track {\n  background: var(--crop-slider-runnable-track);\n}\n\n.cr-slider::-moz-slider-runnable-track {\n  background: var(--crop-slider-runnable-track);\n}\n\n.cr-overlay {\n  /* background: rgba(250, 0, 0, 0.5); */\n}\n\n.croppie-container .cr-viewport,\n.croppie-container .cr-resizer {\n  box-shadow: none;\n  border: 2px solid var(--highlight-saturation);\n}\n.croppie-container .cr-boundary {\n  /* overflow: visible; */\n  /* height: calc(100% + 4px) !important; */\n  overflow: hidden;\n}\n.croppie-container {\n  /* overflow: hidden; */\n}\n",
        "",
      ]);
      const s = a;
    },
    326: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".info-bar-container {\n  width: 100%;\n  color: var(--info-bar-text-color);\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  padding: 10px;\n  text-transform: uppercase;\n  margin-top: 6px;\n  font-size: 14px;\n  height: 5%;\n  background-color: var(--container-bg);\n}\n.info-bar-container .inline-start-column,\n.info-bar-container .inline-end-column {\n  display: flex;\n  flex-direction: row;\n}\n.info-bar-container .inline-start-column div,\n.info-bar-container .inline-end-column div {\n  margin: 0 0.25rem;\n}\n.video-info {\n  display: flex;\n  flex-direction: row;\n}\n\n/** mobile styles **/\n@media only screen and (max-width: 768px) {\n  .info-bar-container {\n    font-size: 14px;\n    background: transparent;\n  }\n  .info-bar-container .inline-start-column {\n    width: 100%;\n    /* background: blue; */\n    justify-content: space-between;\n  }\n  .info-bar-container .inline-end-column {\n    display: none;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    141: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".slides-container {\n  --button-text-color: rgb(250, 250, 250);\n  --button-bg: rgb(67, 67, 67);\n}\n.slides-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: white;\n  padding: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  /* overflow: hidden; */\n}\n.slides-container * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n}\n.all-slides-container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-basis: 1;\n  width: 100%;\n  height: 100%;\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n.slide-container {\n  display: inline-flex;\n  flex-basis: 100%;\n  flex-shrink: 0;\n  position: relative;\n  top: 0;\n\n  width: 100%;\n  height: 100%;\n\n  padding: 1rem;\n  background: white;\n  overflow: hidden;\n}\n.slide-container figure {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1490 / 1526;\n  background: black;\n  margin: 0;\n}\n.slide-container figure img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.slide-card {\n  flex-shrink: 1;\n  overflow: scroll;\n}\n.slide-container h2 {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.slide-container p {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.05rem;\n  color: rgb(105, 105, 105);\n  line-height: 1.35;\n}\n.button-bar {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n}\nbutton.instructions-button {\n  background: var(--button-bg);\n  color: var(--button-text-color);\n  border: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  margin: 0.25rem;\n  display: block;\n}\nbutton.instructions-button:hover {\n  color: var(--button-bg);\n  background: var(--button-text-color);\n  cursor: pointer;\n}\nbutton.instructions-button:disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\nbutton.instructions-prev-button {\n  visibility: hidden;\n}\n\n/** orientation: landscape **/\n@media only screen and (orientation: landscape) {\n  .slide-container {\n    flex-direction: row;\n  }\n  .slide-container figure {\n    margin-right: 1rem;\n    height: 100%;\n    aspect-ratio: 1/1;\n    width: auto;\n  }\n  .slide-container .slide-card {\n    width: auto;\n    flex-grow: 1;\n  }\n  .slide-container .slide-card h2 {\n    font-size: 2rem;\n  }\n  .slide-container .slide-card p {\n    font-size: 1.25rem;\n  }\n}\n\n/** orientation: portrait **/\n@media only screen and (orientation: portrait) {\n  .slide-container {\n    flex-direction: column;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    679: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".instructions-modal .modal-content-container {\n  max-width: 100%;\n  /* max-height: 90vh; */\n  width: auto;\n  overflow: hidden;\n  aspect-ratio: 3/5;\n  padding: 1rem;\n}\n.instructions-container {\n  height: 100%;\n  width: 100%;\n}\n/** landscape **/\n@media screen and (orientation: landscape) {\n  .instructions-modal .modal-content-container {\n    aspect-ratio: 5/3;\n    max-width: 80vw;\n    height: auto;\n    max-height: 500px;\n  }\n}\n\n/** portrait **/\n@media screen and (orientation: portrait) {\n  .instructions-modal .modal-content-container {\n    aspect-ratio: 3/5;\n  }\n}\n\n/** mobile **/\n\n@media only screen and (max-width: 768px) {\n  .instructions-modal .modal-content-container {\n    padding: 0.5rem;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    781: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".video-editor-loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.video-editor-loader p {\n  font-size: 18px;\n  text-align: center;\n  color: var(--loading-text-color);\n}\n.video-editor-loader > div:nth-of-type(1) {\n  position: relative;\n  text-align: center;\n  margin: 0 auto;\n  position: relative;\n  top: 0;\n  width: 50px;\n  height: 50px;\n  border: 4px solid dodgerblue;\n  border-color: dodgerblue dodgerblue dodgerblue transparent;\n  border-radius: 50%;\n  animation: rotate 1s linear reverse infinite;\n  transition: border-radius 0.3s ease, border-width 0.3s ease, height 0.3s ease;\n}\n/** Error **/\n.video-editor-loader.error > div:nth-of-type(1) {\n  margin-top: -50px;\n  animation: none;\n  border: none;\n  border-radius: 0;\n  border-top: 40px solid transparent;\n  border-right: 40px solid transparent;\n  border-bottom: 70px solid red;\n  border-left: 40px solid transparent;\n  height: 0;\n  width: 0;\n  background: transparent;\n}\n.video-editor-loader.error > div:nth-of-type(1)::after {\n  content: '!';\n  display: block;\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  font-family: 'Courier New', Courier, monospace;\n  margin-top: 45px;\n  transform: translate(-50%, -50%);\n}\n.video-editor-loader.error > p {\n  color: red;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    813: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".menu-bar-container {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  /* margin-bottom: 16px; */\n  background-color: var(--container-bg);\n  padding: 10px;\n  max-height: 10%;\n}\n/** buttons **/\n.menu-bar-button-container {\n  display: inline-block;\n}\n.menu-bar-button {\n  display: block;\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--menu-bar-btn-border-color);\n  border: none;\n  margin: 4px;\n  border-radius: 8px;\n  font-size: 20px;\n  background: var(--menu-bar-btn-bg);\n  text-transform: uppercase;\n  color: var(--menu-bar-btn-text);\n}\n.menu-bar-button i,\n.menu-bar-button svg {\n  display: inline;\n}\n.menu-bar-button-container span {\n  display: block;\n  text-align: center;\n  width: 100%;\n\n  color: var(--menu-bar-btn-text);\n}\n\n.menu-bar-button:hover,\n.menu-bar-button.toggled:not(.menu-bar-button.no-toggle-highlight) {\n  background: var(--menu-bar-btn-bg-hover);\n  color: var(--menu-bar-btn-text-hover);\n\n  /* border-color: var(--menu-bar-btn-border-color-hover); */\n  cursor: pointer;\n}\n/** mobile styles **/\n@media screen and (max-width: 768px), screen and (max-height: 712px) {\n  .menu-bar-container {\n    padding: 0.55rem;\n    background: transparent;\n  }\n}\n\n/** remove menu bar button text when height is small **/\n@media only screen and (max-height: 712px) {\n  .menu-bar-container {\n    padding: 0;\n    background: transparent;\n  }\n  .menu-bar-button-container span {\n    padding: 0;\n    display: none;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    828: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".modal-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1024;\n  display: inline-block;\n  display: flex;\n}\n.modal-container.modal-overlay {\n  background: rgba(0, 0, 0, 0.25);\n  transform: none;\n  max-height: unset;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n/** Modal content container is the actual modal that animates in and out **/\n.modal-content-container {\n  position: relative;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 240px;\n  max-width: 85vw;\n  max-height: 80%;\n  height: auto;\n  aspect-ratio: 4/3;\n  padding: 1rem;\n  background: white;\n  opacity: 0;\n  border-radius: 10px;\n  box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.55);\n  --animation-duration: 0.5s;\n}\n.modal-content {\n  height: 100%;\n  width: 100%;\n  min-height: 0;\n}\n\n.modal-container .close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  /* padding: 0.55rem; */\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  border-radius: 50%;\n  border: 1px solid rgb(183, 183, 183);\n  font-size: 1.25rem;\n  color: rgb(164, 164, 164);\n  padding: 0;\n  margin: 0.25rem;\n  background: transparent;\n  vertical-align: middle;\n}\n.modal-container .close-btn:hover {\n  /* background: lightgray; */\n  color: rgb(28, 28, 28);\n  border: 1px solid black;\n}\n\n/** Animations **/\n\n.modal-float-in {\n  animation: modal-float-in var(--animation-duration) forwards;\n}\n\n.float-out {\n  animation: modal-float-in var(--animation-duration) reverse forwards !important;\n}\n\n@keyframes modal-float-in {\n  from {\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n/** mobile sizes **/\n\n@media only screen and (max-width: 768px) {\n  .modal-content-container {\n    padding: 0.25rem;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    875: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".popover {\n  position: fixed;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  width: 400px;\n  height: auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 1rem;\n  margin: 0;\n  overflow: visible;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 2px solid rgba(0, 0, 0, 0.5);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity var(--fade-out-time) ease;\n  transition: opacity var(--fade-out-time) ease;\n  transform: translate(-50%, 0);\n  --arrow-width: 15px;\n}\n.popover-arrow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  margin-bottom: -0.5rem;\n  margin-left: -0.5rem;\n  /* background-color: #fff; */\n  border: 0;\n  border-top-color: red;\n  border-right-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  border-style: solid;\n  border-width: var(--arrow-width);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.popover-arrow::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 0;\n  height: 0;\n  content: '';\n  border: 0;\n  border-top-color: #fff;\n  border-right-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  border-style: solid;\n  border-width: var(--arrow-width);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translate(-50%, -50%);\n  margin-top: -2px;\n}\n\n.popover-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n  line-height: 1.5;\n  color: #000;\n}\n.popover-body {\n  margin: 0;\n  padding: 0;\n  line-height: 1.5;\n  color: #000;\n}\n\n.popover-danger {\n  border-color: #dc3545;\n}\n.popover-danger .popover-title {\n  color: #dc3545;\n}\n.popover-danger .popover-body {\n  color: #b32130;\n}\n\n/** mobile styles **/\n@media only screen and (max-width: 400px) {\n  .popover {\n    width: 300px;\n  }\n  .popover-title {\n    font-size: 1rem;\n  }\n  .popover-body {\n    font-size: 0.8rem;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    993: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".control-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background: var(--control-btn-bg); */\n  /* border: 2px solid var(--control-btn); */\n  background: transparent;\n  border: none;\n  border-radius: var(--control-btn-border-radius);\n  width: 0;\n  height: 0;\n  /* padding: 35px; */\n  padding: 1.85rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin: 0 0rem;\n}\n\n.control-btn i,\n.control-btn svg {\n  position: relative;\n  width: 35px;\n  font-size: 25px;\n  background: transparent;\n  color: var(--control-btn-i);\n}\n\n.control-btn:active,\n.control-btn-active {\n  transform: scale(0.95);\n\n  /* border: 2px solid var(--control-btn-active); */\n}\n.control-btn:active i,\n.control-btn:active svg {\n  transform: scale(1.05);\n}\n.control-btn:hover,\n.control-btn i:hover {\n  cursor: pointer;\n}\n.control-btn:hover:not(.control-btn.active) {\n  border-color: var(--control-btn-hover);\n  /* background-color: var(--control-btn-hover);  */\n  opacity: 0.9;\n}\n.control-btn:hover:not(.control-btn-active) i,\n.control-btn:hover:not(.control-btn-active) svg {\n  color: var(--control-btn-hover);\n}\n\n.control-btn.control-btn-active {\n  background-color: var(--control-btn-focus-bg);\n  outline: none;\n}\n.control-btn.control-btn-active i,\n.control-btn.control-btn-active svg {\n  color: var(--control-btn-focus-i);\n}\n.control-btn:disabled {\n  opacity: 0;\n  pointer-events: none;\n}\n\n/** mobile styles **/\n@media screen and (max-width: 768px) {\n  .control-btn i,\n  .control-btn svg {\n    font-size: 25px;\n  }\n  .control-btn {\n    padding: 1.5rem;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    340: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        "/** Controls **/\n.video-editor-controls {\n  position: relative;\n  margin-top: 16px;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  max-height: 10%;\n  /* background: var(--container-bg); */\n}\n\n/** play/pause btn **/\n.play-btn i,\n.play-btn svg {\n  font-size: 35px;\n  margin-left: 3px;\n}\n/** pause btn **/\n.play-btn.control-btn-active i,\n.play-btn.control-btn-active svg {\n  margin-left: -1px;\n}\n\n@media screen and (max-width: 768px) {\n  .video-editor-controls {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n    display: flex;\n    flex-direction: row;\n  }\n  .play-btn i,\n  .play-btn svg {\n    font-size: 30px;\n    margin-left: 3px;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    572: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".play-head {\n  /* --play-head-color: green; */\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  left: 0;\n  position: absolute;\n  z-index: 3;\n\n  top: 0;\n  width: 0;\n  border-top: var(--play-head-width) solid var(--play-head-color);\n  border-bottom: var(--play-head-width) solid var(--play-head-color);\n  border-left: var(--play-head-width) solid var(--play-head-color);\n  border-right: var(--play-head-width) solid var(--play-head-color);\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  /** background: black; **/\n  /* transition: transform 0.25s linear; */\n}\n.play-head::before {\n  content: '';\n  /* width: calc(var(--play-head-width) * 4); */\n  border-top: calc(var(--play-head-width) * 4) solid var(--play-head-color);\n  border-right: calc(var(--play-head-width) * 4) solid transparent;\n  border-bottom: calc(var(--play-head-width) * 4) solid transparent;\n  border-left: calc(var(--play-head-width) * 4) solid transparent;\n  width: 0;\n  height: 5px;\n  background: transparent;\n  position: absolute;\n  /* top: calc(var(--play-head-width) * -1); */\n  top: 0;\n  transform: translate(-50%, calc(var(--play-head-width) * -2));\n}\n.play-head::after {\n  content: '';\n  /* width: calc(var(--play-head-width) * 4); */\n  border-top: calc(var(--play-head-width) * 4) solid transparent;\n  border-right: calc(var(--play-head-width) * 4) solid transparent;\n  border-bottom: calc(var(--play-head-width) * 4) solid var(--play-head-color);\n  border-left: calc(var(--play-head-width) * 4) solid transparent;\n  width: 0;\n  height: 5px;\n  background: transparent;\n  position: absolute;\n  /* top: calc(var(--play-head-width) * -1); */\n  bottom: 0;\n  transform: translate(-50%, calc(var(--play-head-width) * 2));\n}\n",
        "",
      ]);
      const s = a;
    },
    502: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".marker {\n  border: var(--marker-border-size) solid var(--marker-border-color);\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n\n  box-shadow: 0px 0px 2px 0px rgb(105, 105, 105);\n}\n\n.marker {\n  /* opacity: 0.5; */\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  width: var(--marker-width);\n  height: 100%;\n  background: var(--marker-bg-color);\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  cursor: grab;\n}\n.marker {\n  cursor: grabbing;\n}\n\n.in-marker {\n  left: 0;\n  margin-left: calc(var(--marker-width) * -1 + 1px);\n  /** top: calc(var(--marker-border-size) * -1); **/\n  top: 0;\n  border-radius: 20px 0px 0px 20px;\n}\n.out-marker {\n  right: 0;\n  /** The +1px is for pixel perfection. Sometimes there is a pixel gap for a reason\n  I haven't nailed down yet. It only appears on certain viewport widths **/\n  margin-right: calc(var(--marker-width) * -1 + 1px);\n  /** top: calc(var(--marker-border-size) * -1); */\n  top: 0;\n  border-radius: 0 20px 20px 0;\n}\n",
        "",
      ]);
      const s = a;
    },
    802: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".timeline .timestamp {\n  position: absolute;\n  left: 50%;\n  top: -1rem;\n  transform: translate(-50%, -100%);\n  background: rgb(46, 46, 46);\n  padding: 0.25rem 1rem;\n\n  width: fit-content;\n  opacity: 0;\n  pointer-events: none;\n  /** fadeout transition is set by JS in TimeStamp.js */\n}\n.timeline .timestamp p {\n  color: white;\n}\n/** mobile styles **/\n\n@media only screen and (max-width: 768px) {\n  .timeline .timestamp {\n    bottom: unset;\n    top: 0rem;\n    transform: translate(-50%, -100%);\n    padding: 0 0.5rem;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    286: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".range-selector-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  visibility: hidden;\n}\n.range-selector-dragging {\n  opacity: 1;\n  z-index: 9999;\n\n  --range-selector-border-color: var(--range-selector-dragging-color);\n  --marker-border-color: var(--range-selector-dragging-color);\n  --marker-bg-color: var(--range-selector-dragging-color);\n\n  /* box-shadow: 0 0 20px 1px rgba(255, 255, 255, 0.539); */\n}\n\n.range-selector-container::before {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.range-selector {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n  border: var(--range-selector-border-size) solid var(--range-selector-border-color);\n  margin: 0;\n  /** range selector must have border-box sizing so that it fits perfectly around timeline **/\n  box-sizing: border-box !important;\n  -webkit-box-sizing: border-box !important;\n  overflow: hidden;\n  cursor: default;\n}\n.range-selector {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.selected-frames {\n  position: absolute !important;\n  top: 0;\n  right: 0;\n  /* adjusts selected frames height to account for range selector border */\n  margin: calc(var(--range-selector-border-size) * -1) !important;\n}\n.selected-frames::after {\n  content: '';\n  background: transparent !important;\n}\n\n/** in marker and out marker customizations **/\n/** you can find the css for the markers in the Marker component **/\n\n.in-marker::after,\n.out-marker::after {\n  content: '';\n  width: 5px;\n  height: 50%;\n  border-radius: 10px;\n  background-color: var(--in-out-marker-grab-color);\n  font-size: 20px;\n  font-weight: bold;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n",
        "",
      ]);
      const s = a;
    },
    908: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        ".timeline-container {\n  width: fit-content;\n  /** \n  padding left/right must be at least the total width\n  of the left and right markers **/\n  padding: 0 30px !important;\n  display: flex;\n  justify-content: center;\n  /* background: rgb(220, 220, 220); */\n\n  background-color: var(--container-bg);\n  box-sizing: border-box;\n  margin: 0 auto;\n  margin-top: 0;\n  min-height: 50px;\n  max-height: 150px;\n  height: 15%;\n}\n.timeline {\n  position: relative;\n  width: calc(100% - var(--marker-width) * 2) !important;\n  /* height: 100px; */\n  /* min-height: 50px; */\n  height: 100%;\n}\n.timeline.disabled {\n  opacity: 0.25;\n  pointer-events: none;\n}\n\n.frames-container {\n  position: relative;\n  width: fit-content;\n  height: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.frames-container::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.frame {\n  /** Frame **/\n  display: inline-flex;\n  justify-content: center;\n  border-width: var(--frame-border-size);\n  border-style: var(--frame-border-style);\n  border-color: var(--frame-border-color);\n  /* border-top: none;\n   border-bottom: none;\n   border: none; */\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  overflow: hidden;\n  background: var(--frame-bg);\n  width: auto !important;\n}\n.frame canvas {\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  /* background: slateblue; */\n  background: rgb(37, 37, 37);\n}\n\n@media (max-device-width: 380px) {\n  .timeline-container {\n    margin-top: 0rem;\n    margin-bottom: 0;\n    padding: 5px 10px !important;\n    background: transparent;\n  }\n  .timeline {\n    height: 80px;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    377: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        "/** colors **/\n/* Light */\n.video-editor-wrapper {\n  --overall-color: #636363;\n  --video-wrapper-bg: #eeeeee;\n  --svg-crop-overlay-bg: rgb(230, 230, 230);\n  --container-bg: #5a5a5a00;\n  --highlight-saturation: #ffcd62;\n  --highlight-luminosity: white;\n  --higlight-saturation-secondary: rgb(134, 117, 20);\n  --highlight-light: rgb(219, 219, 219);\n  --shadow-light: rgb(128, 128, 128);\n  --shadow-medium: rgb(47, 47, 47);\n  --shadow-heavy: black;\n  --transparent-bg: rgba(0, 0, 0, 0.2);\n  --semi-transparent-bg: rgba(0, 0, 0, 0.5);\n}\n/* dark */\n.video-editor-wrapper.darkmode {\n  --overall-color: #959595;\n  --video-wrapper-bg: #262626;\n  --svg-crop-overlay-bg: rgb(44, 43, 43);\n  --container-bg: #2d2d2d;\n  --highlight-saturation: gold;\n  --higlight-saturation-secondary: rgb(137, 119, 16);\n  --highlight-luminosity: white;\n  --highlight-light: #4d4d4d;\n  --shadow-light: rgb(119, 119, 119);\n  --shadow-medium: rgb(224, 224, 224);\n  --shadow-heavy: black;\n  --transparent-bg: rgba(175, 175, 175, 0.508);\n  --semi-transparent-bg: rgba(255, 217, 0, 0.514);\n}\n\n.video-editor-wrapper {\n  /** ############ SIZES ############## **/\n  --font-family: arial;\n  /** range select **/\n  --range-selector-border-size: 4px;\n  /** markers **/\n  --marker-border-size: 7px;\n  /** marker width MUST be greater than (marker-border-size * 2) **/\n  --marker-width: 20px;\n  /** frames **/\n  --frame-border-size: 2px;\n  --frame-border-style: solid;\n  /** playhead **/\n  --play-head-width: 1.5px;\n\n  /** ############ COLORS ############## **/\n  /** text **/\n  --loading-text-color: var(--shadow-medium);\n  --info-bar-text-color: var(--shadow-light);\n  /** video container **/\n  --video-container-border-size: 0px;\n  --video-container-border-color: var(--shadow-medium);\n  /** menu bar **/\n  --menu-bar-btn-bg: var(--highlight-light);\n  --menu-bar-btn-border-color: var(--shadow-light);\n  --menu-bar-btn-text: var(--shadow-medium);\n  --menu-bar-btn-bg-hover: var(--highlight-saturation);\n  --menu-bar-btn-text-hover: var(--shadow-heavy);\n  --menu-bar-btn-border-color-hover: var(--highlight-light);\n  /** frames **/\n  --frame-bg: var(--shadow-light);\n  --frame-border-color: var(--shadow-heavy);\n  /** range select **/\n  --range-selector-border-color: var(--highlight-saturation);\n  --range-selector-dragging-color: var(--highlight-saturation);\n  /** markers **/\n  --marker-border-color: var(--highlight-saturation);\n  --marker-bg-color: var(--highlight-saturation);\n  --in-out-marker-grab-color: var(--higlight-saturation-secondary);\n  /** playhead **/\n  --play-head-color: var(--highlight-luminosity);\n  /** crop slider **/\n  --crop-slider-thumb-color: var(--highlight-saturation);\n  --crop-slider-runnable-track: var(--overall-color);\n  /** control button **/\n  --control-btn: var(--overall-color);\n  --control-btn-bg: var(--transparent-bg);\n  --control-btn-i: var(--overall-color);\n  --control-btn-hover: var(--highlight-saturation);\n  --control-btn-border-radius: 50%;\n  --control-btn-hover-i: var(--highlight-saturation);\n  --control-btn-focus-i: var(--higlight-saturation-secondary);\n  --control-btn-focus-bg: var(--highlight-saturation);\n  --control-btn-active: var(--highlight-saturation);\n  --control-btn-active-icon: var(--shadow-heavy);\n}\n",
        "",
      ]);
      const s = a;
    },
    464: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(81),
        r = n.n(i),
        o = n(645),
        a = n.n(o)()(r());
      a.push([
        t.id,
        "/**\n\nNote on Video Editor element structure:\n\n[ MenuBar 10% ]\n[ VideoContainer 60% ]\n[ Controls 10% ]\n[ Timeline 15% ]\n[ InfoBar 5% ]\n\n**/\n\n/** primary ancestor of the entire editor **/\n.video-editor-wrapper * {\n  font-family: var(--font-family);\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.video-editor-wrapper {\n  margin: 0;\n  padding: 1rem;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  position: relative;\n  min-width: 375px;\n  min-height: 450px;\n  height: 100%;\n  width: 100%;\n  background: var(--video-wrapper-bg);\n}\n/** the container for all the editor elements **/\n.video-editor-container {\n  position: relative;\n  /* width: 100%; */\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/** the container for the video display in the editor **/\n.video-flexbox-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  max-height: 60%;\n  /* background: var(--container-bg); */\n  /* background: blue; */\n}\n\n.video-editor-container video {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  background: #f2f2f2;\n}\n/** the container for the video display in the editor **/\n.video-container {\n  position: relative;\n  /* width: 100%; */\n  /* overflow: hidden; */\n  margin: 0 auto;\n  box-shadow: 0px 0px 0px var(--video-container-border-size) var(--video-container-border-color);\n\n  background-color: var(--container-bg);\n}\n\n.video-wrap,\n.video-editor-container {\n  /* overflow: visible !important; */\n  overflow: hidden;\n}\n\n/** descendant of video-container, wraps around the HTML5 Video element **/\n.video-wrap {\n  position: relative;\n  /* max-height: 200px; */\n  overflow: hidden;\n}\n.video-wrap,\n.video-wrap video {\n  transform-origin: 50% 50%;\n}\n\n.video-container svg {\n  position: absolute;\n  left: 0px;\n  top: 0;\n  z-index: 2;\n  opacity: 1;\n  width: calc(100% + 1px);\n  height: calc(100% + 1px);\n}\n\n.video-container svg path {\n  /* fill: var(--video-wrapper-bg); */\n  fill: var(--svg-crop-overlay-bg);\n}\n\n/** mobile styles **/\n@media only screen and (max-width: 768px) {\n  .video-editor-wrapper {\n    padding: 0rem;\n  }\n}\n\n/** short height **/\n@media only screen and (max-height: 500px) {\n  .video-flexbox-container {\n    max-height: 50%;\n  }\n}\n",
        "",
      ]);
      const s = a;
    },
    645: (t) => {
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = "",
                i = void 0 !== e[5];
              return (
                e[4] && (n += "@supports (".concat(e[4], ") {")),
                e[2] && (n += "@media ".concat(e[2], " {")),
                i &&
                  (n += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {"
                  )),
                (n += t(e)),
                i && (n += "}"),
                e[2] && (n += "}"),
                e[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (e.i = function (t, n, i, r, o) {
            "string" == typeof t && (t = [[null, t, void 0]]);
            var a = {};
            if (i)
              for (var s = 0; s < this.length; s++) {
                var l = this[s][0];
                null != l && (a[l] = !0);
              }
            for (var c = 0; c < t.length; c++) {
              var d = [].concat(t[c]);
              (i && a[d[0]]) ||
                (void 0 !== o &&
                  (void 0 === d[5] ||
                    (d[1] = "@layer"
                      .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                      .concat(d[1], "}")),
                  (d[5] = o)),
                n &&
                  (d[2]
                    ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")),
                      (d[2] = n))
                    : (d[2] = n)),
                r &&
                  (d[4]
                    ? ((d[1] = "@supports ("
                        .concat(d[4], ") {")
                        .concat(d[1], "}")),
                      (d[4] = r))
                    : (d[4] = "".concat(r))),
                e.push(d));
            }
          }),
          e
        );
      };
    },
    81: (t) => {
      t.exports = function (t) {
        return t[1];
      };
    },
    379: (t) => {
      var e = [];
      function n(t) {
        for (var n = -1, i = 0; i < e.length; i++)
          if (e[i].identifier === t) {
            n = i;
            break;
          }
        return n;
      }
      function i(t, i) {
        for (var o = {}, a = [], s = 0; s < t.length; s++) {
          var l = t[s],
            c = i.base ? l[0] + i.base : l[0],
            d = o[c] || 0,
            u = "".concat(c, " ").concat(d);
          o[c] = d + 1;
          var h = n(u),
            f = {
              css: l[1],
              media: l[2],
              sourceMap: l[3],
              supports: l[4],
              layer: l[5],
            };
          if (-1 !== h) e[h].references++, e[h].updater(f);
          else {
            var p = r(f, i);
            (i.byIndex = s),
              e.splice(s, 0, { identifier: u, updater: p, references: 1 });
          }
          a.push(u);
        }
        return a;
      }
      function r(t, e) {
        var n = e.domAPI(e);
        n.update(t);
        return function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap &&
              e.supports === t.supports &&
              e.layer === t.layer
            )
              return;
            n.update((t = e));
          } else n.remove();
        };
      }
      t.exports = function (t, r) {
        var o = i((t = t || []), (r = r || {}));
        return function (t) {
          t = t || [];
          for (var a = 0; a < o.length; a++) {
            var s = n(o[a]);
            e[s].references--;
          }
          for (var l = i(t, r), c = 0; c < o.length; c++) {
            var d = n(o[c]);
            0 === e[d].references && (e[d].updater(), e.splice(d, 1));
          }
          o = l;
        };
      };
    },
    569: (t) => {
      var e = {};
      t.exports = function (t, n) {
        var i = (function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        })(t);
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(n);
      };
    },
    216: (t) => {
      t.exports = function (t) {
        var e = document.createElement("style");
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
      };
    },
    565: (t, e, n) => {
      t.exports = function (t) {
        var e = n.nc;
        e && t.setAttribute("nonce", e);
      };
    },
    795: (t) => {
      t.exports = function (t) {
        var e = t.insertStyleElement(t);
        return {
          update: function (n) {
            !(function (t, e, n) {
              var i = "";
              n.supports && (i += "@supports (".concat(n.supports, ") {")),
                n.media && (i += "@media ".concat(n.media, " {"));
              var r = void 0 !== n.layer;
              r &&
                (i += "@layer".concat(
                  n.layer.length > 0 ? " ".concat(n.layer) : "",
                  " {"
                )),
                (i += n.css),
                r && (i += "}"),
                n.media && (i += "}"),
                n.supports && (i += "}");
              var o = n.sourceMap;
              o &&
                "undefined" != typeof btoa &&
                (i +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                    " */"
                  )),
                e.styleTagTransform(i, t, e.options);
            })(e, t, n);
          },
          remove: function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(e);
          },
        };
      };
    },
    589: (t) => {
      t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t));
        }
      };
    },
    257: function (t, e, n) {
      var i, r;
      "undefined" != typeof self && self,
        (i = function () {
          "function" != typeof Promise &&
            (function (e) {
              function n(t, e) {
                return function () {
                  t.apply(e, arguments);
                };
              }
              function i(t) {
                if ("object" != typeof this)
                  throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t)
                  throw new TypeError("not a function");
                (this._state = null),
                  (this._value = null),
                  (this._deferreds = []),
                  c(t, n(o, this), n(a, this));
              }
              function r(t) {
                var e = this;
                return null === this._state
                  ? void this._deferreds.push(t)
                  : void u(function () {
                      var n = e._state ? t.onFulfilled : t.onRejected;
                      if (null !== n) {
                        var i;
                        try {
                          i = n(e._value);
                        } catch (e) {
                          return void t.reject(e);
                        }
                        t.resolve(i);
                      } else (e._state ? t.resolve : t.reject)(e._value);
                    });
              }
              function o(t) {
                try {
                  if (t === this)
                    throw new TypeError(
                      "A promise cannot be resolved with itself."
                    );
                  if (t && ("object" == typeof t || "function" == typeof t)) {
                    var e = t.then;
                    if ("function" == typeof e)
                      return void c(n(e, t), n(o, this), n(a, this));
                  }
                  (this._state = !0), (this._value = t), s.call(this);
                } catch (t) {
                  a.call(this, t);
                }
              }
              function a(t) {
                (this._state = !1), (this._value = t), s.call(this);
              }
              function s() {
                for (var t = 0, e = this._deferreds.length; e > t; t++)
                  r.call(this, this._deferreds[t]);
                this._deferreds = null;
              }
              function l(t, e, n, i) {
                (this.onFulfilled = "function" == typeof t ? t : null),
                  (this.onRejected = "function" == typeof e ? e : null),
                  (this.resolve = n),
                  (this.reject = i);
              }
              function c(t, e, n) {
                var i = !1;
                try {
                  t(
                    function (t) {
                      i || ((i = !0), e(t));
                    },
                    function (t) {
                      i || ((i = !0), n(t));
                    }
                  );
                } catch (t) {
                  if (i) return;
                  (i = !0), n(t);
                }
              }
              var d = setTimeout,
                u =
                  ("function" == typeof setImmediate && setImmediate) ||
                  function (t) {
                    d(t, 1);
                  },
                h =
                  Array.isArray ||
                  function (t) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(t)
                    );
                  };
              (i.prototype.catch = function (t) {
                return this.then(null, t);
              }),
                (i.prototype.then = function (t, e) {
                  var n = this;
                  return new i(function (i, o) {
                    r.call(n, new l(t, e, i, o));
                  });
                }),
                (i.all = function () {
                  var t = Array.prototype.slice.call(
                    1 === arguments.length && h(arguments[0])
                      ? arguments[0]
                      : arguments
                  );
                  return new i(function (e, n) {
                    function i(o, a) {
                      try {
                        if (
                          a &&
                          ("object" == typeof a || "function" == typeof a)
                        ) {
                          var s = a.then;
                          if ("function" == typeof s)
                            return void s.call(
                              a,
                              function (t) {
                                i(o, t);
                              },
                              n
                            );
                        }
                        (t[o] = a), 0 == --r && e(t);
                      } catch (t) {
                        n(t);
                      }
                    }
                    if (0 === t.length) return e([]);
                    for (var r = t.length, o = 0; o < t.length; o++) i(o, t[o]);
                  });
                }),
                (i.resolve = function (t) {
                  return t && "object" == typeof t && t.constructor === i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                }),
                (i.reject = function (t) {
                  return new i(function (e, n) {
                    n(t);
                  });
                }),
                (i.race = function (t) {
                  return new i(function (e, n) {
                    for (var i = 0, r = t.length; r > i; i++) t[i].then(e, n);
                  });
                }),
                (i._setImmediateFn = function (t) {
                  u = t;
                }),
                t.exports ? (t.exports = i) : e.Promise || (e.Promise = i);
            })(this),
            "undefined" != typeof window &&
              "function" != typeof window.CustomEvent &&
              (function () {
                function t(t, e) {
                  e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
                  var n = document.createEvent("CustomEvent");
                  return (
                    n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
                  );
                }
                (t.prototype = window.Event.prototype),
                  (window.CustomEvent = t);
              })(),
            "undefined" == typeof HTMLCanvasElement ||
              HTMLCanvasElement.prototype.toBlob ||
              Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
                value: function (t, e, n) {
                  for (
                    var i = atob(this.toDataURL(e, n).split(",")[1]),
                      r = i.length,
                      o = new Uint8Array(r),
                      a = 0;
                    a < r;
                    a++
                  )
                    o[a] = i.charCodeAt(a);
                  t(new Blob([o], { type: e || "image/png" }));
                },
              });
          var e,
            n,
            i,
            r = ["Webkit", "Moz", "ms"],
            o =
              "undefined" != typeof document
                ? document.createElement("div").style
                : {},
            a = [1, 8, 3, 6],
            s = [2, 7, 4, 5];
          function l(t) {
            if (t in o) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = r.length; n--; )
              if ((t = r[n] + e) in o) return t;
          }
          function c(t, e) {
            var n = a.indexOf(t) > -1 ? a : s,
              i = n.indexOf(t),
              r = (e / 90) % n.length;
            return n[(n.length + i + (r % n.length)) % n.length];
          }
          function d(t, e) {
            for (var n in ((t = t || {}), e))
              e[n] && e[n].constructor && e[n].constructor === Object
                ? ((t[n] = t[n] || {}), d(t[n], e[n]))
                : (t[n] = e[n]);
            return t;
          }
          function u(t) {
            return d({}, t);
          }
          function h(t, e, n) {
            var i;
            return function () {
              var r = this,
                o = arguments,
                a = function () {
                  (i = null), n || t.apply(r, o);
                },
                s = n && !i;
              clearTimeout(i), (i = setTimeout(a, e)), s && t.apply(r, o);
            };
          }
          function f(t) {
            if ("createEvent" in document) {
              var e = document.createEvent("HTMLEvents");
              e.initEvent("change", !1, !0), t.dispatchEvent(e);
            } else t.fireEvent("onchange");
          }
          function p(t, e, n) {
            if ("string" == typeof e) {
              var i = e;
              (e = {})[i] = n;
            }
            for (var r in e) t.style[r] = e[r];
          }
          function m(t, e) {
            t.classList ? t.classList.add(e) : (t.className += " " + e);
          }
          function g(t, e) {
            t.classList
              ? t.classList.remove(e)
              : (t.className = t.className.replace(e, ""));
          }
          function v(t, e) {
            for (var n in e) t.setAttribute(n, e[n]);
          }
          function b(t) {
            return parseInt(t, 10);
          }
          function y(t, e) {
            if (!t) throw "Source image missing";
            var n = new Image();
            return (
              (n.style.opacity = "0"),
              new Promise(function (i, r) {
                function o() {
                  (n.style.opacity = "1"),
                    setTimeout(function () {
                      i(n);
                    }, 1);
                }
                n.removeAttribute("crossOrigin"),
                  t.match(/^https?:\/\/|^\/\//) &&
                    n.setAttribute("crossOrigin", "anonymous"),
                  (n.onload = function () {
                    e
                      ? EXIF.getData(n, function () {
                          o();
                        })
                      : o();
                  }),
                  (n.onerror = function (t) {
                    (n.style.opacity = 1),
                      setTimeout(function () {
                        r(t);
                      }, 1);
                  }),
                  (n.src = t);
              })
            );
          }
          function w(t, e) {
            var n = t.naturalWidth,
              i = t.naturalHeight,
              r = e || T(t);
            if (r && r >= 5) {
              var o = n;
              (n = i), (i = o);
            }
            return { width: n, height: i };
          }
          (n = l("transform")),
            (e = l("transformOrigin")),
            (i = l("userSelect"));
          var x = {
              translate3d: { suffix: ", 0px" },
              translate: { suffix: "" },
            },
            k = function (t, e, n) {
              (this.x = parseFloat(t)),
                (this.y = parseFloat(e)),
                (this.scale = parseFloat(n));
            };
          (k.parse = function (t) {
            return t.style
              ? k.parse(t.style[n])
              : t.indexOf("matrix") > -1 || t.indexOf("none") > -1
              ? k.fromMatrix(t)
              : k.fromString(t);
          }),
            (k.fromMatrix = function (t) {
              var e = t.substring(7).split(",");
              return (
                (e.length && "none" !== t) || (e = [1, 0, 0, 1, 0, 0]),
                new k(b(e[4]), b(e[5]), parseFloat(e[0]))
              );
            }),
            (k.fromString = function (t) {
              var e = t.split(") "),
                n = e[0].substring(ot.globals.translate.length + 1).split(","),
                i = e.length > 1 ? e[1].substring(6) : 1,
                r = n.length > 1 ? n[0] : 0,
                o = n.length > 1 ? n[1] : 0;
              return new k(r, o, i);
            }),
            (k.prototype.toString = function () {
              var t = x[ot.globals.translate].suffix || "";
              return (
                ot.globals.translate +
                "(" +
                this.x +
                "px, " +
                this.y +
                "px" +
                t +
                ") scale(" +
                this.scale +
                ")"
              );
            });
          var _ = function (t) {
            if (!t || !t.style[e]) return (this.x = 0), void (this.y = 0);
            var n = t.style[e].split(" ");
            (this.x = parseFloat(n[0])), (this.y = parseFloat(n[1]));
          };
          function T(t) {
            return t.exifdata && t.exifdata.Orientation
              ? b(t.exifdata.Orientation)
              : 1;
          }
          function C(t, e, n) {
            var i = e.width,
              r = e.height,
              o = t.getContext("2d");
            switch (((t.width = e.width), (t.height = e.height), o.save(), n)) {
              case 2:
                o.translate(i, 0), o.scale(-1, 1);
                break;
              case 3:
                o.translate(i, r), o.rotate((180 * Math.PI) / 180);
                break;
              case 4:
                o.translate(0, r), o.scale(1, -1);
                break;
              case 5:
                (t.width = r),
                  (t.height = i),
                  o.rotate((90 * Math.PI) / 180),
                  o.scale(1, -1);
                break;
              case 6:
                (t.width = r),
                  (t.height = i),
                  o.rotate((90 * Math.PI) / 180),
                  o.translate(0, -r);
                break;
              case 7:
                (t.width = r),
                  (t.height = i),
                  o.rotate((-90 * Math.PI) / 180),
                  o.translate(-i, r),
                  o.scale(1, -1);
                break;
              case 8:
                (t.width = r),
                  (t.height = i),
                  o.translate(0, i),
                  o.rotate((-90 * Math.PI) / 180);
            }
            o.drawImage(e, 0, 0, i, r), o.restore();
          }
          function E() {
            var t,
              e,
              n,
              i,
              r,
              o,
              a = this,
              s = "croppie-container",
              l = a.options.viewport.type
                ? "cr-vp-" + a.options.viewport.type
                : null;
            (a.options.useCanvas = a.options.enableOrientation || S.call(a)),
              (a.data = {}),
              (a.elements = {}),
              (t = a.elements.boundary = document.createElement("div")),
              (n = a.elements.viewport = document.createElement("div")),
              (e = a.elements.img = document.createElement("img")),
              (i = a.elements.overlay = document.createElement("div")),
              a.options.useCanvas
                ? ((a.elements.canvas = document.createElement("canvas")),
                  (a.elements.preview = a.elements.canvas))
                : (a.elements.preview = e),
              m(t, "cr-boundary"),
              t.setAttribute("aria-dropeffect", "none"),
              (r = a.options.boundary.width),
              (o = a.options.boundary.height),
              p(t, {
                width: r + (isNaN(r) ? "" : "px"),
                height: o + (isNaN(o) ? "" : "px"),
              }),
              m(n, "cr-viewport"),
              l && m(n, l),
              p(n, {
                width: a.options.viewport.width + "px",
                height: a.options.viewport.height + "px",
              }),
              n.setAttribute("tabindex", 0),
              m(a.elements.preview, "cr-image"),
              v(a.elements.preview, {
                alt: "preview",
                "aria-grabbed": "false",
              }),
              m(i, "cr-overlay"),
              a.element.appendChild(t),
              t.appendChild(a.elements.preview),
              t.appendChild(n),
              t.appendChild(i),
              m(a.element, s),
              a.options.customClass && m(a.element, a.options.customClass),
              D.call(this),
              a.options.enableZoom && P.call(a),
              a.options.enableResize && M.call(a);
          }
          function S() {
            return this.options.enableExif && window.EXIF;
          }
          function M() {
            var t,
              e,
              n,
              r,
              o,
              a,
              s,
              l = this,
              c = document.createElement("div"),
              d = !1,
              u = 50;
            function h(a) {
              if (
                (void 0 === a.button || 0 === a.button) &&
                (a.preventDefault(), !d)
              ) {
                var s = l.elements.overlay.getBoundingClientRect();
                if (
                  ((d = !0),
                  (e = a.pageX),
                  (n = a.pageY),
                  (t =
                    -1 !== a.currentTarget.className.indexOf("vertical")
                      ? "v"
                      : "h"),
                  (r = s.width),
                  (o = s.height),
                  a.touches)
                ) {
                  var c = a.touches[0];
                  (e = c.pageX), (n = c.pageY);
                }
                window.addEventListener("mousemove", f),
                  window.addEventListener("touchmove", f),
                  window.addEventListener("mouseup", g),
                  window.addEventListener("touchend", g),
                  (document.body.style[i] = "none");
              }
            }
            function f(i) {
              var a = i.pageX,
                s = i.pageY;
              if ((i.preventDefault(), i.touches)) {
                var d = i.touches[0];
                (a = d.pageX), (s = d.pageY);
              }
              var h = a - e,
                f = s - n,
                m = l.options.viewport.height + f,
                g = l.options.viewport.width + h;
              "v" === t && m >= u && m <= o
                ? (p(c, { height: m + "px" }),
                  (l.options.boundary.height += f),
                  p(l.elements.boundary, {
                    height: l.options.boundary.height + "px",
                  }),
                  (l.options.viewport.height += f),
                  p(l.elements.viewport, {
                    height: l.options.viewport.height + "px",
                  }))
                : "h" === t &&
                  g >= u &&
                  g <= r &&
                  (p(c, { width: g + "px" }),
                  (l.options.boundary.width += h),
                  p(l.elements.boundary, {
                    width: l.options.boundary.width + "px",
                  }),
                  (l.options.viewport.width += h),
                  p(l.elements.viewport, {
                    width: l.options.viewport.width + "px",
                  })),
                N.call(l),
                j.call(l),
                console.log("*********#########update center point"),
                L.call(l),
                I.call(l),
                (n = s),
                (e = a);
            }
            function g() {
              (d = !1),
                window.removeEventListener("mousemove", f),
                window.removeEventListener("touchmove", f),
                window.removeEventListener("mouseup", g),
                window.removeEventListener("touchend", g),
                (document.body.style[i] = "");
            }
            m(c, "cr-resizer"),
              p(c, {
                width: this.options.viewport.width + "px",
                height: this.options.viewport.height + "px",
              }),
              this.options.resizeControls.height &&
                (m((a = document.createElement("div")), "cr-resizer-vertical"),
                c.appendChild(a)),
              this.options.resizeControls.width &&
                (m(
                  (s = document.createElement("div")),
                  "cr-resizer-horisontal"
                ),
                c.appendChild(s)),
              a &&
                (a.addEventListener("mousedown", h),
                a.addEventListener("touchstart", h)),
              s &&
                (s.addEventListener("mousedown", h),
                s.addEventListener("touchstart", h)),
              this.elements.boundary.appendChild(c);
          }
          function O(t) {
            if (this.options.enableZoom) {
              var e = this.elements.zoomer,
                n = K(t, 4);
              e.value = Math.max(
                parseFloat(e.min),
                Math.min(parseFloat(e.max), n)
              ).toString();
            }
          }
          function P() {
            var t = this,
              e = (t.elements.zoomerWrap = document.createElement("div")),
              n = (t.elements.zoomer = document.createElement("input"));
            function i() {
              A.call(t, {
                value: parseFloat(n.value),
                origin: new _(t.elements.preview),
                viewportRect: t.elements.viewport.getBoundingClientRect(),
                transform: k.parse(t.elements.preview),
              });
            }
            function r(e) {
              var n, r;
              if ("ctrl" === t.options.mouseWheelZoom && !0 !== e.ctrlKey)
                return 0;
              (n = e.wheelDelta
                ? e.wheelDelta / 1200
                : e.deltaY
                ? e.deltaY / 1060
                : e.detail
                ? e.detail / -60
                : 0),
                (r = t._currentZoom + n * t._currentZoom),
                e.preventDefault(),
                O.call(t, r),
                i.call(t);
            }
            m(e, "cr-slider-wrap"),
              m(n, "cr-slider"),
              (n.type = "range"),
              (n.step = "0.0001"),
              (n.value = "1"),
              (n.style.display = t.options.showZoomer ? "" : "none"),
              n.setAttribute("aria-label", "zoom"),
              t.element.appendChild(e),
              e.appendChild(n),
              (t._currentZoom = 1),
              t.elements.zoomer.addEventListener("input", i),
              t.elements.zoomer.addEventListener("change", i),
              t.options.mouseWheelZoom &&
                (t.elements.boundary.addEventListener("mousewheel", r),
                t.elements.boundary.addEventListener("DOMMouseScroll", r));
          }
          function A(t) {
            var i = this,
              r = t ? t.transform : k.parse(i.elements.preview),
              o = t
                ? t.viewportRect
                : i.elements.viewport.getBoundingClientRect(),
              a = t ? t.origin : new _(i.elements.preview);
            function s() {
              var t = {};
              (t[n] = r.toString()),
                (t[e] = a.toString()),
                p(i.elements.preview, t);
            }
            if (
              ((i._currentZoom = t ? t.value : i._currentZoom),
              (r.scale = i._currentZoom),
              i.elements.zoomer.setAttribute("aria-valuenow", i._currentZoom),
              s(),
              i.options.enforceBoundary)
            ) {
              var l = R.call(i, o),
                c = l.translate,
                d = l.origin;
              r.x >= c.maxX && ((a.x = d.minX), (r.x = c.maxX)),
                r.x <= c.minX && ((a.x = d.maxX), (r.x = c.minX)),
                r.y >= c.maxY && ((a.y = d.minY), (r.y = c.maxY)),
                r.y <= c.minY && ((a.y = d.maxY), (r.y = c.minY));
            }
            s(), z.call(i), I.call(i);
          }
          function R(t) {
            var e = this,
              n = e._currentZoom,
              i = t.width,
              r = t.height,
              o = e.elements.boundary.clientWidth / 2,
              a = e.elements.boundary.clientHeight / 2,
              s = e.elements.preview.getBoundingClientRect(),
              l = s.width,
              c = s.height,
              d = i / 2,
              u = r / 2,
              h = -1 * (d / n - o),
              f = -1 * (u / n - a),
              p = (1 / n) * d,
              m = (1 / n) * u;
            return {
              translate: {
                maxX: h,
                minX: h - (l * (1 / n) - i * (1 / n)),
                maxY: f,
                minY: f - (c * (1 / n) - r * (1 / n)),
              },
              origin: {
                maxX: l * (1 / n) - p,
                minX: p,
                maxY: c * (1 / n) - m,
                minY: m,
              },
            };
          }
          function L(t) {
            var i = this,
              r = i._currentZoom,
              o = i.elements.preview.getBoundingClientRect(),
              a = i.elements.viewport.getBoundingClientRect(),
              s = k.parse(i.elements.preview.style[n]),
              l = new _(i.elements.preview),
              c = a.top - o.top + a.height / 2,
              d = a.left - o.left + a.width / 2,
              u = {},
              h = {};
            if (t) {
              var f = l.x,
                m = l.y,
                g = s.x,
                v = s.y;
              (u.y = f), (u.x = m), (s.y = g), (s.x = v);
            } else
              (u.y = c / r),
                (u.x = d / r),
                (h.y = (u.y - l.y) * (1 - r)),
                (h.x = (u.x - l.x) * (1 - r)),
                (s.x -= h.x),
                (s.y -= h.y);
            var b = {};
            (b[e] = u.x + "px " + u.y + "px"),
              (b[n] = s.toString()),
              p(i.elements.preview, b);
          }
          function D() {
            var t,
              e,
              r,
              o,
              a,
              s = this,
              l = !1;
            function c(t, e) {
              var n = s.elements.preview.getBoundingClientRect(),
                i = a.y + e,
                r = a.x + t;
              s.options.enforceBoundary
                ? (o.top > n.top + e && o.bottom < n.bottom + e && (a.y = i),
                  o.left > n.left + t && o.right < n.right + t && (a.x = r))
                : ((a.y = i), (a.x = r));
            }
            function d(t) {
              s.elements.preview.setAttribute("aria-grabbed", t),
                s.elements.boundary.setAttribute(
                  "aria-dropeffect",
                  t ? "move" : "none"
                );
            }
            function u(t) {
              var e,
                n = 37,
                r = 38,
                l = 39,
                c = 40;
              if (!t.shiftKey || (t.keyCode !== r && t.keyCode !== c)) {
                if (
                  s.options.enableKeyMovement &&
                  t.keyCode >= 37 &&
                  t.keyCode <= 40
                ) {
                  t.preventDefault();
                  var d = u(t.keyCode);
                  (a = k.parse(s.elements.preview)),
                    (document.body.style[i] = "none"),
                    (o = s.elements.viewport.getBoundingClientRect()),
                    h(d);
                }
              } else
                (e =
                  t.keyCode === r
                    ? parseFloat(s.elements.zoomer.value) +
                      parseFloat(s.elements.zoomer.step)
                    : parseFloat(s.elements.zoomer.value) -
                      parseFloat(s.elements.zoomer.step)),
                  s.setZoom(e);
              function u(t) {
                switch (t) {
                  case n:
                    return [1, 0];
                  case r:
                    return [0, 1];
                  case l:
                    return [-1, 0];
                  case c:
                    return [0, -1];
                }
              }
            }
            function h(t) {
              var e = {};
              c(t[0], t[1]),
                (e[n] = a.toString()),
                p(s.elements.preview, e),
                N.call(s),
                (document.body.style[i] = ""),
                L.call(s),
                I.call(s),
                (r = 0);
            }
            function m(n) {
              if (
                (void 0 === n.button || 0 === n.button) &&
                (n.preventDefault(), !l)
              ) {
                if (((l = !0), (t = n.pageX), (e = n.pageY), n.touches)) {
                  var r = n.touches[0];
                  (t = r.pageX), (e = r.pageY);
                }
                d(l),
                  (a = k.parse(s.elements.preview)),
                  window.addEventListener("mousemove", g),
                  window.addEventListener("touchmove", g),
                  window.addEventListener("mouseup", v),
                  window.addEventListener("touchend", v),
                  (document.body.style[i] = "none"),
                  (o = s.elements.viewport.getBoundingClientRect());
              }
            }
            function g(i) {
              i.preventDefault();
              var o = i.pageX,
                l = i.pageY;
              if (i.touches) {
                var d = i.touches[0];
                (o = d.pageX), (l = d.pageY);
              }
              var u = o - t,
                h = l - e,
                m = {};
              if ("touchmove" === i.type && i.touches.length > 1) {
                var g = i.touches[0],
                  v = i.touches[1],
                  b = Math.sqrt(
                    (g.pageX - v.pageX) * (g.pageX - v.pageX) +
                      (g.pageY - v.pageY) * (g.pageY - v.pageY)
                  );
                r || (r = b / s._currentZoom);
                var y = b / r;
                return O.call(s, y), void f(s.elements.zoomer);
              }
              c(u, h),
                (m[n] = a.toString()),
                p(s.elements.preview, m),
                N.call(s),
                (e = l),
                (t = o);
            }
            function v() {
              d((l = !1)),
                window.removeEventListener("mousemove", g),
                window.removeEventListener("touchmove", g),
                window.removeEventListener("mouseup", v),
                window.removeEventListener("touchend", v),
                (document.body.style[i] = ""),
                L.call(s),
                I.call(s),
                (r = 0);
            }
            s.elements.overlay.addEventListener("mousedown", m),
              s.elements.viewport.addEventListener("keydown", u),
              s.elements.overlay.addEventListener("touchstart", m);
          }
          function N() {
            if (this.elements) {
              var t = this,
                e = t.elements.boundary.getBoundingClientRect(),
                n = t.elements.preview.getBoundingClientRect();
              p(t.elements.overlay, {
                width: n.width + "px",
                height: n.height + "px",
                top: n.top - e.top + "px",
                left: n.left - e.left + "px",
              });
            }
          }
          _.prototype.toString = function () {
            return this.x + "px " + this.y + "px";
          };
          var z = h(N, 500);
          function I() {
            var t,
              e = this,
              n = e.get();
            B.call(e) &&
              (e.options.update.call(e, n),
              e.$ && "undefined" == typeof Prototype
                ? e.$(e.element).trigger("update.croppie", n)
                : (window.CustomEvent
                    ? (t = new CustomEvent("update", { detail: n }))
                    : (t = document.createEvent("CustomEvent")).initCustomEvent(
                        "update",
                        !0,
                        !0,
                        n
                      ),
                  e.element.dispatchEvent(t)));
          }
          function B() {
            return (
              this.elements.preview.offsetHeight > 0 &&
              this.elements.preview.offsetWidth > 0
            );
          }
          function F() {
            var t,
              i = this,
              r = 1,
              o = {},
              a = i.elements.preview,
              s = new k(0, 0, r),
              l = new _();
            B.call(i) &&
              !i.data.bound &&
              ((i.data.bound = !0),
              (o[n] = s.toString()),
              (o[e] = l.toString()),
              (o.opacity = 1),
              p(a, o),
              (t = i.elements.preview.getBoundingClientRect()),
              (i._originalImageWidth = t.width),
              (i._originalImageHeight = t.height),
              (i.data.orientation = S.call(i)
                ? T(i.elements.img)
                : i.data.orientation),
              i.options.enableZoom ? j.call(i, !0) : (i._currentZoom = r),
              (s.scale = i._currentZoom),
              (o[n] = s.toString()),
              p(a, o),
              i.data.points.length ? X.call(i, i.data.points) : H.call(i),
              L.call(i),
              N.call(i));
          }
          function j(t) {
            var e,
              n,
              i,
              r,
              o = this,
              a = Math.max(o.options.minZoom, 0) || 0,
              s = o.options.maxZoom || 1.5,
              l = o.elements.zoomer,
              c = parseFloat(l.value),
              d = o.elements.boundary.getBoundingClientRect(),
              u = w(o.elements.img, o.data.orientation),
              h = o.elements.viewport.getBoundingClientRect();
            o.options.enforceBoundary &&
              ((i = h.width / u.width),
              (r = h.height / u.height),
              (a = Math.max(i, r))),
              a >= s && (s = a + 1),
              (l.min = K(a, 4)),
              (l.max = K(s, 4)),
              !t && (c < l.min || c > l.max)
                ? O.call(o, c < l.min ? l.min : l.max)
                : t &&
                  ((n = Math.max(d.width / u.width, d.height / u.height)),
                  (e = null !== o.data.boundZoom ? o.data.boundZoom : n),
                  O.call(o, e)),
              f(l);
          }
          function X(t) {
            if (4 !== t.length)
              throw "Croppie - Invalid number of points supplied: " + t;
            var i = this,
              r = t[2] - t[0],
              o = i.elements.viewport.getBoundingClientRect(),
              a = i.elements.boundary.getBoundingClientRect(),
              s = { left: o.left - a.left, top: o.top - a.top },
              l = o.width / r,
              c = t[1],
              d = t[0],
              u = -1 * t[1] + s.top,
              h = -1 * t[0] + s.left,
              f = {};
            (f[e] = d + "px " + c + "px"),
              (f[n] = new k(h, u, l).toString()),
              p(i.elements.preview, f),
              O.call(i, l),
              (i._currentZoom = l);
          }
          function H() {
            var t = this,
              e = t.elements.preview.getBoundingClientRect(),
              i = t.elements.viewport.getBoundingClientRect(),
              r = t.elements.boundary.getBoundingClientRect(),
              o = i.left - r.left,
              a = i.top - r.top,
              s = o - (e.width - i.width) / 2,
              l = a - (e.height - i.height) / 2,
              c = new k(s, l, t._currentZoom);
            p(t.elements.preview, n, c.toString());
          }
          function Y(t) {
            var e = this,
              n = e.elements.canvas,
              i = e.elements.img;
            n.getContext("2d").clearRect(0, 0, n.width, n.height),
              (n.width = i.width),
              (n.height = i.height),
              C(n, i, (e.options.enableOrientation && t) || T(i));
          }
          function V(t) {
            var e = this,
              n = t.points,
              i = b(n[0]),
              r = b(n[1]),
              o = b(n[2]) - i,
              a = b(n[3]) - r,
              s = t.circle,
              l = document.createElement("canvas"),
              c = l.getContext("2d"),
              d = t.outputWidth || o,
              u = t.outputHeight || a;
            (l.width = d),
              (l.height = u),
              t.backgroundColor &&
                ((c.fillStyle = t.backgroundColor), c.fillRect(0, 0, d, u));
            var h = i,
              f = r,
              p = o,
              m = a,
              g = 0,
              v = 0,
              y = d,
              w = u;
            return (
              i < 0 && ((h = 0), (g = (Math.abs(i) / o) * d)),
              p + h > e._originalImageWidth &&
                (y = ((p = e._originalImageWidth - h) / o) * d),
              r < 0 && ((f = 0), (v = (Math.abs(r) / a) * u)),
              m + f > e._originalImageHeight &&
                (w = ((m = e._originalImageHeight - f) / a) * u),
              c.drawImage(this.elements.preview, h, f, p, m, g, v, y, w),
              s &&
                ((c.fillStyle = "#fff"),
                (c.globalCompositeOperation = "destination-in"),
                c.beginPath(),
                c.arc(
                  l.width / 2,
                  l.height / 2,
                  l.width / 2,
                  0,
                  2 * Math.PI,
                  !0
                ),
                c.closePath(),
                c.fill()),
              l
            );
          }
          function Z(t) {
            var e = t.points,
              n = document.createElement("div"),
              i = document.createElement("img"),
              r = e[2] - e[0],
              o = e[3] - e[1];
            return (
              m(n, "croppie-result"),
              n.appendChild(i),
              p(i, { left: -1 * e[0] + "px", top: -1 * e[1] + "px" }),
              (i.src = t.url),
              p(n, { width: r + "px", height: o + "px" }),
              n
            );
          }
          function U(t) {
            return V.call(this, t).toDataURL(t.format, t.quality);
          }
          function q(t) {
            var e = this;
            return new Promise(function (n) {
              V.call(e, t).toBlob(
                function (t) {
                  n(t);
                },
                t.format,
                t.quality
              );
            });
          }
          function W(t) {
            this.elements.img.parentNode &&
              (Array.prototype.forEach.call(
                this.elements.img.classList,
                function (e) {
                  t.classList.add(e);
                }
              ),
              this.elements.img.parentNode.replaceChild(t, this.elements.img),
              (this.elements.preview = t)),
              (this.elements.img = t);
          }
          function $(t, e) {
            var n,
              i = this,
              r = [],
              o = null,
              a = S.call(i);
            if ("string" == typeof t) (n = t), (t = {});
            else if (Array.isArray(t)) r = t.slice();
            else {
              if (void 0 === t && i.data.url) return F.call(i), I.call(i), null;
              (n = t.url),
                (r = t.points || []),
                (o = void 0 === t.zoom ? null : t.zoom);
            }
            return (
              (i.data.bound = !1),
              (i.data.url = n || i.data.url),
              (i.data.boundZoom = o),
              y(n, a).then(function (n) {
                if ((W.call(i, n), r.length))
                  i.options.relative &&
                    (r = [
                      (r[0] * n.naturalWidth) / 100,
                      (r[1] * n.naturalHeight) / 100,
                      (r[2] * n.naturalWidth) / 100,
                      (r[3] * n.naturalHeight) / 100,
                    ]);
                else {
                  var o,
                    a,
                    s = w(n),
                    l = i.elements.viewport.getBoundingClientRect(),
                    c = l.width / l.height;
                  s.width / s.height > c
                    ? (o = (a = s.height) * c)
                    : ((o = s.width), (a = s.height / c));
                  var d = (s.width - o) / 2,
                    u = (s.height - a) / 2,
                    h = d + o,
                    f = u + a;
                  i.data.points = [d, u, h, f];
                }
                (i.data.orientation = t.orientation || 1),
                  (i.data.points = r.map(function (t) {
                    return parseFloat(t);
                  })),
                  i.options.useCanvas && Y.call(i, i.data.orientation),
                  F.call(i),
                  I.call(i),
                  e && e();
              })
            );
          }
          function K(t, e) {
            return parseFloat(t).toFixed(e || 0);
          }
          function G() {
            var t = this,
              e = t.elements.preview.getBoundingClientRect(),
              n = t.elements.viewport.getBoundingClientRect(),
              i = n.left - e.left,
              r = n.top - e.top,
              o = (n.width - t.elements.viewport.offsetWidth) / 2,
              a = (n.height - t.elements.viewport.offsetHeight) / 2,
              s = i + t.elements.viewport.offsetWidth + o,
              l = r + t.elements.viewport.offsetHeight + a,
              c = t._currentZoom;
            (c === 1 / 0 || isNaN(c)) && (c = 1);
            var d = t.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
            return (
              (i = Math.max(d, i / c)),
              (r = Math.max(d, r / c)),
              (s = Math.max(d, s / c)),
              (l = Math.max(d, l / c)),
              {
                points: [K(i), K(r), K(s), K(l)],
                zoom: c,
                orientation: t.data.orientation,
              }
            );
          }
          var J = { type: "canvas", format: "png", quality: 1 },
            Q = ["jpeg", "webp", "png"];
          function tt(t) {
            var e = this,
              n = G.call(e),
              i = d(u(J), u(t)),
              r = "string" == typeof t ? t : i.type || "base64",
              o = i.size || "viewport",
              a = i.format,
              s = i.quality,
              l = i.backgroundColor,
              c =
                "boolean" == typeof i.circle
                  ? i.circle
                  : "circle" === e.options.viewport.type,
              h = e.elements.viewport.getBoundingClientRect(),
              f = h.width / h.height;
            return (
              "viewport" === o
                ? ((n.outputWidth = h.width), (n.outputHeight = h.height))
                : "object" == typeof o &&
                  (o.width && o.height
                    ? ((n.outputWidth = o.width), (n.outputHeight = o.height))
                    : o.width
                    ? ((n.outputWidth = o.width),
                      (n.outputHeight = o.width / f))
                    : o.height &&
                      ((n.outputWidth = o.height * f),
                      (n.outputHeight = o.height))),
              Q.indexOf(a) > -1 && ((n.format = "image/" + a), (n.quality = s)),
              (n.circle = c),
              (n.url = e.data.url),
              (n.backgroundColor = l),
              new Promise(function (t) {
                switch (r.toLowerCase()) {
                  case "rawcanvas":
                    t(V.call(e, n));
                    break;
                  case "canvas":
                  case "base64":
                    t(U.call(e, n));
                    break;
                  case "blob":
                    q.call(e, n).then(t);
                    break;
                  default:
                    t(Z.call(e, n));
                }
              })
            );
          }
          function et() {
            F.call(this);
          }
          function nt(t) {
            if (!this.options.useCanvas || !this.options.enableOrientation)
              throw "Croppie: Cannot rotate without enableOrientation && EXIF.js included";
            var e = this,
              n = e.elements.canvas;
            if (
              ((e.data.orientation = c(e.data.orientation, t)),
              C(n, e.elements.img, e.data.orientation),
              L.call(e, !0),
              j.call(e),
              (Math.abs(t) / 90) % 2 == 1)
            ) {
              var i = e._originalImageHeight,
                r = e._originalImageWidth;
              (e._originalImageWidth = i), (e._originalImageHeight = r);
            }
          }
          function it() {
            var t = this;
            t.element.removeChild(t.elements.boundary),
              g(t.element, "croppie-container"),
              t.options.enableZoom &&
                t.element.removeChild(t.elements.zoomerWrap),
              delete t.elements;
          }
          if ("undefined" != typeof window && window.jQuery) {
            var rt = window.jQuery;
            rt.fn.croppie = function (t) {
              if ("string" == typeof t) {
                var e = Array.prototype.slice.call(arguments, 1),
                  n = rt(this).data("croppie");
                return "get" === t
                  ? n.get()
                  : "result" === t
                  ? n.result.apply(n, e)
                  : "bind" === t
                  ? n.bind.apply(n, e)
                  : this.each(function () {
                      var n = rt(this).data("croppie");
                      if (n) {
                        var i = n[t];
                        if (!rt.isFunction(i))
                          throw "Croppie " + t + " method not found";
                        i.apply(n, e),
                          "destroy" === t && rt(this).removeData("croppie");
                      }
                    });
              }
              return this.each(function () {
                var e = new ot(this, t);
                (e.$ = rt), rt(this).data("croppie", e);
              });
            };
          }
          function ot(t, e) {
            if (t.className.indexOf("croppie-container") > -1)
              throw new Error(
                "Croppie: Can't initialize croppie more than once"
              );
            if (
              ((this.element = t),
              (this.options = d(u(ot.defaults), e)),
              "img" === this.element.tagName.toLowerCase())
            ) {
              var n = this.element;
              m(n, "cr-original-image"),
                v(n, { "aria-hidden": "true", alt: "" });
              var i = document.createElement("div");
              this.element.parentNode.appendChild(i),
                i.appendChild(n),
                (this.element = i),
                (this.options.url = this.options.url || n.src);
            }
            if ((E.call(this), this.options.url)) {
              var r = { url: this.options.url, points: this.options.points };
              delete this.options.url,
                delete this.options.points,
                $.call(this, r);
            }
          }
          return (
            (ot.defaults = {
              viewport: { width: 100, height: 100, type: "square" },
              boundary: {},
              orientationControls: {
                enabled: !0,
                leftClass: "",
                rightClass: "",
              },
              resizeControls: { width: !0, height: !0 },
              customClass: "",
              showZoomer: !0,
              enableZoom: !0,
              enableResize: !1,
              mouseWheelZoom: !0,
              enableExif: !1,
              enforceBoundary: !0,
              enableOrientation: !1,
              enableKeyMovement: !0,
              update: function () {},
            }),
            (ot.globals = { translate: "translate3d" }),
            d(ot.prototype, {
              bind: function (t, e) {
                return $.call(this, t, e);
              },
              get: function () {
                var t = G.call(this),
                  e = t.points;
                return (
                  this.options.relative &&
                    ((e[0] /= this.elements.img.naturalWidth / 100),
                    (e[1] /= this.elements.img.naturalHeight / 100),
                    (e[2] /= this.elements.img.naturalWidth / 100),
                    (e[3] /= this.elements.img.naturalHeight / 100)),
                  t
                );
              },
              result: function (t) {
                return tt.call(this, t);
              },
              refresh: function () {
                return et.call(this);
              },
              setZoom: function (t) {
                O.call(this, t), f(this.elements.zoomer);
              },
              rotate: function (t) {
                nt.call(this, t);
              },
              destroy: function () {
                return it.call(this);
              },
            }),
            ot
          );
        }),
        void 0 === (r = "function" == typeof i ? i.call(e, n, e, t) : i) ||
          (t.exports = r);
    },
  },
  e = {};
function n(i) {
  var r = e[i];
  if (void 0 !== r) return r.exports;
  var o = (e[i] = { id: i, exports: {} });
  return t[i].call(o.exports, o, o.exports, n), o.exports;
}
(n.n = (t) => {
  var e = t && t.__esModule ? () => t.default : () => t;
  return n.d(e, { a: e }), e;
}),
  (n.d = (t, e) => {
    for (var i in e)
      n.o(e, i) &&
        !n.o(t, i) &&
        Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
  }),
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
  (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
  (n.nc = void 0);
var i = {};
(() => {
  function t(t) {
    const e = getComputedStyle(t);
    return new WebKitCSSMatrix(e.transform).m41;
  }
  n.d(i, { Z: () => Yh });
  const e = (t, e = 2) => {
      let n = 0,
        i = 0;
      return (
        t > 60
          ? ((n = Math.floor(parseFloat(t) / 60)), (i = parseFloat(t) % 60))
          : (i = parseFloat(t)),
        (i = Number(i).toFixed(e)),
        n < 10 && (n = `0${n}`),
        i < 10 && (i = `0${i}`),
        `${n}:${i}`
      );
    },
    r = (t, { properties: e, style: n, attributes: i }) => {
      const r = document.createElement(t);
      return (
        e &&
          Object.keys(e).forEach((t) => {
            r[t] = e[t];
          }),
        n &&
          Object.keys(n).forEach((t) => {
            r.style[t] = n[t];
          }),
        i &&
          Object.keys(i).forEach((t) => {
            r.setAttribute(t, i[t]);
          }),
        r
      );
    },
    o = {
      index: 0,
      title: "Switch between dark mode and light mode",
      label: "Dark",
      toggle: { highlight: !1 },
      fontAwesomeIcon: "fa fa-moon",
    },
    a = {
      index: 1,
      label: "Help",
      title: "Help",
      className: "help-button",
      fontAwesomeIcon: "fa fa-question",
    },
    s = {
      index: 0,
      label: "Mute",
      title: "Mute",
      toggle: { highlight: !1 },
      className: "mute-button",
      fontAwesomeIcon: "fa fa-volume-up",
    },
    l = {
      index: 1,
      label: "Crop",
      title: "Crop",
      toggle: !0,
      className: "crop-button",
      fontAwesomeIcon: "fa fa-crop",
    },
    c = {
      index: 2,
      label: "Save",
      title: "Save",
      className: "save-button",
      fontAwesomeIcon: "fa fa-save",
    };
  var d = n(379),
    u = n.n(d),
    h = n(795),
    f = n.n(h),
    p = n(569),
    m = n.n(p),
    g = n(565),
    v = n.n(g),
    b = n(216),
    y = n.n(b),
    w = n(589),
    x = n.n(w),
    k = n(813),
    _ = {};
  (_.styleTagTransform = x()),
    (_.setAttributes = v()),
    (_.insert = m().bind(null, "head")),
    (_.domAPI = f()),
    (_.insertStyleElement = y());
  u()(k.Z, _);
  k.Z && k.Z.locals && k.Z.locals;
  const T = class {
    constructor({
      customButtons: t,
      onToggleDarkMode: e,
      onClickHelpButton: n,
      onClickSaveButton: i,
      onToggleCrop: r,
      onToggleMute: d,
      library: u,
    }) {
      (this.inlineStartButtons = {
        ...t?.inlineStartButtons,
        darkmode: { ...o, onClick: e },
        help: { ...a, onClick: n },
      }),
        (this.inlineEndButtons = {
          ...t?.inlineEndButtons,
          mute: { ...s, onClick: d },
          crop: { ...l, onClick: r },
          save: { ...c, onClick: i },
        });
      const { disable: h } = t;
      Array.isArray(h) &&
        h.forEach((t) => {
          this.inlineStartButtons[t] && delete this.inlineStartButtons[t],
            this.inlineEndButtons[t] && delete this.inlineEndButtons[t];
        }),
        (this.createMenuBar = this.createMenuBar.bind(this)),
        (this.createButtons = this.createButtons.bind(this)),
        (this.sortByIndex = this.sortByIndex.bind(this)),
        (this.handleClick = this.handleClick.bind(this)),
        (this.handleToggle = this.handleToggle.bind(this)),
        (this.render = this.render.bind(this)),
        this.importFontAwesomeIcons(u);
    }
    async importFontAwesomeIcons(t) {}
    sortByIndex(t, e) {
      return t?.index > e?.index ? 1 : -1;
    }
    createMenuBar() {
      const t = r("div", { properties: { className: "menu-bar-container" } }),
        e = r("div", { properties: { className: "inline-start-buttons" } });
      e.append(
        ...this.createButtons(
          Object.values(this.inlineStartButtons).sort(this.sortByIndex)
        )
      );
      const n = r("div", { properties: { className: "inline-end-buttons" } });
      return (
        n.append(
          ...this.createButtons(
            Object.values(this.inlineEndButtons).sort(this.sortByIndex)
          )
        ),
        t.append(e, n),
        t
      );
    }
    createButtons(t) {
      const e = t.map((t) => {
        const {
            label: e,
            title: n,
            className: i,
            onClick: o,
            fontAwesomeIcon: a,
            toggle: s,
          } = t,
          l = r("div", {
            properties: { className: "menu-bar-button-container" },
          }),
          c = document.createElement("button"),
          d = document.createElement("span");
        if (
          ((d.textContent = e),
          (c.onclick = (t) => {
            t.preventDefault(),
              s ? this.handleToggle(t, o) : this.handleClick(t, o);
          }),
          n && (c.title = n),
          (c.className = `menu-bar-button ${i ?? ""}`),
          !1 === s?.highlight && c.classList.add("no-toggle-highlight"),
          a)
        ) {
          const t = r("i", { properties: { className: a } });
          c.append(t);
        }
        return l.append(c, d), l;
      });
      return e;
    }
    handleToggle(t, e) {
      const { currentTarget: n } = t,
        i = n.classList.contains("toggled");
      i ? n.classList.remove("toggled") : n.classList.add("toggled"),
        e instanceof Function && e(t, !i);
    }
    handleClick(t, e) {
      e instanceof Function && e(t);
    }
    render(t) {
      t.append(this.createMenuBar());
    }
  };
  function C(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  const { toString: E } = Object.prototype,
    { getPrototypeOf: S } = Object,
    M =
      ((O = Object.create(null)),
      (t) => {
        const e = E.call(t);
        return O[e] || (O[e] = e.slice(8, -1).toLowerCase());
      });
  var O;
  const P = (t) => ((t = t.toLowerCase()), (e) => M(e) === t),
    A = (t) => (e) => typeof e === t,
    { isArray: R } = Array,
    L = A("undefined");
  const D = P("ArrayBuffer");
  const N = A("string"),
    z = A("function"),
    I = A("number"),
    B = (t) => null !== t && "object" == typeof t,
    F = (t) => {
      if ("object" !== M(t)) return !1;
      const e = S(t);
      return !(
        (null !== e &&
          e !== Object.prototype &&
          null !== Object.getPrototypeOf(e)) ||
        Symbol.toStringTag in t ||
        Symbol.iterator in t
      );
    },
    j = P("Date"),
    X = P("File"),
    H = P("Blob"),
    Y = P("FileList"),
    V = P("URLSearchParams");
  function Z(t, e, { allOwnKeys: n = !1 } = {}) {
    if (null == t) return;
    let i, r;
    if (("object" != typeof t && (t = [t]), R(t)))
      for (i = 0, r = t.length; i < r; i++) e.call(null, t[i], i, t);
    else {
      const r = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
        o = r.length;
      let a;
      for (i = 0; i < o; i++) (a = r[i]), e.call(null, t[a], a, t);
    }
  }
  function U(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let i,
      r = n.length;
    for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
    return null;
  }
  const q =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : n.g,
    W = (t) => !L(t) && t !== q;
  const $ =
    ((K = "undefined" != typeof Uint8Array && S(Uint8Array)),
    (t) => K && t instanceof K);
  var K;
  const G = P("HTMLFormElement"),
    J = (
      ({ hasOwnProperty: t }) =>
      (e, n) =>
        t.call(e, n)
    )(Object.prototype),
    Q = P("RegExp"),
    tt = (t, e) => {
      const n = Object.getOwnPropertyDescriptors(t),
        i = {};
      Z(n, (n, r) => {
        !1 !== e(n, r, t) && (i[r] = n);
      }),
        Object.defineProperties(t, i);
    },
    et = "abcdefghijklmnopqrstuvwxyz",
    nt = "0123456789",
    it = { DIGIT: nt, ALPHA: et, ALPHA_DIGIT: et + et.toUpperCase() + nt };
  const rt = {
    isArray: R,
    isArrayBuffer: D,
    isBuffer: function (t) {
      return (
        null !== t &&
        !L(t) &&
        null !== t.constructor &&
        !L(t.constructor) &&
        z(t.constructor.isBuffer) &&
        t.constructor.isBuffer(t)
      );
    },
    isFormData: (t) => {
      const e = "[object FormData]";
      return (
        t &&
        (("function" == typeof FormData && t instanceof FormData) ||
          E.call(t) === e ||
          (z(t.toString) && t.toString() === e))
      );
    },
    isArrayBufferView: function (t) {
      let e;
      return (
        (e =
          "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && D(t.buffer)),
        e
      );
    },
    isString: N,
    isNumber: I,
    isBoolean: (t) => !0 === t || !1 === t,
    isObject: B,
    isPlainObject: F,
    isUndefined: L,
    isDate: j,
    isFile: X,
    isBlob: H,
    isRegExp: Q,
    isFunction: z,
    isStream: (t) => B(t) && z(t.pipe),
    isURLSearchParams: V,
    isTypedArray: $,
    isFileList: Y,
    forEach: Z,
    merge: function t() {
      const { caseless: e } = (W(this) && this) || {},
        n = {},
        i = (i, r) => {
          const o = (e && U(n, r)) || r;
          F(n[o]) && F(i)
            ? (n[o] = t(n[o], i))
            : F(i)
            ? (n[o] = t({}, i))
            : R(i)
            ? (n[o] = i.slice())
            : (n[o] = i);
        };
      for (let t = 0, e = arguments.length; t < e; t++)
        arguments[t] && Z(arguments[t], i);
      return n;
    },
    extend: (t, e, n, { allOwnKeys: i } = {}) => (
      Z(
        e,
        (e, i) => {
          n && z(e) ? (t[i] = C(e, n)) : (t[i] = e);
        },
        { allOwnKeys: i }
      ),
      t
    ),
    trim: (t) =>
      t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
    inherits: (t, e, n, i) => {
      (t.prototype = Object.create(e.prototype, i)),
        (t.prototype.constructor = t),
        Object.defineProperty(t, "super", { value: e.prototype }),
        n && Object.assign(t.prototype, n);
    },
    toFlatObject: (t, e, n, i) => {
      let r, o, a;
      const s = {};
      if (((e = e || {}), null == t)) return e;
      do {
        for (r = Object.getOwnPropertyNames(t), o = r.length; o-- > 0; )
          (a = r[o]),
            (i && !i(a, t, e)) || s[a] || ((e[a] = t[a]), (s[a] = !0));
        t = !1 !== n && S(t);
      } while (t && (!n || n(t, e)) && t !== Object.prototype);
      return e;
    },
    kindOf: M,
    kindOfTest: P,
    endsWith: (t, e, n) => {
      (t = String(t)),
        (void 0 === n || n > t.length) && (n = t.length),
        (n -= e.length);
      const i = t.indexOf(e, n);
      return -1 !== i && i === n;
    },
    toArray: (t) => {
      if (!t) return null;
      if (R(t)) return t;
      let e = t.length;
      if (!I(e)) return null;
      const n = new Array(e);
      for (; e-- > 0; ) n[e] = t[e];
      return n;
    },
    forEachEntry: (t, e) => {
      const n = (t && t[Symbol.iterator]).call(t);
      let i;
      for (; (i = n.next()) && !i.done; ) {
        const n = i.value;
        e.call(t, n[0], n[1]);
      }
    },
    matchAll: (t, e) => {
      let n;
      const i = [];
      for (; null !== (n = t.exec(e)); ) i.push(n);
      return i;
    },
    isHTMLForm: G,
    hasOwnProperty: J,
    hasOwnProp: J,
    reduceDescriptors: tt,
    freezeMethods: (t) => {
      tt(t, (e, n) => {
        if (z(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
          return !1;
        const i = t[n];
        z(i) &&
          ((e.enumerable = !1),
          "writable" in e
            ? (e.writable = !1)
            : e.set ||
              (e.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'");
              }));
      });
    },
    toObjectSet: (t, e) => {
      const n = {},
        i = (t) => {
          t.forEach((t) => {
            n[t] = !0;
          });
        };
      return R(t) ? i(t) : i(String(t).split(e)), n;
    },
    toCamelCase: (t) =>
      t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
        return e.toUpperCase() + n;
      }),
    noop: () => {},
    toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
    findKey: U,
    global: q,
    isContextDefined: W,
    ALPHABET: it,
    generateString: (t = 16, e = it.ALPHA_DIGIT) => {
      let n = "";
      const { length: i } = e;
      for (; t--; ) n += e[(Math.random() * i) | 0];
      return n;
    },
    isSpecCompliantForm: function (t) {
      return !!(
        t &&
        z(t.append) &&
        "FormData" === t[Symbol.toStringTag] &&
        t[Symbol.iterator]
      );
    },
    toJSONObject: (t) => {
      const e = new Array(10),
        n = (t, i) => {
          if (B(t)) {
            if (e.indexOf(t) >= 0) return;
            if (!("toJSON" in t)) {
              e[i] = t;
              const r = R(t) ? [] : {};
              return (
                Z(t, (t, e) => {
                  const o = n(t, i + 1);
                  !L(o) && (r[e] = o);
                }),
                (e[i] = void 0),
                r
              );
            }
          }
          return t;
        };
      return n(t, 0);
    },
  };
  function ot(t, e, n, i, r) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = t),
      (this.name = "AxiosError"),
      e && (this.code = e),
      n && (this.config = n),
      i && (this.request = i),
      r && (this.response = r);
  }
  rt.inherits(ot, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: rt.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const at = ot.prototype,
    st = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((t) => {
    st[t] = { value: t };
  }),
    Object.defineProperties(ot, st),
    Object.defineProperty(at, "isAxiosError", { value: !0 }),
    (ot.from = (t, e, n, i, r, o) => {
      const a = Object.create(at);
      return (
        rt.toFlatObject(
          t,
          a,
          function (t) {
            return t !== Error.prototype;
          },
          (t) => "isAxiosError" !== t
        ),
        ot.call(a, t.message, e, n, i, r),
        (a.cause = t),
        (a.name = t.name),
        o && Object.assign(a, o),
        a
      );
    });
  const lt = ot,
    ct = null;
  function dt(t) {
    return rt.isPlainObject(t) || rt.isArray(t);
  }
  function ut(t) {
    return rt.endsWith(t, "[]") ? t.slice(0, -2) : t;
  }
  function ht(t, e, n) {
    return t
      ? t
          .concat(e)
          .map(function (t, e) {
            return (t = ut(t)), !n && e ? "[" + t + "]" : t;
          })
          .join(n ? "." : "")
      : e;
  }
  const ft = rt.toFlatObject(rt, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  const pt = function (t, e, n) {
    if (!rt.isObject(t)) throw new TypeError("target must be an object");
    e = e || new (ct || FormData)();
    const i = (n = rt.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (t, e) {
          return !rt.isUndefined(e[t]);
        }
      )).metaTokens,
      r = n.visitor || c,
      o = n.dots,
      a = n.indexes,
      s =
        (n.Blob || ("undefined" != typeof Blob && Blob)) &&
        rt.isSpecCompliantForm(e);
    if (!rt.isFunction(r)) throw new TypeError("visitor must be a function");
    function l(t) {
      if (null === t) return "";
      if (rt.isDate(t)) return t.toISOString();
      if (!s && rt.isBlob(t))
        throw new lt("Blob is not supported. Use a Buffer instead.");
      return rt.isArrayBuffer(t) || rt.isTypedArray(t)
        ? s && "function" == typeof Blob
          ? new Blob([t])
          : Buffer.from(t)
        : t;
    }
    function c(t, n, r) {
      let s = t;
      if (t && !r && "object" == typeof t)
        if (rt.endsWith(n, "{}"))
          (n = i ? n : n.slice(0, -2)), (t = JSON.stringify(t));
        else if (
          (rt.isArray(t) &&
            (function (t) {
              return rt.isArray(t) && !t.some(dt);
            })(t)) ||
          ((rt.isFileList(t) || rt.endsWith(n, "[]")) && (s = rt.toArray(t)))
        )
          return (
            (n = ut(n)),
            s.forEach(function (t, i) {
              !rt.isUndefined(t) &&
                null !== t &&
                e.append(
                  !0 === a ? ht([n], i, o) : null === a ? n : n + "[]",
                  l(t)
                );
            }),
            !1
          );
      return !!dt(t) || (e.append(ht(r, n, o), l(t)), !1);
    }
    const d = [],
      u = Object.assign(ft, {
        defaultVisitor: c,
        convertValue: l,
        isVisitable: dt,
      });
    if (!rt.isObject(t)) throw new TypeError("data must be an object");
    return (
      (function t(n, i) {
        if (!rt.isUndefined(n)) {
          if (-1 !== d.indexOf(n))
            throw Error("Circular reference detected in " + i.join("."));
          d.push(n),
            rt.forEach(n, function (n, o) {
              !0 ===
                (!(rt.isUndefined(n) || null === n) &&
                  r.call(e, n, rt.isString(o) ? o.trim() : o, i, u)) &&
                t(n, i ? i.concat(o) : [o]);
            }),
            d.pop();
        }
      })(t),
      e
    );
  };
  function mt(t) {
    const e = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
      return e[t];
    });
  }
  function gt(t, e) {
    (this._pairs = []), t && pt(t, this, e);
  }
  const vt = gt.prototype;
  (vt.append = function (t, e) {
    this._pairs.push([t, e]);
  }),
    (vt.toString = function (t) {
      const e = t
        ? function (e) {
            return t.call(this, e, mt);
          }
        : mt;
      return this._pairs
        .map(function (t) {
          return e(t[0]) + "=" + e(t[1]);
        }, "")
        .join("&");
    });
  const bt = gt;
  function yt(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function wt(t, e, n) {
    if (!e) return t;
    const i = (n && n.encode) || yt,
      r = n && n.serialize;
    let o;
    if (
      ((o = r
        ? r(e, n)
        : rt.isURLSearchParams(e)
        ? e.toString()
        : new bt(e, n).toString(i)),
      o)
    ) {
      const e = t.indexOf("#");
      -1 !== e && (t = t.slice(0, e)),
        (t += (-1 === t.indexOf("?") ? "?" : "&") + o);
    }
    return t;
  }
  const xt = class {
      constructor() {
        this.handlers = [];
      }
      use(t, e, n) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: e,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(t) {
        rt.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }
    },
    kt = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    _t = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : bt,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      isStandardBrowserEnv: (() => {
        let t;
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== (t = navigator.product) &&
              "NativeScript" !== t &&
              "NS" !== t)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      })(),
      isStandardBrowserWebWorkerEnv:
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  const Tt = function (t) {
      function e(t, n, i, r) {
        let o = t[r++];
        const a = Number.isFinite(+o),
          s = r >= t.length;
        if (((o = !o && rt.isArray(i) ? i.length : o), s))
          return rt.hasOwnProp(i, o) ? (i[o] = [i[o], n]) : (i[o] = n), !a;
        (i[o] && rt.isObject(i[o])) || (i[o] = []);
        return (
          e(t, n, i[o], r) &&
            rt.isArray(i[o]) &&
            (i[o] = (function (t) {
              const e = {},
                n = Object.keys(t);
              let i;
              const r = n.length;
              let o;
              for (i = 0; i < r; i++) (o = n[i]), (e[o] = t[o]);
              return e;
            })(i[o])),
          !a
        );
      }
      if (rt.isFormData(t) && rt.isFunction(t.entries)) {
        const n = {};
        return (
          rt.forEachEntry(t, (t, i) => {
            e(
              (function (t) {
                return rt
                  .matchAll(/\w+|\[(\w*)]/g, t)
                  .map((t) => ("[]" === t[0] ? "" : t[1] || t[0]));
              })(t),
              i,
              n,
              0
            );
          }),
          n
        );
      }
      return null;
    },
    Ct = { "Content-Type": void 0 };
  const Et = {
    transitional: kt,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, e) {
        const n = e.getContentType() || "",
          i = n.indexOf("application/json") > -1,
          r = rt.isObject(t);
        r && rt.isHTMLForm(t) && (t = new FormData(t));
        if (rt.isFormData(t)) return i && i ? JSON.stringify(Tt(t)) : t;
        if (
          rt.isArrayBuffer(t) ||
          rt.isBuffer(t) ||
          rt.isStream(t) ||
          rt.isFile(t) ||
          rt.isBlob(t)
        )
          return t;
        if (rt.isArrayBufferView(t)) return t.buffer;
        if (rt.isURLSearchParams(t))
          return (
            e.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        let o;
        if (r) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (t, e) {
              return pt(
                t,
                new _t.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (t, e, n, i) {
                      return _t.isNode && rt.isBuffer(t)
                        ? (this.append(e, t.toString("base64")), !1)
                        : i.defaultVisitor.apply(this, arguments);
                    },
                  },
                  e
                )
              );
            })(t, this.formSerializer).toString();
          if ((o = rt.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
            const e = this.env && this.env.FormData;
            return pt(
              o ? { "files[]": t } : t,
              e && new e(),
              this.formSerializer
            );
          }
        }
        return r || i
          ? (e.setContentType("application/json", !1),
            (function (t, e, n) {
              if (rt.isString(t))
                try {
                  return (e || JSON.parse)(t), rt.trim(t);
                } catch (t) {
                  if ("SyntaxError" !== t.name) throw t;
                }
              return (n || JSON.stringify)(t);
            })(t))
          : t;
      },
    ],
    transformResponse: [
      function (t) {
        const e = this.transitional || Et.transitional,
          n = e && e.forcedJSONParsing,
          i = "json" === this.responseType;
        if (t && rt.isString(t) && ((n && !this.responseType) || i)) {
          const n = !(e && e.silentJSONParsing) && i;
          try {
            return JSON.parse(t);
          } catch (t) {
            if (n) {
              if ("SyntaxError" === t.name)
                throw lt.from(
                  t,
                  lt.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw t;
            }
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: _t.classes.FormData, Blob: _t.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  rt.forEach(["delete", "get", "head"], function (t) {
    Et.headers[t] = {};
  }),
    rt.forEach(["post", "put", "patch"], function (t) {
      Et.headers[t] = rt.merge(Ct);
    });
  const St = Et,
    Mt = rt.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    Ot = Symbol("internals");
  function Pt(t) {
    return t && String(t).trim().toLowerCase();
  }
  function At(t) {
    return !1 === t || null == t ? t : rt.isArray(t) ? t.map(At) : String(t);
  }
  function Rt(t, e, n, i, r) {
    return rt.isFunction(i)
      ? i.call(this, e, n)
      : (r && (e = n),
        rt.isString(e)
          ? rt.isString(i)
            ? -1 !== e.indexOf(i)
            : rt.isRegExp(i)
            ? i.test(e)
            : void 0
          : void 0);
  }
  class Lt {
    constructor(t) {
      t && this.set(t);
    }
    set(t, e, n) {
      const i = this;
      function r(t, e, n) {
        const r = Pt(e);
        if (!r) throw new Error("header name must be a non-empty string");
        const o = rt.findKey(i, r);
        (!o || void 0 === i[o] || !0 === n || (void 0 === n && !1 !== i[o])) &&
          (i[o || e] = At(t));
      }
      const o = (t, e) => rt.forEach(t, (t, n) => r(t, n, e));
      return (
        rt.isPlainObject(t) || t instanceof this.constructor
          ? o(t, e)
          : rt.isString(t) &&
            (t = t.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
          ? o(
              ((t) => {
                const e = {};
                let n, i, r;
                return (
                  t &&
                    t.split("\n").forEach(function (t) {
                      (r = t.indexOf(":")),
                        (n = t.substring(0, r).trim().toLowerCase()),
                        (i = t.substring(r + 1).trim()),
                        !n ||
                          (e[n] && Mt[n]) ||
                          ("set-cookie" === n
                            ? e[n]
                              ? e[n].push(i)
                              : (e[n] = [i])
                            : (e[n] = e[n] ? e[n] + ", " + i : i));
                    }),
                  e
                );
              })(t),
              e
            )
          : null != t && r(e, t, n),
        this
      );
    }
    get(t, e) {
      if ((t = Pt(t))) {
        const n = rt.findKey(this, t);
        if (n) {
          const t = this[n];
          if (!e) return t;
          if (!0 === e)
            return (function (t) {
              const e = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let i;
              for (; (i = n.exec(t)); ) e[i[1]] = i[2];
              return e;
            })(t);
          if (rt.isFunction(e)) return e.call(this, t, n);
          if (rt.isRegExp(e)) return e.exec(t);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, e) {
      if ((t = Pt(t))) {
        const n = rt.findKey(this, t);
        return !(!n || void 0 === this[n] || (e && !Rt(0, this[n], n, e)));
      }
      return !1;
    }
    delete(t, e) {
      const n = this;
      let i = !1;
      function r(t) {
        if ((t = Pt(t))) {
          const r = rt.findKey(n, t);
          !r || (e && !Rt(0, n[r], r, e)) || (delete n[r], (i = !0));
        }
      }
      return rt.isArray(t) ? t.forEach(r) : r(t), i;
    }
    clear(t) {
      const e = Object.keys(this);
      let n = e.length,
        i = !1;
      for (; n--; ) {
        const r = e[n];
        (t && !Rt(0, this[r], r, t, !0)) || (delete this[r], (i = !0));
      }
      return i;
    }
    normalize(t) {
      const e = this,
        n = {};
      return (
        rt.forEach(this, (i, r) => {
          const o = rt.findKey(n, r);
          if (o) return (e[o] = At(i)), void delete e[r];
          const a = t
            ? (function (t) {
                return t
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (t, e, n) => e.toUpperCase() + n);
              })(r)
            : String(r).trim();
          a !== r && delete e[r], (e[a] = At(i)), (n[a] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const e = Object.create(null);
      return (
        rt.forEach(this, (n, i) => {
          null != n &&
            !1 !== n &&
            (e[i] = t && rt.isArray(n) ? n.join(", ") : n);
        }),
        e
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([t, e]) => t + ": " + e)
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...e) {
      const n = new this(t);
      return e.forEach((t) => n.set(t)), n;
    }
    static accessor(t) {
      const e = (this[Ot] = this[Ot] = { accessors: {} }).accessors,
        n = this.prototype;
      function i(t) {
        const i = Pt(t);
        e[i] ||
          (!(function (t, e) {
            const n = rt.toCamelCase(" " + e);
            ["get", "set", "has"].forEach((i) => {
              Object.defineProperty(t, i + n, {
                value: function (t, n, r) {
                  return this[i].call(this, e, t, n, r);
                },
                configurable: !0,
              });
            });
          })(n, t),
          (e[i] = !0));
      }
      return rt.isArray(t) ? t.forEach(i) : i(t), this;
    }
  }
  Lt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    rt.freezeMethods(Lt.prototype),
    rt.freezeMethods(Lt);
  const Dt = Lt;
  function Nt(t, e) {
    const n = this || St,
      i = e || n,
      r = Dt.from(i.headers);
    let o = i.data;
    return (
      rt.forEach(t, function (t) {
        o = t.call(n, o, r.normalize(), e ? e.status : void 0);
      }),
      r.normalize(),
      o
    );
  }
  function zt(t) {
    return !(!t || !t.__CANCEL__);
  }
  function It(t, e, n) {
    lt.call(this, null == t ? "canceled" : t, lt.ERR_CANCELED, e, n),
      (this.name = "CanceledError");
  }
  rt.inherits(It, lt, { __CANCEL__: !0 });
  const Bt = It;
  const Ft = _t.isStandardBrowserEnv
    ? {
        write: function (t, e, n, i, r, o) {
          const a = [];
          a.push(t + "=" + encodeURIComponent(e)),
            rt.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            rt.isString(i) && a.push("path=" + i),
            rt.isString(r) && a.push("domain=" + r),
            !0 === o && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (t) {
          const e = document.cookie.match(
            new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
          );
          return e ? decodeURIComponent(e[3]) : null;
        },
        remove: function (t) {
          this.write(t, "", Date.now() - 864e5);
        },
      }
    : {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
  function jt(t, e) {
    return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
      ? (function (t, e) {
          return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
        })(t, e)
      : e;
  }
  const Xt = _t.isStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          e = document.createElement("a");
        let n;
        function i(n) {
          let i = n;
          return (
            t && (e.setAttribute("href", i), (i = e.href)),
            e.setAttribute("href", i),
            {
              href: e.href,
              protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
              host: e.host,
              search: e.search ? e.search.replace(/^\?/, "") : "",
              hash: e.hash ? e.hash.replace(/^#/, "") : "",
              hostname: e.hostname,
              port: e.port,
              pathname:
                "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
            }
          );
        }
        return (
          (n = i(window.location.href)),
          function (t) {
            const e = rt.isString(t) ? i(t) : t;
            return e.protocol === n.protocol && e.host === n.host;
          }
        );
      })()
    : function () {
        return !0;
      };
  const Ht = function (t, e) {
    t = t || 10;
    const n = new Array(t),
      i = new Array(t);
    let r,
      o = 0,
      a = 0;
    return (
      (e = void 0 !== e ? e : 1e3),
      function (s) {
        const l = Date.now(),
          c = i[a];
        r || (r = l), (n[o] = s), (i[o] = l);
        let d = a,
          u = 0;
        for (; d !== o; ) (u += n[d++]), (d %= t);
        if (((o = (o + 1) % t), o === a && (a = (a + 1) % t), l - r < e))
          return;
        const h = c && l - c;
        return h ? Math.round((1e3 * u) / h) : void 0;
      }
    );
  };
  function Yt(t, e) {
    let n = 0;
    const i = Ht(50, 250);
    return (r) => {
      const o = r.loaded,
        a = r.lengthComputable ? r.total : void 0,
        s = o - n,
        l = i(s);
      n = o;
      const c = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: s,
        rate: l || void 0,
        estimated: l && a && o <= a ? (a - o) / l : void 0,
        event: r,
      };
      (c[e ? "download" : "upload"] = !0), t(c);
    };
  }
  const Vt =
      "undefined" != typeof XMLHttpRequest &&
      function (t) {
        return new Promise(function (e, n) {
          let i = t.data;
          const r = Dt.from(t.headers).normalize(),
            o = t.responseType;
          let a;
          function s() {
            t.cancelToken && t.cancelToken.unsubscribe(a),
              t.signal && t.signal.removeEventListener("abort", a);
          }
          rt.isFormData(i) &&
            (_t.isStandardBrowserEnv || _t.isStandardBrowserWebWorkerEnv) &&
            r.setContentType(!1);
          let l = new XMLHttpRequest();
          if (t.auth) {
            const e = t.auth.username || "",
              n = t.auth.password
                ? unescape(encodeURIComponent(t.auth.password))
                : "";
            r.set("Authorization", "Basic " + btoa(e + ":" + n));
          }
          const c = jt(t.baseURL, t.url);
          function d() {
            if (!l) return;
            const i = Dt.from(
              "getAllResponseHeaders" in l && l.getAllResponseHeaders()
            );
            !(function (t, e, n) {
              const i = n.config.validateStatus;
              n.status && i && !i(n.status)
                ? e(
                    new lt(
                      "Request failed with status code " + n.status,
                      [lt.ERR_BAD_REQUEST, lt.ERR_BAD_RESPONSE][
                        Math.floor(n.status / 100) - 4
                      ],
                      n.config,
                      n.request,
                      n
                    )
                  )
                : t(n);
            })(
              function (t) {
                e(t), s();
              },
              function (t) {
                n(t), s();
              },
              {
                data:
                  o && "text" !== o && "json" !== o
                    ? l.response
                    : l.responseText,
                status: l.status,
                statusText: l.statusText,
                headers: i,
                config: t,
                request: l,
              }
            ),
              (l = null);
          }
          if (
            (l.open(
              t.method.toUpperCase(),
              wt(c, t.params, t.paramsSerializer),
              !0
            ),
            (l.timeout = t.timeout),
            "onloadend" in l
              ? (l.onloadend = d)
              : (l.onreadystatechange = function () {
                  l &&
                    4 === l.readyState &&
                    (0 !== l.status ||
                      (l.responseURL &&
                        0 === l.responseURL.indexOf("file:"))) &&
                    setTimeout(d);
                }),
            (l.onabort = function () {
              l &&
                (n(new lt("Request aborted", lt.ECONNABORTED, t, l)),
                (l = null));
            }),
            (l.onerror = function () {
              n(new lt("Network Error", lt.ERR_NETWORK, t, l)), (l = null);
            }),
            (l.ontimeout = function () {
              let e = t.timeout
                ? "timeout of " + t.timeout + "ms exceeded"
                : "timeout exceeded";
              const i = t.transitional || kt;
              t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                n(
                  new lt(
                    e,
                    i.clarifyTimeoutError ? lt.ETIMEDOUT : lt.ECONNABORTED,
                    t,
                    l
                  )
                ),
                (l = null);
            }),
            _t.isStandardBrowserEnv)
          ) {
            const e =
              (t.withCredentials || Xt(c)) &&
              t.xsrfCookieName &&
              Ft.read(t.xsrfCookieName);
            e && r.set(t.xsrfHeaderName, e);
          }
          void 0 === i && r.setContentType(null),
            "setRequestHeader" in l &&
              rt.forEach(r.toJSON(), function (t, e) {
                l.setRequestHeader(e, t);
              }),
            rt.isUndefined(t.withCredentials) ||
              (l.withCredentials = !!t.withCredentials),
            o && "json" !== o && (l.responseType = t.responseType),
            "function" == typeof t.onDownloadProgress &&
              l.addEventListener("progress", Yt(t.onDownloadProgress, !0)),
            "function" == typeof t.onUploadProgress &&
              l.upload &&
              l.upload.addEventListener("progress", Yt(t.onUploadProgress)),
            (t.cancelToken || t.signal) &&
              ((a = (e) => {
                l &&
                  (n(!e || e.type ? new Bt(null, t, l) : e),
                  l.abort(),
                  (l = null));
              }),
              t.cancelToken && t.cancelToken.subscribe(a),
              t.signal &&
                (t.signal.aborted
                  ? a()
                  : t.signal.addEventListener("abort", a)));
          const u = (function (t) {
            const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
            return (e && e[1]) || "";
          })(c);
          u && -1 === _t.protocols.indexOf(u)
            ? n(
                new lt("Unsupported protocol " + u + ":", lt.ERR_BAD_REQUEST, t)
              )
            : l.send(i || null);
        });
      },
    Zt = { http: ct, xhr: Vt };
  rt.forEach(Zt, (t, e) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", { value: e });
      } catch (t) {}
      Object.defineProperty(t, "adapterName", { value: e });
    }
  });
  const Ut = {
    getAdapter: (t) => {
      t = rt.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, i;
      for (
        let r = 0;
        r < e && ((n = t[r]), !(i = rt.isString(n) ? Zt[n.toLowerCase()] : n));
        r++
      );
      if (!i) {
        if (!1 === i)
          throw new lt(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        throw new Error(
          rt.hasOwnProp(Zt, n)
            ? `Adapter '${n}' is not available in the build`
            : `Unknown adapter '${n}'`
        );
      }
      if (!rt.isFunction(i)) throw new TypeError("adapter is not a function");
      return i;
    },
    adapters: Zt,
  };
  function qt(t) {
    if (
      (t.cancelToken && t.cancelToken.throwIfRequested(),
      t.signal && t.signal.aborted)
    )
      throw new Bt(null, t);
  }
  function Wt(t) {
    qt(t),
      (t.headers = Dt.from(t.headers)),
      (t.data = Nt.call(t, t.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(t.method) &&
        t.headers.setContentType("application/x-www-form-urlencoded", !1);
    return Ut.getAdapter(t.adapter || St.adapter)(t).then(
      function (e) {
        return (
          qt(t),
          (e.data = Nt.call(t, t.transformResponse, e)),
          (e.headers = Dt.from(e.headers)),
          e
        );
      },
      function (e) {
        return (
          zt(e) ||
            (qt(t),
            e &&
              e.response &&
              ((e.response.data = Nt.call(t, t.transformResponse, e.response)),
              (e.response.headers = Dt.from(e.response.headers)))),
          Promise.reject(e)
        );
      }
    );
  }
  const $t = (t) => (t instanceof Dt ? t.toJSON() : t);
  function Kt(t, e) {
    e = e || {};
    const n = {};
    function i(t, e, n) {
      return rt.isPlainObject(t) && rt.isPlainObject(e)
        ? rt.merge.call({ caseless: n }, t, e)
        : rt.isPlainObject(e)
        ? rt.merge({}, e)
        : rt.isArray(e)
        ? e.slice()
        : e;
    }
    function r(t, e, n) {
      return rt.isUndefined(e)
        ? rt.isUndefined(t)
          ? void 0
          : i(void 0, t, n)
        : i(t, e, n);
    }
    function o(t, e) {
      if (!rt.isUndefined(e)) return i(void 0, e);
    }
    function a(t, e) {
      return rt.isUndefined(e)
        ? rt.isUndefined(t)
          ? void 0
          : i(void 0, t)
        : i(void 0, e);
    }
    function s(n, r, o) {
      return o in e ? i(n, r) : o in t ? i(void 0, n) : void 0;
    }
    const l = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: (t, e) => r($t(t), $t(e), !0),
    };
    return (
      rt.forEach(Object.keys(t).concat(Object.keys(e)), function (i) {
        const o = l[i] || r,
          a = o(t[i], e[i], i);
        (rt.isUndefined(a) && o !== s) || (n[i] = a);
      }),
      n
    );
  }
  const Gt = "1.3.5",
    Jt = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (t, e) => {
      Jt[t] = function (n) {
        return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
      };
    }
  );
  const Qt = {};
  Jt.transitional = function (t, e, n) {
    function i(t, e) {
      return (
        "[Axios v" +
        Gt +
        "] Transitional option '" +
        t +
        "'" +
        e +
        (n ? ". " + n : "")
      );
    }
    return (n, r, o) => {
      if (!1 === t)
        throw new lt(
          i(r, " has been removed" + (e ? " in " + e : "")),
          lt.ERR_DEPRECATED
        );
      return (
        e &&
          !Qt[r] &&
          ((Qt[r] = !0),
          console.warn(
            i(
              r,
              " has been deprecated since v" +
                e +
                " and will be removed in the near future"
            )
          )),
        !t || t(n, r, o)
      );
    };
  };
  const te = {
      assertOptions: function (t, e, n) {
        if ("object" != typeof t)
          throw new lt("options must be an object", lt.ERR_BAD_OPTION_VALUE);
        const i = Object.keys(t);
        let r = i.length;
        for (; r-- > 0; ) {
          const o = i[r],
            a = e[o];
          if (a) {
            const e = t[o],
              n = void 0 === e || a(e, o, t);
            if (!0 !== n)
              throw new lt(
                "option " + o + " must be " + n,
                lt.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new lt("Unknown option " + o, lt.ERR_BAD_OPTION);
        }
      },
      validators: Jt,
    },
    ee = te.validators;
  class ne {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new xt(), response: new xt() });
    }
    request(t, e) {
      "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
        (e = Kt(this.defaults, e));
      const { transitional: n, paramsSerializer: i, headers: r } = e;
      let o;
      void 0 !== n &&
        te.assertOptions(
          n,
          {
            silentJSONParsing: ee.transitional(ee.boolean),
            forcedJSONParsing: ee.transitional(ee.boolean),
            clarifyTimeoutError: ee.transitional(ee.boolean),
          },
          !1
        ),
        null != i &&
          (rt.isFunction(i)
            ? (e.paramsSerializer = { serialize: i })
            : te.assertOptions(
                i,
                { encode: ee.function, serialize: ee.function },
                !0
              )),
        (e.method = (e.method || this.defaults.method || "get").toLowerCase()),
        (o = r && rt.merge(r.common, r[e.method])),
        o &&
          rt.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (t) => {
              delete r[t];
            }
          ),
        (e.headers = Dt.concat(o, r));
      const a = [];
      let s = !0;
      this.interceptors.request.forEach(function (t) {
        ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
          ((s = s && t.synchronous), a.unshift(t.fulfilled, t.rejected));
      });
      const l = [];
      let c;
      this.interceptors.response.forEach(function (t) {
        l.push(t.fulfilled, t.rejected);
      });
      let d,
        u = 0;
      if (!s) {
        const t = [Wt.bind(this), void 0];
        for (
          t.unshift.apply(t, a),
            t.push.apply(t, l),
            d = t.length,
            c = Promise.resolve(e);
          u < d;

        )
          c = c.then(t[u++], t[u++]);
        return c;
      }
      d = a.length;
      let h = e;
      for (u = 0; u < d; ) {
        const t = a[u++],
          e = a[u++];
        try {
          h = t(h);
        } catch (t) {
          e.call(this, t);
          break;
        }
      }
      try {
        c = Wt.call(this, h);
      } catch (t) {
        return Promise.reject(t);
      }
      for (u = 0, d = l.length; u < d; ) c = c.then(l[u++], l[u++]);
      return c;
    }
    getUri(t) {
      return wt(
        jt((t = Kt(this.defaults, t)).baseURL, t.url),
        t.params,
        t.paramsSerializer
      );
    }
  }
  rt.forEach(["delete", "get", "head", "options"], function (t) {
    ne.prototype[t] = function (e, n) {
      return this.request(
        Kt(n || {}, { method: t, url: e, data: (n || {}).data })
      );
    };
  }),
    rt.forEach(["post", "put", "patch"], function (t) {
      function e(e) {
        return function (n, i, r) {
          return this.request(
            Kt(r || {}, {
              method: t,
              headers: e ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: i,
            })
          );
        };
      }
      (ne.prototype[t] = e()), (ne.prototype[t + "Form"] = e(!0));
    });
  const ie = ne;
  class re {
    constructor(t) {
      if ("function" != typeof t)
        throw new TypeError("executor must be a function.");
      let e;
      this.promise = new Promise(function (t) {
        e = t;
      });
      const n = this;
      this.promise.then((t) => {
        if (!n._listeners) return;
        let e = n._listeners.length;
        for (; e-- > 0; ) n._listeners[e](t);
        n._listeners = null;
      }),
        (this.promise.then = (t) => {
          let e;
          const i = new Promise((t) => {
            n.subscribe(t), (e = t);
          }).then(t);
          return (
            (i.cancel = function () {
              n.unsubscribe(e);
            }),
            i
          );
        }),
        t(function (t, i, r) {
          n.reason || ((n.reason = new Bt(t, i, r)), e(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      this.reason
        ? t(this.reason)
        : this._listeners
        ? this._listeners.push(t)
        : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const e = this._listeners.indexOf(t);
      -1 !== e && this._listeners.splice(e, 1);
    }
    static source() {
      let t;
      return {
        token: new re(function (e) {
          t = e;
        }),
        cancel: t,
      };
    }
  }
  const oe = re;
  const ae = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(ae).forEach(([t, e]) => {
    ae[e] = t;
  });
  const se = ae;
  const le = (function t(e) {
    const n = new ie(e),
      i = C(ie.prototype.request, n);
    return (
      rt.extend(i, ie.prototype, n, { allOwnKeys: !0 }),
      rt.extend(i, n, null, { allOwnKeys: !0 }),
      (i.create = function (n) {
        return t(Kt(e, n));
      }),
      i
    );
  })(St);
  (le.Axios = ie),
    (le.CanceledError = Bt),
    (le.CancelToken = oe),
    (le.isCancel = zt),
    (le.VERSION = Gt),
    (le.toFormData = pt),
    (le.AxiosError = lt),
    (le.Cancel = le.CanceledError),
    (le.all = function (t) {
      return Promise.all(t);
    }),
    (le.spread = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    }),
    (le.isAxiosError = function (t) {
      return rt.isObject(t) && !0 === t.isAxiosError;
    }),
    (le.mergeConfig = Kt),
    (le.AxiosHeaders = Dt),
    (le.formToJSON = (t) => Tt(rt.isHTMLForm(t) ? new FormData(t) : t)),
    (le.HttpStatusCode = se),
    (le.default = le);
  const ce = le;
  const de = (t, e, n, i) => {
      const {
          scaleX: r,
          scaleY: o,
          translateX: a,
          translateY: s,
        } = (function (t) {
          function e(t, e) {
            return {
              x: e.x * t.a + e.y * t.c + 0,
              y: e.x * t.b + e.y * t.d + 0,
            };
          }
          const n = getComputedStyle(t);
          var i = new WebKitCSSMatrix(n.transform),
            r = e(i, { x: 0, y: 1 }),
            o = e(i, { x: 1, y: 0 }),
            a = (180 / Math.PI) * Math.atan2(r.y, r.x) - 90,
            s = (180 / Math.PI) * Math.atan2(o.y, o.x);
          return {
            translateX: i.e,
            translateY: i.f,
            scaleX: Math.sqrt(i.a * i.a + i.b * i.b),
            scaleY: Math.sqrt(i.c * i.c + i.d * i.d),
            skewX: a,
            skewY: s,
            rotation: a,
          };
        })(n),
        l = r * (t / i.width),
        c = e.getBoundingClientRect().height;
      return { x: a + (t - i.width) / 2, y: s + (c - i.height) / 2, scale: l };
    },
    ue = (t) => {
      const e = getComputedStyle(t),
        n =
          parseFloat(e.height) -
          parseFloat(e.paddingTop) -
          parseFloat(e.paddingBottom) -
          parseFloat(e.borderTop) -
          parseFloat(e.borderBottom) -
          parseFloat(e.marginTop) -
          parseFloat(e.marginBottom);
      return {
        width:
          parseFloat(e.width) -
          parseFloat(e.paddingLeft) -
          parseFloat(e.paddingRight) -
          parseFloat(e.borderLeft) -
          parseFloat(e.borderRight) -
          parseFloat(e.marginLeft) -
          parseFloat(e.marginRight),
        height: n,
      };
    };
  const he = class {
    constructor({
      src: t,
      maxHeight: e,
      loader: n,
      onLoad: i,
      onLoadMetaData: r,
      onViewerResize: o,
    }) {
      (this.src = t),
        (this.maxHeight = e),
        (this.maxHeightPercent = 0.6),
        (this.previousBounds = null),
        (this.video = this.createVideo()),
        (this.loader = n),
        (this.onLoad = i),
        (this.onLoadMetaData = r),
        (this.onViewerResize = o),
        (this.handleAxiosError = this.handleAxiosError.bind(this)),
        (this.handleLoadedMetaData = this.handleLoadedMetaData.bind(this)),
        (this.attachResizeEvent = this.attachResizeEvent.bind(this));
    }
    getSrc() {
      return this.src;
    }
    handleDurationChange() {
      0 != this.video.videoWidth && 0 != this.video.videoHeight
        ? isFinite(this.video.duration)
          ? (console.log(
              "video dimensions",
              this.video.videoWidth,
              this.video.videoHeight
            ),
            this.video.pause(),
            (this.video.currentTime = 0),
            (this.video.playbackRate = 1),
            console.info("%cRender Timeline", "color:green"),
            this.onLoad instanceof Function && this.onLoad(),
            this.removeEvents())
          : console.error(
              "durationchange: duration is infinity",
              this.video.duration
            )
        : this.handleError(
            new Error(
              "We were unable to load the video. It may be corrupted, or your browser may not support this video format. Please try another video or browser"
            )
          );
    }
    handleLoadedMetaData(t) {
      (this.video.currentTime = 1e101),
        this.updateViewerContainerDimensions(),
        this.onLoadMetaData instanceof Function && this.onLoadMetaData();
    }
    handleVideoDownloadProgress(t) {
      const e = parseInt(100 * t.progress);
      this.loader.updateMessage(`Loading video ${e}%`);
    }
    handleError(t) {
      if ((console.error(t), this.onError instanceof Function)) this.onError(t);
      else {
        if ("AxiosError" === t.name) return;
        this.loader.showError(t?.message);
      }
    }
    handleAxiosError(t) {
      const e = "There was an error loading the video";
      this.loader.showError(e);
      const n = new Error(e),
        { response: i, message: r } = t || {};
      (n.message = r),
        i?.status &&
          ((n.message = n.message),
          i.statusText && (n.message = `${n.message} : ${i.statusText}`),
          (n.statusText = i?.statusText),
          (n.status = i?.status)),
        (n.name = "AxiosError"),
        this.handleError(n);
    }
    removeEvents() {
      this.video.removeEventListener(
        "durationchange",
        this.handleDurationChange
      ),
        (this.video.onloadedmetadata = null);
    }
    async getURLObjectString() {
      let t = this.src;
      const e = t instanceof Blob,
        n = "string" == typeof t && t?.startsWith("http");
      if (!e && !n)
        throw new TypeError(
          "video src must be a Blob or url, found " + typeof t
        );
      if (
        (n &&
          (t = await ce(t, {
            onDownloadProgress: this.handleVideoDownloadProgress.bind(this),
            responseType: "blob",
          })
            .then((t) => {
              if (t.data.type && !/video/.test(t.data.type))
                throw new TypeError(
                  "Video src type was invalid. Expected video but found: " +
                    t.data.type
                );
              return t?.data;
            })
            .catch(this.handleAxiosError)),
        t)
      ) {
        (this.videoSrc = t), (this.mimeType = t.type || "unknown");
        return window.URL.createObjectURL(t);
      }
    }
    updateViewerContainerDimensions() {
      let t = this.crop?.width || this.video.videoWidth;
      const e = (this.crop?.height || this.video.videoHeight) / t,
        n = this.video.closest(".video-wrap"),
        i = this.video.closest(".video-container"),
        r = ((t, e, n, i) => {
          let r;
          const o = t.getBoundingClientRect(),
            a = t.closest(".video-editor-wrapper"),
            s = ue(a);
          r = e && o.height > e ? e / i : (s.height * n) / i;
          if (!r) throw new Error("vidMaxWidth is undefined");
          return r > s.width && (r = s.width), r;
        })(this.video, this.maxHeight, this.maxHeightPercent, e);
      (i.style.width = `${r}px`),
        (n.style.paddingBottom = 100 * e + "%"),
        requestAnimationFrame(() => {
          if (this.previousBounds) {
            const {
                x: t,
                y: e,
                scale: n,
              } = de(r, i, this.video, this.previousBounds),
              o = `translate3d(${t}px, ${e}px, 0px) scale(${n})`;
            return (
              (this.video.style.transform = o),
              void (
                this.onViewerResize instanceof Function && this.onViewerResize()
              )
            );
          }
        });
    }
    attachVideoEvents(t) {
      const e = this.handleDurationChange.bind(this);
      (this.handleDurationChange = (n) => {
        e(n, t);
      }),
        this.video.addEventListener(
          "durationchange",
          this.handleDurationChange
        ),
        this.video.addEventListener(
          "loadedmetadata",
          this.handleLoadedMetaData
        );
    }
    attachResizeEvent() {
      const t = this.video.closest(".video-flexbox-container");
      window.addEventListener("resize", (e) => {
        const n = this.video.getBoundingClientRect();
        (this.previousBounds = n),
          (this.maxHeightPercent = ((t) => {
            const e = getComputedStyle(t).maxHeight;
            return parseInt(e) / 100;
          })(t)),
          this.updateViewerContainerDimensions();
      });
    }
    createVideo() {
      return r("video", {
        properties: {
          id: "video-preview",
          className: "preview",
          autoplay: !1,
          playsinline: !0,
          preload: "metadata",
          controls: !1,
          playbackRate: 16,
        },
        style: { width: "100%" },
        attributes: { playsinline: !0, "webkit-playsinline": !0 },
      });
    }
    createCropContainer() {
      return r("div", {
        properties: { className: "crop-container" },
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 3,
          width: "100%",
          height: "100%",
        },
      });
    }
    async createVideoContainer() {
      const t = document.createElement("div");
      t.className = "video-container";
      const e = document.createElement("div");
      e.className = "video-wrap";
      const n = document.createElement("source"),
        i = await this.getURLObjectString();
      if (i)
        return (
          (n.src = i),
          this.video.append(n),
          this.attachVideoEvents(t),
          e.append(this.video),
          t.append(e),
          t.append(this.createCropContainer()),
          t
        );
    }
    async render(t) {
      try {
        t.append(await this.createVideoContainer()),
          window.URL.revokeObjectURL(this.src),
          this.attachResizeEvent();
      } catch (t) {
        this.handleError(t);
      }
    }
  };
  var fe = n(802),
    pe = {};
  (pe.styleTagTransform = x()),
    (pe.setAttributes = v()),
    (pe.insert = m().bind(null, "head")),
    (pe.domAPI = f()),
    (pe.insertStyleElement = y());
  u()(fe.Z, pe);
  fe.Z && fe.Z.locals && fe.Z.locals;
  const me = class {
    constructor() {
      (this.timestamp = null), (this.fadeOutTime = 0.5);
    }
    show() {
      this.timestamp.style.opacity = "1";
    }
    hide() {
      this.timestamp.style.opacity = "0";
    }
    setDecimalTime(t) {
      this.timestamp.querySelector("p").textContent = e(t);
    }
    createTimestampElement() {
      (this.timestamp = document.createElement("div")),
        (this.timestamp.className = "timestamp"),
        (this.timestamp.style.transition = `opacity ${this.fadeOutTime}s ease`);
      const t = document.createElement("p");
      return this.timestamp.append(t), this.timestamp;
    }
    render(t) {
      t.append(this.createTimestampElement());
    }
  };
  const ge = class {
      constructor() {}
      initMutationObserver(t, e) {
        const n = new MutationObserver((e) => {
          document.contains(t) && (this.onRender(), n.disconnect());
        });
        n.observe(e, {
          attributes: !1,
          childList: !0,
          characterData: !1,
          subtree: !0,
        });
      }
      render(t, e) {
        this.initMutationObserver(t, e);
      }
      onRender() {}
    },
    ve = {
      setContext: function (t) {
        this.context = t;
      },
      getContext: function () {
        return this.context;
      },
    };
  function be(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function ye(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  var we,
    xe,
    ke,
    _e,
    Te,
    Ce,
    Ee,
    Se,
    Me,
    Oe,
    Pe,
    Ae,
    Re,
    Le,
    De,
    Ne = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    ze = { duration: 0.5, overwrite: !1, delay: 0 },
    Ie = 1e8,
    Be = 1 / Ie,
    Fe = 2 * Math.PI,
    je = Fe / 4,
    Xe = 0,
    He = Math.sqrt,
    Ye = Math.cos,
    Ve = Math.sin,
    Ze = function (t) {
      return "string" == typeof t;
    },
    Ue = function (t) {
      return "function" == typeof t;
    },
    qe = function (t) {
      return "number" == typeof t;
    },
    We = function (t) {
      return void 0 === t;
    },
    $e = function (t) {
      return "object" == typeof t;
    },
    Ke = function (t) {
      return !1 !== t;
    },
    Ge = function () {
      return "undefined" != typeof window;
    },
    Je = function (t) {
      return Ue(t) || Ze(t);
    },
    Qe =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    tn = Array.isArray,
    en = /(?:-?\.?\d|\.)+/gi,
    nn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    on = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    an = /[+-]=-?[.\d]+/,
    sn = /[^,'"\[\]\s]+/gi,
    ln = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    cn = {},
    dn = {},
    un = function (t) {
      return (dn = jn(t, cn)) && Fr;
    },
    hn = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    fn = function (t, e) {
      return !e && console.warn(t);
    },
    pn = function (t, e) {
      return (t && (cn[t] = e) && dn && (dn[t] = e)) || cn;
    },
    mn = function () {
      return 0;
    },
    gn = { suppressEvents: !0, isStart: !0, kill: !1 },
    vn = { suppressEvents: !0, kill: !1 },
    bn = { suppressEvents: !0 },
    yn = {},
    wn = [],
    xn = {},
    kn = {},
    _n = {},
    Tn = 30,
    Cn = [],
    En = "",
    Sn = function (t) {
      var e,
        n,
        i = t[0];
      if (($e(i) || Ue(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
        for (n = Cn.length; n-- && !Cn[n].targetTest(i); );
        e = Cn[n];
      }
      for (n = t.length; n--; )
        (t[n] && (t[n]._gsap || (t[n]._gsap = new tr(t[n], e)))) ||
          t.splice(n, 1);
      return t;
    },
    Mn = function (t) {
      return t._gsap || Sn(bi(t))[0]._gsap;
    },
    On = function (t, e, n) {
      return (n = t[e]) && Ue(n)
        ? t[e]()
        : (We(n) && t.getAttribute && t.getAttribute(e)) || n;
    },
    Pn = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    An = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Rn = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    Ln = function (t, e) {
      var n = e.charAt(0),
        i = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === n ? t + i : "-" === n ? t - i : "*" === n ? t * i : t / i
      );
    },
    Dn = function (t, e) {
      for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
      return i < n;
    },
    Nn = function () {
      var t,
        e,
        n = wn.length,
        i = wn.slice(0);
      for (xn = {}, wn.length = 0, t = 0; t < n; t++)
        (e = i[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    zn = function (t, e, n, i) {
      wn.length && !xe && Nn(),
        t.render(e, n, i || (xe && e < 0 && (t._initted || t._startAt))),
        wn.length && !xe && Nn();
    },
    In = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(sn).length < 2
        ? e
        : Ze(t)
        ? t.trim()
        : t;
    },
    Bn = function (t) {
      return t;
    },
    Fn = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t;
    },
    jn = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    },
    Xn = function t(e, n) {
      for (var i in n)
        "__proto__" !== i &&
          "constructor" !== i &&
          "prototype" !== i &&
          (e[i] = $e(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
      return e;
    },
    Hn = function (t, e) {
      var n,
        i = {};
      for (n in t) n in e || (i[n] = t[n]);
      return i;
    },
    Yn = function (t) {
      var e,
        n = t.parent || _e,
        i = t.keyframes
          ? ((e = tn(t.keyframes)),
            function (t, n) {
              for (var i in n)
                i in t ||
                  ("duration" === i && e) ||
                  "ease" === i ||
                  (t[i] = n[i]);
            })
          : Fn;
      if (Ke(t.inherit))
        for (; n; ) i(t, n.vars.defaults), (n = n.parent || n._dp);
      return t;
    },
    Vn = function (t, e, n, i, r) {
      void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
      var o,
        a = t[i];
      if (r) for (o = e[r]; a && a[r] > o; ) a = a._prev;
      return (
        a
          ? ((e._next = a._next), (a._next = e))
          : ((e._next = t[n]), (t[n] = e)),
        e._next ? (e._next._prev = e) : (t[i] = e),
        (e._prev = a),
        (e.parent = e._dp = t),
        e
      );
    },
    Zn = function (t, e, n, i) {
      void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
      var r = e._prev,
        o = e._next;
      r ? (r._next = o) : t[n] === e && (t[n] = o),
        o ? (o._prev = r) : t[i] === e && (t[i] = r),
        (e._next = e._prev = e.parent = null);
    },
    Un = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    qn = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
      return t;
    },
    Wn = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    $n = function (t, e, n, i) {
      return (
        t._startAt &&
        (xe
          ? t._startAt.revert(vn)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, i))
      );
    },
    Kn = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Gn = function (t) {
      return t._repeat ? Jn(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Jn = function (t, e) {
      var n = Math.floor((t /= e));
      return t && n === t ? n - 1 : n;
    },
    Qn = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    ti = function (t) {
      return (t._end = Rn(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || Be) || 0)
      ));
    },
    ei = function (t, e) {
      var n = t._dp;
      return (
        n &&
          n.smoothChildTiming &&
          t._ts &&
          ((t._start = Rn(
            n._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          ti(t),
          n._dirty || qn(n, t)),
        t
      );
    },
    ni = function (t, e) {
      var n;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((n = Qn(t.rawTime(), e)),
          (!e._dur || pi(0, e.totalDuration(), n) - e._tTime > Be) &&
            e.render(n, !0)),
        qn(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (n = t; n._dp; )
            n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
        t._zTime = -Be;
      }
    },
    ii = function (t, e, n, i) {
      return (
        e.parent && Un(e),
        (e._start = Rn(
          (qe(n) ? n : n || t !== _e ? ui(t, n, e) : t._time) + e._delay
        )),
        (e._end = Rn(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        Vn(t, e, "_first", "_last", t._sort ? "_start" : 0),
        si(e) || (t._recent = e),
        i || ni(t, e),
        t._ts < 0 && ei(t, t._tTime),
        t
      );
    },
    ri = function (t, e) {
      return (
        (cn.ScrollTrigger || hn("scrollTrigger", e)) &&
        cn.ScrollTrigger.create(e, t)
      );
    },
    oi = function (t, e, n, i, r) {
      return (
        lr(t, e, r),
        t._initted
          ? !n &&
            t._pt &&
            !xe &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            Me !== Xi.frame
            ? (wn.push(t), (t._lazy = [r, i]), 1)
            : void 0
          : 1
      );
    },
    ai = function t(e) {
      var n = e.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
    },
    si = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    li = function (t, e, n, i) {
      var r = t._repeat,
        o = Rn(e) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !i && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = r ? (r < 0 ? 1e10 : Rn(o * (r + 1) + t._rDelay * r)) : o),
        a > 0 && !i && ei(t, (t._tTime = t._tDur * a)),
        t.parent && ti(t),
        n || qn(t.parent, t),
        t
      );
    },
    ci = function (t) {
      return t instanceof nr ? qn(t) : li(t, t._dur);
    },
    di = { _start: 0, endTime: mn, totalDuration: mn },
    ui = function t(e, n, i) {
      var r,
        o,
        a,
        s = e.labels,
        l = e._recent || di,
        c = e.duration() >= Ie ? l.endTime(!1) : e._dur;
      return Ze(n) && (isNaN(n) || n in s)
        ? ((o = n.charAt(0)),
          (a = "%" === n.substr(-1)),
          (r = n.indexOf("=")),
          "<" === o || ">" === o
            ? (r >= 0 && (n = n.replace(/=/, "")),
              ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0) *
                  (a ? (r < 0 ? l : i).totalDuration() / 100 : 1))
            : r < 0
            ? (n in s || (s[n] = c), s[n])
            : ((o = parseFloat(n.charAt(r - 1) + n.substr(r + 1))),
              a && i && (o = (o / 100) * (tn(i) ? i[0] : i).totalDuration()),
              r > 1 ? t(e, n.substr(0, r - 1), i) + o : c + o))
        : null == n
        ? c
        : +n;
    },
    hi = function (t, e, n) {
      var i,
        r,
        o = qe(e[1]),
        a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
        s = e[a];
      if ((o && (s.duration = e[1]), (s.parent = n), t)) {
        for (i = s, r = n; r && !("immediateRender" in i); )
          (i = r.vars.defaults || {}), (r = Ke(r.vars.inherit) && r.parent);
        (s.immediateRender = Ke(i.immediateRender)),
          t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
      }
      return new fr(e[0], s, e[a + 1]);
    },
    fi = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    pi = function (t, e, n) {
      return n < t ? t : n > e ? e : n;
    },
    mi = function (t, e) {
      return Ze(t) && (e = ln.exec(t)) ? e[1] : "";
    },
    gi = [].slice,
    vi = function (t, e) {
      return (
        t &&
        $e(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && $e(t[0]))) &&
        !t.nodeType &&
        t !== Te
      );
    },
    bi = function (t, e, n) {
      return ke && !e && ke.selector
        ? ke.selector(t)
        : !Ze(t) || n || (!Ce && Hi())
        ? tn(t)
          ? (function (t, e, n) {
              return (
                void 0 === n && (n = []),
                t.forEach(function (t) {
                  var i;
                  return (Ze(t) && !e) || vi(t, 1)
                    ? (i = n).push.apply(i, bi(t))
                    : n.push(t);
                }) || n
              );
            })(t, n)
          : vi(t)
          ? gi.call(t, 0)
          : t
          ? [t]
          : []
        : gi.call((e || Ee).querySelectorAll(t), 0);
    },
    yi = function (t) {
      return (
        (t = bi(t)[0] || fn("Invalid scope") || {}),
        function (e) {
          var n = t.current || t.nativeElement || t;
          return bi(
            e,
            n.querySelectorAll
              ? n
              : n === t
              ? fn("Invalid scope") || Ee.createElement("div")
              : t
          );
        }
      );
    },
    wi = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    xi = function (t) {
      if (Ue(t)) return t;
      var e = $e(t) ? t : { each: t },
        n = $i(e.ease),
        i = e.from || 0,
        r = parseFloat(e.base) || 0,
        o = {},
        a = i > 0 && i < 1,
        s = isNaN(i) || a,
        l = e.axis,
        c = i,
        d = i;
      return (
        Ze(i)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !a && s && ((c = i[0]), (d = i[1])),
        function (t, a, u) {
          var h,
            f,
            p,
            m,
            g,
            v,
            b,
            y,
            w,
            x = (u || e).length,
            k = o[x];
          if (!k) {
            if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, Ie])[1])) {
              for (
                b = -Ie;
                b < (b = u[w++].getBoundingClientRect().left) && w < x;

              );
              w--;
            }
            for (
              k = o[x] = [],
                h = s ? Math.min(w, x) * c - 0.5 : i % w,
                f = w === Ie ? 0 : s ? (x * d) / w - 0.5 : (i / w) | 0,
                b = 0,
                y = Ie,
                v = 0;
              v < x;
              v++
            )
              (p = (v % w) - h),
                (m = f - ((v / w) | 0)),
                (k[v] = g =
                  l ? Math.abs("y" === l ? m : p) : He(p * p + m * m)),
                g > b && (b = g),
                g < y && (y = g);
            "random" === i && wi(k),
              (k.max = b - y),
              (k.min = y),
              (k.v = x =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (w > x
                      ? x - 1
                      : l
                      ? "y" === l
                        ? x / w
                        : w
                      : Math.max(w, x / w)) ||
                  0) * ("edges" === i ? -1 : 1)),
              (k.b = x < 0 ? r - x : r),
              (k.u = mi(e.amount || e.each) || 0),
              (n = n && x < 0 ? qi(n) : n);
          }
          return (
            (x = (k[t] - k.min) / k.max || 0),
            Rn(k.b + (n ? n(x) : x) * k.v) + k.u
          );
        }
      );
    },
    ki = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (n) {
        var i = Rn(Math.round(parseFloat(n) / t) * t * e);
        return (i - (i % 1)) / e + (qe(n) ? 0 : mi(n));
      };
    },
    _i = function (t, e) {
      var n,
        i,
        r = tn(t);
      return (
        !r &&
          $e(t) &&
          ((n = r = t.radius || Ie),
          t.values
            ? ((t = bi(t.values)), (i = !qe(t[0])) && (n *= n))
            : (t = ki(t.increment))),
        fi(
          e,
          r
            ? Ue(t)
              ? function (e) {
                  return (i = t(e)), Math.abs(i - e) <= n ? i : e;
                }
              : function (e) {
                  for (
                    var r,
                      o,
                      a = parseFloat(i ? e.x : e),
                      s = parseFloat(i ? e.y : 0),
                      l = Ie,
                      c = 0,
                      d = t.length;
                    d--;

                  )
                    (r = i
                      ? (r = t[d].x - a) * r + (o = t[d].y - s) * o
                      : Math.abs(t[d] - a)) < l && ((l = r), (c = d));
                  return (
                    (c = !n || l <= n ? t[c] : e),
                    i || c === e || qe(e) ? c : c + mi(e)
                  );
                }
            : ki(t)
        )
      );
    },
    Ti = function (t, e, n, i) {
      return fi(tn(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
        return tn(t)
          ? t[~~(Math.random() * t.length)]
          : (n = n || 1e-5) &&
              (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                ) *
                  n *
                  i
              ) / i;
      });
    },
    Ci = function (t, e, n) {
      return fi(n, function (n) {
        return t[~~e(n)];
      });
    },
    Ei = function (t) {
      for (var e, n, i, r, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
        (i = t.indexOf(")", e)),
          (r = "[" === t.charAt(e + 7)),
          (n = t.substr(e + 7, i - e - 7).match(r ? sn : en)),
          (a +=
            t.substr(o, e - o) +
            Ti(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
          (o = i + 1);
      return a + t.substr(o, t.length - o);
    },
    Si = function (t, e, n, i, r) {
      var o = e - t,
        a = i - n;
      return fi(r, function (e) {
        return n + (((e - t) / o) * a || 0);
      });
    },
    Mi = function (t, e, n) {
      var i,
        r,
        o,
        a = t.labels,
        s = Ie;
      for (i in a)
        (r = a[i] - e) < 0 == !!n &&
          r &&
          s > (r = Math.abs(r)) &&
          ((o = i), (s = r));
      return o;
    },
    Oi = function (t, e, n) {
      var i,
        r,
        o,
        a = t.vars,
        s = a[e],
        l = ke,
        c = t._ctx;
      if (s)
        return (
          (i = a[e + "Params"]),
          (r = a.callbackScope || t),
          n && wn.length && Nn(),
          c && (ke = c),
          (o = i ? s.apply(r, i) : s.call(r)),
          (ke = l),
          o
        );
    },
    Pi = function (t) {
      return (
        Un(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!xe),
        t.progress() < 1 && Oi(t, "onInterrupt"),
        t
      );
    },
    Ai = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        n = Ue(t),
        i =
          e && !n && t.init
            ? function () {
                this._props = [];
              }
            : t,
        r = {
          init: mn,
          render: kr,
          add: ar,
          kill: Tr,
          modifier: _r,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: br, aliases: {}, register: 0 };
      if ((Hi(), t !== i)) {
        if (kn[e]) return;
        Fn(i, Fn(Hn(t, r), o)),
          jn(i.prototype, jn(r, Hn(t, o))),
          (kn[(i.prop = e)] = i),
          t.targetTest && (Cn.push(i), (yn[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      pn(e, i), t.register && t.register(Fr, i, Sr);
    },
    Ri = 255,
    Li = {
      aqua: [0, Ri, Ri],
      lime: [0, Ri, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Ri],
      navy: [0, 0, 128],
      white: [Ri, Ri, Ri],
      olive: [128, 128, 0],
      yellow: [Ri, Ri, 0],
      orange: [Ri, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Ri, 0, 0],
      pink: [Ri, 192, 203],
      cyan: [0, Ri, Ri],
      transparent: [Ri, Ri, Ri, 0],
    },
    Di = function (t, e, n) {
      return (
        ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (n - e) * t * 6
          : t < 0.5
          ? n
          : 3 * t < 2
          ? e + (n - e) * (2 / 3 - t) * 6
          : e) *
          Ri +
          0.5) |
        0
      );
    },
    Ni = function (t, e, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        h,
        f = t ? (qe(t) ? [t >> 16, (t >> 8) & Ri, t & Ri] : 0) : Li.black;
      if (!f) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Li[t]))
          f = Li[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((i = t.charAt(1)),
              (r = t.charAt(2)),
              (o = t.charAt(3)),
              (t =
                "#" +
                i +
                i +
                r +
                r +
                o +
                o +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (f = parseInt(t.substr(1, 6), 16)) >> 16,
              (f >> 8) & Ri,
              f & Ri,
              parseInt(t.substr(7), 16) / 255,
            ];
          f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Ri, t & Ri];
        } else if ("hsl" === t.substr(0, 3))
          if (((f = h = t.match(en)), e)) {
            if (~t.indexOf("="))
              return (f = t.match(nn)), n && f.length < 4 && (f[3] = 1), f;
          } else
            (a = (+f[0] % 360) / 360),
              (s = +f[1] / 100),
              (i =
                2 * (l = +f[2] / 100) -
                (r = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
              f.length > 3 && (f[3] *= 1),
              (f[0] = Di(a + 1 / 3, i, r)),
              (f[1] = Di(a, i, r)),
              (f[2] = Di(a - 1 / 3, i, r));
        else f = t.match(en) || Li.transparent;
        f = f.map(Number);
      }
      return (
        e &&
          !h &&
          ((i = f[0] / Ri),
          (r = f[1] / Ri),
          (o = f[2] / Ri),
          (l = ((c = Math.max(i, r, o)) + (d = Math.min(i, r, o))) / 2),
          c === d
            ? (a = s = 0)
            : ((u = c - d),
              (s = l > 0.5 ? u / (2 - c - d) : u / (c + d)),
              (a =
                c === i
                  ? (r - o) / u + (r < o ? 6 : 0)
                  : c === r
                  ? (o - i) / u + 2
                  : (i - r) / u + 4),
              (a *= 60)),
          (f[0] = ~~(a + 0.5)),
          (f[1] = ~~(100 * s + 0.5)),
          (f[2] = ~~(100 * l + 0.5))),
        n && f.length < 4 && (f[3] = 1),
        f
      );
    },
    zi = function (t) {
      var e = [],
        n = [],
        i = -1;
      return (
        t.split(Bi).forEach(function (t) {
          var r = t.match(rn) || [];
          e.push.apply(e, r), n.push((i += r.length + 1));
        }),
        (e.c = n),
        e
      );
    },
    Ii = function (t, e, n) {
      var i,
        r,
        o,
        a,
        s = "",
        l = (t + s).match(Bi),
        c = e ? "hsla(" : "rgba(",
        d = 0;
      if (!l) return t;
      if (
        ((l = l.map(function (t) {
          return (
            (t = Ni(t, e, 1)) &&
            c +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        n && ((o = zi(t)), (i = n.c).join(s) !== o.c.join(s)))
      )
        for (a = (r = t.replace(Bi, "1").split(rn)).length - 1; d < a; d++)
          s +=
            r[d] +
            (~i.indexOf(d)
              ? l.shift() || c + "0,0,0,0)"
              : (o.length ? o : l.length ? l : n).shift());
      if (!r)
        for (a = (r = t.split(Bi)).length - 1; d < a; d++) s += r[d] + l[d];
      return s + r[a];
    },
    Bi = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Li) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Fi = /hsl[a]?\(/,
    ji = function (t) {
      var e,
        n = t.join(" ");
      if (((Bi.lastIndex = 0), Bi.test(n)))
        return (
          (e = Fi.test(n)),
          (t[1] = Ii(t[1], e)),
          (t[0] = Ii(t[0], e, zi(t[1]))),
          !0
        );
    },
    Xi = (function () {
      var t,
        e,
        n,
        i,
        r,
        o,
        a = Date.now,
        s = 500,
        l = 33,
        c = a(),
        d = c,
        u = 1e3 / 240,
        h = u,
        f = [],
        p = function n(p) {
          var m,
            g,
            v,
            b,
            y = a() - d,
            w = !0 === p;
          if (
            (y > s && (c += y - l),
            ((m = (v = (d += y) - c) - h) > 0 || w) &&
              ((b = ++i.frame),
              (r = v - 1e3 * i.time),
              (i.time = v /= 1e3),
              (h += m + (m >= u ? 4 : u - m)),
              (g = 1)),
            w || (t = e(n)),
            g)
          )
            for (o = 0; o < f.length; o++) f[o](v, r, b, p);
        };
      return (
        (i = {
          time: 0,
          frame: 0,
          tick: function () {
            p(!0);
          },
          deltaRatio: function (t) {
            return r / (1e3 / (t || 60));
          },
          wake: function () {
            Se &&
              (!Ce &&
                Ge() &&
                ((Te = Ce = window),
                (Ee = Te.document || {}),
                (cn.gsap = Fr),
                (Te.gsapVersions || (Te.gsapVersions = [])).push(Fr.version),
                un(dn || Te.GreenSockGlobals || (!Te.gsap && Te) || {}),
                (n = Te.requestAnimationFrame)),
              t && i.sleep(),
              (e =
                n ||
                function (t) {
                  return setTimeout(t, (h - 1e3 * i.time + 1) | 0);
                }),
              (Pe = 1),
              p(2));
          },
          sleep: function () {
            (n ? Te.cancelAnimationFrame : clearTimeout)(t), (Pe = 0), (e = mn);
          },
          lagSmoothing: function (t, e) {
            (s = t || 1 / 0), (l = Math.min(e || 33, s));
          },
          fps: function (t) {
            (u = 1e3 / (t || 240)), (h = 1e3 * i.time + u);
          },
          add: function (t, e, n) {
            var r = e
              ? function (e, n, o, a) {
                  t(e, n, o, a), i.remove(r);
                }
              : t;
            return i.remove(t), f[n ? "unshift" : "push"](r), Hi(), r;
          },
          remove: function (t, e) {
            ~(e = f.indexOf(t)) && f.splice(e, 1) && o >= e && o--;
          },
          _listeners: f,
        }),
        i
      );
    })(),
    Hi = function () {
      return !Pe && Xi.wake();
    },
    Yi = {},
    Vi = /^[\d.\-M][\d.\-,\s]/,
    Zi = /["']/g,
    Ui = function (t) {
      for (
        var e,
          n,
          i,
          r = {},
          o = t.substr(1, t.length - 3).split(":"),
          a = o[0],
          s = 1,
          l = o.length;
        s < l;
        s++
      )
        (n = o[s]),
          (e = s !== l - 1 ? n.lastIndexOf(",") : n.length),
          (i = n.substr(0, e)),
          (r[a] = isNaN(i) ? i.replace(Zi, "").trim() : +i),
          (a = n.substr(e + 1).trim());
      return r;
    },
    qi = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Wi = function t(e, n) {
      for (var i, r = e._first; r; )
        r instanceof nr
          ? t(r, n)
          : !r.vars.yoyoEase ||
            (r._yoyo && r._repeat) ||
            r._yoyo === n ||
            (r.timeline
              ? t(r.timeline, n)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = n))),
          (r = r._next);
    },
    $i = function (t, e) {
      return (
        (t &&
          (Ue(t)
            ? t
            : Yi[t] ||
              (function (t) {
                var e,
                  n,
                  i,
                  r,
                  o = (t + "").split("("),
                  a = Yi[o[0]];
                return a && o.length > 1 && a.config
                  ? a.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [Ui(o[1])]
                        : ((e = t),
                          (n = e.indexOf("(") + 1),
                          (i = e.indexOf(")")),
                          (r = e.indexOf("(", n)),
                          e.substring(
                            n,
                            ~r && r < i ? e.indexOf(")", i + 1) : i
                          ))
                            .split(",")
                            .map(In)
                    )
                  : Yi._CE && Vi.test(t)
                  ? Yi._CE("", t)
                  : a;
              })(t))) ||
        e
      );
    },
    Ki = function (t, e, n, i) {
      void 0 === n &&
        (n = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === i &&
          (i = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var r,
        o = { easeIn: e, easeOut: n, easeInOut: i };
      return (
        Pn(t, function (t) {
          for (var e in ((Yi[t] = cn[t] = o),
          (Yi[(r = t.toLowerCase())] = n),
          o))
            Yi[
              r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Yi[t + "." + e] = o[e];
        }),
        o
      );
    },
    Gi = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    Ji = function t(e, n, i) {
      var r = n >= 1 ? n : 1,
        o = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (o / Fe) * (Math.asin(1 / r) || 0),
        s = function (t) {
          return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Ve((t - a) * o) + 1;
        },
        l =
          "out" === e
            ? s
            : "in" === e
            ? function (t) {
                return 1 - s(1 - t);
              }
            : Gi(s);
      return (
        (o = Fe / o),
        (l.config = function (n, i) {
          return t(e, n, i);
        }),
        l
      );
    },
    Qi = function t(e, n) {
      void 0 === n && (n = 1.70158);
      var i = function (t) {
          return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
        },
        r =
          "out" === e
            ? i
            : "in" === e
            ? function (t) {
                return 1 - i(1 - t);
              }
            : Gi(i);
      return (
        (r.config = function (n) {
          return t(e, n);
        }),
        r
      );
    };
  Pn("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    Ki(
      t + ",Power" + (n - 1),
      e
        ? function (t) {
            return Math.pow(t, n);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, n);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, n) / 2
          : 1 - Math.pow(2 * (1 - t), n) / 2;
      }
    );
  }),
    (Yi.Linear.easeNone = Yi.none = Yi.Linear.easeIn),
    Ki("Elastic", Ji("in"), Ji("out"), Ji()),
    (Ae = 7.5625),
    (Le = 1 / (Re = 2.75)),
    (De = function (t) {
      return t < Le
        ? Ae * t * t
        : t < 0.7272727272727273
        ? Ae * Math.pow(t - 1.5 / Re, 2) + 0.75
        : t < 0.9090909090909092
        ? Ae * (t -= 2.25 / Re) * t + 0.9375
        : Ae * Math.pow(t - 2.625 / Re, 2) + 0.984375;
    }),
    Ki(
      "Bounce",
      function (t) {
        return 1 - De(1 - t);
      },
      De
    ),
    Ki("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Ki("Circ", function (t) {
      return -(He(1 - t * t) - 1);
    }),
    Ki("Sine", function (t) {
      return 1 === t ? 1 : 1 - Ye(t * je);
    }),
    Ki("Back", Qi("in"), Qi("out"), Qi()),
    (Yi.SteppedEase =
      Yi.steps =
      cn.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
              i = t + (e ? 0 : 1),
              r = e ? 1 : 0,
              o = 1 - Be;
            return function (t) {
              return (((i * pi(0, o, t)) | 0) + r) * n;
            };
          },
        }),
    (ze.ease = Yi["quad.out"]),
    Pn(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (En += t + "," + t + "Params,");
      }
    );
  var tr = function (t, e) {
      (this.id = Xe++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : On),
        (this.set = e ? e.getSetter : br);
    },
    er = (function () {
      function t(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          li(this, +t.duration, 1, 1),
          (this.data = t.data),
          ke && ((this._ctx = ke), ke.data.push(this)),
          Pe || Xi.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              li(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((Hi(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              ei(this, t), !n._dp || n.parent || ni(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              ii(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === Be) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), zn(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Gn(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Gn(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * n, e)
            : this._repeat
            ? Jn(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return this._rts === -Be ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? Qn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || t === -Be ? 0 : this._rts),
            this.totalTime(pi(-this._delay, this._tDur, e), !0),
            ti(this),
            Wn(this)
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Hi(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== Be &&
                        (this._tTime -= Be)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && ii(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (Ke(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Qn(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (t) {
          void 0 === t && (t = bn);
          var e = xe;
          return (
            (xe = t),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(t),
              this.totalTime(-0.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            (xe = e),
            this
          );
        }),
        (e.globalTime = function (t) {
          for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
            (n = e._start + n / (e._ts || 1)), (e = e._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1
              : this._sat.globalTime(t)
            : n;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), ci(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return (this._rDelay = t), ci(this), e ? this.time(e) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(ui(this, t), Ke(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, Ke(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -Be : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -Be), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            n = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= n &&
              t < this.endTime(!0) - Be
            )
          );
        }),
        (e.eventCallback = function (t, e, n) {
          var i = this.vars;
          return arguments.length > 1
            ? (e
                ? ((i[t] = e),
                  n && (i[t + "Params"] = n),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete i[t],
              this)
            : i[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (n) {
            var i = Ue(t) ? t : Bn,
              r = function () {
                var t = e.then;
                (e.then = null),
                  Ue(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                  n(i),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? r()
              : (e._prom = r);
          });
        }),
        (e.kill = function () {
          Pi(this);
        }),
        t
      );
    })();
  Fn(er.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Be,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var nr = (function (t) {
    function e(e, n) {
      var i;
      return (
        void 0 === e && (e = {}),
        ((i = t.call(this, e) || this).labels = {}),
        (i.smoothChildTiming = !!e.smoothChildTiming),
        (i.autoRemoveChildren = !!e.autoRemoveChildren),
        (i._sort = Ke(e.sortChildren)),
        _e && ii(e.parent || _e, be(i), n),
        e.reversed && i.reverse(),
        e.paused && i.paused(!0),
        e.scrollTrigger && ri(be(i), e.scrollTrigger),
        i
      );
    }
    ye(e, t);
    var n = e.prototype;
    return (
      (n.to = function (t, e, n) {
        return hi(0, arguments, this), this;
      }),
      (n.from = function (t, e, n) {
        return hi(1, arguments, this), this;
      }),
      (n.fromTo = function (t, e, n, i) {
        return hi(2, arguments, this), this;
      }),
      (n.set = function (t, e, n) {
        return (
          (e.duration = 0),
          (e.parent = this),
          Yn(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new fr(t, e, ui(this, n), 1),
          this
        );
      }),
      (n.call = function (t, e, n) {
        return ii(this, fr.delayedCall(0, t, e), n);
      }),
      (n.staggerTo = function (t, e, n, i, r, o, a) {
        return (
          (n.duration = e),
          (n.stagger = n.stagger || i),
          (n.onComplete = o),
          (n.onCompleteParams = a),
          (n.parent = this),
          new fr(t, n, ui(this, r)),
          this
        );
      }),
      (n.staggerFrom = function (t, e, n, i, r, o, a) {
        return (
          (n.runBackwards = 1),
          (Yn(n).immediateRender = Ke(n.immediateRender)),
          this.staggerTo(t, e, n, i, r, o, a)
        );
      }),
      (n.staggerFromTo = function (t, e, n, i, r, o, a, s) {
        return (
          (i.startAt = n),
          (Yn(i).immediateRender = Ke(i.immediateRender)),
          this.staggerTo(t, e, i, r, o, a, s)
        );
      }),
      (n.render = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          c,
          d,
          u,
          h,
          f,
          p,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          b = t <= 0 ? 0 : Rn(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (
          (this !== _e && b > g && t >= 0 && (b = g),
          b !== this._tTime || n || y)
        ) {
          if (
            (m !== this._time &&
              v &&
              ((b += this._time - m), (t += this._time - m)),
            (i = b),
            (u = this._start),
            (l = !(d = this._ts)),
            y && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((f = this._yoyo),
              (s = v + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * s + t, e, n);
            if (
              ((i = Rn(b % s)),
              b === g
                ? ((a = this._repeat), (i = v))
                : ((a = ~~(b / s)) && a === b / s && ((i = v), a--),
                  i > v && (i = v)),
              (h = Jn(this._tTime, s)),
              !m && this._tTime && h !== a && (h = a),
              f && 1 & a && ((i = v - i), (p = 1)),
              a !== h && !this._lock)
            ) {
              var w = f && 1 & h,
                x = w === (f && 1 & a);
              if (
                (a < h && (w = !w),
                (m = w ? 0 : v),
                (this._lock = 1),
                (this.render(m || (p ? 0 : Rn(a * s)), e, !v)._lock = 0),
                (this._tTime = b),
                !e && this.parent && Oi(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (m && m !== this._time) ||
                  l !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((v = this._dur),
                (g = this._tDur),
                x &&
                  ((this._lock = 2),
                  (m = w ? v : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !p && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              Wi(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((c = (function (t, e, n) {
                var i;
                if (n > e)
                  for (i = t._first; i && i._start <= n; ) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= n; ) {
                    if ("isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, Rn(m), Rn(i))),
              c && (b -= i - (i = c._start))),
            (this._tTime = b),
            (this._time = i),
            (this._act = !d),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (m = 0)),
            !m && i && !e && (Oi(this, "onStart"), this._tTime !== b))
          )
            return this;
          if (i >= m && t >= 0)
            for (r = this._first; r; ) {
              if (
                ((o = r._next), (r._act || i >= r._start) && r._ts && c !== r)
              ) {
                if (r.parent !== this) return this.render(t, e, n);
                if (
                  (r.render(
                    r._ts > 0
                      ? (i - r._start) * r._ts
                      : (r._dirty ? r.totalDuration() : r._tDur) +
                          (i - r._start) * r._ts,
                    e,
                    n
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), o && (b += this._zTime = -Be);
                  break;
                }
              }
              r = o;
            }
          else {
            r = this._last;
            for (var k = t < 0 ? t : i; r; ) {
              if (
                ((o = r._prev), (r._act || k <= r._end) && r._ts && c !== r)
              ) {
                if (r.parent !== this) return this.render(t, e, n);
                if (
                  (r.render(
                    r._ts > 0
                      ? (k - r._start) * r._ts
                      : (r._dirty ? r.totalDuration() : r._tDur) +
                          (k - r._start) * r._ts,
                    e,
                    n || (xe && (r._initted || r._startAt))
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), o && (b += this._zTime = k ? -Be : Be);
                  break;
                }
              }
              r = o;
            }
          }
          if (
            c &&
            !e &&
            (this.pause(),
            (c.render(i >= m ? 0 : -Be)._zTime = i >= m ? 1 : -1),
            this._ts)
          )
            return (this._start = u), ti(this), this.render(t, e, n);
          this._onUpdate && !e && Oi(this, "onUpdate", !0),
            ((b === g && this._tTime >= this.totalDuration()) || (!b && m)) &&
              ((u !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !v) &&
                  ((b === g && this._ts > 0) || (!b && this._ts < 0)) &&
                  Un(this, 1),
                e ||
                  (t < 0 && !m) ||
                  (!b && !m && g) ||
                  (Oi(
                    this,
                    b === g && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(b < g && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (n.add = function (t, e) {
        var n = this;
        if ((qe(e) || (e = ui(this, e, t)), !(t instanceof er))) {
          if (tn(t))
            return (
              t.forEach(function (t) {
                return n.add(t, e);
              }),
              this
            );
          if (Ze(t)) return this.addLabel(t, e);
          if (!Ue(t)) return this;
          t = fr.delayedCall(0, t);
        }
        return this !== t ? ii(this, t, e) : this;
      }),
      (n.getChildren = function (t, e, n, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === n && (n = !0),
          void 0 === i && (i = -Ie);
        for (var r = [], o = this._first; o; )
          o._start >= i &&
            (o instanceof fr
              ? e && r.push(o)
              : (n && r.push(o),
                t && r.push.apply(r, o.getChildren(!0, e, n)))),
            (o = o._next);
        return r;
      }),
      (n.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
          if (e[n].vars.id === t) return e[n];
      }),
      (n.remove = function (t) {
        return Ze(t)
          ? this.removeLabel(t)
          : Ue(t)
          ? this.killTweensOf(t)
          : (Zn(this, t),
            t === this._recent && (this._recent = this._last),
            qn(this));
      }),
      (n.totalTime = function (e, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Rn(
                Xi.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (n.addLabel = function (t, e) {
        return (this.labels[t] = ui(this, e)), this;
      }),
      (n.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (n.addPause = function (t, e, n) {
        var i = fr.delayedCall(0, e || mn, n);
        return (
          (i.data = "isPause"), (this._hasPause = 1), ii(this, i, ui(this, t))
        );
      }),
      (n.removePause = function (t) {
        var e = this._first;
        for (t = ui(this, t); e; )
          e._start === t && "isPause" === e.data && Un(e), (e = e._next);
      }),
      (n.killTweensOf = function (t, e, n) {
        for (var i = this.getTweensOf(t, n), r = i.length; r--; )
          ir !== i[r] && i[r].kill(t, e);
        return this;
      }),
      (n.getTweensOf = function (t, e) {
        for (var n, i = [], r = bi(t), o = this._first, a = qe(e); o; )
          o instanceof fr
            ? Dn(o._targets, r) &&
              (a
                ? (!ir || (o._initted && o._ts)) &&
                  o.globalTime(0) <= e &&
                  o.globalTime(o.totalDuration()) > e
                : !e || o.isActive()) &&
              i.push(o)
            : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n),
            (o = o._next);
        return i;
      }),
      (n.tweenTo = function (t, e) {
        e = e || {};
        var n,
          i = this,
          r = ui(i, t),
          o = e,
          a = o.startAt,
          s = o.onStart,
          l = o.onStartParams,
          c = o.immediateRender,
          d = fr.to(
            i,
            Fn(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: r,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (r - (a && "time" in a ? a.time : i._time)) / i.timeScale()
                  ) ||
                  Be,
                onStart: function () {
                  if ((i.pause(), !n)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (r - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      );
                    d._dur !== t && li(d, t, 0, 1).render(d._time, !0, !0),
                      (n = 1);
                  }
                  s && s.apply(d, l || []);
                },
              },
              e
            )
          );
        return c ? d.render(0) : d;
      }),
      (n.tweenFromTo = function (t, e, n) {
        return this.tweenTo(e, Fn({ startAt: { time: ui(this, t) } }, n));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (t) {
        return void 0 === t && (t = this._time), Mi(this, ui(this, t));
      }),
      (n.previousLabel = function (t) {
        return void 0 === t && (t = this._time), Mi(this, ui(this, t), 1);
      }),
      (n.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + Be);
      }),
      (n.shiftChildren = function (t, e, n) {
        void 0 === n && (n = 0);
        for (var i, r = this._first, o = this.labels; r; )
          r._start >= n && ((r._start += t), (r._end += t)), (r = r._next);
        if (e) for (i in o) o[i] >= n && (o[i] += t);
        return qn(this);
      }),
      (n.invalidate = function (e) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
        return t.prototype.invalidate.call(this, e);
      }),
      (n.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, n = this._first; n; )
          (e = n._next), this.remove(n), (n = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          qn(this)
        );
      }),
      (n.totalDuration = function (t) {
        var e,
          n,
          i,
          r = 0,
          o = this,
          a = o._last,
          s = Ie;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -t : t)
          );
        if (o._dirty) {
          for (i = o.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              (n = a._start) > s && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (ii(o, a, n - a._delay, 1)._lock = 0))
                : (s = n),
              n < 0 &&
                a._ts &&
                ((r -= n),
                ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                  ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)),
                o.shiftChildren(-n, !1, -Infinity),
                (s = 0)),
              a._end > r && a._ts && (r = a._end),
              (a = e);
          li(o, o === _e && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (t) {
        if ((_e._ts && (zn(_e, Qn(t, _e)), (Me = Xi.frame)), Xi.frame >= Tn)) {
          Tn += Ne.autoSleep || 120;
          var e = _e._first;
          if ((!e || !e._ts) && Ne.autoSleep && Xi._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Xi.sleep();
          }
        }
      }),
      e
    );
  })(er);
  Fn(nr.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var ir,
    rr,
    or = function (t, e, n, i, r, o, a) {
      var s,
        l,
        c,
        d,
        u,
        h,
        f,
        p,
        m = new Sr(this._pt, t, e, 0, 1, xr, null, r),
        g = 0,
        v = 0;
      for (
        m.b = n,
          m.e = i,
          n += "",
          (f = ~(i += "").indexOf("random(")) && (i = Ei(i)),
          o && (o((p = [n, i]), t, e), (n = p[0]), (i = p[1])),
          l = n.match(on) || [];
        (s = on.exec(i));

      )
        (d = s[0]),
          (u = i.substring(g, s.index)),
          c ? (c = (c + 1) % 5) : "rgba(" === u.substr(-5) && (c = 1),
          d !== l[v++] &&
            ((h = parseFloat(l[v - 1]) || 0),
            (m._pt = {
              _next: m._pt,
              p: u || 1 === v ? u : ",",
              s: h,
              c: "=" === d.charAt(1) ? Ln(h, d) - h : parseFloat(d) - h,
              m: c && c < 4 ? Math.round : 0,
            }),
            (g = on.lastIndex));
      return (
        (m.c = g < i.length ? i.substring(g, i.length) : ""),
        (m.fp = a),
        (an.test(i) || f) && (m.e = 0),
        (this._pt = m),
        m
      );
    },
    ar = function (t, e, n, i, r, o, a, s, l, c) {
      Ue(i) && (i = i(r || 0, t, o));
      var d,
        u = t[e],
        h =
          "get" !== n
            ? n
            : Ue(u)
            ? l
              ? t[
                  e.indexOf("set") || !Ue(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : u,
        f = Ue(u) ? (l ? gr : mr) : pr;
      if (
        (Ze(i) &&
          (~i.indexOf("random(") && (i = Ei(i)),
          "=" === i.charAt(1) &&
            ((d = Ln(h, i) + (mi(h) || 0)) || 0 === d) &&
            (i = d)),
        !c || h !== i || rr)
      )
        return isNaN(h * i) || "" === i
          ? (!u && !(e in t) && hn(e, i),
            or.call(this, t, e, h, i, f, s || Ne.stringFilter, l))
          : ((d = new Sr(
              this._pt,
              t,
              e,
              +h || 0,
              i - (h || 0),
              "boolean" == typeof u ? wr : yr,
              0,
              f
            )),
            l && (d.fp = l),
            a && d.modifier(a, this, t),
            (this._pt = d));
    },
    sr = function (t, e, n, i, r, o) {
      var a, s, l, c;
      if (
        kn[t] &&
        !1 !==
          (a = new kn[t]()).init(
            r,
            a.rawVars
              ? e[t]
              : (function (t, e, n, i, r) {
                  if (
                    (Ue(t) && (t = dr(t, r, e, n, i)),
                    !$e(t) || (t.style && t.nodeType) || tn(t) || Qe(t))
                  )
                    return Ze(t) ? dr(t, r, e, n, i) : t;
                  var o,
                    a = {};
                  for (o in t) a[o] = dr(t[o], r, e, n, i);
                  return a;
                })(e[t], i, r, o, n),
            n,
            i,
            o
          ) &&
        ((n._pt = s = new Sr(n._pt, r, t, 0, 1, a.render, a, 0, a.priority)),
        n !== Oe)
      )
        for (l = n._ptLookup[n._targets.indexOf(r)], c = a._props.length; c--; )
          l[a._props[c]] = s;
      return a;
    },
    lr = function t(e, n, i) {
      var r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        h,
        f,
        p,
        m,
        g,
        v = e.vars,
        b = v.ease,
        y = v.startAt,
        w = v.immediateRender,
        x = v.lazy,
        k = v.onUpdate,
        _ = v.onUpdateParams,
        T = v.callbackScope,
        C = v.runBackwards,
        E = v.yoyoEase,
        S = v.keyframes,
        M = v.autoRevert,
        O = e._dur,
        P = e._startAt,
        A = e._targets,
        R = e.parent,
        L = R && "nested" === R.data ? R.vars.targets : A,
        D = "auto" === e._overwrite && !we,
        N = e.timeline;
      if (
        (N && (!S || !b) && (b = "none"),
        (e._ease = $i(b, ze.ease)),
        (e._yEase = E ? qi($i(!0 === E ? b : E, ze.ease)) : 0),
        E &&
          e._yoyo &&
          !e._repeat &&
          ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
        (e._from = !N && !!v.runBackwards),
        !N || (S && !v.stagger))
      ) {
        if (
          ((m = (u = A[0] ? Mn(A[0]).harness : 0) && v[u.prop]),
          (r = Hn(v, yn)),
          P &&
            (P._zTime < 0 && P.progress(1),
            n < 0 && C && w && !M
              ? P.render(-1, !0)
              : P.revert(C && O ? vn : gn),
            (P._lazy = 0)),
          y)
        ) {
          if (
            (Un(
              (e._startAt = fr.set(
                A,
                Fn(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: R,
                    immediateRender: !0,
                    lazy: !P && Ke(x),
                    startAt: null,
                    delay: 0,
                    onUpdate: k,
                    onUpdateParams: _,
                    callbackScope: T,
                    stagger: 0,
                  },
                  y
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (xe || (!w && !M)) && e._startAt.revert(vn),
            w && O && n <= 0 && i <= 0)
          )
            return void (n && (e._zTime = n));
        } else if (C && O && !P)
          if (
            (n && (w = !1),
            (a = Fn(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: w && !P && Ke(x),
                immediateRender: w,
                stagger: 0,
                parent: R,
              },
              r
            )),
            m && (a[u.prop] = m),
            Un((e._startAt = fr.set(A, a))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (xe ? e._startAt.revert(vn) : e._startAt.render(-1, !0)),
            (e._zTime = n),
            w)
          ) {
            if (!n) return;
          } else t(e._startAt, Be, Be);
        for (
          e._pt = e._ptCache = 0, x = (O && Ke(x)) || (x && !O), o = 0;
          o < A.length;
          o++
        ) {
          if (
            ((d = (l = A[o])._gsap || Sn(A)[o]._gsap),
            (e._ptLookup[o] = f = {}),
            xn[d.id] && wn.length && Nn(),
            (p = L === A ? o : L.indexOf(l)),
            u &&
              !1 !== (h = new u()).init(l, m || r, e, p, L) &&
              ((e._pt = s =
                new Sr(e._pt, l, h.name, 0, 1, h.render, h, 0, h.priority)),
              h._props.forEach(function (t) {
                f[t] = s;
              }),
              h.priority && (c = 1)),
            !u || m)
          )
            for (a in r)
              kn[a] && (h = sr(a, r, e, p, l, L))
                ? h.priority && (c = 1)
                : (f[a] = s =
                    ar.call(e, l, a, "get", r[a], p, L, 0, v.stringFilter));
          e._op && e._op[o] && e.kill(l, e._op[o]),
            D &&
              e._pt &&
              ((ir = e),
              _e.killTweensOf(l, f, e.globalTime(n)),
              (g = !e.parent),
              (ir = 0)),
            e._pt && x && (xn[d.id] = 1);
        }
        c && Er(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = k),
        (e._initted = (!e._op || e._pt) && !g),
        S && n <= 0 && N.render(Ie, !0, !0);
    },
    cr = function (t, e, n, i) {
      var r,
        o,
        a = e.ease || i || "power1.inOut";
      if (tn(e))
        (o = n[t] || (n[t] = [])),
          e.forEach(function (t, n) {
            return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: a });
          });
      else
        for (r in e)
          (o = n[r] || (n[r] = [])),
            "ease" === r || o.push({ t: parseFloat(t), v: e[r], e: a });
    },
    dr = function (t, e, n, i, r) {
      return Ue(t)
        ? t.call(e, n, i, r)
        : Ze(t) && ~t.indexOf("random(")
        ? Ei(t)
        : t;
    },
    ur = En + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    hr = {};
  Pn(ur + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (hr[t] = 1);
  });
  var fr = (function (t) {
    function e(e, n, i, r) {
      var o;
      "number" == typeof n && ((i.duration = n), (n = i), (i = null));
      var a,
        s,
        l,
        c,
        d,
        u,
        h,
        f,
        p = (o = t.call(this, r ? n : Yn(n)) || this).vars,
        m = p.duration,
        g = p.delay,
        v = p.immediateRender,
        b = p.stagger,
        y = p.overwrite,
        w = p.keyframes,
        x = p.defaults,
        k = p.scrollTrigger,
        _ = p.yoyoEase,
        T = n.parent || _e,
        C = (tn(e) || Qe(e) ? qe(e[0]) : "length" in n) ? [e] : bi(e);
      if (
        ((o._targets = C.length
          ? Sn(C)
          : fn(
              "GSAP target " + e + " not found. https://greensock.com",
              !Ne.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = y),
        w || b || Je(m) || Je(g))
      ) {
        if (
          ((n = o.vars),
          (a = o.timeline =
            new nr({
              data: "nested",
              defaults: x || {},
              targets: T && "nested" === T.data ? T.vars.targets : C,
            })).kill(),
          (a.parent = a._dp = be(o)),
          (a._start = 0),
          b || Je(m) || Je(g))
        ) {
          if (((c = C.length), (h = b && xi(b)), $e(b)))
            for (d in b) ~ur.indexOf(d) && (f || (f = {}), (f[d] = b[d]));
          for (s = 0; s < c; s++)
            ((l = Hn(n, hr)).stagger = 0),
              _ && (l.yoyoEase = _),
              f && jn(l, f),
              (u = C[s]),
              (l.duration = +dr(m, be(o), s, u, C)),
              (l.delay = (+dr(g, be(o), s, u, C) || 0) - o._delay),
              !b &&
                1 === c &&
                l.delay &&
                ((o._delay = g = l.delay), (o._start += g), (l.delay = 0)),
              a.to(u, l, h ? h(s, u, C) : 0),
              (a._ease = Yi.none);
          a.duration() ? (m = g = 0) : (o.timeline = 0);
        } else if (w) {
          Yn(Fn(a.vars.defaults, { ease: "none" })),
            (a._ease = $i(w.ease || n.ease || "none"));
          var E,
            S,
            M,
            O = 0;
          if (tn(w))
            w.forEach(function (t) {
              return a.to(C, t, ">");
            }),
              a.duration();
          else {
            for (d in ((l = {}), w))
              "ease" === d || "easeEach" === d || cr(d, w[d], l, w.easeEach);
            for (d in l)
              for (
                E = l[d].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  O = 0,
                  s = 0;
                s < E.length;
                s++
              )
                ((M = {
                  ease: (S = E[s]).e,
                  duration: ((S.t - (s ? E[s - 1].t : 0)) / 100) * m,
                })[d] = S.v),
                  a.to(C, M, O),
                  (O += M.duration);
            a.duration() < m && a.to({}, { duration: m - a.duration() });
          }
        }
        m || o.duration((m = a.duration()));
      } else o.timeline = 0;
      return (
        !0 !== y || we || ((ir = be(o)), _e.killTweensOf(C), (ir = 0)),
        ii(T, be(o), i),
        n.reversed && o.reverse(),
        n.paused && o.paused(!0),
        (v ||
          (!m &&
            !w &&
            o._start === Rn(T._time) &&
            Ke(v) &&
            Kn(be(o)) &&
            "nested" !== T.data)) &&
          ((o._tTime = -Be), o.render(Math.max(0, -g) || 0)),
        k && ri(be(o), k),
        o
      );
    }
    ye(e, t);
    var n = e.prototype;
    return (
      (n.render = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          c,
          d,
          u,
          h = this._time,
          f = this._tDur,
          p = this._dur,
          m = t < 0,
          g = t > f - Be && !m ? f : t < Be ? 0 : t;
        if (p) {
          if (
            g !== this._tTime ||
            !t ||
            n ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== m)
          ) {
            if (((i = g), (d = this.timeline), this._repeat)) {
              if (((a = p + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * a + t, e, n);
              if (
                ((i = Rn(g % a)),
                g === f
                  ? ((o = this._repeat), (i = p))
                  : ((o = ~~(g / a)) && o === g / a && ((i = p), o--),
                    i > p && (i = p)),
                (l = this._yoyo && 1 & o) && ((u = this._yEase), (i = p - i)),
                (s = Jn(this._tTime, a)),
                i === h && !n && this._initted)
              )
                return (this._tTime = g), this;
              o !== s &&
                (d && this._yEase && Wi(d, l),
                !this.vars.repeatRefresh ||
                  l ||
                  this._lock ||
                  ((this._lock = n = 1),
                  (this.render(Rn(a * o), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (oi(this, m ? t : i, n, e, g)) return (this._tTime = 0), this;
              if (h !== this._time) return this;
              if (p !== this._dur) return this.render(t, e, n);
            }
            if (
              ((this._tTime = g),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = c = (u || this._ease)(i / p)),
              this._from && (this.ratio = c = 1 - c),
              i && !h && !e && (Oi(this, "onStart"), this._tTime !== g))
            )
              return this;
            for (r = this._pt; r; ) r.r(c, r.d), (r = r._next);
            (d &&
              d.render(
                t < 0 ? t : !i && l ? -Be : d._dur * d._ease(i / this._dur),
                e,
                n
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (m && $n(this, t, 0, n), Oi(this, "onUpdate")),
              this._repeat &&
                o !== s &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                Oi(this, "onRepeat"),
              (g !== this._tDur && g) ||
                this._tTime !== g ||
                (m && !this._onUpdate && $n(this, t, 0, !0),
                (t || !p) &&
                  ((g === this._tDur && this._ts > 0) ||
                    (!g && this._ts < 0)) &&
                  Un(this, 1),
                e ||
                  (m && !h) ||
                  !(g || h || l) ||
                  (Oi(this, g === f ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(g < f && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, n, i) {
            var r,
              o,
              a,
              s = t.ratio,
              l =
                e < 0 ||
                (!e &&
                  ((!t._start && ai(t) && (t._initted || !si(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !si(t))))
                  ? 0
                  : 1,
              c = t._rDelay,
              d = 0;
            if (
              (c &&
                t._repeat &&
                ((d = pi(0, t._tDur, e)),
                (o = Jn(d, c)),
                t._yoyo && 1 & o && (l = 1 - l),
                o !== Jn(t._tTime, c) &&
                  ((s = 1 - l),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              l !== s || xe || i || t._zTime === Be || (!e && t._zTime))
            ) {
              if (!t._initted && oi(t, e, i, n, d)) return;
              for (
                a = t._zTime,
                  t._zTime = e || (n ? Be : 0),
                  n || (n = e && !a),
                  t.ratio = l,
                  t._from && (l = 1 - l),
                  t._time = 0,
                  t._tTime = d,
                  r = t._pt;
                r;

              )
                r.r(l, r.d), (r = r._next);
              e < 0 && $n(t, e, 0, !0),
                t._onUpdate && !n && Oi(t, "onUpdate"),
                d && t._repeat && !n && t.parent && Oi(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === l &&
                  (l && Un(t, 1),
                  n ||
                    xe ||
                    (Oi(t, l ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, n);
        return this;
      }),
      (n.targets = function () {
        return this._targets;
      }),
      (n.invalidate = function (e) {
        return (
          (!e || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(e),
          t.prototype.invalidate.call(this, e)
        );
      }),
      (n.resetTo = function (t, e, n, i) {
        Pe || Xi.wake(), this._ts || this.play();
        var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || lr(this, r),
          (function (t, e, n, i, r, o, a) {
            var s,
              l,
              c,
              d,
              u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!u)
              for (
                u = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
                d--;

              ) {
                if ((s = c[d][e]) && s.d && s.d._pt)
                  for (s = s.d._pt; s && s.p !== e && s.fp !== e; ) s = s._next;
                if (!s)
                  return (rr = 1), (t.vars[e] = "+=0"), lr(t, a), (rr = 0), 1;
                u.push(s);
              }
            for (d = u.length; d--; )
              ((s = (l = u[d])._pt || l).s =
                (!i && 0 !== i) || r ? s.s + (i || 0) + o * s.c : i),
                (s.c = n - s.s),
                l.e && (l.e = An(n) + mi(l.e)),
                l.b && (l.b = s.s + mi(l.b));
          })(this, t, e, n, i, this._ease(r / this._dur), r)
            ? this.resetTo(t, e, n, i)
            : (ei(this, 0),
              this.parent ||
                Vn(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (n.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? Pi(this) : this;
        if (this.timeline) {
          var n = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, ir && !0 !== ir.vars.overwrite)
              ._first || Pi(this),
            this.parent &&
              n !== this.timeline.totalDuration() &&
              li(this, (this._dur * this.timeline._tDur) / n, 0, 1),
            this
          );
        }
        var i,
          r,
          o,
          a,
          s,
          l,
          c,
          d = this._targets,
          u = t ? bi(t) : d,
          h = this._ptLookup,
          f = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var n = t.length, i = n === e.length;
              i && n-- && t[n] === e[n];

            );
            return n < 0;
          })(d, u)
        )
          return "all" === e && (this._pt = 0), Pi(this);
        for (
          i = this._op = this._op || [],
            "all" !== e &&
              (Ze(e) &&
                ((s = {}),
                Pn(e, function (t) {
                  return (s[t] = 1);
                }),
                (e = s)),
              (e = (function (t, e) {
                var n,
                  i,
                  r,
                  o,
                  a = t[0] ? Mn(t[0]).harness : 0,
                  s = a && a.aliases;
                if (!s) return e;
                for (i in ((n = jn({}, e)), s))
                  if ((i in n))
                    for (r = (o = s[i].split(",")).length; r--; )
                      n[o[r]] = n[i];
                return n;
              })(d, e))),
            c = d.length;
          c--;

        )
          if (~u.indexOf(d[c]))
            for (s in ((r = h[c]),
            "all" === e
              ? ((i[c] = e), (a = r), (o = {}))
              : ((o = i[c] = i[c] || {}), (a = e)),
            a))
              (l = r && r[s]) &&
                (("kill" in l.d && !0 !== l.d.kill(s)) || Zn(this, l, "_pt"),
                delete r[s]),
                "all" !== o && (o[s] = 1);
        return this._initted && !this._pt && f && Pi(this), this;
      }),
      (e.to = function (t, n) {
        return new e(t, n, arguments[2]);
      }),
      (e.from = function (t, e) {
        return hi(1, arguments);
      }),
      (e.delayedCall = function (t, n, i, r) {
        return new e(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: i,
          onReverseCompleteParams: i,
          callbackScope: r,
        });
      }),
      (e.fromTo = function (t, e, n) {
        return hi(2, arguments);
      }),
      (e.set = function (t, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
      }),
      (e.killTweensOf = function (t, e, n) {
        return _e.killTweensOf(t, e, n);
      }),
      e
    );
  })(er);
  Fn(fr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Pn("staggerTo,staggerFrom,staggerFromTo", function (t) {
      fr[t] = function () {
        var e = new nr(),
          n = gi.call(arguments, 0);
        return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
      };
    });
  var pr = function (t, e, n) {
      return (t[e] = n);
    },
    mr = function (t, e, n) {
      return t[e](n);
    },
    gr = function (t, e, n, i) {
      return t[e](i.fp, n);
    },
    vr = function (t, e, n) {
      return t.setAttribute(e, n);
    },
    br = function (t, e) {
      return Ue(t[e]) ? mr : We(t[e]) && t.setAttribute ? vr : pr;
    },
    yr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    wr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    xr = function (t, e) {
      var n = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; n; )
          (i =
            n.p +
            (n.m
              ? n.m(n.s + n.c * t)
              : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
            i),
            (n = n._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    kr = function (t, e) {
      for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
    },
    _r = function (t, e, n, i) {
      for (var r, o = this._pt; o; )
        (r = o._next), o.p === i && o.modifier(t, e, n), (o = r);
    },
    Tr = function (t) {
      for (var e, n, i = this._pt; i; )
        (n = i._next),
          (i.p === t && !i.op) || i.op === t
            ? Zn(this, i, "_pt")
            : i.dep || (e = 1),
          (i = n);
      return !e;
    },
    Cr = function (t, e, n, i) {
      i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
    },
    Er = function (t) {
      for (var e, n, i, r, o = t._pt; o; ) {
        for (e = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
        (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o),
          (o._next = n) ? (n._prev = o) : (r = o),
          (o = e);
      }
      t._pt = i;
    },
    Sr = (function () {
      function t(t, e, n, i, r, o, a, s, l) {
        (this.t = e),
          (this.s = i),
          (this.c = r),
          (this.p = n),
          (this.r = o || yr),
          (this.d = a || this),
          (this.set = s || pr),
          (this.pr = l || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = Cr),
            (this.m = t),
            (this.mt = n),
            (this.tween = e);
        }),
        t
      );
    })();
  Pn(
    En +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (yn[t] = 1);
    }
  ),
    (cn.TweenMax = cn.TweenLite = fr),
    (cn.TimelineLite = cn.TimelineMax = nr),
    (_e = new nr({
      sortChildren: !1,
      defaults: ze,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ne.stringFilter = ji);
  var Mr = [],
    Or = {},
    Pr = [],
    Ar = 0,
    Rr = function (t) {
      return (Or[t] || Pr).map(function (t) {
        return t();
      });
    },
    Lr = function () {
      var t = Date.now(),
        e = [];
      t - Ar > 2 &&
        (Rr("matchMediaInit"),
        Mr.forEach(function (t) {
          var n,
            i,
            r,
            o,
            a = t.queries,
            s = t.conditions;
          for (i in a)
            (n = Te.matchMedia(a[i]).matches) && (r = 1),
              n !== s[i] && ((s[i] = n), (o = 1));
          o && (t.revert(), r && e.push(t));
        }),
        Rr("matchMediaRevert"),
        e.forEach(function (t) {
          return t.onMatch(t);
        }),
        (Ar = t),
        Rr("matchMedia"));
    },
    Dr = (function () {
      function t(t, e) {
        (this.selector = e && yi(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          t && this.add(t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, n) {
          Ue(t) && ((n = e), (e = t), (t = Ue));
          var i = this,
            r = function () {
              var t,
                r = ke,
                o = i.selector;
              return (
                r && r !== i && r.data.push(i),
                n && (i.selector = yi(n)),
                (ke = i),
                (t = e.apply(i, arguments)),
                Ue(t) && i._r.push(t),
                (ke = r),
                (i.selector = o),
                (i.isReverted = !1),
                t
              );
            };
          return (i.last = r), t === Ue ? r(i) : t ? (i[t] = r) : r;
        }),
        (e.ignore = function (t) {
          var e = ke;
          (ke = null), t(this), (ke = e);
        }),
        (e.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (n) {
              return n instanceof t
                ? e.push.apply(e, n.getTweens())
                : n instanceof fr &&
                    !(n.parent && "nested" === n.parent.data) &&
                    e.push(n);
            }),
            e
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (t, e) {
          var n = this;
          if (t) {
            var i = this.getTweens();
            this.data.forEach(function (t) {
              "isFlip" === t.data &&
                (t.revert(),
                t.getChildren(!0, !0, !1).forEach(function (t) {
                  return i.splice(i.indexOf(t), 1);
                }));
            }),
              i
                .map(function (t) {
                  return { g: t.globalTime(0), t };
                })
                .sort(function (t, e) {
                  return e.g - t.g || -1;
                })
                .forEach(function (e) {
                  return e.t.revert(t);
                }),
              this.data.forEach(function (e) {
                return !(e instanceof er) && e.revert && e.revert(t);
              }),
              this._r.forEach(function (e) {
                return e(t, n);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (t) {
              return t.kill && t.kill();
            });
          if ((this.clear(), e)) {
            var r = Mr.indexOf(this);
            ~r && Mr.splice(r, 1);
          }
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        t
      );
    })(),
    Nr = (function () {
      function t(t) {
        (this.contexts = []), (this.scope = t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, n) {
          $e(t) || (t = { matches: t });
          var i,
            r,
            o,
            a = new Dr(0, n || this.scope),
            s = (a.conditions = {});
          for (r in (this.contexts.push(a),
          (e = a.add("onMatch", e)),
          (a.queries = t),
          t))
            "all" === r
              ? (o = 1)
              : (i = Te.matchMedia(t[r])) &&
                (Mr.indexOf(a) < 0 && Mr.push(a),
                (s[r] = i.matches) && (o = 1),
                i.addListener
                  ? i.addListener(Lr)
                  : i.addEventListener("change", Lr));
          return o && e(a), this;
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        (e.kill = function (t) {
          this.contexts.forEach(function (e) {
            return e.kill(t, !0);
          });
        }),
        t
      );
    })(),
    zr = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        e.forEach(function (t) {
          return Ai(t);
        });
      },
      timeline: function (t) {
        return new nr(t);
      },
      getTweensOf: function (t, e) {
        return _e.getTweensOf(t, e);
      },
      getProperty: function (t, e, n, i) {
        Ze(t) && (t = bi(t)[0]);
        var r = Mn(t || {}).get,
          o = n ? Bn : In;
        return (
          "native" === n && (n = ""),
          t
            ? e
              ? o(((kn[e] && kn[e].get) || r)(t, e, n, i))
              : function (e, n, i) {
                  return o(((kn[e] && kn[e].get) || r)(t, e, n, i));
                }
            : t
        );
      },
      quickSetter: function (t, e, n) {
        if ((t = bi(t)).length > 1) {
          var i = t.map(function (t) {
              return Fr.quickSetter(t, e, n);
            }),
            r = i.length;
          return function (t) {
            for (var e = r; e--; ) i[e](t);
          };
        }
        t = t[0] || {};
        var o = kn[e],
          a = Mn(t),
          s = (a.harness && (a.harness.aliases || {})[e]) || e,
          l = o
            ? function (e) {
                var i = new o();
                (Oe._pt = 0),
                  i.init(t, n ? e + n : e, Oe, 0, [t]),
                  i.render(1, i),
                  Oe._pt && kr(1, Oe);
              }
            : a.set(t, s);
        return o
          ? l
          : function (e) {
              return l(t, s, n ? e + n : e, a, 1);
            };
      },
      quickTo: function (t, e, n) {
        var i,
          r = Fr.to(
            t,
            jn((((i = {})[e] = "+=0.1"), (i.paused = !0), i), n || {})
          ),
          o = function (t, n, i) {
            return r.resetTo(e, t, n, i);
          };
        return (o.tween = r), o;
      },
      isTweening: function (t) {
        return _e.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = $i(t.ease, ze.ease)), Xn(ze, t || {});
      },
      config: function (t) {
        return Xn(Ne, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          n = t.effect,
          i = t.plugins,
          r = t.defaults,
          o = t.extendTimeline;
        (i || "").split(",").forEach(function (t) {
          return (
            t &&
            !kn[t] &&
            !cn[t] &&
            fn(e + " effect requires " + t + " plugin.")
          );
        }),
          (_n[e] = function (t, e, i) {
            return n(bi(t), Fn(e || {}, r), i);
          }),
          o &&
            (nr.prototype[e] = function (t, n, i) {
              return this.add(_n[e](t, $e(n) ? n : (i = n) && {}, this), i);
            });
      },
      registerEase: function (t, e) {
        Yi[t] = $i(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? $i(t, e) : Yi;
      },
      getById: function (t) {
        return _e.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var n,
          i,
          r = new nr(t);
        for (
          r.smoothChildTiming = Ke(t.smoothChildTiming),
            _e.remove(r),
            r._dp = 0,
            r._time = r._tTime = _e._time,
            n = _e._first;
          n;

        )
          (i = n._next),
            (!e &&
              !n._dur &&
              n instanceof fr &&
              n.vars.onComplete === n._targets[0]) ||
              ii(r, n, n._start - n._delay),
            (n = i);
        return ii(_e, r, 0), r;
      },
      context: function (t, e) {
        return t ? new Dr(t, e) : ke;
      },
      matchMedia: function (t) {
        return new Nr(t);
      },
      matchMediaRefresh: function () {
        return (
          Mr.forEach(function (t) {
            var e,
              n,
              i = t.conditions;
            for (n in i) i[n] && ((i[n] = !1), (e = 1));
            e && t.revert();
          }) || Lr()
        );
      },
      addEventListener: function (t, e) {
        var n = Or[t] || (Or[t] = []);
        ~n.indexOf(e) || n.push(e);
      },
      removeEventListener: function (t, e) {
        var n = Or[t],
          i = n && n.indexOf(e);
        i >= 0 && n.splice(i, 1);
      },
      utils: {
        wrap: function t(e, n, i) {
          var r = n - e;
          return tn(e)
            ? Ci(e, t(0, e.length), n)
            : fi(i, function (t) {
                return ((r + ((t - e) % r)) % r) + e;
              });
        },
        wrapYoyo: function t(e, n, i) {
          var r = n - e,
            o = 2 * r;
          return tn(e)
            ? Ci(e, t(0, e.length - 1), n)
            : fi(i, function (t) {
                return e + ((t = (o + ((t - e) % o)) % o || 0) > r ? o - t : t);
              });
        },
        distribute: xi,
        random: Ti,
        snap: _i,
        normalize: function (t, e, n) {
          return Si(t, e, 0, 1, n);
        },
        getUnit: mi,
        clamp: function (t, e, n) {
          return fi(n, function (n) {
            return pi(t, e, n);
          });
        },
        splitColor: Ni,
        toArray: bi,
        selector: yi,
        mapRange: Si,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (n) {
            return t(parseFloat(n)) + (e || mi(n));
          };
        },
        interpolate: function t(e, n, i, r) {
          var o = isNaN(e + n)
            ? 0
            : function (t) {
                return (1 - t) * e + t * n;
              };
          if (!o) {
            var a,
              s,
              l,
              c,
              d,
              u = Ze(e),
              h = {};
            if ((!0 === i && (r = 1) && (i = null), u))
              (e = { p: e }), (n = { p: n });
            else if (tn(e) && !tn(n)) {
              for (l = [], c = e.length, d = c - 2, s = 1; s < c; s++)
                l.push(t(e[s - 1], e[s]));
              c--,
                (o = function (t) {
                  t *= c;
                  var e = Math.min(d, ~~t);
                  return l[e](t - e);
                }),
                (i = n);
            } else r || (e = jn(tn(e) ? [] : {}, e));
            if (!l) {
              for (a in n) ar.call(h, e, a, "get", n[a]);
              o = function (t) {
                return kr(t, h) || (u ? e.p : e);
              };
            }
          }
          return fi(i, o);
        },
        shuffle: wi,
      },
      install: un,
      effects: _n,
      ticker: Xi,
      updateRoot: nr.updateRoot,
      plugins: kn,
      globalTimeline: _e,
      core: {
        PropTween: Sr,
        globals: pn,
        Tween: fr,
        Timeline: nr,
        Animation: er,
        getCache: Mn,
        _removeLinkedListItem: Zn,
        reverting: function () {
          return xe;
        },
        context: function (t) {
          return t && ke && (ke.data.push(t), (t._ctx = ke)), ke;
        },
        suppressOverwrites: function (t) {
          return (we = t);
        },
      },
    };
  Pn("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (zr[t] = fr[t]);
  }),
    Xi.add(nr.updateRoot),
    (Oe = zr.to({}, { duration: 0 }));
  var Ir = function (t, e) {
      for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
        n = n._next;
      return n;
    },
    Br = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, n, i) {
          i._onInit = function (t) {
            var i, r;
            if (
              (Ze(n) &&
                ((i = {}),
                Pn(n, function (t) {
                  return (i[t] = 1);
                }),
                (n = i)),
              e)
            ) {
              for (r in ((i = {}), n)) i[r] = e(n[r]);
              n = i;
            }
            !(function (t, e) {
              var n,
                i,
                r,
                o = t._targets;
              for (n in e)
                for (i = o.length; i--; )
                  (r = t._ptLookup[i][n]) &&
                    (r = r.d) &&
                    (r._pt && (r = Ir(r, n)),
                    r && r.modifier && r.modifier(e[n], t, o[i], n));
            })(t, n);
          };
        },
      };
    },
    Fr =
      zr.registerPlugin(
        {
          name: "attr",
          init: function (t, e, n, i, r) {
            var o, a, s;
            for (o in ((this.tween = n), e))
              (s = t.getAttribute(o) || ""),
                ((a = this.add(
                  t,
                  "setAttribute",
                  (s || 0) + "",
                  e[o],
                  i,
                  r,
                  0,
                  0,
                  o
                )).op = o),
                (a.b = s),
                this._props.push(o);
          },
          render: function (t, e) {
            for (var n = e._pt; n; )
              xe ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var n = e.length; n--; )
              this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
          },
        },
        Br("roundProps", ki),
        Br("modifiers"),
        Br("snap", _i)
      ) || zr;
  (fr.version = nr.version = Fr.version = "3.11.4"), (Se = 1), Ge() && Hi();
  Yi.Power0,
    Yi.Power1,
    Yi.Power2,
    Yi.Power3,
    Yi.Power4,
    Yi.Linear,
    Yi.Quad,
    Yi.Cubic,
    Yi.Quart,
    Yi.Quint,
    Yi.Strong,
    Yi.Elastic,
    Yi.Back,
    Yi.SteppedEase,
    Yi.Bounce,
    Yi.Sine,
    Yi.Expo,
    Yi.Circ;
  var jr,
    Xr,
    Hr,
    Yr,
    Vr,
    Zr,
    Ur,
    qr,
    Wr = {},
    $r = 180 / Math.PI,
    Kr = Math.PI / 180,
    Gr = Math.atan2,
    Jr = /([A-Z])/g,
    Qr = /(left|right|width|margin|padding|x)/i,
    to = /[\s,\(]\S/,
    eo = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    no = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    io = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    ro = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    oo = function (t, e) {
      var n = e.s + e.c * t;
      e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    ao = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    so = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    lo = function (t, e, n) {
      return (t.style[e] = n);
    },
    co = function (t, e, n) {
      return t.style.setProperty(e, n);
    },
    uo = function (t, e, n) {
      return (t._gsap[e] = n);
    },
    ho = function (t, e, n) {
      return (t._gsap.scaleX = t._gsap.scaleY = n);
    },
    fo = function (t, e, n, i, r) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
    },
    po = function (t, e, n, i, r) {
      var o = t._gsap;
      (o[e] = n), o.renderTransform(r, o);
    },
    mo = "transform",
    go = mo + "Origin",
    vo = function (t, e) {
      var n = this,
        i = this.target,
        r = i.style;
      if (t in Wr) {
        if (
          ((this.tfm = this.tfm || {}),
          "transform" !== t &&
            (~(t = eo[t] || t).indexOf(",")
              ? t.split(",").forEach(function (t) {
                  return (n.tfm[t] = No(i, t));
                })
              : (this.tfm[t] = i._gsap.x ? i._gsap[t] : No(i, t))),
          this.props.indexOf(mo) >= 0)
        )
          return;
        i._gsap.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(go, e, "")),
          (t = mo);
      }
      (r || e) && this.props.push(t, e, r[t]);
    },
    bo = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    yo = function () {
      var t,
        e,
        n = this.props,
        i = this.target,
        r = i.style,
        o = i._gsap;
      for (t = 0; t < n.length; t += 3)
        n[t + 1]
          ? (i[n[t]] = n[t + 2])
          : n[t + 2]
          ? (r[n[t]] = n[t + 2])
          : r.removeProperty(n[t].replace(Jr, "-$1").toLowerCase());
      if (this.tfm) {
        for (e in this.tfm) o[e] = this.tfm[e];
        o.svg &&
          (o.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          !(t = Ur()) || t.isStart || r[mo] || (bo(r), (o.uncache = 1));
      }
    },
    wo = function (t, e) {
      var n = { target: t, props: [], revert: yo, save: vo };
      return (
        e &&
          e.split(",").forEach(function (t) {
            return n.save(t);
          }),
        n
      );
    },
    xo = function (t, e) {
      var n = Xr.createElementNS
        ? Xr.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Xr.createElement(t);
      return n.style ? n : Xr.createElement(t);
    },
    ko = function t(e, n, i) {
      var r = getComputedStyle(e);
      return (
        r[n] ||
        r.getPropertyValue(n.replace(Jr, "-$1").toLowerCase()) ||
        r.getPropertyValue(n) ||
        (!i && t(e, To(n) || n, 1)) ||
        ""
      );
    },
    _o = "O,Moz,ms,Ms,Webkit".split(","),
    To = function (t, e, n) {
      var i = (e || Vr).style,
        r = 5;
      if (t in i && !n) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        r-- && !(_o[r] + t in i);

      );
      return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? _o[r] : "") + t;
    },
    Co = function () {
      "undefined" != typeof window &&
        window.document &&
        ((jr = window),
        (Xr = jr.document),
        (Hr = Xr.documentElement),
        (Vr = xo("div") || { style: {} }),
        xo("div"),
        (mo = To(mo)),
        (go = mo + "Origin"),
        (Vr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (qr = !!To("perspective")),
        (Ur = Fr.core.reverting),
        (Yr = 1));
    },
    Eo = function t(e) {
      var n,
        i = xo(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        r = this.parentNode,
        o = this.nextSibling,
        a = this.style.cssText;
      if (
        (Hr.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (n = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (n = this._gsapBBox());
      return (
        r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
        Hr.removeChild(i),
        (this.style.cssText = a),
        n
      );
    },
    So = function (t, e) {
      for (var n = e.length; n--; )
        if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
    },
    Mo = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (n) {
        e = Eo.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Eo ||
          (e = Eo.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +So(t, ["x", "cx", "x1"]) || 0,
              y: +So(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    Oo = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Mo(t));
    },
    Po = function (t, e) {
      if (e) {
        var n = t.style;
        e in Wr && e !== go && (e = mo),
          n.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              n.removeProperty(e.replace(Jr, "-$1").toLowerCase()))
            : n.removeAttribute(e);
      }
    },
    Ao = function (t, e, n, i, r, o) {
      var a = new Sr(t._pt, e, n, 0, 1, o ? so : ao);
      return (t._pt = a), (a.b = i), (a.e = r), t._props.push(n), a;
    },
    Ro = { deg: 1, rad: 1, turn: 1 },
    Lo = { grid: 1, flex: 1 },
    Do = function t(e, n, i, r) {
      var o,
        a,
        s,
        l,
        c = parseFloat(i) || 0,
        d = (i + "").trim().substr((c + "").length) || "px",
        u = Vr.style,
        h = Qr.test(n),
        f = "svg" === e.tagName.toLowerCase(),
        p = (f ? "client" : "offset") + (h ? "Width" : "Height"),
        m = 100,
        g = "px" === r,
        v = "%" === r;
      return r === d || !c || Ro[r] || Ro[d]
        ? c
        : ("px" !== d && !g && (c = t(e, n, i, "px")),
          (l = e.getCTM && Oo(e)),
          (!v && "%" !== d) || (!Wr[n] && !~n.indexOf("adius"))
            ? ((u[h ? "width" : "height"] = m + (g ? d : r)),
              (a =
                ~n.indexOf("adius") || ("em" === r && e.appendChild && !f)
                  ? e
                  : e.parentNode),
              l && (a = (e.ownerSVGElement || {}).parentNode),
              (a && a !== Xr && a.appendChild) || (a = Xr.body),
              (s = a._gsap) &&
              v &&
              s.width &&
              h &&
              s.time === Xi.time &&
              !s.uncache
                ? An((c / s.width) * m)
                : ((v || "%" === d) &&
                    !Lo[ko(a, "display")] &&
                    (u.position = ko(e, "position")),
                  a === e && (u.position = "static"),
                  a.appendChild(Vr),
                  (o = Vr[p]),
                  a.removeChild(Vr),
                  (u.position = "absolute"),
                  h && v && (((s = Mn(a)).time = Xi.time), (s.width = a[p])),
                  An(g ? (o * c) / m : o && c ? (m / o) * c : 0)))
            : ((o = l ? e.getBBox()[h ? "width" : "height"] : e[p]),
              An(v ? (c / o) * m : (c / 100) * o)));
    },
    No = function (t, e, n, i) {
      var r;
      return (
        Yr || Co(),
        e in eo &&
          "transform" !== e &&
          ~(e = eo[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Wr[e] && "transform" !== e
          ? ((r = Uo(t, i)),
            (r =
              "transformOrigin" !== e
                ? r[e]
                : r.svg
                ? r.origin
                : qo(ko(t, go)) + " " + r.zOrigin + "px"))
          : (!(r = t.style[e]) ||
              "auto" === r ||
              i ||
              ~(r + "").indexOf("calc(")) &&
            (r =
              (Fo[e] && Fo[e](t, e, n)) ||
              ko(t, e) ||
              On(t, e) ||
              ("opacity" === e ? 1 : 0)),
        n && !~(r + "").trim().indexOf(" ") ? Do(t, e, r, n) + n : r
      );
    },
    zo = function (t, e, n, i) {
      if (!n || "none" === n) {
        var r = To(e, t, 1),
          o = r && ko(t, r, 1);
        o && o !== n
          ? ((e = r), (n = o))
          : "borderColor" === e && (n = ko(t, "borderTopColor"));
      }
      var a,
        s,
        l,
        c,
        d,
        u,
        h,
        f,
        p,
        m,
        g,
        v = new Sr(this._pt, t.style, e, 0, 1, xr),
        b = 0,
        y = 0;
      if (
        ((v.b = n),
        (v.e = i),
        (n += ""),
        "auto" === (i += "") &&
          ((t.style[e] = i), (i = ko(t, e) || i), (t.style[e] = n)),
        ji((a = [n, i])),
        (i = a[1]),
        (l = (n = a[0]).match(rn) || []),
        (i.match(rn) || []).length)
      ) {
        for (; (s = rn.exec(i)); )
          (h = s[0]),
            (p = i.substring(b, s.index)),
            d
              ? (d = (d + 1) % 5)
              : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                (d = 1),
            h !== (u = l[y++] || "") &&
              ((c = parseFloat(u) || 0),
              (g = u.substr((c + "").length)),
              "=" === h.charAt(1) && (h = Ln(c, h) + g),
              (f = parseFloat(h)),
              (m = h.substr((f + "").length)),
              (b = rn.lastIndex - m.length),
              m ||
                ((m = m || Ne.units[e] || g),
                b === i.length && ((i += m), (v.e += m))),
              g !== m && (c = Do(t, e, u, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: p || 1 === y ? p : ",",
                s: c,
                c: f - c,
                m: (d && d < 4) || "zIndex" === e ? Math.round : 0,
              }));
        v.c = b < i.length ? i.substring(b, i.length) : "";
      } else v.r = "display" === e && "none" === i ? so : ao;
      return an.test(i) && (v.e = 0), (this._pt = v), v;
    },
    Io = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Bo = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var n,
          i,
          r,
          o = e.t,
          a = o.style,
          s = e.u,
          l = o._gsap;
        if ("all" === s || !0 === s) (a.cssText = ""), (i = 1);
        else
          for (r = (s = s.split(",")).length; --r > -1; )
            (n = s[r]),
              Wr[n] && ((i = 1), (n = "transformOrigin" === n ? go : mo)),
              Po(o, n);
        i &&
          (Po(o, mo),
          l &&
            (l.svg && o.removeAttribute("transform"),
            Uo(o, 1),
            (l.uncache = 1),
            bo(a)));
      }
    },
    Fo = {
      clearProps: function (t, e, n, i, r) {
        if ("isFromStart" !== r.data) {
          var o = (t._pt = new Sr(t._pt, e, n, 0, 0, Bo));
          return (o.u = i), (o.pr = -10), (o.tween = r), t._props.push(n), 1;
        }
      },
    },
    jo = [1, 0, 0, 1, 0, 0],
    Xo = {},
    Ho = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    Yo = function (t) {
      var e = ko(t, mo);
      return Ho(e) ? jo : e.substr(7).match(nn).map(An);
    },
    Vo = function (t, e) {
      var n,
        i,
        r,
        o,
        a = t._gsap || Mn(t),
        s = t.style,
        l = Yo(t);
      return a.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (r = t.transform.baseVal.consolidate().matrix).a,
            r.b,
            r.c,
            r.d,
            r.e,
            r.f,
          ]).join(",")
          ? jo
          : l
        : (l !== jo ||
            t.offsetParent ||
            t === Hr ||
            a.svg ||
            ((r = s.display),
            (s.display = "block"),
            ((n = t.parentNode) && t.offsetParent) ||
              ((o = 1), (i = t.nextElementSibling), Hr.appendChild(t)),
            (l = Yo(t)),
            r ? (s.display = r) : Po(t, "display"),
            o &&
              (i
                ? n.insertBefore(t, i)
                : n
                ? n.appendChild(t)
                : Hr.removeChild(t))),
          e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    },
    Zo = function (t, e, n, i, r, o) {
      var a,
        s,
        l,
        c = t._gsap,
        d = r || Vo(t, !0),
        u = c.xOrigin || 0,
        h = c.yOrigin || 0,
        f = c.xOffset || 0,
        p = c.yOffset || 0,
        m = d[0],
        g = d[1],
        v = d[2],
        b = d[3],
        y = d[4],
        w = d[5],
        x = e.split(" "),
        k = parseFloat(x[0]) || 0,
        _ = parseFloat(x[1]) || 0;
      n
        ? d !== jo &&
          (s = m * b - g * v) &&
          ((l = k * (-g / s) + _ * (m / s) - (m * w - g * y) / s),
          (k = k * (b / s) + _ * (-v / s) + (v * w - b * y) / s),
          (_ = l))
        : ((k = (a = Mo(t)).x + (~x[0].indexOf("%") ? (k / 100) * a.width : k)),
          (_ =
            a.y + (~(x[1] || x[0]).indexOf("%") ? (_ / 100) * a.height : _))),
        i || (!1 !== i && c.smooth)
          ? ((y = k - u),
            (w = _ - h),
            (c.xOffset = f + (y * m + w * v) - y),
            (c.yOffset = p + (y * g + w * b) - w))
          : (c.xOffset = c.yOffset = 0),
        (c.xOrigin = k),
        (c.yOrigin = _),
        (c.smooth = !!i),
        (c.origin = e),
        (c.originIsAbsolute = !!n),
        (t.style[go] = "0px 0px"),
        o &&
          (Ao(o, c, "xOrigin", u, k),
          Ao(o, c, "yOrigin", h, _),
          Ao(o, c, "xOffset", f, c.xOffset),
          Ao(o, c, "yOffset", p, c.yOffset)),
        t.setAttribute("data-svg-origin", k + " " + _);
    },
    Uo = function (t, e) {
      var n = t._gsap || new tr(t);
      if ("x" in n && !e && !n.uncache) return n;
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        h,
        f,
        p,
        m,
        g,
        v,
        b,
        y,
        w,
        x,
        k,
        _,
        T,
        C,
        E,
        S,
        M,
        O,
        P,
        A,
        R,
        L,
        D,
        N = t.style,
        z = n.scaleX < 0,
        I = "px",
        B = "deg",
        F = getComputedStyle(t),
        j = ko(t, go) || "0";
      return (
        (i = r = o = l = c = d = u = h = f = 0),
        (a = s = 1),
        (n.svg = !(!t.getCTM || !Oo(t))),
        F.translate &&
          (("none" === F.translate &&
            "none" === F.scale &&
            "none" === F.rotate) ||
            (N[mo] =
              ("none" !== F.translate
                ? "translate3d(" +
                  (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
              ("none" !== F.scale
                ? "scale(" + F.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== F[mo] ? F[mo] : "")),
          (N.scale = N.rotate = N.translate = "none")),
        (g = Vo(t, n.svg)),
        n.svg &&
          (n.uncache
            ? ((S = t.getBBox()),
              (j = n.xOrigin - S.x + "px " + (n.yOrigin - S.y) + "px"),
              (E = ""))
            : (E = !e && t.getAttribute("data-svg-origin")),
          Zo(t, E || j, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
        (p = n.xOrigin || 0),
        (m = n.yOrigin || 0),
        g !== jo &&
          ((w = g[0]),
          (x = g[1]),
          (k = g[2]),
          (_ = g[3]),
          (i = T = g[4]),
          (r = C = g[5]),
          6 === g.length
            ? ((a = Math.sqrt(w * w + x * x)),
              (s = Math.sqrt(_ * _ + k * k)),
              (l = w || x ? Gr(x, w) * $r : 0),
              (u = k || _ ? Gr(k, _) * $r + l : 0) &&
                (s *= Math.abs(Math.cos(u * Kr))),
              n.svg && ((i -= p - (p * w + m * k)), (r -= m - (p * x + m * _))))
            : ((D = g[6]),
              (R = g[7]),
              (O = g[8]),
              (P = g[9]),
              (A = g[10]),
              (L = g[11]),
              (i = g[12]),
              (r = g[13]),
              (o = g[14]),
              (c = (v = Gr(D, A)) * $r),
              v &&
                ((E = T * (b = Math.cos(-v)) + O * (y = Math.sin(-v))),
                (S = C * b + P * y),
                (M = D * b + A * y),
                (O = T * -y + O * b),
                (P = C * -y + P * b),
                (A = D * -y + A * b),
                (L = R * -y + L * b),
                (T = E),
                (C = S),
                (D = M)),
              (d = (v = Gr(-k, A)) * $r),
              v &&
                ((b = Math.cos(-v)),
                (L = _ * (y = Math.sin(-v)) + L * b),
                (w = E = w * b - O * y),
                (x = S = x * b - P * y),
                (k = M = k * b - A * y)),
              (l = (v = Gr(x, w)) * $r),
              v &&
                ((E = w * (b = Math.cos(v)) + x * (y = Math.sin(v))),
                (S = T * b + C * y),
                (x = x * b - w * y),
                (C = C * b - T * y),
                (w = E),
                (T = S)),
              c &&
                Math.abs(c) + Math.abs(l) > 359.9 &&
                ((c = l = 0), (d = 180 - d)),
              (a = An(Math.sqrt(w * w + x * x + k * k))),
              (s = An(Math.sqrt(C * C + D * D))),
              (v = Gr(T, C)),
              (u = Math.abs(v) > 2e-4 ? v * $r : 0),
              (f = L ? 1 / (L < 0 ? -L : L) : 0)),
          n.svg &&
            ((E = t.getAttribute("transform")),
            (n.forceCSS = t.setAttribute("transform", "") || !Ho(ko(t, mo))),
            E && t.setAttribute("transform", E))),
        Math.abs(u) > 90 &&
          Math.abs(u) < 270 &&
          (z
            ? ((a *= -1),
              (u += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((s *= -1), (u += u <= 0 ? 180 : -180))),
        (e = e || n.uncache),
        (n.x =
          i -
          ((n.xPercent =
            i &&
            ((!e && n.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * n.xPercent) / 100
            : 0) +
          I),
        (n.y =
          r -
          ((n.yPercent =
            r &&
            ((!e && n.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
            ? (t.offsetHeight * n.yPercent) / 100
            : 0) +
          I),
        (n.z = o + I),
        (n.scaleX = An(a)),
        (n.scaleY = An(s)),
        (n.rotation = An(l) + B),
        (n.rotationX = An(c) + B),
        (n.rotationY = An(d) + B),
        (n.skewX = u + B),
        (n.skewY = h + B),
        (n.transformPerspective = f + I),
        (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (N[go] = qo(j)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = Ne.force3D),
        (n.renderTransform = n.svg ? ta : qr ? Qo : $o),
        (n.uncache = 0),
        n
      );
    },
    qo = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Wo = function (t, e, n) {
      var i = mi(e);
      return An(parseFloat(e) + parseFloat(Do(t, "x", n + "px", i))) + i;
    },
    $o = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Qo(t, e);
    },
    Ko = "0deg",
    Go = "0px",
    Jo = ") ",
    Qo = function (t, e) {
      var n = e || this,
        i = n.xPercent,
        r = n.yPercent,
        o = n.x,
        a = n.y,
        s = n.z,
        l = n.rotation,
        c = n.rotationY,
        d = n.rotationX,
        u = n.skewX,
        h = n.skewY,
        f = n.scaleX,
        p = n.scaleY,
        m = n.transformPerspective,
        g = n.force3D,
        v = n.target,
        b = n.zOrigin,
        y = "",
        w = ("auto" === g && t && 1 !== t) || !0 === g;
      if (b && (d !== Ko || c !== Ko)) {
        var x,
          k = parseFloat(c) * Kr,
          _ = Math.sin(k),
          T = Math.cos(k);
        (k = parseFloat(d) * Kr),
          (x = Math.cos(k)),
          (o = Wo(v, o, _ * x * -b)),
          (a = Wo(v, a, -Math.sin(k) * -b)),
          (s = Wo(v, s, T * x * -b + b));
      }
      m !== Go && (y += "perspective(" + m + Jo),
        (i || r) && (y += "translate(" + i + "%, " + r + "%) "),
        (w || o !== Go || a !== Go || s !== Go) &&
          (y +=
            s !== Go || w
              ? "translate3d(" + o + ", " + a + ", " + s + ") "
              : "translate(" + o + ", " + a + Jo),
        l !== Ko && (y += "rotate(" + l + Jo),
        c !== Ko && (y += "rotateY(" + c + Jo),
        d !== Ko && (y += "rotateX(" + d + Jo),
        (u === Ko && h === Ko) || (y += "skew(" + u + ", " + h + Jo),
        (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + Jo),
        (v.style[mo] = y || "translate(0, 0)");
    },
    ta = function (t, e) {
      var n,
        i,
        r,
        o,
        a,
        s = e || this,
        l = s.xPercent,
        c = s.yPercent,
        d = s.x,
        u = s.y,
        h = s.rotation,
        f = s.skewX,
        p = s.skewY,
        m = s.scaleX,
        g = s.scaleY,
        v = s.target,
        b = s.xOrigin,
        y = s.yOrigin,
        w = s.xOffset,
        x = s.yOffset,
        k = s.forceCSS,
        _ = parseFloat(d),
        T = parseFloat(u);
      (h = parseFloat(h)),
        (f = parseFloat(f)),
        (p = parseFloat(p)) && ((f += p = parseFloat(p)), (h += p)),
        h || f
          ? ((h *= Kr),
            (f *= Kr),
            (n = Math.cos(h) * m),
            (i = Math.sin(h) * m),
            (r = Math.sin(h - f) * -g),
            (o = Math.cos(h - f) * g),
            f &&
              ((p *= Kr),
              (a = Math.tan(f - p)),
              (r *= a = Math.sqrt(1 + a * a)),
              (o *= a),
              p &&
                ((a = Math.tan(p)), (n *= a = Math.sqrt(1 + a * a)), (i *= a))),
            (n = An(n)),
            (i = An(i)),
            (r = An(r)),
            (o = An(o)))
          : ((n = m), (o = g), (i = r = 0)),
        ((_ && !~(d + "").indexOf("px")) || (T && !~(u + "").indexOf("px"))) &&
          ((_ = Do(v, "x", d, "px")), (T = Do(v, "y", u, "px"))),
        (b || y || w || x) &&
          ((_ = An(_ + b - (b * n + y * r) + w)),
          (T = An(T + y - (b * i + y * o) + x))),
        (l || c) &&
          ((a = v.getBBox()),
          (_ = An(_ + (l / 100) * a.width)),
          (T = An(T + (c / 100) * a.height))),
        (a =
          "matrix(" +
          n +
          "," +
          i +
          "," +
          r +
          "," +
          o +
          "," +
          _ +
          "," +
          T +
          ")"),
        v.setAttribute("transform", a),
        k && (v.style[mo] = a);
    },
    ea = function (t, e, n, i, r) {
      var o,
        a,
        s = 360,
        l = Ze(r),
        c = parseFloat(r) * (l && ~r.indexOf("rad") ? $r : 1) - i,
        d = i + c + "deg";
      return (
        l &&
          ("short" === (o = r.split("_")[1]) &&
            (c %= s) !== c % 180 &&
            (c += c < 0 ? s : -360),
          "cw" === o && c < 0
            ? (c = ((c + 36e9) % s) - ~~(c / s) * s)
            : "ccw" === o && c > 0 && (c = ((c - 36e9) % s) - ~~(c / s) * s)),
        (t._pt = a = new Sr(t._pt, e, n, i, c, io)),
        (a.e = d),
        (a.u = "deg"),
        t._props.push(n),
        a
      );
    },
    na = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    },
    ia = function (t, e, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        d = na({}, n._gsap),
        u = n.style;
      for (r in (d.svg
        ? ((o = n.getAttribute("transform")),
          n.setAttribute("transform", ""),
          (u[mo] = e),
          (i = Uo(n, 1)),
          Po(n, mo),
          n.setAttribute("transform", o))
        : ((o = getComputedStyle(n)[mo]),
          (u[mo] = e),
          (i = Uo(n, 1)),
          (u[mo] = o)),
      Wr))
        (o = d[r]) !== (a = i[r]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
          ((s = mi(o) !== (c = mi(a)) ? Do(n, r, o, c) : parseFloat(o)),
          (l = parseFloat(a)),
          (t._pt = new Sr(t._pt, i, r, s, l - s, no)),
          (t._pt.u = c || 0),
          t._props.push(r));
      na(i, d);
    };
  Pn("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
      i = "Right",
      r = "Bottom",
      o = "Left",
      a = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function (
        n
      ) {
        return e < 2 ? t + n : "border" + n + t;
      });
    Fo[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
      var o, s;
      if (arguments.length < 4)
        return (
          (o = a.map(function (e) {
            return No(t, e, n);
          })),
          5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
        );
      (o = (i + "").split(" ")),
        (s = {}),
        a.forEach(function (t, e) {
          return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
        }),
        t.init(e, s, r);
    };
  });
  var ra,
    oa,
    aa,
    sa = {
      name: "css",
      register: Co,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, n, i, r) {
        var o,
          a,
          s,
          l,
          c,
          d,
          u,
          h,
          f,
          p,
          m,
          g,
          v,
          b,
          y,
          w,
          x,
          k,
          _,
          T,
          C = this._props,
          E = t.style,
          S = n.vars.startAt;
        for (u in (Yr || Co(),
        (this.styles = this.styles || wo(t)),
        (w = this.styles.props),
        (this.tween = n),
        e))
          if (
            "autoRound" !== u &&
            ((a = e[u]), !kn[u] || !sr(u, e, n, i, t, r))
          )
            if (
              ((c = typeof a),
              (d = Fo[u]),
              "function" === c && (c = typeof (a = a.call(n, i, t, r))),
              "string" === c && ~a.indexOf("random(") && (a = Ei(a)),
              d)
            )
              d(this, t, u, a, n) && (y = 1);
            else if ("--" === u.substr(0, 2))
              (o = (getComputedStyle(t).getPropertyValue(u) + "").trim()),
                (a += ""),
                (Bi.lastIndex = 0),
                Bi.test(o) || ((h = mi(o)), (f = mi(a))),
                f ? h !== f && (o = Do(t, u, o, f) + f) : h && (a += h),
                this.add(E, "setProperty", o, a, i, r, 0, 0, u),
                C.push(u),
                w.push(u, 0, E[u]);
            else if ("undefined" !== c) {
              if (
                (S && u in S
                  ? ((o =
                      "function" == typeof S[u] ? S[u].call(n, i, t, r) : S[u]),
                    Ze(o) && ~o.indexOf("random(") && (o = Ei(o)),
                    mi(o + "") || (o += Ne.units[u] || mi(No(t, u)) || ""),
                    "=" === (o + "").charAt(1) && (o = No(t, u)))
                  : (o = No(t, u)),
                (l = parseFloat(o)),
                (p = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) &&
                  (a = a.substr(2)),
                (s = parseFloat(a)),
                u in eo &&
                  ("autoAlpha" === u &&
                    (1 === l &&
                      "hidden" === No(t, "visibility") &&
                      s &&
                      (l = 0),
                    w.push("visibility", 0, E.visibility),
                    Ao(
                      this,
                      E,
                      "visibility",
                      l ? "inherit" : "hidden",
                      s ? "inherit" : "hidden",
                      !s
                    )),
                  "scale" !== u &&
                    "transform" !== u &&
                    ~(u = eo[u]).indexOf(",") &&
                    (u = u.split(",")[0])),
                (m = u in Wr))
              )
                if (
                  (this.styles.save(u),
                  g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) ||
                      Uo(t, e.parseTransform),
                    (b = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new Sr(
                        this._pt,
                        E,
                        mo,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === u)
                )
                  (this._pt = new Sr(
                    this._pt,
                    v,
                    "scaleY",
                    v.scaleY,
                    (p ? Ln(v.scaleY, p + s) : s) - v.scaleY || 0,
                    no
                  )),
                    (this._pt.u = 0),
                    C.push("scaleY", u),
                    (u += "X");
                else {
                  if ("transformOrigin" === u) {
                    w.push(go, 0, E[go]),
                      (k = void 0),
                      (_ = void 0),
                      (T = void 0),
                      (k = (x = a).split(" ")),
                      (_ = k[0]),
                      (T = k[1] || "50%"),
                      ("top" !== _ &&
                        "bottom" !== _ &&
                        "left" !== T &&
                        "right" !== T) ||
                        ((x = _), (_ = T), (T = x)),
                      (k[0] = Io[_] || _),
                      (k[1] = Io[T] || T),
                      (a = k.join(" ")),
                      v.svg
                        ? Zo(t, a, 0, b, 0, this)
                        : ((f = parseFloat(a.split(" ")[2]) || 0) !==
                            v.zOrigin && Ao(this, v, "zOrigin", v.zOrigin, f),
                          Ao(this, E, u, qo(o), qo(a)));
                    continue;
                  }
                  if ("svgOrigin" === u) {
                    Zo(t, a, 1, b, 0, this);
                    continue;
                  }
                  if (u in Xo) {
                    ea(this, v, u, l, p ? Ln(l, p + a) : a);
                    continue;
                  }
                  if ("smoothOrigin" === u) {
                    Ao(this, v, "smooth", v.smooth, a);
                    continue;
                  }
                  if ("force3D" === u) {
                    v[u] = a;
                    continue;
                  }
                  if ("transform" === u) {
                    ia(this, a, t);
                    continue;
                  }
                }
              else u in E || (u = To(u) || u);
              if (
                m ||
                ((s || 0 === s) && (l || 0 === l) && !to.test(a) && u in E)
              )
                s || (s = 0),
                  (h = (o + "").substr((l + "").length)) !==
                    (f = mi(a) || (u in Ne.units ? Ne.units[u] : h)) &&
                    (l = Do(t, u, o, f)),
                  (this._pt = new Sr(
                    this._pt,
                    m ? v : E,
                    u,
                    l,
                    (p ? Ln(l, p + s) : s) - l,
                    m || ("px" !== f && "zIndex" !== u) || !1 === e.autoRound
                      ? no
                      : oo
                  )),
                  (this._pt.u = f || 0),
                  h !== f && "%" !== f && ((this._pt.b = o), (this._pt.r = ro));
              else if (u in E) zo.call(this, t, u, o, p ? p + a : a);
              else if (u in t) this.add(t, u, o || t[u], p ? p + a : a, i, r);
              else if ("parseTransform" !== u) {
                hn(u, a);
                continue;
              }
              m || (u in E ? w.push(u, 0, E[u]) : w.push(u, 1, o || t[u])),
                C.push(u);
            }
        y && Er(this);
      },
      render: function (t, e) {
        if (e.tween._time || !Ur())
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        else e.styles.revert();
      },
      get: No,
      aliases: eo,
      getSetter: function (t, e, n) {
        var i = eo[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in Wr && e !== go && (t._gsap.x || No(t, "x"))
            ? n && Zr === n
              ? "scale" === e
                ? ho
                : uo
              : (Zr = n || {}) && ("scale" === e ? fo : po)
            : t.style && !We(t.style[e])
            ? lo
            : ~e.indexOf("-")
            ? co
            : br(t, e)
        );
      },
      core: { _removeProperty: Po, _getMatrix: Vo },
    };
  (Fr.utils.checkPrefix = To),
    (Fr.core.getStyleSaver = wo),
    (aa = Pn(
      (ra = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (oa = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Wr[t] = 1;
      }
    )),
    Pn(oa, function (t) {
      (Ne.units[t] = "deg"), (Xo[t] = 1);
    }),
    (eo[aa[13]] = ra + "," + oa),
    Pn(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        eo[e[1]] = aa[e[0]];
      }
    ),
    Pn(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        Ne.units[t] = "px";
      }
    ),
    Fr.registerPlugin(sa);
  var la,
    ca,
    da,
    ua,
    ha,
    fa,
    pa,
    ma,
    ga,
    va = Fr.registerPlugin(sa) || Fr,
    ba = (va.core.Tween, "transform"),
    ya = ba + "Origin",
    wa = function (t) {
      var e = t.ownerDocument || t;
      !(ba in t.style) &&
        "msTransform" in t.style &&
        (ya = (ba = "msTransform") + "Origin");
      for (; e.parentNode && (e = e.parentNode); );
      if (((ca = window), (pa = new Aa()), e)) {
        (la = e),
          (da = e.documentElement),
          (ua = e.body),
          ((ma = la.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
          )).style.transform = "none");
        var n = e.createElement("div"),
          i = e.createElement("div");
        ua.appendChild(n),
          n.appendChild(i),
          (n.style.position = "static"),
          (n.style[ba] = "translate3d(0,0,1px)"),
          (ga = i.offsetParent !== n),
          ua.removeChild(n);
      }
      return e;
    },
    xa = function (t) {
      for (var e, n; t && t !== ua; )
        (n = t._gsap) && n.uncache && n.get(t, "x"),
          n &&
            !n.scaleX &&
            !n.scaleY &&
            n.renderTransform &&
            ((n.scaleX = n.scaleY = 1e-4),
            n.renderTransform(1, n),
            e ? e.push(n) : (e = [n])),
          (t = t.parentNode);
      return e;
    },
    ka = [],
    _a = [],
    Ta = function () {
      return (
        ca.pageYOffset || la.scrollTop || da.scrollTop || ua.scrollTop || 0
      );
    },
    Ca = function () {
      return (
        ca.pageXOffset || la.scrollLeft || da.scrollLeft || ua.scrollLeft || 0
      );
    },
    Ea = function (t) {
      return (
        t.ownerSVGElement ||
        ("svg" === (t.tagName + "").toLowerCase() ? t : null)
      );
    },
    Sa = function t(e) {
      return (
        "fixed" === ca.getComputedStyle(e).position ||
        ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
      );
    },
    Ma = function t(e, n) {
      if (e.parentNode && (la || wa(e))) {
        var i = Ea(e),
          r = i
            ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
            : "http://www.w3.org/1999/xhtml",
          o = i ? (n ? "rect" : "g") : "div",
          a = 2 !== n ? 0 : 100,
          s = 3 === n ? 100 : 0,
          l =
            "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          c = la.createElementNS
            ? la.createElementNS(r.replace(/^https/, "http"), o)
            : la.createElement(o);
        return (
          n &&
            (i
              ? (fa || (fa = t(e)),
                c.setAttribute("width", 0.01),
                c.setAttribute("height", 0.01),
                c.setAttribute("transform", "translate(" + a + "," + s + ")"),
                fa.appendChild(c))
              : (ha || ((ha = t(e)).style.cssText = l),
                (c.style.cssText =
                  l +
                  "width:0.1px;height:0.1px;top:" +
                  s +
                  "px;left:" +
                  a +
                  "px"),
                ha.appendChild(c))),
          c
        );
      }
      throw "Need document and parent.";
    },
    Oa = function (t, e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l = Ea(t),
        c = t === l,
        d = l ? ka : _a,
        u = t.parentNode;
      if (t === ca) return t;
      if (
        (d.length || d.push(Ma(t, 1), Ma(t, 2), Ma(t, 3)), (n = l ? fa : ha), l)
      )
        c
          ? ((r = (function (t) {
              var e,
                n = t.getCTM();
              return (
                n ||
                  ((e = t.style[ba]),
                  (t.style[ba] = "none"),
                  t.appendChild(ma),
                  (n = ma.getCTM()),
                  t.removeChild(ma),
                  e
                    ? (t.style[ba] = e)
                    : t.style.removeProperty(
                        ba.replace(/([A-Z])/g, "-$1").toLowerCase()
                      )),
                n || pa.clone()
              );
            })(t)),
            (o = -r.e / r.a),
            (a = -r.f / r.d),
            (i = pa))
          : t.getBBox
          ? ((r = t.getBBox()),
            (i = (i = t.transform ? t.transform.baseVal : {}).numberOfItems
              ? i.numberOfItems > 1
                ? (function (t) {
                    for (var e = new Aa(), n = 0; n < t.numberOfItems; n++)
                      e.multiply(t.getItem(n).matrix);
                    return e;
                  })(i)
                : i.getItem(0).matrix
              : pa),
            (o = i.a * r.x + i.c * r.y),
            (a = i.b * r.x + i.d * r.y))
          : ((i = new Aa()), (o = a = 0)),
          e && "g" === t.tagName.toLowerCase() && (o = a = 0),
          (c ? l : u).appendChild(n),
          n.setAttribute(
            "transform",
            "matrix(" +
              i.a +
              "," +
              i.b +
              "," +
              i.c +
              "," +
              i.d +
              "," +
              (i.e + o) +
              "," +
              (i.f + a) +
              ")"
          );
      else {
        if (((o = a = 0), ga))
          for (
            i = t.offsetParent, r = t;
            r && (r = r.parentNode) && r !== i && r.parentNode;

          )
            (ca.getComputedStyle(r)[ba] + "").length > 4 &&
              ((o = r.offsetLeft), (a = r.offsetTop), (r = 0));
        if (
          "absolute" !== (s = ca.getComputedStyle(t)).position &&
          "fixed" !== s.position
        )
          for (i = t.offsetParent; u && u !== i; )
            (o += u.scrollLeft || 0),
              (a += u.scrollTop || 0),
              (u = u.parentNode);
        ((r = n.style).top = t.offsetTop - a + "px"),
          (r.left = t.offsetLeft - o + "px"),
          (r[ba] = s[ba]),
          (r[ya] = s[ya]),
          (r.position = "fixed" === s.position ? "fixed" : "absolute"),
          t.parentNode.appendChild(n);
      }
      return n;
    },
    Pa = function (t, e, n, i, r, o, a) {
      return (
        (t.a = e), (t.b = n), (t.c = i), (t.d = r), (t.e = o), (t.f = a), t
      );
    },
    Aa = (function () {
      function t(t, e, n, i, r, o) {
        void 0 === t && (t = 1),
          void 0 === e && (e = 0),
          void 0 === n && (n = 0),
          void 0 === i && (i = 1),
          void 0 === r && (r = 0),
          void 0 === o && (o = 0),
          Pa(this, t, e, n, i, r, o);
      }
      var e = t.prototype;
      return (
        (e.inverse = function () {
          var t = this.a,
            e = this.b,
            n = this.c,
            i = this.d,
            r = this.e,
            o = this.f,
            a = t * i - e * n || 1e-10;
          return Pa(
            this,
            i / a,
            -e / a,
            -n / a,
            t / a,
            (n * o - i * r) / a,
            -(t * o - e * r) / a
          );
        }),
        (e.multiply = function (t) {
          var e = this.a,
            n = this.b,
            i = this.c,
            r = this.d,
            o = this.e,
            a = this.f,
            s = t.a,
            l = t.c,
            c = t.b,
            d = t.d,
            u = t.e,
            h = t.f;
          return Pa(
            this,
            s * e + c * i,
            s * n + c * r,
            l * e + d * i,
            l * n + d * r,
            o + u * e + h * i,
            a + u * n + h * r
          );
        }),
        (e.clone = function () {
          return new t(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (e.equals = function (t) {
          var e = this.a,
            n = this.b,
            i = this.c,
            r = this.d,
            o = this.e,
            a = this.f;
          return (
            e === t.a &&
            n === t.b &&
            i === t.c &&
            r === t.d &&
            o === t.e &&
            a === t.f
          );
        }),
        (e.apply = function (t, e) {
          void 0 === e && (e = {});
          var n = t.x,
            i = t.y,
            r = this.a,
            o = this.b,
            a = this.c,
            s = this.d,
            l = this.e,
            c = this.f;
          return (
            (e.x = n * r + i * a + l || 0), (e.y = n * o + i * s + c || 0), e
          );
        }),
        t
      );
    })();
  function Ra(t, e, n, i) {
    if (!t || !t.parentNode || (la || wa(t)).documentElement === t)
      return new Aa();
    var r = xa(t),
      o = Ea(t) ? ka : _a,
      a = Oa(t, n),
      s = o[0].getBoundingClientRect(),
      l = o[1].getBoundingClientRect(),
      c = o[2].getBoundingClientRect(),
      d = a.parentNode,
      u = !i && Sa(t),
      h = new Aa(
        (l.left - s.left) / 100,
        (l.top - s.top) / 100,
        (c.left - s.left) / 100,
        (c.top - s.top) / 100,
        s.left + (u ? 0 : Ca()),
        s.top + (u ? 0 : Ta())
      );
    if ((d.removeChild(a), r))
      for (s = r.length; s--; )
        ((l = r[s]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
    return e ? h.inverse() : h;
  }
  function La(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  var Da,
    Na,
    za,
    Ia,
    Ba,
    Fa,
    ja,
    Xa,
    Ha,
    Ya,
    Va,
    Za,
    Ua,
    qa,
    Wa,
    $a,
    Ka,
    Ga,
    Ja,
    Qa,
    ts,
    es = 0,
    ns = function () {
      return "undefined" != typeof window;
    },
    is = function () {
      return Da || (ns() && (Da = window.gsap) && Da.registerPlugin && Da);
    },
    rs = function (t) {
      return "function" == typeof t;
    },
    os = function (t) {
      return "object" == typeof t;
    },
    as = function (t) {
      return void 0 === t;
    },
    ss = function () {
      return !1;
    },
    ls = "transform",
    cs = "transformOrigin",
    ds = function (t) {
      return Math.round(1e4 * t) / 1e4;
    },
    us = Array.isArray,
    hs = function (t, e) {
      var n = za.createElementNS
        ? za.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : za.createElement(t);
      return n.style ? n : za.createElement(t);
    },
    fs = 180 / Math.PI,
    ps = 1e20,
    ms = new Aa(),
    gs =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    vs = [],
    bs = {},
    ys = 0,
    ws = /^(?:a|input|textarea|button|select)$/i,
    xs = 0,
    ks = {},
    _s = {},
    Ts = function (t, e) {
      var n,
        i = {};
      for (n in t) i[n] = e ? t[n] * e : t[n];
      return i;
    },
    Cs = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t;
    },
    Es = function t(e, n) {
      for (var i, r = e.length; r--; )
        n
          ? (e[r].style.touchAction = n)
          : e[r].style.removeProperty("touch-action"),
          (i = e[r].children) && i.length && t(i, n);
    },
    Ss = function () {
      return vs.forEach(function (t) {
        return t();
      });
    },
    Ms = function (t) {
      vs.push(t), 1 === vs.length && Da.ticker.add(Ss);
    },
    Os = function () {
      return !vs.length && Da.ticker.remove(Ss);
    },
    Ps = function (t) {
      for (var e = vs.length; e--; ) vs[e] === t && vs.splice(e, 1);
      Da.to(Os, {
        overwrite: !0,
        delay: 15,
        duration: 0,
        onComplete: Os,
        data: "_draggable",
      });
    },
    As = function (t, e, n, i) {
      if (t.addEventListener) {
        var r = Ua[e];
        (i = i || (Va ? { passive: !1 } : null)),
          t.addEventListener(r || e, n, i),
          r && e !== r && t.addEventListener(e, n, i);
      }
    },
    Rs = function (t, e, n, i) {
      if (t.removeEventListener) {
        var r = Ua[e];
        t.removeEventListener(r || e, n, i),
          r && e !== r && t.removeEventListener(e, n, i);
      }
    },
    Ls = function (t) {
      t.preventDefault && t.preventDefault(),
        t.preventManipulation && t.preventManipulation();
    },
    Ds = function (t, e) {
      for (var n = t.length; n--; ) if (t[n].identifier === e) return !0;
    },
    Ns = function t(e) {
      (qa = e.touches && es < e.touches.length), Rs(e.target, "touchend", t);
    },
    zs = function (t) {
      (qa = t.touches && es < t.touches.length), As(t.target, "touchend", Ns);
    },
    Is = function (t) {
      return (
        Na.pageYOffset ||
        t.scrollTop ||
        t.documentElement.scrollTop ||
        t.body.scrollTop ||
        0
      );
    },
    Bs = function (t) {
      return (
        Na.pageXOffset ||
        t.scrollLeft ||
        t.documentElement.scrollLeft ||
        t.body.scrollLeft ||
        0
      );
    },
    Fs = function t(e, n) {
      As(e, "scroll", n), Xs(e.parentNode) || t(e.parentNode, n);
    },
    js = function t(e, n) {
      Rs(e, "scroll", n), Xs(e.parentNode) || t(e.parentNode, n);
    },
    Xs = function (t) {
      return !(
        t &&
        t !== Ia &&
        9 !== t.nodeType &&
        t !== za.body &&
        t !== Na &&
        t.nodeType &&
        t.parentNode
      );
    },
    Hs = function (t, e) {
      var n = "x" === e ? "Width" : "Height",
        i = "scroll" + n,
        r = "client" + n;
      return Math.max(
        0,
        Xs(t)
          ? Math.max(Ia[i], Ba[i]) - (Na["inner" + n] || Ia[r] || Ba[r])
          : t[i] - t[r]
      );
    },
    Ys = function t(e, n) {
      var i = Hs(e, "x"),
        r = Hs(e, "y");
      Xs(e) ? (e = _s) : t(e.parentNode, n),
        (e._gsMaxScrollX = i),
        (e._gsMaxScrollY = r),
        n ||
          ((e._gsScrollX = e.scrollLeft || 0),
          (e._gsScrollY = e.scrollTop || 0));
    },
    Vs = function (t, e, n) {
      var i = t.style;
      i &&
        (as(i[e]) && (e = Ha(e, t) || e),
        null == n
          ? i.removeProperty &&
            i.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
          : (i[e] = n));
    },
    Zs = function (t) {
      return Na.getComputedStyle(
        t instanceof Element ? t : t.host || (t.parentNode || {}).host || t
      );
    },
    Us = {},
    qs = function (t) {
      if (t === Na)
        return (
          (Us.left = Us.top = 0),
          (Us.width = Us.right =
            Ia.clientWidth || t.innerWidth || Ba.clientWidth || 0),
          (Us.height = Us.bottom =
            (t.innerHeight || 0) - 20 < Ia.clientHeight
              ? Ia.clientHeight
              : t.innerHeight || Ba.clientHeight || 0),
          Us
        );
      var e = t.ownerDocument || za,
        n = as(t.pageX)
          ? t.nodeType || as(t.left) || as(t.top)
            ? Ya(t)[0].getBoundingClientRect()
            : t
          : {
              left: t.pageX - Bs(e),
              top: t.pageY - Is(e),
              right: t.pageX - Bs(e) + 1,
              bottom: t.pageY - Is(e) + 1,
            };
      return (
        as(n.right) && !as(n.width)
          ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
          : as(n.width) &&
            (n = {
              width: n.right - n.left,
              height: n.bottom - n.top,
              right: n.right,
              left: n.left,
              bottom: n.bottom,
              top: n.top,
            }),
        n
      );
    },
    Ws = function (t, e, n) {
      var i,
        r = t.vars,
        o = r[n],
        a = t._listeners[e];
      return (
        rs(o) &&
          (i = o.apply(
            r.callbackScope || t,
            r[n + "Params"] || [t.pointerEvent]
          )),
        a && !1 === t.dispatchEvent(e) && (i = !1),
        i
      );
    },
    $s = function (t, e) {
      var n,
        i,
        r,
        o = Ya(t)[0];
      return o.nodeType || o === Na
        ? Gs(o, e)
        : as(t.left)
        ? {
            left: (i = t.min || t.minX || t.minRotation || 0),
            top: (n = t.min || t.minY || 0),
            width: (t.max || t.maxX || t.maxRotation || 0) - i,
            height: (t.max || t.maxY || 0) - n,
          }
        : ((r = { x: 0, y: 0 }),
          {
            left: t.left - r.x,
            top: t.top - r.y,
            width: t.width,
            height: t.height,
          });
    },
    Ks = {},
    Gs = function (t, e) {
      e = Ya(e)[0];
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        h,
        f,
        p,
        m = t.getBBox && t.ownerSVGElement,
        g = t.ownerDocument || za;
      if (t === Na)
        (r = Is(g)),
          (i =
            (n = Bs(g)) +
            (g.documentElement.clientWidth ||
              t.innerWidth ||
              g.body.clientWidth ||
              0)),
          (o =
            r +
            ((t.innerHeight || 0) - 20 < g.documentElement.clientHeight
              ? g.documentElement.clientHeight
              : t.innerHeight || g.body.clientHeight || 0));
      else {
        if (e === Na || as(e)) return t.getBoundingClientRect();
        (n = r = 0),
          m
            ? ((h = (u = t.getBBox()).width), (f = u.height))
            : (t.viewBox &&
                (u = t.viewBox.baseVal) &&
                ((n = u.x || 0), (r = u.y || 0), (h = u.width), (f = u.height)),
              h ||
                ((u = "border-box" === (p = Zs(t)).boxSizing),
                (h =
                  (parseFloat(p.width) || t.clientWidth || 0) +
                  (u
                    ? 0
                    : parseFloat(p.borderLeftWidth) +
                      parseFloat(p.borderRightWidth))),
                (f =
                  (parseFloat(p.height) || t.clientHeight || 0) +
                  (u
                    ? 0
                    : parseFloat(p.borderTopWidth) +
                      parseFloat(p.borderBottomWidth))))),
          (i = h),
          (o = f);
      }
      return t === e
        ? { left: n, top: r, width: i - n, height: o - r }
        : ((s = (a = Ra(e, !0).multiply(Ra(t))).apply({ x: n, y: r })),
          (l = a.apply({ x: i, y: r })),
          (c = a.apply({ x: i, y: o })),
          (d = a.apply({ x: n, y: o })),
          {
            left: (n = Math.min(s.x, l.x, c.x, d.x)),
            top: (r = Math.min(s.y, l.y, c.y, d.y)),
            width: Math.max(s.x, l.x, c.x, d.x) - n,
            height: Math.max(s.y, l.y, c.y, d.y) - r,
          });
    },
    Js = function (t, e, n, i, r, o) {
      var a,
        s,
        l,
        c = {};
      if (e)
        if (1 !== r && e instanceof Array) {
          if (((c.end = a = []), (l = e.length), os(e[0])))
            for (s = 0; s < l; s++) a[s] = Ts(e[s], r);
          else for (s = 0; s < l; s++) a[s] = e[s] * r;
          (n += 1.1), (i -= 1.1);
        } else
          rs(e)
            ? (c.end = function (n) {
                var i,
                  o,
                  a = e.call(t, n);
                if (1 !== r)
                  if (os(a)) {
                    for (o in ((i = {}), a)) i[o] = a[o] * r;
                    a = i;
                  } else a *= r;
                return a;
              })
            : (c.end = e);
      return (
        (n || 0 === n) && (c.max = n),
        (i || 0 === i) && (c.min = i),
        o && (c.velocity = 0),
        c
      );
    },
    Qs = function t(e) {
      var n;
      return (
        !(!e || !e.getAttribute || e === Ba) &&
        (!(
          "true" !== (n = e.getAttribute("data-clickable")) &&
          ("false" === n ||
            (!e.onclick &&
              !ws.test(e.nodeName + "") &&
              "true" !== e.getAttribute("contentEditable")))
        ) ||
          t(e.parentNode))
      );
    },
    tl = function (t, e) {
      for (var n, i = t.length; i--; )
        ((n = t[i]).ondragstart = n.onselectstart = e ? null : ss),
          Da.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
    },
    el = function t(e) {
      return (
        "fixed" === Zs(e).position ||
        ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
      );
    },
    nl = function (t, e) {
      (t = Da.utils.toArray(t)[0]), (e = e || {});
      var n,
        i,
        r,
        o,
        a,
        s,
        l = document.createElement("div"),
        c = l.style,
        d = t.firstChild,
        u = 0,
        h = 0,
        f = t.scrollTop,
        p = t.scrollLeft,
        m = t.scrollWidth,
        g = t.scrollHeight,
        v = 0,
        b = 0,
        y = 0;
      Qa && !1 !== e.force3D
        ? ((a = "translate3d("), (s = "px,0px)"))
        : ls && ((a = "translate("), (s = "px)")),
        (this.scrollTop = function (t, e) {
          if (!arguments.length) return -this.top();
          this.top(-t, e);
        }),
        (this.scrollLeft = function (t, e) {
          if (!arguments.length) return -this.left();
          this.left(-t, e);
        }),
        (this.left = function (n, i) {
          if (!arguments.length) return -(t.scrollLeft + h);
          var r = t.scrollLeft - p,
            o = h;
          if ((r > 2 || r < -2) && !i)
            return (
              (p = t.scrollLeft),
              Da.killTweensOf(this, { left: 1, scrollLeft: 1 }),
              this.left(-p),
              void (e.onKill && e.onKill())
            );
          (n = -n) < 0
            ? ((h = (n - 0.5) | 0), (n = 0))
            : n > b
            ? ((h = (n - b) | 0), (n = b))
            : (h = 0),
            (h || o) &&
              (this._skip || (c[ls] = a + -h + "px," + -u + s),
              h + v >= 0 && (c.paddingRight = h + v + "px")),
            (t.scrollLeft = 0 | n),
            (p = t.scrollLeft);
        }),
        (this.top = function (n, i) {
          if (!arguments.length) return -(t.scrollTop + u);
          var r = t.scrollTop - f,
            o = u;
          if ((r > 2 || r < -2) && !i)
            return (
              (f = t.scrollTop),
              Da.killTweensOf(this, { top: 1, scrollTop: 1 }),
              this.top(-f),
              void (e.onKill && e.onKill())
            );
          (n = -n) < 0
            ? ((u = (n - 0.5) | 0), (n = 0))
            : n > y
            ? ((u = (n - y) | 0), (n = y))
            : (u = 0),
            (u || o) && (this._skip || (c[ls] = a + -h + "px," + -u + s)),
            (t.scrollTop = 0 | n),
            (f = t.scrollTop);
        }),
        (this.maxScrollTop = function () {
          return y;
        }),
        (this.maxScrollLeft = function () {
          return b;
        }),
        (this.disable = function () {
          for (d = l.firstChild; d; )
            (o = d.nextSibling), t.appendChild(d), (d = o);
          t === l.parentNode && t.removeChild(l);
        }),
        (this.enable = function () {
          if ((d = t.firstChild) !== l) {
            for (; d; ) (o = d.nextSibling), l.appendChild(d), (d = o);
            t.appendChild(l), this.calibrate();
          }
        }),
        (this.calibrate = function (e) {
          var o,
            a,
            s,
            d = t.clientWidth === n;
          (f = t.scrollTop),
            (p = t.scrollLeft),
            (d &&
              t.clientHeight === i &&
              l.offsetHeight === r &&
              m === t.scrollWidth &&
              g === t.scrollHeight &&
              !e) ||
              ((u || h) &&
                ((a = this.left()),
                (s = this.top()),
                this.left(-t.scrollLeft),
                this.top(-t.scrollTop)),
              (o = Zs(t)),
              (d && !e) ||
                ((c.display = "block"),
                (c.width = "auto"),
                (c.paddingRight = "0px"),
                (v = Math.max(0, t.scrollWidth - t.clientWidth)) &&
                  (v +=
                    parseFloat(o.paddingLeft) +
                    (ts ? parseFloat(o.paddingRight) : 0))),
              (c.display = "inline-block"),
              (c.position = "relative"),
              (c.overflow = "visible"),
              (c.verticalAlign = "top"),
              (c.boxSizing = "content-box"),
              (c.width = "100%"),
              (c.paddingRight = v + "px"),
              ts && (c.paddingBottom = o.paddingBottom),
              (n = t.clientWidth),
              (i = t.clientHeight),
              (m = t.scrollWidth),
              (g = t.scrollHeight),
              (b = t.scrollWidth - n),
              (y = t.scrollHeight - i),
              (r = l.offsetHeight),
              (c.display = "block"),
              (a || s) && (this.left(a), this.top(s)));
        }),
        (this.content = l),
        (this.element = t),
        (this._skip = !1),
        this.enable();
    },
    il = function (t) {
      if (ns() && document.body) {
        var e = window && window.navigator;
        (Na = window),
          (za = document),
          (Ia = za.documentElement),
          (Ba = za.body),
          (Fa = hs("div")),
          (Ga = !!window.PointerEvent),
          ((ja = hs("div")).style.cssText =
            "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
          (Ka = "grab" === ja.style.cursor ? "grab" : "move"),
          (Wa = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
          (Za =
            ("ontouchstart" in Ia && "orientation" in Na) ||
            (e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
          (i = hs("div")),
          (r = hs("div")),
          (o = r.style),
          (a = Ba),
          (o.display = "inline-block"),
          (o.position = "relative"),
          (i.style.cssText =
            "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
          i.appendChild(r),
          a.appendChild(i),
          (n = r.offsetHeight + 18 > i.scrollHeight),
          a.removeChild(i),
          (ts = n),
          (Ua = (function (t) {
            for (
              var e = t.split(","),
                n = (
                  ("onpointerdown" in Fa)
                    ? "pointerdown,pointermove,pointerup,pointercancel"
                    : ("onmspointerdown" in Fa)
                    ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                    : t
                ).split(","),
                i = {},
                r = 4;
              --r > -1;

            )
              (i[e[r]] = n[r]), (i[n[r]] = e[r]);
            try {
              Ia.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", {
                  get: function () {
                    Va = 1;
                  },
                })
              );
            } catch (t) {}
            return i;
          })("touchstart,touchmove,touchend,touchcancel")),
          As(za, "touchcancel", ss),
          As(Na, "touchmove", ss),
          Ba && Ba.addEventListener("touchstart", ss),
          As(za, "contextmenu", function () {
            for (var t in bs) bs[t].isPressed && bs[t].endDrag();
          }),
          (Da = Xa = is());
      }
      var n, i, r, o, a;
      Da
        ? (($a = Da.plugins.inertia),
          (Ja = Da.core.context || function () {}),
          (Ha = Da.utils.checkPrefix),
          (ls = Ha(ls)),
          (cs = Ha(cs)),
          (Ya = Da.utils.toArray),
          (Qa = !!Ha("perspective")))
        : t && console.warn("Please gsap.registerPlugin(Draggable)");
    },
    rl = (function () {
      function t(t) {
        (this._listeners = {}), (this.target = t || this);
      }
      var e = t.prototype;
      return (
        (e.addEventListener = function (t, e) {
          var n = this._listeners[t] || (this._listeners[t] = []);
          ~n.indexOf(e) || n.push(e);
        }),
        (e.removeEventListener = function (t, e) {
          var n = this._listeners[t],
            i = n && n.indexOf(e);
          i >= 0 && n.splice(i, 1);
        }),
        (e.dispatchEvent = function (t) {
          var e,
            n = this;
          return (
            (this._listeners[t] || []).forEach(function (i) {
              return (
                !1 === i.call(n, { type: t, target: n.target }) && (e = !1)
              );
            }),
            e
          );
        }),
        t
      );
    })(),
    ol = (function (t) {
      var e, n;
      function i(e, n) {
        var r;
        (r = t.call(this) || this),
          Xa || il(1),
          (e = Ya(e)[0]),
          $a || ($a = Da.plugins.inertia),
          (r.vars = n = Ts(n || {})),
          (r.target = e),
          (r.x = r.y = r.rotation = 0),
          (r.dragResistance = parseFloat(n.dragResistance) || 0),
          (r.edgeResistance = isNaN(n.edgeResistance)
            ? 1
            : parseFloat(n.edgeResistance) || 0),
          (r.lockAxis = n.lockAxis),
          (r.autoScroll = n.autoScroll || 0),
          (r.lockedAxis = null),
          (r.allowEventDefault = !!n.allowEventDefault),
          Da.getProperty(e, "x");
        var o,
          a,
          s,
          l,
          c,
          d,
          u,
          h,
          f,
          p,
          m,
          g,
          v,
          b,
          y,
          w,
          x,
          k,
          _,
          T,
          C,
          E,
          S,
          M,
          O,
          P,
          A,
          R,
          L,
          D,
          N,
          z,
          I,
          B = (n.type || "x,y").toLowerCase(),
          F = ~B.indexOf("x") || ~B.indexOf("y"),
          j = -1 !== B.indexOf("rotation"),
          X = j ? "rotation" : F ? "x" : "left",
          H = F ? "y" : "top",
          Y = !(!~B.indexOf("x") && !~B.indexOf("left") && "scroll" !== B),
          V = !(!~B.indexOf("y") && !~B.indexOf("top") && "scroll" !== B),
          Z = n.minimumMovement || 2,
          U = La(r),
          q = Ya(n.trigger || n.handle || e),
          W = {},
          $ = 0,
          K = !1,
          G = n.autoScrollMarginTop || 40,
          J = n.autoScrollMarginRight || 40,
          Q = n.autoScrollMarginBottom || 40,
          tt = n.autoScrollMarginLeft || 40,
          et = n.clickableTest || Qs,
          nt = 0,
          it = e._gsap || Da.core.getCache(e),
          rt = el(e),
          ot = function (t, n) {
            return parseFloat(it.get(e, t, n));
          },
          at = e.ownerDocument || za,
          st = function (t) {
            return (
              Ls(t),
              t.stopImmediatePropagation && t.stopImmediatePropagation(),
              !1
            );
          },
          lt = function t(n) {
            if (U.autoScroll && U.isDragging && (K || x)) {
              var i,
                r,
                o,
                s,
                l,
                c,
                d,
                u,
                f = e,
                p = 15 * U.autoScroll;
              for (
                K = !1,
                  _s.scrollTop =
                    null != Na.pageYOffset
                      ? Na.pageYOffset
                      : null != at.documentElement.scrollTop
                      ? at.documentElement.scrollTop
                      : at.body.scrollTop,
                  _s.scrollLeft =
                    null != Na.pageXOffset
                      ? Na.pageXOffset
                      : null != at.documentElement.scrollLeft
                      ? at.documentElement.scrollLeft
                      : at.body.scrollLeft,
                  s = U.pointerX - _s.scrollLeft,
                  l = U.pointerY - _s.scrollTop;
                f && !r;

              )
                (i = (r = Xs(f.parentNode)) ? _s : f.parentNode),
                  (o = r
                    ? {
                        bottom: Math.max(Ia.clientHeight, Na.innerHeight || 0),
                        right: Math.max(Ia.clientWidth, Na.innerWidth || 0),
                        left: 0,
                        top: 0,
                      }
                    : i.getBoundingClientRect()),
                  (c = d = 0),
                  V &&
                    ((u = i._gsMaxScrollY - i.scrollTop) < 0
                      ? (d = u)
                      : l > o.bottom - Q && u
                      ? ((K = !0),
                        (d = Math.min(
                          u,
                          (p * (1 - Math.max(0, o.bottom - l) / Q)) | 0
                        )))
                      : l < o.top + G &&
                        i.scrollTop &&
                        ((K = !0),
                        (d = -Math.min(
                          i.scrollTop,
                          (p * (1 - Math.max(0, l - o.top) / G)) | 0
                        ))),
                    d && (i.scrollTop += d)),
                  Y &&
                    ((u = i._gsMaxScrollX - i.scrollLeft) < 0
                      ? (c = u)
                      : s > o.right - J && u
                      ? ((K = !0),
                        (c = Math.min(
                          u,
                          (p * (1 - Math.max(0, o.right - s) / J)) | 0
                        )))
                      : s < o.left + tt &&
                        i.scrollLeft &&
                        ((K = !0),
                        (c = -Math.min(
                          i.scrollLeft,
                          (p * (1 - Math.max(0, s - o.left) / tt)) | 0
                        ))),
                    c && (i.scrollLeft += c)),
                  r &&
                    (c || d) &&
                    (Na.scrollTo(i.scrollLeft, i.scrollTop),
                    xt(U.pointerX + c, U.pointerY + d)),
                  (f = i);
            }
            if (x) {
              var m = U.x,
                g = U.y;
              j
                ? ((U.deltaX = m - parseFloat(it.rotation)),
                  (U.rotation = m),
                  (it.rotation = m + "deg"),
                  it.renderTransform(1, it))
                : a
                ? (V && ((U.deltaY = g - a.top()), a.top(g)),
                  Y && ((U.deltaX = m - a.left()), a.left(m)))
                : F
                ? (V && ((U.deltaY = g - parseFloat(it.y)), (it.y = g + "px")),
                  Y && ((U.deltaX = m - parseFloat(it.x)), (it.x = m + "px")),
                  it.renderTransform(1, it))
                : (V &&
                    ((U.deltaY = g - parseFloat(e.style.top || 0)),
                    (e.style.top = g + "px")),
                  Y &&
                    ((U.deltaX = m - parseFloat(e.style.left || 0)),
                    (e.style.left = m + "px"))),
                !h ||
                  n ||
                  R ||
                  ((R = !0),
                  !1 === Ws(U, "drag", "onDrag") &&
                    (Y && (U.x -= U.deltaX), V && (U.y -= U.deltaY), t(!0)),
                  (R = !1));
            }
            x = !1;
          },
          ct = function (t, n) {
            var i,
              r,
              o = U.x,
              s = U.y;
            e._gsap || (it = Da.core.getCache(e)),
              it.uncache && Da.getProperty(e, "x"),
              F
                ? ((U.x = parseFloat(it.x)), (U.y = parseFloat(it.y)))
                : j
                ? (U.x = U.rotation = parseFloat(it.rotation))
                : a
                ? ((U.y = a.top()), (U.x = a.left()))
                : ((U.y =
                    parseFloat(e.style.top || ((r = Zs(e)) && r.top)) || 0),
                  (U.x = parseFloat(e.style.left || (r || {}).left) || 0)),
              (_ || T || C) &&
                !n &&
                (U.isDragging || U.isThrowing) &&
                (C &&
                  ((ks.x = U.x),
                  (ks.y = U.y),
                  (i = C(ks)).x !== U.x && ((U.x = i.x), (x = !0)),
                  i.y !== U.y && ((U.y = i.y), (x = !0))),
                _ &&
                  (i = _(U.x)) !== U.x &&
                  ((U.x = i), j && (U.rotation = i), (x = !0)),
                T && ((i = T(U.y)) !== U.y && (U.y = i), (x = !0))),
              x && lt(!0),
              t ||
                ((U.deltaX = U.x - o),
                (U.deltaY = U.y - s),
                Ws(U, "throwupdate", "onThrowUpdate"));
          },
          dt = function (t, e, n, i) {
            return (
              null == e && (e = -ps),
              null == n && (n = ps),
              rs(t)
                ? function (r) {
                    var o = U.isPressed ? 1 - U.edgeResistance : 1;
                    return (
                      t.call(
                        U,
                        (r > n
                          ? n + (r - n) * o
                          : r < e
                          ? e + (r - e) * o
                          : r) * i
                      ) * i
                    );
                  }
                : us(t)
                ? function (i) {
                    for (var r, o, a = t.length, s = 0, l = ps; --a > -1; )
                      (o = (r = t[a]) - i) < 0 && (o = -o),
                        o < l && r >= e && r <= n && ((s = a), (l = o));
                    return t[s];
                  }
                : isNaN(t)
                ? function (t) {
                    return t;
                  }
                : function () {
                    return t * i;
                  }
            );
          },
          ut = function () {
            var t, i, r, o;
            (u = !1),
              a
                ? (a.calibrate(),
                  (U.minX = m = -a.maxScrollLeft()),
                  (U.minY = v = -a.maxScrollTop()),
                  (U.maxX = p = U.maxY = g = 0),
                  (u = !0))
                : n.bounds &&
                  ((t = $s(n.bounds, e.parentNode)),
                  j
                    ? ((U.minX = m = t.left),
                      (U.maxX = p = t.left + t.width),
                      (U.minY = v = U.maxY = g = 0))
                    : as(n.bounds.maxX) && as(n.bounds.maxY)
                    ? ((i = $s(e, e.parentNode)),
                      (U.minX = m = Math.round(ot(X, "px") + t.left - i.left)),
                      (U.minY = v = Math.round(ot(H, "px") + t.top - i.top)),
                      (U.maxX = p = Math.round(m + (t.width - i.width))),
                      (U.maxY = g = Math.round(v + (t.height - i.height))))
                    : ((t = n.bounds),
                      (U.minX = m = t.minX),
                      (U.minY = v = t.minY),
                      (U.maxX = p = t.maxX),
                      (U.maxY = g = t.maxY)),
                  m > p && ((U.minX = p), (U.maxX = p = m), (m = U.minX)),
                  v > g && ((U.minY = g), (U.maxY = g = v), (v = U.minY)),
                  j && ((U.minRotation = m), (U.maxRotation = p)),
                  (u = !0)),
              n.liveSnap &&
                ((r = !0 === n.liveSnap ? n.snap || {} : n.liveSnap),
                (o = us(r) || rs(r)),
                j
                  ? ((_ = dt(o ? r : r.rotation, m, p, 1)), (T = null))
                  : r.points
                  ? (C = (function (t, e, n, i, r, o, a) {
                      return (
                        (o = o && o < ps ? o * o : ps),
                        rs(t)
                          ? function (s) {
                              var l,
                                c,
                                d,
                                u = U.isPressed ? 1 - U.edgeResistance : 1,
                                h = s.x,
                                f = s.y;
                              return (
                                (s.x = h =
                                  h > n
                                    ? n + (h - n) * u
                                    : h < e
                                    ? e + (h - e) * u
                                    : h),
                                (s.y = f =
                                  f > r
                                    ? r + (f - r) * u
                                    : f < i
                                    ? i + (f - i) * u
                                    : f),
                                (l = t.call(U, s)) !== s &&
                                  ((s.x = l.x), (s.y = l.y)),
                                1 !== a && ((s.x *= a), (s.y *= a)),
                                o < ps &&
                                  (c = s.x - h) * c + (d = s.y - f) * d > o &&
                                  ((s.x = h), (s.y = f)),
                                s
                              );
                            }
                          : us(t)
                          ? function (e) {
                              for (
                                var n, i, r, a, s = t.length, l = 0, c = ps;
                                --s > -1;

                              )
                                (a =
                                  (n = (r = t[s]).x - e.x) * n +
                                  (i = r.y - e.y) * i) < c &&
                                  ((l = s), (c = a));
                              return c <= o ? t[l] : e;
                            }
                          : function (t) {
                              return t;
                            }
                      );
                    })(o ? r : r.points, m, p, v, g, r.radius, a ? -1 : 1))
                  : (Y &&
                      (_ = dt(
                        o ? r : r.x || r.left || r.scrollLeft,
                        m,
                        p,
                        a ? -1 : 1
                      )),
                    V &&
                      (T = dt(
                        o ? r : r.y || r.top || r.scrollTop,
                        v,
                        g,
                        a ? -1 : 1
                      ))));
          },
          ht = function () {
            (U.isThrowing = !1), Ws(U, "throwcomplete", "onThrowComplete");
          },
          ft = function () {
            U.isThrowing = !1;
          },
          pt = function (t, i) {
            var r, o, s, l;
            t && $a
              ? (!0 === t &&
                  ((r = n.snap || n.liveSnap || {}),
                  (o = us(r) || rs(r)),
                  (t = {
                    resistance:
                      (n.throwResistance || n.resistance || 1e3) / (j ? 10 : 1),
                  }),
                  j
                    ? (t.rotation = Js(U, o ? r : r.rotation, p, m, 1, i))
                    : (Y &&
                        (t[X] = Js(
                          U,
                          o ? r : r.points || r.x || r.left,
                          p,
                          m,
                          a ? -1 : 1,
                          i || "x" === U.lockedAxis
                        )),
                      V &&
                        (t[H] = Js(
                          U,
                          o ? r : r.points || r.y || r.top,
                          g,
                          v,
                          a ? -1 : 1,
                          i || "y" === U.lockedAxis
                        )),
                      (r.points || (us(r) && os(r[0]))) &&
                        ((t.linkedProps = X + "," + H),
                        (t.radius = r.radius)))),
                (U.isThrowing = !0),
                (l = isNaN(n.overshootTolerance)
                  ? 1 === n.edgeResistance
                    ? 0
                    : 1 - U.edgeResistance + 0.2
                  : n.overshootTolerance),
                t.duration ||
                  (t.duration = {
                    max: Math.max(
                      n.minDuration || 0,
                      "maxDuration" in n ? n.maxDuration : 2
                    ),
                    min: isNaN(n.minDuration)
                      ? 0 === l || (os(t) && t.resistance > 1e3)
                        ? 0
                        : 0.5
                      : n.minDuration,
                    overshoot: l,
                  }),
                (U.tween = s =
                  Da.to(a || e, {
                    inertia: t,
                    data: "_draggable",
                    onComplete: ht,
                    onInterrupt: ft,
                    onUpdate: n.fastMode ? Ws : ct,
                    onUpdateParams: n.fastMode
                      ? [U, "onthrowupdate", "onThrowUpdate"]
                      : r && r.radius
                      ? [!1, !0]
                      : [],
                  })),
                n.fastMode ||
                  (a && (a._skip = !0),
                  s.render(1e9, !0, !0),
                  ct(!0, !0),
                  (U.endX = U.x),
                  (U.endY = U.y),
                  j && (U.endRotation = U.x),
                  s.play(0),
                  ct(!0, !0),
                  a && (a._skip = !1)))
              : u && U.applyBounds();
          },
          mt = function (t) {
            var n,
              i = M;
            (M = Ra(e.parentNode, !0)),
              t &&
                U.isPressed &&
                !M.equals(i || new Aa()) &&
                ((n = i.inverse().apply({ x: s, y: l })),
                M.apply(n, n),
                (s = n.x),
                (l = n.y)),
              M.equals(ms) && (M = null);
          },
          gt = function () {
            var t,
              n,
              i,
              r = 1 - U.edgeResistance,
              o = rt ? Bs(at) : 0,
              h = rt ? Is(at) : 0;
            F &&
              ((it.x = ot(X, "px") + "px"),
              (it.y = ot(H, "px") + "px"),
              it.renderTransform()),
              mt(!1),
              (Ks.x = U.pointerX - o),
              (Ks.y = U.pointerY - h),
              M && M.apply(Ks, Ks),
              (s = Ks.x),
              (l = Ks.y),
              x && (xt(U.pointerX, U.pointerY), lt(!0)),
              (z = Ra(e)),
              a
                ? (ut(), (d = a.top()), (c = a.left()))
                : (vt() ? (ct(!0, !0), ut()) : U.applyBounds(),
                  j
                    ? ((t = e.ownerSVGElement
                        ? [
                            it.xOrigin - e.getBBox().x,
                            it.yOrigin - e.getBBox().y,
                          ]
                        : (Zs(e)[cs] || "0 0").split(" ")),
                      (w = U.rotationOrigin =
                        Ra(e).apply({
                          x: parseFloat(t[0]) || 0,
                          y: parseFloat(t[1]) || 0,
                        })),
                      ct(!0, !0),
                      (n = U.pointerX - w.x - o),
                      (i = w.y - U.pointerY + h),
                      (c = U.x),
                      (d = U.y = Math.atan2(i, n) * fs))
                    : ((d = ot(H, "px")), (c = ot(X, "px")))),
              u &&
                r &&
                (c > p ? (c = p + (c - p) / r) : c < m && (c = m - (m - c) / r),
                j ||
                  (d > g
                    ? (d = g + (d - g) / r)
                    : d < v && (d = v - (v - d) / r))),
              (U.startX = c = ds(c)),
              (U.startY = d = ds(d));
          },
          vt = function () {
            return U.tween && U.tween.isActive();
          },
          bt = function () {
            !ja.parentNode ||
              vt() ||
              U.isDragging ||
              ja.parentNode.removeChild(ja);
          },
          yt = function (t, r) {
            var c;
            if (
              !o ||
              U.isPressed ||
              !t ||
              (!(("mousedown" !== t.type && "pointerdown" !== t.type) || r) &&
                gs() - nt < 30 &&
                Ua[U.pointerEvent.type])
            )
              N && t && o && Ls(t);
            else {
              if (
                ((O = vt()),
                (I = !1),
                (U.pointerEvent = t),
                Ua[t.type]
                  ? ((S = ~t.type.indexOf("touch")
                      ? t.currentTarget || t.target
                      : at),
                    As(S, "touchend", kt),
                    As(S, "touchmove", wt),
                    As(S, "touchcancel", kt),
                    As(at, "touchstart", zs))
                  : ((S = null), As(at, "mousemove", wt)),
                (A = null),
                (Ga && S) ||
                  (As(at, "mouseup", kt),
                  t && t.target && As(t.target, "mouseup", kt)),
                (E = et.call(U, t.target) && !1 === n.dragClickables && !r))
              )
                return (
                  As(t.target, "change", kt),
                  Ws(U, "pressInit", "onPressInit"),
                  Ws(U, "press", "onPress"),
                  tl(q, !0),
                  void (N = !1)
                );
              if (
                ((P =
                  !(
                    !S ||
                    Y === V ||
                    !1 === U.vars.allowNativeTouchScrolling ||
                    (U.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2))
                  ) && (Y ? "y" : "x")),
                (N = !P && !U.allowEventDefault) &&
                  (Ls(t), As(Na, "touchforcechange", Ls)),
                t.changedTouches
                  ? ((t = b = t.changedTouches[0]), (y = t.identifier))
                  : t.pointerId
                  ? (y = t.pointerId)
                  : (b = y = null),
                es++,
                Ms(lt),
                (l = U.pointerY = t.pageY),
                (s = U.pointerX = t.pageX),
                Ws(U, "pressInit", "onPressInit"),
                (P || U.autoScroll) && Ys(e.parentNode),
                !e.parentNode ||
                  !U.autoScroll ||
                  a ||
                  j ||
                  !e.parentNode._gsMaxScrollX ||
                  ja.parentNode ||
                  e.getBBox ||
                  ((ja.style.width = e.parentNode.scrollWidth + "px"),
                  e.parentNode.appendChild(ja)),
                gt(),
                U.tween && U.tween.kill(),
                (U.isThrowing = !1),
                Da.killTweensOf(a || e, W, !0),
                a && Da.killTweensOf(e, { scrollTo: 1 }, !0),
                (U.tween = U.lockedAxis = null),
                (n.zIndexBoost || (!j && !a && !1 !== n.zIndexBoost)) &&
                  (e.style.zIndex = i.zIndex++),
                (U.isPressed = !0),
                (h = !(!n.onDrag && !U._listeners.drag)),
                (f = !(!n.onMove && !U._listeners.move)),
                !1 !== n.cursor || n.activeCursor)
              )
                for (c = q.length; --c > -1; )
                  Da.set(q[c], {
                    cursor:
                      n.activeCursor ||
                      n.cursor ||
                      ("grab" === Ka ? "grabbing" : Ka),
                  });
              Ws(U, "press", "onPress");
            }
          },
          wt = function (t) {
            var n,
              i,
              r,
              a,
              c,
              d,
              u = t;
            if (o && !qa && U.isPressed && t) {
              if (((U.pointerEvent = t), (n = t.changedTouches))) {
                if ((t = n[0]) !== b && t.identifier !== y) {
                  for (
                    a = n.length;
                    --a > -1 && (t = n[a]).identifier !== y && t.target !== e;

                  );
                  if (a < 0) return;
                }
              } else if (t.pointerId && y && t.pointerId !== y) return;
              S &&
              P &&
              !A &&
              ((Ks.x = t.pageX - (rt ? Bs(at) : 0)),
              (Ks.y = t.pageY - (rt ? Is(at) : 0)),
              M && M.apply(Ks, Ks),
              (i = Ks.x),
              (r = Ks.y),
              (((c = Math.abs(i - s)) !== (d = Math.abs(r - l)) &&
                (c > Z || d > Z)) ||
                (Wa && P === A)) &&
                ((A = c > d && Y ? "x" : "y"),
                P && A !== P && As(Na, "touchforcechange", Ls),
                !1 !== U.vars.lockAxisOnTouchScroll &&
                  Y &&
                  V &&
                  ((U.lockedAxis = "x" === A ? "y" : "x"),
                  rs(U.vars.onLockAxis) && U.vars.onLockAxis.call(U, u)),
                Wa && P === A))
                ? kt(u)
                : (U.allowEventDefault ||
                  (P && (!A || P === A)) ||
                  !1 === u.cancelable
                    ? N && (N = !1)
                    : (Ls(u), (N = !0)),
                  U.autoScroll && (K = !0),
                  xt(t.pageX, t.pageY, f));
            } else N && t && o && Ls(t);
          },
          xt = function (t, e, n) {
            var i,
              r,
              o,
              a,
              h,
              f,
              b = 1 - U.dragResistance,
              y = 1 - U.edgeResistance,
              k = U.pointerX,
              E = U.pointerY,
              S = d,
              O = U.x,
              P = U.y,
              A = U.endX,
              R = U.endY,
              L = U.endRotation,
              D = x;
            (U.pointerX = t),
              (U.pointerY = e),
              rt && ((t -= Bs(at)), (e -= Is(at))),
              j
                ? ((a = Math.atan2(w.y - e, t - w.x) * fs),
                  (h = U.y - a) > 180
                    ? ((d -= 360), (U.y = a))
                    : h < -180 && ((d += 360), (U.y = a)),
                  U.x !== c || Math.abs(d - a) > Z
                    ? ((U.y = a), (o = c + (d - a) * b))
                    : (o = c))
                : (M &&
                    ((f = t * M.a + e * M.c + M.e),
                    (e = t * M.b + e * M.d + M.f),
                    (t = f)),
                  (r = e - l) < Z && r > -Z && (r = 0),
                  (i = t - s) < Z && i > -Z && (i = 0),
                  (U.lockAxis || U.lockedAxis) &&
                    (i || r) &&
                    ((f = U.lockedAxis) ||
                      ((U.lockedAxis = f =
                        Y && Math.abs(i) > Math.abs(r) ? "y" : V ? "x" : null),
                      f &&
                        rs(U.vars.onLockAxis) &&
                        U.vars.onLockAxis.call(U, U.pointerEvent)),
                    "y" === f ? (r = 0) : "x" === f && (i = 0)),
                  (o = ds(c + i * b)),
                  (a = ds(d + r * b))),
              (_ || T || C) &&
                (U.x !== o || (U.y !== a && !j)) &&
                (C &&
                  ((ks.x = o),
                  (ks.y = a),
                  (f = C(ks)),
                  (o = ds(f.x)),
                  (a = ds(f.y))),
                _ && (o = ds(_(o))),
                T && (a = ds(T(a)))),
              u &&
                (o > p
                  ? (o = p + Math.round((o - p) * y))
                  : o < m && (o = m + Math.round((o - m) * y)),
                j ||
                  (a > g
                    ? (a = Math.round(g + (a - g) * y))
                    : a < v && (a = Math.round(v + (a - v) * y)))),
              (U.x !== o || (U.y !== a && !j)) &&
                (j
                  ? ((U.endRotation = U.x = U.endX = o), (x = !0))
                  : (V && ((U.y = U.endY = a), (x = !0)),
                    Y && ((U.x = U.endX = o), (x = !0))),
                n && !1 === Ws(U, "move", "onMove")
                  ? ((U.pointerX = k),
                    (U.pointerY = E),
                    (d = S),
                    (U.x = O),
                    (U.y = P),
                    (U.endX = A),
                    (U.endY = R),
                    (U.endRotation = L),
                    (x = D))
                  : !U.isDragging &&
                    U.isPressed &&
                    ((U.isDragging = I = !0),
                    Ws(U, "dragstart", "onDragStart")));
          },
          kt = function t(i, r) {
            if (
              o &&
              U.isPressed &&
              (!i ||
                null == y ||
                r ||
                !(
                  (i.pointerId && i.pointerId !== y && i.target !== e) ||
                  (i.changedTouches && !Ds(i.changedTouches, y))
                ))
            ) {
              U.isPressed = !1;
              var a,
                s,
                l,
                c,
                d,
                u = i,
                h = U.isDragging,
                f = U.vars.allowContextMenu && i && (i.ctrlKey || i.which > 2),
                p = Da.delayedCall(0.001, bt);
              if (
                (S
                  ? (Rs(S, "touchend", t),
                    Rs(S, "touchmove", wt),
                    Rs(S, "touchcancel", t),
                    Rs(at, "touchstart", zs))
                  : Rs(at, "mousemove", wt),
                Rs(Na, "touchforcechange", Ls),
                (Ga && S) ||
                  (Rs(at, "mouseup", t),
                  i && i.target && Rs(i.target, "mouseup", t)),
                (x = !1),
                h && (($ = xs = gs()), (U.isDragging = !1)),
                Ps(lt),
                E && !f)
              )
                return (
                  i && (Rs(i.target, "change", t), (U.pointerEvent = u)),
                  tl(q, !1),
                  Ws(U, "release", "onRelease"),
                  Ws(U, "click", "onClick"),
                  void (E = !1)
                );
              for (s = q.length; --s > -1; )
                Vs(q[s], "cursor", n.cursor || (!1 !== n.cursor ? Ka : null));
              if ((es--, i)) {
                if (
                  (a = i.changedTouches) &&
                  (i = a[0]) !== b &&
                  i.identifier !== y
                ) {
                  for (
                    s = a.length;
                    --s > -1 && (i = a[s]).identifier !== y && i.target !== e;

                  );
                  if (s < 0 && !r) return;
                }
                (U.pointerEvent = u),
                  (U.pointerX = i.pageX),
                  (U.pointerY = i.pageY);
              }
              return (
                f && u
                  ? (Ls(u), (N = !0), Ws(U, "release", "onRelease"))
                  : u && !h
                  ? ((N = !1),
                    O && (n.snap || n.bounds) && pt(n.inertia || n.throwProps),
                    Ws(U, "release", "onRelease"),
                    (Wa && "touchmove" === u.type) ||
                      -1 !== u.type.indexOf("cancel") ||
                      (Ws(U, "click", "onClick"),
                      gs() - nt < 300 && Ws(U, "doubleclick", "onDoubleClick"),
                      (c = u.target || e),
                      (nt = gs()),
                      (d = function () {
                        nt === L ||
                          !U.enabled() ||
                          U.isPressed ||
                          u.defaultPrevented ||
                          (c.click
                            ? c.click()
                            : at.createEvent &&
                              ((l =
                                at.createEvent("MouseEvents")).initMouseEvent(
                                "click",
                                !0,
                                !0,
                                Na,
                                1,
                                U.pointerEvent.screenX,
                                U.pointerEvent.screenY,
                                U.pointerX,
                                U.pointerY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                              c.dispatchEvent(l)));
                      }),
                      Wa || u.defaultPrevented || Da.delayedCall(0.05, d)))
                  : (pt(n.inertia || n.throwProps),
                    U.allowEventDefault ||
                    !u ||
                    (!1 === n.dragClickables && et.call(U, u.target)) ||
                    !h ||
                    (P && (!A || P !== A)) ||
                    !1 === u.cancelable
                      ? (N = !1)
                      : ((N = !0), Ls(u)),
                    Ws(U, "release", "onRelease")),
                vt() && p.duration(U.tween.duration()),
                h && Ws(U, "dragend", "onDragEnd"),
                !0
              );
            }
            N && i && o && Ls(i);
          },
          _t = function (t) {
            if (t && U.isDragging && !a) {
              var n = t.target || e.parentNode,
                i = n.scrollLeft - n._gsScrollX,
                r = n.scrollTop - n._gsScrollY;
              (i || r) &&
                (M
                  ? ((s -= i * M.a + r * M.c), (l -= r * M.d + i * M.b))
                  : ((s -= i), (l -= r)),
                (n._gsScrollX += i),
                (n._gsScrollY += r),
                xt(U.pointerX, U.pointerY));
            }
          },
          Tt = function (t) {
            var e = gs(),
              n = e - nt < 100,
              i = e - $ < 50,
              r = n && L === nt,
              o = U.pointerEvent && U.pointerEvent.defaultPrevented,
              a = n && D === nt,
              s = t.isTrusted || (null == t.isTrusted && n && r);
            if (
              ((r || (i && !1 !== U.vars.suppressClickOnDrag)) &&
                t.stopImmediatePropagation &&
                t.stopImmediatePropagation(),
              n &&
                (!U.pointerEvent || !U.pointerEvent.defaultPrevented) &&
                (!r || (s && !a)))
            )
              return s && r && (D = nt), void (L = nt);
            (U.isPressed || i || n) && ((s && t.detail && n && !o) || Ls(t)),
              n ||
                i ||
                I ||
                (t && t.target && (U.pointerEvent = t),
                Ws(U, "click", "onClick"));
          },
          Ct = function (t) {
            return M
              ? {
                  x: t.x * M.a + t.y * M.c + M.e,
                  y: t.x * M.b + t.y * M.d + M.f,
                }
              : { x: t.x, y: t.y };
          };
        return (
          (k = i.get(e)) && k.kill(),
          (r.startDrag = function (t, n) {
            var i, r, o, a;
            yt(t || U.pointerEvent, !0),
              n &&
                !U.hitTest(t || U.pointerEvent) &&
                ((i = qs(t || U.pointerEvent)),
                (r = qs(e)),
                (o = Ct({ x: i.left + i.width / 2, y: i.top + i.height / 2 })),
                (a = Ct({ x: r.left + r.width / 2, y: r.top + r.height / 2 })),
                (s -= o.x - a.x),
                (l -= o.y - a.y)),
              U.isDragging ||
                ((U.isDragging = I = !0), Ws(U, "dragstart", "onDragStart"));
          }),
          (r.drag = wt),
          (r.endDrag = function (t) {
            return kt(t || U.pointerEvent, !0);
          }),
          (r.timeSinceDrag = function () {
            return U.isDragging ? 0 : (gs() - $) / 1e3;
          }),
          (r.timeSinceClick = function () {
            return (gs() - nt) / 1e3;
          }),
          (r.hitTest = function (t, e) {
            return i.hitTest(U.target, t, e);
          }),
          (r.getDirection = function (t, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              u =
                "velocity" === t && $a ? t : os(t) && !j ? "element" : "start";
            return (
              "element" === u && ((s = qs(U.target)), (l = qs(t))),
              (i =
                "start" === u
                  ? U.x - c
                  : "velocity" === u
                  ? $a.getVelocity(e, X)
                  : s.left + s.width / 2 - (l.left + l.width / 2)),
              j
                ? i < 0
                  ? "counter-clockwise"
                  : "clockwise"
                : ((n = n || 2),
                  (r =
                    "start" === u
                      ? U.y - d
                      : "velocity" === u
                      ? $a.getVelocity(e, H)
                      : s.top + s.height / 2 - (l.top + l.height / 2)),
                  (a =
                    (o = Math.abs(i / r)) < 1 / n
                      ? ""
                      : i < 0
                      ? "left"
                      : "right"),
                  o < n &&
                    ("" !== a && (a += "-"), (a += r < 0 ? "up" : "down")),
                  a)
            );
          }),
          (r.applyBounds = function (t, i) {
            var r, o, a, s, l, c;
            if (t && n.bounds !== t) return (n.bounds = t), U.update(!0, i);
            if ((ct(!0), ut(), u && !vt())) {
              if (
                ((r = U.x),
                (o = U.y),
                r > p ? (r = p) : r < m && (r = m),
                o > g ? (o = g) : o < v && (o = v),
                (U.x !== r || U.y !== o) &&
                  ((a = !0),
                  (U.x = U.endX = r),
                  j ? (U.endRotation = r) : (U.y = U.endY = o),
                  (x = !0),
                  lt(!0),
                  U.autoScroll && !U.isDragging))
              )
                for (
                  Ys(e.parentNode),
                    s = e,
                    _s.scrollTop =
                      null != Na.pageYOffset
                        ? Na.pageYOffset
                        : null != at.documentElement.scrollTop
                        ? at.documentElement.scrollTop
                        : at.body.scrollTop,
                    _s.scrollLeft =
                      null != Na.pageXOffset
                        ? Na.pageXOffset
                        : null != at.documentElement.scrollLeft
                        ? at.documentElement.scrollLeft
                        : at.body.scrollLeft;
                  s && !c;

                )
                  (l = (c = Xs(s.parentNode)) ? _s : s.parentNode),
                    V &&
                      l.scrollTop > l._gsMaxScrollY &&
                      (l.scrollTop = l._gsMaxScrollY),
                    Y &&
                      l.scrollLeft > l._gsMaxScrollX &&
                      (l.scrollLeft = l._gsMaxScrollX),
                    (s = l);
              U.isThrowing &&
                (a || U.endX > p || U.endX < m || U.endY > g || U.endY < v) &&
                pt(n.inertia || n.throwProps, a);
            }
            return U;
          }),
          (r.update = function (t, n, i) {
            if (n && U.isPressed) {
              var r = Ra(e),
                o = z.apply({ x: U.x - c, y: U.y - d }),
                a = Ra(e.parentNode, !0);
              a.apply({ x: r.e - o.x, y: r.f - o.y }, o),
                (U.x -= o.x - a.e),
                (U.y -= o.y - a.f),
                lt(!0),
                gt();
            }
            var s = U.x,
              l = U.y;
            return (
              mt(!n),
              t ? U.applyBounds() : (x && i && lt(!0), ct(!0)),
              n && (xt(U.pointerX, U.pointerY), x && lt(!0)),
              U.isPressed &&
                !n &&
                ((Y && Math.abs(s - U.x) > 0.01) ||
                  (V && Math.abs(l - U.y) > 0.01 && !j)) &&
                gt(),
              U.autoScroll &&
                (Ys(e.parentNode, U.isDragging),
                (K = U.isDragging),
                lt(!0),
                js(e, _t),
                Fs(e, _t)),
              U
            );
          }),
          (r.enable = function (t) {
            var i,
              r,
              s,
              l = { lazy: !0 };
            if (
              (!1 !== n.cursor && (l.cursor = n.cursor || Ka),
              Da.utils.checkPrefix("touchCallout") && (l.touchCallout = "none"),
              "soft" !== t)
            ) {
              for (
                Es(
                  q,
                  Y === V
                    ? "none"
                    : (n.allowNativeTouchScrolling &&
                        (e.scrollHeight === e.clientHeight) ==
                          (e.scrollWidth === e.clientHeight)) ||
                      n.allowEventDefault
                    ? "manipulation"
                    : Y
                    ? "pan-y"
                    : "pan-x"
                ),
                  r = q.length;
                --r > -1;

              )
                (s = q[r]),
                  Ga || As(s, "mousedown", yt),
                  As(s, "touchstart", yt),
                  As(s, "click", Tt, !0),
                  Da.set(s, l),
                  s.getBBox &&
                    s.ownerSVGElement &&
                    Y !== V &&
                    Da.set(s.ownerSVGElement, {
                      touchAction:
                        n.allowNativeTouchScrolling || n.allowEventDefault
                          ? "manipulation"
                          : Y
                          ? "pan-y"
                          : "pan-x",
                    }),
                  n.allowContextMenu || As(s, "contextmenu", st);
              tl(q, !1);
            }
            return (
              Fs(e, _t),
              (o = !0),
              $a &&
                "soft" !== t &&
                $a.track(a || e, F ? "x,y" : j ? "rotation" : "top,left"),
              (e._gsDragID = i = "d" + ys++),
              (bs[i] = U),
              a && (a.enable(), (a.element._gsDragID = i)),
              (n.bounds || j) && gt(),
              n.bounds && U.applyBounds(),
              U
            );
          }),
          (r.disable = function (t) {
            for (var n, i = U.isDragging, r = q.length; --r > -1; )
              Vs(q[r], "cursor", null);
            if ("soft" !== t) {
              for (Es(q, null), r = q.length; --r > -1; )
                (n = q[r]),
                  Vs(n, "touchCallout", null),
                  Rs(n, "mousedown", yt),
                  Rs(n, "touchstart", yt),
                  Rs(n, "click", Tt, !0),
                  Rs(n, "contextmenu", st);
              tl(q, !0),
                S &&
                  (Rs(S, "touchcancel", kt),
                  Rs(S, "touchend", kt),
                  Rs(S, "touchmove", wt)),
                Rs(at, "mouseup", kt),
                Rs(at, "mousemove", wt);
            }
            return (
              js(e, _t),
              (o = !1),
              $a &&
                "soft" !== t &&
                $a.untrack(a || e, F ? "x,y" : j ? "rotation" : "top,left"),
              a && a.disable(),
              Ps(lt),
              (U.isDragging = U.isPressed = E = !1),
              i && Ws(U, "dragend", "onDragEnd"),
              U
            );
          }),
          (r.enabled = function (t, e) {
            return arguments.length ? (t ? U.enable(e) : U.disable(e)) : o;
          }),
          (r.kill = r.revert =
            function () {
              return (
                (U.isThrowing = !1),
                U.tween && U.tween.kill(),
                U.disable(),
                Da.set(q, { clearProps: "userSelect" }),
                delete bs[e._gsDragID],
                U
              );
            }),
          ~B.indexOf("scroll") &&
            ((a = r.scrollProxy =
              new nl(
                e,
                Cs(
                  {
                    onKill: function () {
                      U.isPressed && kt(null);
                    },
                  },
                  n
                )
              )),
            (e.style.overflowY = V && !Za ? "auto" : "hidden"),
            (e.style.overflowX = Y && !Za ? "auto" : "hidden"),
            (e = a.content)),
          j ? (W.rotation = 1) : (Y && (W[X] = 1), V && (W[H] = 1)),
          (it.force3D = !("force3D" in n) || n.force3D),
          Ja(La(r)),
          r.enable(),
          r
        );
      }
      return (
        (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        (i.register = function (t) {
          (Da = t), il();
        }),
        (i.create = function (t, e) {
          return (
            Xa || il(!0),
            Ya(t).map(function (t) {
              return new i(t, e);
            })
          );
        }),
        (i.get = function (t) {
          return bs[(Ya(t)[0] || {})._gsDragID];
        }),
        (i.timeSinceDrag = function () {
          return (gs() - xs) / 1e3;
        }),
        (i.hitTest = function (t, e, n) {
          if (t === e) return !1;
          var i,
            r,
            o,
            a = qs(t),
            s = qs(e),
            l = a.top,
            c = a.left,
            d = a.right,
            u = a.bottom,
            h = a.width,
            f = a.height,
            p = s.left > d || s.right < c || s.top > u || s.bottom < l;
          return p || !n
            ? !p
            : ((o = -1 !== (n + "").indexOf("%")),
              (n = parseFloat(n) || 0),
              ((i = {
                left: Math.max(c, s.left),
                top: Math.max(l, s.top),
              }).width = Math.min(d, s.right) - i.left),
              (i.height = Math.min(u, s.bottom) - i.top),
              !(i.width < 0 || i.height < 0) &&
                (o
                  ? ((n *= 0.01),
                    (r = i.width * i.height) >= h * f * n ||
                      r >= s.width * s.height * n)
                  : i.width > n && i.height > n));
        }),
        i
      );
    })(rl);
  !(function (t, e) {
    for (var n in e) n in t || (t[n] = e[n]);
  })(ol.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1,
  }),
    (ol.zIndex = 1e3),
    (ol.version = "3.11.4"),
    is() && Da.registerPlugin(ol);
  var al = n(502),
    sl = {};
  (sl.styleTagTransform = x()),
    (sl.setAttributes = v()),
    (sl.insert = m().bind(null, "head")),
    (sl.domAPI = f()),
    (sl.insertStyleElement = y());
  u()(al.Z, sl);
  al.Z && al.Z.locals && al.Z.locals;
  va.registerPlugin(ol);
  const ll = class extends ge {
    constructor({
      name: t,
      anchor: e,
      className: n,
      direction: i = "positive",
      initialIndex: r,
      draggable: o = null,
      onChange: a,
    }) {
      super();
      const { viewer: s, timeline: l } = ve.getContext();
      (this.timeline = l),
        (this.duration = s.video.duration),
        (this.name = t),
        (this.className = n),
        (this.marker = this.createMarker()),
        (this.anchor = e),
        (this.timeIndex = parseFloat(r)),
        (this.x = 0),
        (this.percentageX = 0),
        (this.direction = i),
        (this.timestamp = new me()),
        (this.draggable = o),
        (this.onChange = a),
        (this.handleChange = this.handleChange.bind(this)),
        (this.setXPosition = this.setXPosition.bind(this));
    }
    getMarker() {
      return this.marker;
    }
    getStyle() {
      return getComputedStyle(this.marker);
    }
    getTimelinePosition() {
      const { x: t, width: e } = this.getBounds();
      let n = 0;
      "right" == this.anchor && (n = e);
      return (
        t - this.timeline.getTimelineElement().getBoundingClientRect().x + n
      );
    }
    getTranslateX() {
      return t(this.marker);
    }
    getX() {
      return this.x;
    }
    getPercentageX() {
      return this.percentageX;
    }
    getBounds() {
      return this.marker.getBoundingClientRect();
    }
    getTimeIndexFromCurrentPosition() {
      const t = this.timeline
          .getTimelineElement()
          .getBoundingClientRect().width,
        e = this.getTimelinePosition() / t,
        n = this.duration * e;
      return n < 0 ? 0 : n;
    }
    getXPositionFromTimeIndex(t) {
      return (
        this.timeline.getTimelineElement().getBoundingClientRect().width *
        (t / this.duration)
      );
    }
    getTimeIndex() {
      if (-1 == this.timeIndex)
        throw new Error(
          `time index not set or is invalid for marker ${name}: ${this.timeIndex}. Please initialize your marker with a timeIndex`
        );
      return this.timeIndex || 0;
    }
    setTimeIndex(t) {
      (this.timeIndex = parseFloat(t)),
        this.timestamp.setDecimalTime(t),
        this.handleChange();
    }
    setX(t) {
      (this.x = t), this.handleChange();
    }
    setPercentageX(t) {
      this.percentageX = t;
    }
    setXPosition(t) {
      let e = t;
      this.draggable instanceof ol
        ? (va.set(this.marker, { x: e }), this.draggable.update())
        : (this.marker.style.transform = `translateX(${e}px)`);
      const n = this.getTimeIndexFromCurrentPosition();
      this.setTimeIndex(n), this.setX(t);
      const i =
        t / this.timeline.getTimelineElement().getBoundingClientRect().width;
      this.setPercentageX(i);
    }
    setPositionByTimeIndex(t) {
      let e = this.getXPositionFromTimeIndex(t);
      "negative" == this.direction &&
        (e =
          -1 *
          (this.timeline.getTimelineElement().getBoundingClientRect().width -
            e)),
        this.setXPosition(e);
    }
    applyBounds(t) {
      this.draggable && this.draggable.applyBounds(t);
    }
    addClass(t) {
      this.marker.classList.add(t);
    }
    removeClass(t) {
      this.marker.classList.remove(t);
    }
    is(t) {
      return this.name == t;
    }
    setDraggable(t) {
      this.draggable instanceof ol && this.draggable.kill(),
        this.marker.classList.add("marker-draggable");
      const e = this,
        { onDrag: n, onDragEnd: i, ...r } = t;
      return (
        (this.draggable = ol.create(this.marker, {
          ...r,
          onDragEnd: function (t) {
            i instanceof Function && i.call(this, t);
          },
          onDrag: function (t) {
            try {
              n instanceof Function && n.call(this, t), e.setXPosition(this.x);
            } catch (e) {
              return (
                console.warn("MarkerDragError", e.message),
                this.endDrag(t),
                va.killTweensOf(this.target),
                !1
              );
            }
          },
        })[0]),
        this.draggable
      );
    }
    handleChange() {
      this.onChange instanceof Function &&
        this.onChange({ timeIndex: this.timeIndex, x: this.x });
    }
    createMarker() {
      return r("div", {
        properties: { className: `${this.className} marker` },
      });
    }
    render(t) {
      super.render(this.marker, t),
        this.timestamp.render(this.marker),
        t.append(this.marker);
    }
  };
  var cl = n(572),
    dl = {};
  (dl.styleTagTransform = x()),
    (dl.setAttributes = v()),
    (dl.insert = m().bind(null, "head")),
    (dl.domAPI = f()),
    (dl.insertStyleElement = y());
  u()(cl.Z, dl);
  cl.Z && cl.Z.locals && cl.Z.locals;
  const ul = class extends ll {
    constructor({
      name: t,
      className: e,
      getTimelineElement: n,
      getVideoDuration: i,
      isDraggable: r = !0,
      onChange: o,
    }) {
      super({
        name: t,
        className: e,
        getTimelineElement: n,
        getVideoDuration: i,
        isDraggable: r,
        onChange: o,
      });
    }
    getAnimationTime() {
      return this.animationTime;
    }
    setPercentPosition(t, e) {
      this.setPercentageX(t);
      const n = this.marker.parentElement,
        i = this.getBounds().width,
        r = n.getBoundingClientRect().width,
        {
          borderLeftWidth: o,
          borderRightWidth: a,
          paddingLeft: s,
          paddingRight: l,
        } = getComputedStyle(n);
      parseInt(o), parseInt(a), parseInt(s), parseInt(l);
      let c = (r - i) * t;
      this.setXPosition(c);
    }
    toggleAnimate(t) {
      this.marker.style.transition = t ? "" : "none";
    }
    hide() {
      this.marker.style.opacity = 0;
    }
    show() {
      this.marker.style.opacity = 1;
    }
    onRender() {
      this.animationTime = Number(
        this.getStyle().transitionDuration.replace("s", "")
      );
    }
  };
  var hl = n(257),
    fl = n.n(hl),
    pl = n(993),
    ml = {};
  (ml.styleTagTransform = x()),
    (ml.setAttributes = v()),
    (ml.insert = m().bind(null, "head")),
    (ml.domAPI = f()),
    (ml.insertStyleElement = y());
  u()(pl.Z, ml);
  pl.Z && pl.Z.locals && pl.Z.locals;
  const gl = class {
    constructor({
      className: t,
      onClick: e,
      onToggle: n,
      iconClassName: i,
      title: r,
    }) {
      (this.className = t),
        (this.iconClassName = i),
        (this.onClick = e),
        (this.onToggle = n),
        (this.btn = null),
        (this.active = !1),
        (this.title = r);
    }
    handleClick(t) {
      this.onClick instanceof Function && this.onClick(t),
        this.onToggle instanceof Function && this.toggle();
    }
    getElement() {
      return this.btn;
    }
    disable() {
      this.btn.disabled = !0;
    }
    setTitle(t) {
      this.btn.setAttribute("title", t);
    }
    focus() {
      this.btn.focus();
    }
    toggle(t) {
      if (this.onToggle instanceof Function)
        try {
          this.onToggle({ target: this.btn, toggle: !this.active });
        } catch (t) {
          return !1;
        }
      (this.active = null != t ? t : !this.active),
        this.active
          ? this.btn.classList.add("control-btn-active")
          : this.btn.classList.remove("control-btn-active");
    }
    blur() {
      this.btn.blur();
    }
    enable() {
      this.btn.disabled = !1;
    }
    addClass(t) {
      this.btn.classList.add(t);
    }
    removeClass(t) {
      this.btn.classList.remove(t);
    }
    addIconClass(t) {
      this.findIcon().classList.add(t);
    }
    removeIconClass(t) {
      this.findIcon().classList.remove(t);
    }
    findIcon() {
      return this.btn.querySelector("i") ?? this.btn.querySelector("svg");
    }
    createControlButton() {
      this.btn = r("button", {
        properties: {
          className: "control-btn",
          title: this.title || "",
          onclick: this.handleClick.bind(this),
        },
      });
      const t = r("i", { properties: { className: this.iconClassName || "" } });
      return this.btn.append(t), this.btn;
    }
    render(t) {
      t.append(this.createControlButton());
    }
  };
  const vl = class extends gl {
    constructor({ video: t, onPlayToggle: e, onPlayClick: n }) {
      super({
        className: "play-btn",
        iconClassName: "fa fa-play",
        onToggle: e,
        onClick: n,
      }),
        (this.onPlayToggle = e),
        (this.video = t),
        this.attachVideoEvents();
    }
    handlePause(t) {
      this.toggle(!1),
        this.setTitle("Play"),
        this.addIconClass("fa-play"),
        this.removeIconClass("fa-pause");
    }
    handlePlaying(t) {
      this.toggle(!0),
        this.setTitle("Pause"),
        this.addIconClass("fa-pause"),
        this.removeIconClass("fa-play");
    }
    attachVideoEvents() {
      this.video.addEventListener("pause", this.handlePause.bind(this)),
        this.video.addEventListener("playing", this.handlePlaying.bind(this));
    }
  };
  var bl = n(340),
    yl = {};
  (yl.styleTagTransform = x()),
    (yl.setAttributes = v()),
    (yl.insert = m().bind(null, "head")),
    (yl.domAPI = f()),
    (yl.insertStyleElement = y());
  u()(bl.Z, yl);
  bl.Z && bl.Z.locals && bl.Z.locals;
  const wl = class {
    constructor({
      rangeSelector: t,
      onPlayToggle: e,
      onTrimToggle: n,
      onPlayClick: i,
      onCropToggle: r,
    }) {
      const { viewer: o } = ve.getContext();
      (this.video = o.video),
        (this.controls = null),
        (this.controlElements = []),
        (this.playBtn = new vl({
          video: this.video,
          onPlayToggle: e,
          onPlayClick: i,
        })),
        (this.cropBtn = new gl({
          className: "crop-btn",
          iconClassName: "fa fa-crop",
          title: "Crop video",
        })),
        (this.firstFrameBtn = new gl({
          className: "first-frame-btn",
          iconClassName: "fa fa-step-backward",
          onClick: () => {
            this.video.currentTime = 0;
          },
          title: "Jump to first frame",
        })),
        (this.lastFrameBtn = new gl({
          className: "last-frame-btn",
          iconClassName: "fa fa-step-forward",
          onClick: () => {
            console.log("rangeSelector", t),
              (this.video.currentTime = t.outMarker.getTimeIndex());
          },
          title: "Jump to last frame",
        })),
        this.registerControlButtons([
          this.firstFrameBtn,
          this.playBtn,
          this.lastFrameBtn,
        ]);
    }
    registerControlButtons(t) {
      if (!t || !Array.isArray(t))
        throw new Error("Controls: controlElements must be an array");
      this.controlElements = [...this.controlElements, ...t];
    }
    disableControlButtons() {
      this.controlElements.forEach((t) => {
        t.getElement().disabled = !0;
      });
    }
    enableControlButtons() {
      this.controlElements.forEach((t) => {
        t.getElement().disabled = !1;
      });
    }
    toggleControlButtons({ target: t, toggle: e }) {
      this.controlElements.forEach((n) => {
        n.getElement().className != t.className &&
          (e ? n.disable() : n.enable());
      });
    }
    createControls() {
      return (
        (this.controls = r("div", {
          properties: { className: "video-editor-controls" },
        })),
        this.controlElements.forEach((t) => t.render(this.controls)),
        this.controls
      );
    }
    render(t) {
      t.append(this.createControls());
    }
  };
  var xl = n(875),
    kl = {};
  (kl.styleTagTransform = x()),
    (kl.setAttributes = v()),
    (kl.insert = m().bind(null, "head")),
    (kl.domAPI = f()),
    (kl.insertStyleElement = y());
  u()(xl.Z, kl);
  xl.Z && xl.Z.locals && xl.Z.locals;
  const _l = class {
    constructor({
      title: t,
      body: e,
      variant: n = "info",
      fadeOutTime: i = 500,
    }) {
      (this.title = t),
        (this.body = e),
        (this.variant = n),
        (this.fadeOutTime = i),
        (this.hidden = !0),
        (this.createPopover = this.createPopover.bind(this)),
        (this.show = this.show.bind(this)),
        (this.hide = this.hide.bind(this)),
        (this.setPopoverPositionRelativeToContainer =
          this.setPopoverPositionRelativeToContainer.bind(this)),
        (this.popover = this.createPopover());
    }
    setBody(t) {
      this.popover.querySelector(".popover-body").innerText = t;
    }
    setTitle(t) {
      this.popover.querySelector(".popover-title").innerText = t;
    }
    createPopover() {
      const t = document.createElement("div");
      t.classList.add("popover"),
        t.classList.add(`popover-${this.variant}`),
        (t.style.display = "none"),
        t.style.setProperty("--fade-out-time", `${this.fadeOutTime}ms`);
      const e = document.createElement("div");
      e.classList.add("popover-title"), (e.innerText = this.title);
      const n = document.createElement("div");
      n.classList.add("popover-body"), (n.innerText = this.body);
      const i = document.createElement("div");
      return i.classList.add("popover-arrow"), t.append(e, n, i), t;
    }
    async show(t) {
      return (
        (this.popover.style.display = "block"),
        new Promise((e) => {
          requestAnimationFrame(() => {
            this.setPopoverPositionRelativeToContainer(this.popover, t),
              (this.popover.style.opacity = 1),
              (this.hidden = !1);
          }),
            setTimeout(() => {
              e();
            }, this.fadeOutTime);
        })
      );
    }
    hide() {
      (this.popover.style.opacity = 0),
        (this.popover.style.display = "none"),
        (this.hidden = !0);
    }
    handlePopoverWindowConstraint(t, e, n) {
      const i = t.querySelector(".popover-arrow");
      if (n.left < 0)
        (t.style.left = n.width / 2 + "px"),
          (t.style.right = "unset"),
          (i.style.left = `${e.left}px`);
      else if (n.right > window.innerWidth) {
        t.style.left = window.innerWidth - n.width / 2 + "px";
        const r = window.innerWidth - e.right;
        (i.style.left = "unset"), (i.style.right = `${r}px`);
      } else i.style.left = "50%";
    }
    setPopoverPositionRelativeToContainer(t, e) {
      const n = e.getBoundingClientRect();
      (t.style.top = `${n.top}px`), (t.style.left = `${n.left}px`);
      const i = t.getBoundingClientRect();
      (t.style.top = n.top - i.height - 20 + "px"),
        this.handlePopoverWindowConstraint(t, n, i);
    }
    render(t) {
      this.hide(), document.body.appendChild(this.popover), this.show(t);
    }
  };
  var Tl = n(286),
    Cl = {};
  (Cl.styleTagTransform = x()),
    (Cl.setAttributes = v()),
    (Cl.insert = m().bind(null, "head")),
    (Cl.domAPI = f()),
    (Cl.insertStyleElement = y());
  u()(Tl.Z, Cl);
  Tl.Z && Tl.Z.locals && Tl.Z.locals;
  va.registerPlugin(ol);
  const El = class {
    constructor({
      popover: t,
      timeline: e,
      playHead: n,
      setVideoTimeIndex: i,
      initialMarkers: r,
      limit: o,
      onRangeUpdate: a,
    }) {
      const {
        viewer: s,
        onRangeLimit: l,
        onMarkerDragStart: c,
        onMarkerDragEnd: d,
      } = ve.getContext();
      (this.rangeSelector = this.createRangeSelector()),
        (this.timeline = e),
        (this.video = s.video),
        (this.initialMarkers = r || { in: 0, out: this.video.duration }),
        this.initialMarkers.out ||
          (this.initialMarkers.out = this.video.duration),
        (this.viewer = s),
        (this.timeIndexPrecision = 3),
        (this.setVideoTimeIndex = i),
        (this.lastInPos = 0),
        (this.lastOutPos = 0),
        (this.lastRangeSelectorX = 0),
        (this.onRangeUpdate = a),
        (this.onRangeLimit = l),
        (this.onMarkerDragStart = c),
        (this.onMarkerDragEnd = d),
        (this.currentIndex = this.initialMarkers.in),
        (this.inTime = this.currentIndex),
        (this.outTime = this.initialMarkers.out),
        (this.limit = o),
        (this.popover = t),
        (this.isDragging = !1),
        (this.currentMarker = null),
        (this.selectedFrames = null),
        (this.hidden = !1),
        (this.handleRangeUpdate = this.handleRangeUpdate.bind(this)),
        (this.calculateRangeSelectorDragBounds =
          this.calculateRangeSelectorDragBounds.bind(this)),
        (this.inMarker = new ll({
          className: "in-marker",
          name: "in",
          anchor: "right",
          initialIndex: r?.in || 0,
          onChange: ({ timeIndex: t, x: e }) => {},
        })),
        (this.outMarker = new ll({
          className: "out-marker",
          name: "out",
          anchor: "left",
          direction: "negative",
          initialIndex: r?.out || this.viewer.video.duration,
          onChange: ({ timeIndex: t, x: e }) => {},
        })),
        (this.playHead = n),
        (this.playHead.onChange = ({ timeIndex: t, x: e }) => {});
    }
    setCurrentMarker(t) {
      if (t instanceof HTMLElement) {
        const e = t.classList;
        e.contains("in-marker")
          ? (this.currentMarker = this.inMarker)
          : e.contains("out-marker")
          ? (this.currentMarker = this.outMarker)
          : e.contains("play-head") && (this.currentMarker = this.playHead);
      } else this.currentMarker = t instanceof ll ? t : null;
    }
    setLastInAndOutMarkerPositions() {
      (this.lastInPos = this.inMarker.getBounds().right),
        (this.lastOutPos = this.outMarker.getBounds().left),
        (this.lastRangeSelectorX = t(this.rangeSelector));
    }
    setRangeWidth(t) {
      this.rangeSelector.style.width = `${t}%`;
    }
    setRangeSelectorXPos(t) {
      va.set(this.rangeSelector, { x: t });
    }
    getRangeSelectorXPos() {
      const e = t(this.rangeSelector);
      return [e, e + this.rangeSelector.getBoundingClientRect().width];
    }
    setSelectedFramesX(t) {
      this.selectedFrames.style.transform = `translateX(${t}px)`;
    }
    getTimelineWidth() {
      return this.timeline.getTimelineElement().getBoundingClientRect().width;
    }
    movePlayheadToMarkerPosition() {
      let t = 0,
        e = this.currentMarker.getX();
      this.currentMarker.is("out") &&
        ((e = this.getTimelineWidth() + e),
        (t = this.playHead.getBounds().width));
      const n = parseInt(e) - parseInt(t);
      this.playHead.setXPosition(n), this.playHead.show();
    }
    show() {
      (this.rangeSelector.parentElement.style.visibility = "visible"),
        (this.hidden = !1);
    }
    hide() {
      (this.rangeSelector.parentElement.style.visibility = "hidden"),
        (this.hidden = !0),
        this.resetRange();
    }
    resetRange() {
      this.inMarker.setPositionByTimeIndex(0),
        this.outMarker.setPositionByTimeIndex(this.viewer.video.duration),
        this.setRangeWidth(100),
        this.setRangeSelectorXPos(0),
        this.setSelectedFramesX(0);
    }
    attachTimelineEvents() {
      this.timeline
        .getTimelineElement()
        .addEventListener("timelineReady", this.handleTimelineReady.bind(this));
    }
    attachDraggableEvents(t) {
      const e = this.handleDrag.bind(this),
        n = this.handleDragEnd.bind(this),
        i = this.handleDragStart.bind(this),
        r = {
          type: "x",
          inertia: !1,
          bounds: this.timeline
            .getTimelineElement()
            .closest(".timeline-container"),
          onDragEnd: function (t) {
            n(t, this);
          },
          onDragStart: function (t) {
            i(t, this);
          },
          onMove: function (t) {},
          onDrag: function (t) {
            e(t, this);
          },
        };
      this.inMarker.setDraggable(r), this.outMarker.setDraggable(r);
      const o = this.handleDragRangeSelector.bind(this),
        a = this.handleDragEndRangeSelector.bind(this),
        s = {
          type: "x",
          inertia: !0,
          bounds: this.calculateRangeSelectorDragBounds(),
          onDragEnd: function (t) {
            a(t), this.disable();
          },
          onDragStart: (t) => {
            t.preventDefault(),
              (this.isDragging = !0),
              this.playHead.hide(),
              this.rangeSelector.parentElement.classList.add(
                "range-selector-dragging"
              ),
              document.body.style.setProperty(
                "cursor",
                "grabbing",
                "important"
              );
          },
          onDrag: function (t) {
            t.preventDefault(), o(t, this);
          },
          onClick: (t) => {
            t.preventDefault(),
              t.stopPropagation(),
              (document.body.style.cursor = "pointer");
          },
        },
        l = ol.create(this.rangeSelector, { ...s })[0];
      (l.vars.zIndexBoost = !1), l.disable(), (this.rsDraggable = l);
      ((t, e, n = { holdDuration: 50 }) => {
        const { holdDuration: i } = n;
        let r,
          o = 0,
          a = null;
        t.addEventListener("presshold", e, !0);
        const s = (e) => {
            const { target: n } = e;
            (n.closest(`.${t.className}`) || n.className == t.className) &&
              ((r = e), a || (a = setInterval(c, 1)), e.preventDefault());
          },
          l = (t) => {
            clearInterval(a), (a = null), (o = 0);
          },
          c = (t) => {
            o >= i && (e(r), l()), o++;
          };
        document.addEventListener("mousedown", s, !0),
          document.addEventListener("touchstart", s, !0),
          document.addEventListener("mouseup", l, !0),
          document.addEventListener("touchend", l, !1);
      })(
        this.rangeSelector,
        (t) => {
          const { target: e } = t;
          t.preventDefault(),
            t.stopPropagation(),
            e.classList.contains("marker") || (l.enable(), l.startDrag(t));
        },
        { holdDuration: 60 }
      );
      window.addEventListener(
        "resize",
        this.handleWindowResizeDragPositions.bind(this)
      );
    }
    calculateRangeSelectorDragBounds() {
      const t = this.timeline
          .getTimelineElement()
          .closest(".timeline-container"),
        e = this.inMarker.getBounds().width,
        n = getComputedStyle(t).paddingLeft;
      t.getBoundingClientRect().x,
        parseInt(n),
        t.getBoundingClientRect().width,
        parseInt(n);
      return t.querySelector(".frames-container");
    }
    handleTimelineReady(t) {
      const { target: e } = t;
      this.attachDraggableEvents(e),
        this.viewer.video.addEventListener(
          "timeupdate",
          this.handleTimeUpdate.bind(this)
        ),
        this.viewer.video.addEventListener("play", this.handlePlay.bind(this)),
        this.renderFramesClone(),
        this.initialMarkers?.in &&
          (this.inMarker.setPositionByTimeIndex(this.initialMarkers.in),
          (this.viewer.video.currentTime = this.initialMarkers.in),
          this.updateMarkerPosition(this.inMarker, this.initialMarkers.in));
      const { maxDuration: n } = this.limit || {},
        i = this.initialMarkers.out - this.initialMarkers.in;
      n && i > n && (this.initialMarkers.out = this.initialMarkers.in + n),
        this.initialMarkers?.out &&
          (this.outMarker.setPositionByTimeIndex(this.initialMarkers.out),
          this.updateMarkerPosition(this.outMarker, this.initialMarkers.out)),
        this.show();
    }
    handleRangeUpdate({ marker: t, timeIndex: e, x: n }) {
      switch (t) {
        case "in":
        case "rangeSelector":
          (this.inTime = e),
            (this.outTime = this.outMarker.getTimeIndex()),
            (this.currentIndex = e);
          break;
        case "out":
          this.outTime = e;
          break;
        case "playhead":
          this.currentIndex = e;
          break;
        default:
          console.error("unknown marker update in handleRangeUpdate", t);
      }
      this.popover.hidden || this.popover.hide(),
        this.onRangeUpdate instanceof Function &&
          this.onRangeUpdate(this.currentIndex, {
            in: this.inTime,
            out: this.outTime,
          });
    }
    handleDragRangeSelector(t, e) {
      const [n, i] = this.getRangeSelectorXPos();
      this.inMarker.setXPosition(n);
      const r =
        -1 *
        (this.timeline.getTimelineElement().getBoundingClientRect().width - i);
      this.outMarker.setXPosition(r);
      const o = -1 * parseInt(n);
      this.setSelectedFramesX(o);
      const a = this.inMarker.getTimeIndex();
      (this.viewer.video.currentTime = a),
        this.handleRangeUpdate({ marker: "rangeSelector", timeIndex: a, x: n });
    }
    handleDragEndRangeSelector(t) {
      (this.currentMarker = this.inMarker),
        this.movePlayheadToMarkerPosition(),
        this.playHead.show(),
        this.rangeSelector.style.setProperty("cursor", "pointer", "important"),
        document.body.style.removeProperty("cursor"),
        this.rangeSelector.parentElement.classList.remove(
          "range-selector-dragging"
        );
    }
    handleDrag(t, e) {
      const n = this.currentMarker.getTimeIndexFromCurrentPosition();
      return (
        this.updateMarkerPosition(this.currentMarker, n),
        (this.viewer.video.currentTime = n),
        this.playHead.hide(),
        this.handleDragConstraint(t, e),
        this.handleRangeUpdate({
          marker: this.currentMarker.name,
          timeIndex: this.currentMarker.timeIndex,
          x: this.currentMarker.x,
        }),
        !0
      );
    }
    updateMarkerPosition(t, e) {
      const n = this.getTimelineWidth(),
        i = this.inMarker.getX(),
        r = n + this.outMarker.getX() - i;
      let o = (r / n) * 100;
      if ((r <= 0 && (o = 0), this.setRangeWidth(o), t.is("in"))) {
        const t = parseInt(this.inMarker.getX());
        this.setRangeSelectorXPos(t);
      }
      if ((t.setTimeIndex(e), t.is("in"))) {
        const t = -1 * parseInt(this.inMarker.getX());
        this.setSelectedFramesX(t);
      }
    }
    handleDragEnd(t, e) {
      const n = this.currentMarker;
      this.movePlayheadToMarkerPosition(),
        this.handleDrag(t, e),
        this.playHead.show(),
        this.onMarkerDragEnd && this.onMarkerDragEnd(n),
        setTimeout(() => {
          n.timestamp.hide();
        }, 500);
    }
    handleDragConstraint(t, e) {
      let n = 0,
        i = 0;
      const r = this.getTimelineWidth();
      if (
        (this.currentMarker.is("in")
          ? (i = r + this.outMarker.getX())
          : (n = -1 * (r - this.inMarker.getX())),
        this.currentMarker.getX() > i)
      )
        throw (
          (this.currentMarker.setXPosition(i),
          new Error("out of bounds (in marker)"))
        );
      if (this.currentMarker.getX() < n)
        throw (
          (this.currentMarker.setXPosition(n),
          new Error("out of bounds(out marker)"))
        );
      this.limit?.maxDuration && this.handleDragConstraintMaxDuration(t, e);
    }
    handleDragConstraintMaxDuration(t, e) {
      const n = e.getDirection();
      if (
        (this.currentMarker.is("in") && "right" === n) ||
        (this.currentMarker.is("out") && "left" === n)
      )
        return;
      const i = this.inMarker.getTimeIndex(),
        r = this.outMarker.getTimeIndex(),
        o = r - i,
        { maxDuration: a } = this.limit;
      if (o > a) {
        if (this.currentMarker.is("in")) {
          const t = parseFloat(r) - parseFloat(a);
          this.currentMarker.setPositionByTimeIndex(t);
        }
        if (this.currentMarker.is("out")) {
          const t = parseFloat(i) + parseFloat(a);
          this.currentMarker.setPositionByTimeIndex(t);
        }
        throw (
          (this.popover.setBody(
            `Please select a length shorter than ${a} seconds.`
          ),
          this.popover.render(this.currentMarker.marker),
          this.onRangeLimit &&
            this.onRangeLimit({
              marker: this.currentMarker,
              time: { in: i, out: r },
              maxDuration: a,
            }),
          new Error(`Max duration reached: ${a}`))
        );
      }
    }
    handleDragStart(t, e) {
      const n = this.findMarkerFromDragEvent(t, e);
      t.stopPropagation(),
        t.preventDefault(),
        this.viewer.video.pause(),
        this.setCurrentMarker(n),
        this.setLastInAndOutMarkerPositions(),
        this.currentMarker.timestamp.show(),
        this.onMarkerDragStart && this.onMarkerDragStart(this.currentMarker);
    }
    findMarkerFromDragEvent(t, e) {
      const { target: n } = e;
      return n;
    }
    handleWindowResizeDragPositions() {
      const { width: t, height: e } = this.timeline
          .getTimelineElement()
          .getBoundingClientRect(),
        n = this.inMarker.getPercentageX() * t,
        i = this.outMarker.getPercentageX() * t,
        r = this.playHead.getPercentageX() * t;
      this.inMarker.setXPosition(n),
        this.outMarker.setXPosition(i),
        this.playHead.setXPosition(r),
        this.setRangeSelectorXPos(n);
      const o = t + i - n;
      let a = (o / t) * 100;
      o <= 0 && (a = 0),
        this.setRangeWidth(a),
        this.selectedFrames &&
          ((this.selectedFrames.style.width = `${t}px`),
          (this.selectedFrames.style.height = `${e}px`),
          this.setSelectedFramesX(-1 * n));
      const s = this.timeline
        .getTimelineElement()
        .closest(".timeline-container");
      this.inMarker.draggable.applyBounds(s),
        this.outMarker.draggable.applyBounds(s),
        this.rsDraggable.applyBounds(this.calculateRangeSelectorDragBounds()),
        this.popover.hidden || this.popover.hide();
    }
    handlePlay(t) {
      parseFloat(
        this.viewer.video.currentTime.toFixed(this.timeIndexPrecision)
      ) >=
        parseFloat(
          this.outMarker.getTimeIndex().toFixed(this.timeIndexPrecision)
        ) &&
        (this.viewer.video.currentTime = this.inMarker
          .getTimeIndex()
          .toFixed(this.timeIndexPrecision));
    }
    handleTimeUpdate(t) {
      if (this.isDragging) return;
      const e = !this.viewer.video.paused,
        n = Number(
          this.inMarker.getTimeIndex().toFixed(this.timeIndexPrecision)
        ),
        i = Number(
          this.outMarker.getTimeIndex().toFixed(this.timeIndexPrecision)
        ),
        r = Number(
          this.viewer.video.currentTime.toFixed(this.timeIndexPrecision)
        );
      if (i - n < 0.1) return void console.error("outTime - inTime < 0.1");
      if (r == i && e)
        return (
          console.error("video playhead has reached out marker"),
          void this.viewer.video.pause()
        );
      if (r > i) {
        console.error(`video playhead ${r} is over upper range limit:  ${i}`);
        this.playHead.getTimeIndexFromCurrentPosition().toFixed(3);
        return (
          (this.viewer.video.currentTime = i), void this.viewer.video.pause()
        );
      }
      if (r < n)
        return (
          console.error(
            `video playhead ${r} is under lower range limit:  ${n}`
          ),
          (this.viewer.video.currentTime = n),
          void this.viewer.video.pause()
        );
      const o = this.viewer.video.currentTime / this.viewer.video.duration;
      this.playHead.setPercentPosition(o, !1);
    }
    createFramesClone() {
      const t = this.timeline
          .getTimelineElement()
          .querySelector(".frames-container"),
        { width: e, height: n } = t.getBoundingClientRect();
      return (
        (this.selectedFrames = t.cloneNode(!0)),
        this.selectedFrames.classList.add("selected-frames"),
        (this.selectedFrames.style.width = `${e}px`),
        (this.selectedFrames.style.height = `${n}px`),
        (this.selectedFrames.style.left = 0),
        (function (t, e) {
          const n = t.querySelectorAll("canvas");
          e.querySelectorAll("canvas").forEach((t, e) => {
            const i = n[e];
            var r = t.getContext("2d");
            (t.width = i.width), (t.height = i.height), r.drawImage(i, 0, 0);
          });
        })(t, this.selectedFrames),
        this.selectedFrames
      );
    }
    createRangeSelectorContainer() {
      return r("div", {
        properties: { className: "range-selector-container" },
      });
    }
    createRangeSelector() {
      return r("div", { properties: { className: "range-selector" } });
    }
    renderFramesClone() {
      this.timeline
        .getTimelineElement()
        .querySelector(".range-selector")
        .append(this.createFramesClone());
    }
    render(t) {
      const e = this.createRangeSelectorContainer();
      e.append(this.rangeSelector),
        this.inMarker.render(e),
        this.outMarker.render(e),
        t.append(e),
        this.attachTimelineEvents();
    }
  };
  var Sl = n(326),
    Ml = {};
  (Ml.styleTagTransform = x()),
    (Ml.setAttributes = v()),
    (Ml.insert = m().bind(null, "head")),
    (Ml.domAPI = f()),
    (Ml.insertStyleElement = y());
  u()(Sl.Z, Ml);
  Sl.Z && Sl.Z.locals && Sl.Z.locals;
  const Ol = class {
    constructor({ currentIndex: t }) {
      const { viewer: e, crop: n } = ve.getContext();
      (this.video = e.video),
        (this.crop = n),
        (this.duration = e.video.duration ?? "-"),
        (this.currentIndex = t ?? 0),
        (this.infoBarContainer = null),
        (this.createInfoBar = this.createInfoBar.bind(this)),
        (this.render = this.render.bind(this));
    }
    setDuration(t) {
      (this.duration = t),
        (this.infoBarContainer.querySelector(
          ".duration"
        ).textContent = `Duration: ${e(t, 0)}`);
    }
    setCurrentIndex(t) {
      (this.timeIndex = t),
        (this.infoBarContainer.querySelector(
          ".current-index"
        ).textContent = `Current time: ${e(t, 0)}`);
    }
    createInfoBar() {
      const t = r("div", { properties: { className: "info-bar-container" } }),
        e = r("div", { properties: { className: "inline-start-column" } }),
        n = r("div", { properties: { className: "inline-end-column" } }),
        i = r("div", { properties: { className: "current-index" } }),
        o = r("div", { properties: { className: "duration" } }),
        a = this.createVideoInfo();
      return e.append(i, o), n.append(a), t.append(e, n), t;
    }
    createVideoInfo() {
      const t = r("div", { properties: { className: "video-info" } }),
        e = r("div", {
          properties: {
            className: "resolution",
            textContent: `Video Resolution: ${this.video.videoWidth} x ${this.video.videoHeight}`,
          },
        });
      let n;
      this.crop &&
        (n = r("div", {
          properties: {
            className: "frame",
            textContent: `Frame Aspect Ratio: ${this.crop.width} x ${this.crop.height}`,
          },
        }));
      const i = [e, n].filter((t) => void 0 !== t);
      return t.append(...i), t;
    }
    render(t) {
      (this.infoBarContainer = this.createInfoBar()),
        this.setCurrentIndex(this.currentIndex),
        this.setDuration(this.duration),
        t.append(this.infoBarContainer);
    }
  };
  var Pl = n(113),
    Al = {};
  (Al.styleTagTransform = x()),
    (Al.setAttributes = v()),
    (Al.insert = m().bind(null, "head")),
    (Al.domAPI = f()),
    (Al.insertStyleElement = y());
  u()(Pl.Z, Al);
  Pl.Z && Pl.Z.locals && Pl.Z.locals;
  var Rl = n(711),
    Ll = {};
  (Ll.styleTagTransform = x()),
    (Ll.setAttributes = v()),
    (Ll.insert = m().bind(null, "head")),
    (Ll.domAPI = f()),
    (Ll.insertStyleElement = y());
  u()(Rl.Z, Ll);
  Rl.Z && Rl.Z.locals && Rl.Z.locals;
  const Dl = class {
    constructor({
      src: t,
      el: e,
      viewport: n,
      boundary: i,
      points: r,
      scale: o,
      onClickOutside: a,
      enableOrientation: s = !1,
      enableResize: l = !1,
    }) {
      if (!e) throw new TypeError("Cropper element cannot be null");
      e.addEventListener("update", this.handleUpdate.bind(this)),
        (this.src = t),
        (this.viewport = n),
        (this.boundary = i),
        (this.croppie = new (fl())(e, {
          viewport: n,
          boundary: i,
          showZoomer: !0,
          customClass: "cropper",
          enableOrientation: s,
          enableResize: l,
        })),
        this.croppie.bind({ url: this.src, points: r, zoom: o }),
        (this.points = null),
        (this.zoom = null),
        (this.orientation = null),
        (this.zoom = 0),
        (this.x = 0),
        (this.y = 0),
        (this.origin = 0),
        (this.hidden = !1),
        (this.el = e),
        (this.elementValues = { x: null, y: null, zoom: null }),
        (this.zoomRangeInput = e.querySelector("input[type=range]")),
        (this.img = e.querySelector("img")),
        (this.onClickOutside = a),
        (this.touchdown = this.touchdown.bind(this)),
        (this.touchup = this.touchup.bind(this)),
        (this.handleZoomRangeChange = this.handleZoomRangeChange.bind(this)),
        (this.update = this.update.bind(this)),
        this.attachEvents(),
        (this.initialValues = { x: null, y: null, zoom: null });
    }
    getTransformStyles() {
      const t = this.el.querySelector(".cropper img");
      return {
        transform: t.style.transform,
        transformOrigin: t.style.transformOrigin,
      };
    }
    getCropData() {
      return this.croppie.get();
    }
    getInitialValues() {
      return this.initialValues;
    }
    getInitialElementValues() {
      const [t, e] = this.getTransformCoordinates(this.el),
        n = this.getScale(this.el);
      this.elementValues = { x: t, y: e, zoom: n };
    }
    getScale(t) {
      const { width: e } = t.getBoundingClientRect();
      return e / t.offsetWidth;
    }
    getRelativeTransformStyle() {
      const t = this.elementValues.zoom / this.initialValues.zoom,
        { xDelta: e, yDelta: n, zoomDelta: i } = this.getCropDelta(),
        r = ((i || 0) + Number(this.initialValues.zoom)) * t;
      return {
        x: this.x,
        y: this.y,
        deltaX: e,
        deltaY: n,
        relativeScale: r,
        scale: this.zoom,
        transformOrigin: this.origin,
      };
    }
    getCropDelta() {
      return {
        zoomDelta: this.zoom ? this.zoom - this.initialValues.zoom : 0,
        xDelta: this.x ? this.x - this.initialValues.x : 0,
        yDelta: this.y ? this.y - this.initialValues.y : 0,
      };
    }
    getTransformOrigin(t) {
      return t.replace(/px/gi, "").split(" ");
    }
    getResult() {
      return this.croppie.result();
    }
    getZoomRangeValue() {
      return this.zoomRangeInput.value;
    }
    getZoomRangeMinMax() {
      return { min: this.zoomRangeInput.min, max: this.zoomRangeInput.max };
    }
    getTransformCoordinates(t) {
      const e = t.querySelector("img"),
        n = new WebKitCSSMatrix(e.style.transform);
      return [n.m41, n.m42];
    }
    attachEvents() {
      this.zoomRangeInput.addEventListener(
        "change",
        this.handleZoomRangeChange
      ),
        window.addEventListener("pointerdown", this.touchdown),
        window.addEventListener("pointerup", this.touchup);
    }
    removeEvents() {
      this.zoomRangeInput.removeEventListener(
        "change",
        this.handleZoomRangeChange
      ),
        window.removeEventListener("pointerdown", this.touchdown),
        window.removeEventListener("pointerup", this.touchup);
    }
    handleCrop(t) {
      this.croppie.result("blob").then(function (t) {
        console.log("blob");
      });
    }
    handleUpdate(t) {
      const {
        detail: { points: e, zoom: n, orientation: i },
      } = t;
      (this.points = e), (this.zoom = n), (this.orientation = i);
    }
    handleZoomRangeChange(t) {
      const {
        target: { value: e },
      } = t;
      if (!this.initialValues?.zoom) {
        this.initialValues.zoom = e;
        const t = this.el.querySelector("img");
        this.origin = this.getTransformOrigin(t.style.transformOrigin);
      }
      this.zoom = e;
    }
    touchdown(t) {
      const { target: e } = t;
      if (
        (null == e.closest(".cropper") &&
          this.onClickOutside instanceof Function &&
          this.onClickOutside(t),
        !this.initialValues.x)
      ) {
        const [t, e] = this.getTransformCoordinates(this.el);
        (this.initialValues.x = t), (this.initialValues.y = e);
      }
    }
    touchup(t) {
      const { target: e } = t;
      if (null == e.closest(".cropper")) return t.preventDefault(), !1;
      const n = this.el.querySelector("img"),
        [i, r] = this.getTransformCoordinates(this.el);
      (this.x = i),
        (this.y = r),
        (this.origin = this.getTransformOrigin(n.style.transformOrigin));
    }
    updateSrc(t) {
      const { points: e, zoom: n, orientation: i } = this.croppie.get();
      return this.croppie.bind({ url: t, points: e, zoom: n });
    }
    update() {
      const { points: t, zoom: e, orientation: n } = this.croppie.get();
      this.croppie.setZoom(e);
    }
    resetInitialValues() {
      const [t, e] = this.getTransformCoordinates(this.el);
      (this.initialValues.x = t),
        (this.initialValues.y = e),
        (this.x = t),
        (this.y = e);
    }
    hide() {
      this.removeEvents(),
        (this.el.style.visibility = "hidden"),
        (this.hidden = !0);
    }
    show() {
      this.resetInitialValues(),
        this.attachEvents(),
        (this.el.style.visibility = "visible"),
        (this.hidden = !1);
    }
    destroy() {
      this.croppie.destroy();
    }
    getResult() {
      return this.croppie.get();
    }
  };
  var Nl = n(781),
    zl = {};
  (zl.styleTagTransform = x()),
    (zl.setAttributes = v()),
    (zl.insert = m().bind(null, "head")),
    (zl.domAPI = f()),
    (zl.insertStyleElement = y());
  u()(Nl.Z, zl);
  Nl.Z && Nl.Z.locals && Nl.Z.locals;
  const Il = class {
      constructor({ message: t }) {
        (this.loader = null), (this.message = t);
      }
      createLoader() {
        this.loader = r("div", {
          properties: { className: "video-editor-loader" },
        });
        const t = r("p", {
            properties: { textContent: this.message || "Loading video" },
          }),
          e = document.createElement("div"),
          n = document.createElement("div");
        return (
          e.append(n), this.loader.append(e), this.loader.append(t), this.loader
        );
      }
      hide() {
        this.loader.style.display = "none";
      }
      updateMessage(t) {
        this.loader.classList.contains("error") &&
          this.loader.classList.remove("error"),
          (this.loader.querySelector("p").textContent = t);
      }
      render(t) {
        t.append(this.createLoader());
      }
      showError(t) {
        setTimeout(() => {
          this.updateMessage(t), this.loader.classList.add("error");
        }, 500);
      }
    },
    Bl = (t, e, n, i) => {
      if (n.width == t && n.height == e) return [0, 0, t, e];
      const r = t / e;
      let o, a, s;
      switch (
        ((t) => {
          let e;
          return (e = t > 1 ? "landscape" : t < 1 ? "portrait" : "square"), e;
        })(i)
      ) {
        case "portrait":
          o = i < r ? "width" : "height";
        case "square":
        case "landscape":
          o = i > r ? "width" : "height";
      }
      return (
        "height" == o ? ((a = e), (s = a * i)) : ((s = t), (a = s / i)),
        [(t - s) / 2, (e - a) / 2, s, a]
      );
    };
  var Fl = n(908),
    jl = {};
  (jl.styleTagTransform = x()),
    (jl.setAttributes = v()),
    (jl.insert = m().bind(null, "head")),
    (jl.domAPI = f()),
    (jl.insertStyleElement = y());
  u()(Fl.Z, jl);
  Fl.Z && Fl.Z.locals && Fl.Z.locals;
  const Xl = class {
    constructor({ onReady: t }) {
      const {
        mimeType: e,
        frameTotalLimit: n,
        crop: i,
        limit: r,
        transformations: o,
        onRangeUpdate: a,
        onTimelineClick: s,
        loader: l,
      } = ve.getContext();
      (this.video = null),
        (this.duration = null),
        (this.mimeType = e),
        (this.limit = r),
        (this.crop = i),
        (this.frameTotalLimit = n || Math.ceil(0.011 * window.innerWidth)),
        (this.transformations = o),
        (this.loader = l),
        (this.onReady = t),
        (this.onRangeUpdate = a),
        (this.onTimelineClick = s),
        (this.cropper = null),
        (this.timeline = null),
        (this.toggleCropperOff = this.toggleCropperOff.bind(this));
    }
    init(t) {
      if (
        ((this.video = t),
        (this.duration = t.duration),
        !isFinite(this.duration))
      )
        throw new Error(
          "Video duration is non finite number: " + this.duration
        );
      (this.frameInterval = this.duration / this.frameTotalLimit),
        (this.crop = this.crop || {
          width: t.videoWidth,
          height: t.videoHeight,
        }),
        (this.cropAspectRatio = this.crop.width / this.crop.height),
        (this.playHead = new ul({
          className: "play-head",
          name: "play",
          anchor: "left",
          initialIndex: 0,
          isDraggable: !1,
        })),
        (this.popover = new _l({
          title: "Maximum video length exceeded",
          body: "Please select a shorter video.",
          variant: "danger",
        })),
        (this.rangeSelector = new El({
          timeline: this,
          popover: this.popover,
          playHead: this.playHead,
          setVideoTimeIndex: this.setVideoTimeIndex.bind(this),
          initialMarkers: {
            in: this.transformations?.time?.in || 0,
            out: this.transformations?.time?.out || null,
          },
          limit: this.limit,
          onRangeUpdate: this.handleRangeUpdate.bind(this),
        })),
        (this.controls = new wl({
          rangeSelector: this.rangeSelector,
          onPlayClick: this.handlePlayClick.bind(this),
        })),
        (this.infoBar = new Ol({
          currentIndex: this.transformations?.time?.in,
        }));
    }
    async handleToggleCropper(t) {
      t
        ? this.cropper
          ? ((this.video.style.visibility = "hidden"),
            this.getCurrentVideoFrameUrlObject().then((t) => {
              this.cropper.updateSrc(t), this.cropper.show();
            }))
          : (await this.initCropper(this.transformations?.crop),
            this.cropper.show())
        : ((this.video.style.visibility = "visible"), this.applyCrop());
    }
    enable() {
      this.timeline.classList.remove("disabled");
    }
    disable() {
      this.timeline.classList.add("disabled");
    }
    setVideoTimeIndex(t) {
      this.video.currentTime = t;
    }
    getTimelineElement() {
      return this.timeline;
    }
    attachTimelineEvents() {
      this.timeline.addEventListener(
        "mouseup",
        this.handleTimelineMouseUp.bind(this),
        !1
      ),
        this.video.addEventListener("timeupdate", this.timeupdate.bind(this)),
        this.video.addEventListener("pause", this.handlePause.bind(this)),
        this.video.addEventListener("playing", this.handlePlaying.bind(this));
    }
    timeupdate() {
      requestAnimationFrame(() => {
        this.cropper && !this.cropper.hidden && this.video.pause();
      });
    }
    handlePlayClick(t) {
      this.video.paused
        ? (this.popover.hidden || this.popover.hide(), this.video.play())
        : (this.video.pause(),
          (this.video.currentTime = this.video.currentTime + 0.01));
    }
    handleTimelineMouseUp(t) {
      if ((t.preventDefault(), this.rangeSelector.isDragging))
        return void (this.rangeSelector.isDragging = !1);
      const {
        offsetX: e,
        clientX: n,
        layerX: i,
        target: r,
        currentTarget: o,
      } = t;
      if (!this.rangeSelector.hidden && !r.closest(".range-selector")) return;
      this.rangeSelector.setCurrentMarker(this.playHead);
      const { left: a, width: s } = this.timeline.getBoundingClientRect(),
        l = ((n - a) / s) * this.video.duration;
      this.setVideoTimeIndex(l),
        this.video.pause(),
        this.popover.hidden || this.popover.hide(),
        this.onTimelineClick instanceof Function && this.onTimelineClick(l);
    }
    handleRangeUpdate(t, e) {
      const n = t,
        i = parseFloat(e.out - e.in);
      this.infoBar.setCurrentIndex(n),
        this.infoBar.setDuration(i),
        this.onRangeUpdate instanceof Function && this.onRangeUpdate(t, e);
    }
    handlePause(t) {}
    handlePlaying(t) {
      this.playHead.toggleAnimate(!1);
    }
    applyCrop() {
      this.cropVideo({ styles: this.cropper.getTransformStyles() }),
        this.cropper.hide();
    }
    getCrop() {
      if (!this.cropper) return {};
      const {
        points: t,
        points: [e, n, i, r],
        zoom: o,
      } = this.cropper.getResult();
      return { w: i - e, h: r - n, x: e, y: n, scale: o.toFixed(3) };
    }
    getTransformations() {
      return {
        crop: this.getCrop(),
        time: {
          in: this.rangeSelector.inMarker.getTimeIndex(),
          out: this.rangeSelector.outMarker.getTimeIndex(),
        },
      };
    }
    cropVideo({
      styles: t,
      data: e,
      delta: n,
      initial: i,
      relativeTransform: r,
    }) {
      (this.video.style.transform = t.transform),
        (this.video.style.transformOrigin = t.transformOrigin);
    }
    getCurrentVideoFrameUrlObject() {
      return new Promise((t) => {
        const e = document.querySelector(".video-container"),
          { width: n, height: i } = e.getBoundingClientRect(),
          o = r("canvas", {
            properties: {
              width: this.video.videoWidth,
              height: this.video.videoHeight,
            },
            style: {
              width: n + "px",
              height: i + "px",
              border: "1px solid red",
            },
          });
        o.getContext("2d").drawImage(this.video, 0, 0),
          o.toBlob(
            (e) => {
              const n = window.URL.createObjectURL(e);
              t(n);
            },
            "image/jpg",
            100
          );
      });
    }
    renderCanvasFrames() {
      let t,
        e = 0,
        n = !1;
      (this.video.currentTime = 0),
        this.loader.updateMessage("Rendering frames");
      const i = this.createFramesContainer();
      if (0 == this.video.videoWidth || 0 == this.video.videoHeight)
        throw new Error("Video has no dimensions");
      const r = "probably" == this.video.canPlayType(this.mimeType);
      t =
        this.cropAspectRatio && r
          ? this.cropAspectRatio
          : this.video.videoWidth / this.video.videoHeight;
      const o = () => {
          n ||
            ((n = !0),
            (this.video.currentTime = 0.5),
            this.video.addEventListener("seeked", a));
        },
        a = (n) => {
          const s = this.createFrame(this.video.currentTime),
            l = s.querySelector("canvas"),
            c = this.getTimelineElement().getBoundingClientRect().height,
            d = c * t;
          (l.width = d),
            (l.height = c),
            (l.style.width = d + "px"),
            (l.style.height = "100%"),
            i.append(s);
          const u = Bl(
            this.video.videoWidth,
            this.video.videoHeight,
            this.crop,
            this.cropAspectRatio
          );
          this.drawFrame(l, u, r), (l.style.width = "");
          const h = parseInt(e + 1) * this.frameInterval;
          e < this.frameTotalLimit - 1
            ? (this.video.currentTime = h)
            : (this.video.removeEventListener("seeked", a),
              this.video.removeEventListener("canplay", o),
              this.handleTimelineReady()),
            e++;
        };
      this.video.addEventListener("canplay", o), this.timeline.append(i);
    }
    drawFrame(t, e, n = !1) {
      const [i, r, o, a] = e,
        s = t.getBoundingClientRect();
      n
        ? t
            .getContext("2d")
            .drawImage(this.video, i, r, o, a, 0, 0, s.width, s.height)
        : t.getContext("2d").drawImage(this.video, 0, 0, s.width, s.height);
    }
    async handleTimelineReady() {
      await this.initCropper(this.transformations?.crop),
        setTimeout(() => {
          this.applyCrop(),
            this.onReady instanceof Function && this.onReady(),
            this.timeline.dispatchEvent(new Event("timelineReady"));
        }, 50),
        (this.video.currentTime = 0);
    }
    async initCropper(t) {
      let e, n;
      if (t) {
        const { x: i, y: r, w: o, h: a } = t;
        (e = [
          parseFloat(i),
          parseFloat(r),
          parseFloat(o) + parseFloat(i),
          parseFloat(a) + parseFloat(r),
        ]),
          (n = parseFloat(t?.scale));
      }
      this.video.style.width = "auto";
      const i = await this.getCurrentVideoFrameUrlObject().catch((t) => {
          console.error("cropper faied to init", t);
        }),
        r = document.querySelector(".video-container"),
        o = r.querySelector(".crop-container"),
        { width: a, height: s } = r.getBoundingClientRect();
      let [l, c, d, u] = Bl(a, s, this.crop, this.cropAspectRatio);
      d / u == this.video.videoWidth / this.video.videoHeight &&
        ((d = "100%"), (u = "100%"));
      const h = { width: d, height: u };
      this.cropper = new Dl({
        src: i,
        el: o,
        viewport: h,
        boundary: { width: "100%", height: "100%" },
        points: e,
        scale: n,
        onClickOutside: (t) => {
          const { target: e } = t;
          e.classList.contains("crop-button") ||
            e.closest(".crop-button") ||
            this.toggleCropperOff();
        },
      });
    }
    toggleCropperOff() {
      const t = document.querySelector(".crop-button");
      t.classList.contains("toggled") && t.click();
    }
    createFramesContainer() {
      const t = document.createElement("div");
      return t.classList.add("frames-container"), t;
    }
    createFrame(t) {
      const e = 100 / this.frameTotalLimit,
        n = r("div", {
          properties: { className: "frame", id: `frame_${t}` },
          style: { width: `${e}%`, height: "100%" },
        }),
        i = document.createElement("canvas");
      return n.append(i), n;
    }
    createTimelineContainer() {
      return r("div", { properties: { className: "timeline-container" } });
    }
    createTimeline() {
      return r("div", { properties: { className: "timeline" } });
    }
    renderTimeline(t) {
      const e = this.createTimelineContainer();
      (this.timeline = this.createTimeline()),
        this.rangeSelector.render(this.timeline),
        this.playHead.render(this.timeline),
        e.append(this.timeline),
        t.append(e),
        this.attachTimelineEvents();
    }
    render(t) {
      this.controls.render(t),
        this.renderTimeline(t),
        this.renderCanvasFrames(),
        this.infoBar.render(t);
    }
  };
  var Hl = n(141),
    Yl = {};
  (Yl.styleTagTransform = x()),
    (Yl.setAttributes = v()),
    (Yl.insert = m().bind(null, "head")),
    (Yl.domAPI = f()),
    (Yl.insertStyleElement = y());
  u()(Hl.Z, Yl);
  Hl.Z && Hl.Z.locals && Hl.Z.locals;
  const Vl = class {
      constructor({ slides: t, onDone: e }) {
        (this.slides = t || []),
          (this.container = null),
          (this.currentSlideIndex = 1),
          (this.onDone = e),
          (this.showSlide = this.showSlide.bind(this)),
          (this.handleButtonStates = this.handleButtonStates.bind(this)),
          (this.x = 0);
      }
      reset() {
        (this.currentSlideIndex = 1),
          (this.x = 0),
          this.container
            .querySelectorAll(".slide-container")
            .forEach((t) => (t.style.transform = `translateX(${this.x}%)`)),
          this.handleButtonStates();
      }
      next() {
        this.currentSlideIndex < this.slides.length &&
          this.showSlide(this.currentSlideIndex + 1),
          this.handleButtonStates();
      }
      prev() {
        this.currentSlideIndex > 1 &&
          this.showSlide(this.currentSlideIndex - 1),
          this.handleButtonStates();
      }
      handleButtonStates() {
        this.currentSlideIndex == this.slides.length
          ? this.updateButton(".instructions-next-button", {
              label: "Done",
              onClick: this.handleDone.bind(this),
            })
          : this.updateButton(".instructions-next-button", {
              label: "Next",
              onClick: this.next.bind(this),
            }),
          this.currentSlideIndex > 1
            ? this.showButton(".instructions-prev-button")
            : this.hideButton(".instructions-prev-button");
      }
      updateButton(t, { label: e, onClick: n }) {
        const i = this.container.querySelector(t);
        return (i.textContent = e), (i.onclick = n), i;
      }
      hideButton(t) {
        this.container.querySelector(t).style.visibility = "hidden";
      }
      showButton(t) {
        this.container.querySelector(t).style.visibility = "visible";
      }
      enableButton(t) {
        this.container.querySelector(t).disabled = !1;
      }
      disableButton(t) {
        console.log("disable ", t),
          (this.container.querySelector(t).disabled = !0);
      }
      handleDone() {
        this.onDone instanceof Function && this.onDone();
      }
      showSlide(t) {
        const { el: e, url: n } = this.slides[t - 1] || {},
          i = e.querySelector("img");
        (i.src = ""), (i.src = n);
        const r = t < this.currentSlideIndex ? 1 : -1;
        (this.x = this.x + 100 * r),
          this.container
            .querySelectorAll(".slide-container")
            .forEach((t) => (t.style.transform = `translateX(${this.x}%)`)),
          (this.currentSlideIndex = t);
      }
      createSlidesContainer() {
        return r("div", { properties: { className: "slides-container" } });
      }
      createAllSlides() {
        const t = r("div", {
          properties: { className: "all-slides-container" },
        });
        return t.append(...this.slides.map(this.createSlide)), t;
      }
      createSlide(t, e) {
        const { url: n, title: i, body: o } = t,
          a = r("div", { properties: { className: "slide-container " } });
        a.classList.add(`slide-${e}`), (a.dataset.slideIndex = e);
        const s = document.createElement("figure");
        a.append(s);
        const l = document.createElement("img");
        (l.src = n), s.append(l);
        const c = r("div", { properties: { className: "slide-card" } });
        a.append(c);
        const d = document.createElement("h2");
        (d.textContent = i), c.append(d);
        const u = document.createElement("p");
        return (u.textContent = o), c.append(u), (t.el = a), a;
      }
      createButton({ label: t, className: e, onClick: n }) {
        return r("button", {
          properties: { className: e, textContent: t, onclick: n },
        });
      }
      createButtonBar() {
        const t = r("div", {
            properties: { className: "button-bar-container" },
          }),
          e = this.createButton({
            className: "instructions-button instructions-prev-button",
            label: "Previous",
            onClick: this.prev.bind(this),
          });
        t.append(e);
        const n = this.createButton({
          className: "instructions-button instructions-next-button",
          label: "Next",
          onClick: this.next.bind(this),
        });
        return t.append(n), t;
      }
      render(t) {
        (this.container = this.createSlidesContainer()),
          this.container.append(this.createAllSlides()),
          this.container.append(this.createButtonBar()),
          t.append(this.container);
      }
    },
    Zl = Vl;
  var Ul = n(828),
    ql = {};
  (ql.styleTagTransform = x()),
    (ql.setAttributes = v()),
    (ql.insert = m().bind(null, "head")),
    (ql.domAPI = f()),
    (ql.insertStyleElement = y());
  u()(Ul.Z, ql);
  Ul.Z && Ul.Z.locals && Ul.Z.locals;
  const Wl = class {
      constructor({
        title: t,
        content: e,
        buttons: n,
        className: i,
        state: r,
        options: o = {
          animationDuration: 0.5,
          overlay: !0,
          hidden: !0,
          closeBtn: !0,
          onDismiss: null,
        },
      }) {
        if (
          ((this.title = t),
          !(e instanceof HTMLElement) && "string" != typeof e)
        )
          throw new Error("Modal content must be an HTMLElement or a string");
        (this.content = e),
          (this.buttons = n),
          (this.className = i),
          (this.hidden = o.hidden ?? !0),
          (this.overlay = o.overlay),
          (this.closeBtn = o.closeBtn ?? !0),
          (this.onDismiss = o.onDismiss),
          (this.animationDuration = o.animationDuration ?? 0.5),
          (this.modal = this.createModal()),
          (this.parent = null),
          (this.rendered = !1),
          (this.state = r ?? {});
      }
      createModal() {
        const t = document.createElement("div");
        t.classList.add("modal-container", this.className ?? ""),
          this.overlay && t.classList.add("modal-overlay"),
          (t.style.display = "none");
        const e = document.createElement("div");
        e.classList.add("modal-content-container");
        const n = document.createElement("div");
        n.classList.add("modal-header");
        const i = this.closeBtn ? this.createCloseBtn() : null,
          r = document.createElement("div");
        r.classList.add("modal-content");
        const o = document.createElement("div");
        return (
          o.classList.add("modal-footer"),
          e.appendChild(n),
          e.appendChild(r),
          e.appendChild(o),
          i && e.appendChild(i),
          t.appendChild(e),
          t
        );
      }
      createCloseBtn() {
        const t = document.createElement("button");
        return (
          t.classList.add("close-btn"),
          (t.innerHTML = "<span>&times;</span>"),
          t.addEventListener("click", () => {
            this.onDismiss instanceof Function && this.onDismiss(), this.hide();
          }),
          t
        );
      }
      getModalContentContainer() {
        return this.modal.querySelector(".modal-content-container");
      }
      getModalHeader() {
        return this.modal.querySelector(".modal-header");
      }
      getModalContent() {
        return this.modal.querySelector(".modal-content");
      }
      getModalFooter() {
        return this.modal.querySelector(".modal-footer");
      }
      setAnimationDuration(t) {
        this.getModalContentContainer().style.setProperty(
          "--animation-duration",
          `${t}s`
        );
      }
      setModalHeader(t) {
        const e = this.modal.querySelector(".modal-header");
        e.innerHTML = "";
        const n = document.createElement("h3");
        (n.textContent = t), e.appendChild(n);
      }
      setModalContent(t) {
        const e = this.modal.querySelector(".modal-content");
        if (((e.innerHTML = ""), "string" == typeof this.content)) {
          const n = document.createElement("p");
          (n.textContent = t), e.appendChild(n);
        } else {
          if (!(this.content instanceof HTMLElement))
            throw new Error("Modal content must be an HTMLElement or a string");
          e.appendChild(this.content);
        }
      }
      setModalFooter(t) {
        const e = this.modal.querySelector(".modal-footer");
        (e.innerHTML = ""),
          Array.isArray(t) &&
            t.forEach((t) => {
              const n = document.createElement("button");
              n.classList.add("btn"),
                n.classList.add(`btn-${t.type ?? ""}`),
                (n.innerHTML = t.label),
                (n.onclick = t.onClick),
                e.appendChild(n);
            });
      }
      setState({ title: t, content: e, buttons: n, ...i }) {
        (this.state = { ...this.state, ...i }),
          (this.title = t ?? this.title),
          (this.content = e ?? this.content),
          (this.buttons = n ?? this.buttons),
          this.updateState();
      }
      updateState() {
        this.setModalHeader(this.title),
          this.setModalContent(this.content),
          this.setModalFooter(this.buttons);
      }
      async show(t) {
        if (!this.hidden) return;
        null != t && null != t && this.setAnimationDuration(t);
        const e = this.getModalContentContainer();
        (e.style.opacity = 0),
          (this.modal.style.display = "flex"),
          e.classList.add("modal-float-in");
        const n = t ?? 1e3 * this.animationDuration;
        return new Promise((t) => {
          setTimeout(() => {
            this.onShowComplete(), t();
          }, n);
        });
      }
      onShowComplete() {
        this.setAnimationDuration(this.animationDuration), (this.hidden = !1);
      }
      async hide() {
        return new Promise((t) => {
          setTimeout(() => {
            const e = this.getModalContentContainer();
            e.classList.remove("modal-float-in"),
              e.classList.remove("float-out"),
              (this.modal.style.display = "none"),
              (this.hidden = !0),
              t();
          }, 10);
        });
      }
      render(t) {
        (this.parent = t),
          this.setAnimationDuration(this.animationDuration),
          t.appendChild(this.modal),
          this.updateState(),
          this.hidden || this.show(0),
          (this.rendered = !0);
      }
    },
    $l = Wl;
  var Kl = n(679),
    Gl = {};
  (Gl.styleTagTransform = x()),
    (Gl.setAttributes = v()),
    (Gl.insert = m().bind(null, "head")),
    (Gl.domAPI = f()),
    (Gl.insertStyleElement = y());
  u()(Kl.Z, Gl);
  Kl.Z && Kl.Z.locals && Kl.Z.locals;
  const Jl = class extends $l {
    constructor({ container: t, fadeDuration: e }) {
      super({
        content: "",
        className: "instructions-modal",
        options: { animationDuration: 0.35, overlay: !0, hidden: !0 },
      }),
        (this.instructions = null),
        (this.hidden = !0),
        (this.begin = this.begin.bind(this)),
        (this.slides = new Zl({
          slides: [
            {
              url: "https://res.cloudinary.com/dmxpkxal2/video/upload/c_limit,w_500/e_loop/dl_150,vs_0.1s/fl_lossy/q_50/covid-19-grief-project/video-editor/trim-example_p21h0x.gif",
              title: "Trim",
              body: "Remove footage from the beginning or end of the clip by dragging the yellow markers to the desired position",
            },
            {
              url: "https://res.cloudinary.com/dmxpkxal2/video/upload/c_limit,w_500/e_loop/dl_150,vs_0.1s/fl_lossy/q_50/covid-19-grief-project/video-editor/crop-example_otwihm.gif",
              title: "Crop",
              body: 'Activate the crop tool by selecting the "Crop" button on the top right corner of the video editor. Zoom in or out by dragging the zoom range left or right. Reposition the video by dragging the video frame in any direction. ',
            },
          ],
          onDone: () => {
            this.hide();
          },
        })),
        (this.currentSlide = 0),
        this.render(t ?? document.body);
    }
    async begin() {
      this.hidden || (await this.hide()), await this.show();
    }
    render(t) {
      (this.instructions = r("div", {
        properties: { className: "instructions-container" },
      })),
        this.slides.render(this.instructions),
        this.setState({ content: this.instructions }),
        super.render(t);
    }
  };
  var Ql = {
      d: (t, e) => {
        for (var n in e)
          Ql.o(e, n) &&
            !Ql.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    },
    tc = {};
  function ec(t = { width: 3, height: 2 }, e = { width: 640, height: 480 }) {
    let n;
    switch (nc(t)) {
      case "portrait":
      case "landscape":
      case "square":
        n = "xMidYMid slice";
    }
    const i = "http://www.w3.org/2000/svg",
      r = document.createElementNS(i, "svg");
    r.setAttribute("width", "100%"),
      r.setAttribute("height", "100%"),
      r.setAttribute("viewBox", `0 0 ${e.width} ${e.height}`),
      r.setAttribute("preserveAspectRatio", n);
    const o = document.createElementNS(i, "defs"),
      a = document.createElementNS(i, "style");
    a.textContent =
      "\n      .cls-1 {\n          fill: #0c0c0c;\n          fill-rule: evenodd;\n          opacity: 1;\n      }";
    const s = document.createElementNS(i, "path");
    s.classList.add("cls-1");
    const l = (function ({ viewBox: t, cropDimensions: e }) {
      let n;
      const i = nc(e),
        r = e.width / e.height,
        o = t.width / t.height;
      switch (i) {
        case "portrait":
          n = r < o ? "width" : "height";
        case "square":
        case "landscape":
          n = r > o ? "width" : "height";
      }
      const [a, s] = (function ({
          aspect: t = { width: r, height: i },
          rect: e = { width: r, height: i },
          anchor: n,
        }) {
          let i, r, o;
          const a = t.height / t.width;
          if ("height" == n)
            (o = e.height / t.height), (i = e.height), (r = i / a);
          else {
            if ("width" != n)
              throw new TypeError(
                "unexpected anchor value. Must be either width or height but found: " +
                  n
              );
            (o = e.width / t.width), (r = e.width), (i = r * a);
          }
          return [r, i];
        })({ aspect: e, rect: t, anchor: n }),
        l = ((t.width - a) / 2).toFixed(2),
        c = parseInt(l) + parseInt(a),
        d = ((t.height - s) / 2).toFixed(2),
        u = parseInt(d) + parseInt(s);
      return `M0,0H${t.width}V${t.height}H0V0ZM${l},${d}H${c}V${u}H${l}V1Z`;
    })({ viewBox: e, cropDimensions: t });
    return s.setAttribute("d", l), r.append(o), o.append(a), r.append(s), r;
  }
  function nc({ width: t, height: e }) {
    return t > e ? "landscape" : t < e ? "portrait" : "square";
  }
  Ql.d(tc, { k: () => ec });
  var ic = tc.k;
  function rc(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function oc(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? rc(Object(n), !0).forEach(function (e) {
            lc(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : rc(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function ac(t) {
    return (
      (ac =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      ac(t)
    );
  }
  function sc(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function lc(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function cc(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null == n) return;
        var i,
          r,
          o = [],
          a = !0,
          s = !1;
        try {
          for (
            n = n.call(t);
            !(a = (i = n.next()).done) &&
            (o.push(i.value), !e || o.length !== e);
            a = !0
          );
        } catch (t) {
          (s = !0), (r = t);
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (s) throw r;
          }
        }
        return o;
      })(t, e) ||
      uc(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function dc(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return hc(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      uc(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function uc(t, e) {
    if (t) {
      if ("string" == typeof t) return hc(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? hc(t, e)
          : void 0
      );
    }
  }
  function hc(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
  }
  var fc = function () {},
    pc = {},
    mc = {},
    gc = null,
    vc = { mark: fc, measure: fc };
  try {
    "undefined" != typeof window && (pc = window),
      "undefined" != typeof document && (mc = document),
      "undefined" != typeof MutationObserver && (gc = MutationObserver),
      "undefined" != typeof performance && (vc = performance);
  } catch (tc) {}
  var bc,
    yc,
    wc,
    xc,
    kc,
    _c = (pc.navigator || {}).userAgent,
    Tc = void 0 === _c ? "" : _c,
    Cc = pc,
    Ec = mc,
    Sc = gc,
    Mc = vc,
    Oc =
      (Cc.document,
      !!Ec.documentElement &&
        !!Ec.head &&
        "function" == typeof Ec.addEventListener &&
        "function" == typeof Ec.createElement),
    Pc = ~Tc.indexOf("MSIE") || ~Tc.indexOf("Trident/"),
    Ac = "___FONT_AWESOME___",
    Rc = 16,
    Lc = "fa",
    Dc = "svg-inline--fa",
    Nc = "data-fa-i2svg",
    zc = "data-fa-pseudo-element",
    Ic = "data-fa-pseudo-element-pending",
    Bc = "data-prefix",
    Fc = "data-icon",
    jc = "fontawesome-i2svg",
    Xc = "async",
    Hc = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    Yc = (function () {
      try {
        return !0;
      } catch (t) {
        return !1;
      }
    })(),
    Vc = "classic",
    Zc = "sharp",
    Uc = [Vc, Zc];
  function qc(t) {
    return new Proxy(t, {
      get: function (t, e) {
        return e in t ? t[e] : t[Vc];
      },
    });
  }
  var Wc = qc(
      (lc((bc = {}), Vc, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        "fa-kit": "kit",
      }),
      lc(bc, Zc, {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
      }),
      bc)
    ),
    $c = qc(
      (lc((yc = {}), Vc, {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab",
        kit: "fak",
      }),
      lc(yc, Zc, { solid: "fass", regular: "fasr", light: "fasl" }),
      yc)
    ),
    Kc = qc(
      (lc((wc = {}), Vc, {
        fab: "fa-brands",
        fad: "fa-duotone",
        fak: "fa-kit",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin",
      }),
      lc(wc, Zc, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }),
      wc)
    ),
    Gc = qc(
      (lc((xc = {}), Vc, {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-kit": "fak",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat",
      }),
      lc(xc, Zc, {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
      }),
      xc)
    ),
    Jc = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
    Qc = "fa-layers-text",
    td =
      /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
    ed = qc(
      (lc((kc = {}), Vc, {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat",
      }),
      lc(kc, Zc, { 900: "fass", 400: "fasr", 300: "fasl" }),
      kc)
    ),
    nd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    id = nd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    rd = [
      "class",
      "data-prefix",
      "data-icon",
      "data-fa-transform",
      "data-fa-mask",
    ],
    od = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary",
    },
    ad = new Set();
  Object.keys($c[Vc]).map(ad.add.bind(ad)),
    Object.keys($c[Zc]).map(ad.add.bind(ad));
  var sd = []
      .concat(Uc, dc(ad), [
        "2xs",
        "xs",
        "sm",
        "lg",
        "xl",
        "2xl",
        "beat",
        "border",
        "fade",
        "beat-fade",
        "bounce",
        "flip-both",
        "flip-horizontal",
        "flip-vertical",
        "flip",
        "fw",
        "inverse",
        "layers-counter",
        "layers-text",
        "layers",
        "li",
        "pull-left",
        "pull-right",
        "pulse",
        "rotate-180",
        "rotate-270",
        "rotate-90",
        "rotate-by",
        "shake",
        "spin-pulse",
        "spin-reverse",
        "spin",
        "stack-1x",
        "stack-2x",
        "stack",
        "ul",
        od.GROUP,
        od.SWAP_OPACITY,
        od.PRIMARY,
        od.SECONDARY,
      ])
      .concat(
        nd.map(function (t) {
          return "".concat(t, "x");
        })
      )
      .concat(
        id.map(function (t) {
          return "w-".concat(t);
        })
      ),
    ld = Cc.FontAwesomeConfig || {};
  if (Ec && "function" == typeof Ec.querySelector) {
    [
      ["data-family-prefix", "familyPrefix"],
      ["data-css-prefix", "cssPrefix"],
      ["data-family-default", "familyDefault"],
      ["data-style-default", "styleDefault"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-mutate-approach", "mutateApproach"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"],
    ].forEach(function (t) {
      var e = cc(t, 2),
        n = e[0],
        i = e[1],
        r = (function (t) {
          return "" === t || ("false" !== t && ("true" === t || t));
        })(
          (function (t) {
            var e = Ec.querySelector("script[" + t + "]");
            if (e) return e.getAttribute(t);
          })(n)
        );
      null != r && (ld[i] = r);
    });
  }
  var cd = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: Lc,
    replacementClass: Dc,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0,
  };
  ld.familyPrefix && (ld.cssPrefix = ld.familyPrefix);
  var dd = oc(oc({}, cd), ld);
  dd.autoReplaceSvg || (dd.observeMutations = !1);
  var ud = {};
  Object.keys(cd).forEach(function (t) {
    Object.defineProperty(ud, t, {
      enumerable: !0,
      set: function (e) {
        (dd[t] = e),
          hd.forEach(function (t) {
            return t(ud);
          });
      },
      get: function () {
        return dd[t];
      },
    });
  }),
    Object.defineProperty(ud, "familyPrefix", {
      enumerable: !0,
      set: function (t) {
        (dd.cssPrefix = t),
          hd.forEach(function (t) {
            return t(ud);
          });
      },
      get: function () {
        return dd.cssPrefix;
      },
    }),
    (Cc.FontAwesomeConfig = ud);
  var hd = [];
  var fd = Rc,
    pd = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
  var md = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function gd() {
    for (var t = 12, e = ""; t-- > 0; ) e += md[(62 * Math.random()) | 0];
    return e;
  }
  function vd(t) {
    for (var e = [], n = (t || []).length >>> 0; n--; ) e[n] = t[n];
    return e;
  }
  function bd(t) {
    return t.classList
      ? vd(t.classList)
      : (t.getAttribute("class") || "").split(" ").filter(function (t) {
          return t;
        });
  }
  function yd(t) {
    return ""
      .concat(t)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function wd(t) {
    return Object.keys(t || {}).reduce(function (e, n) {
      return e + "".concat(n, ": ").concat(t[n].trim(), ";");
    }, "");
  }
  function xd(t) {
    return (
      t.size !== pd.size ||
      t.x !== pd.x ||
      t.y !== pd.y ||
      t.rotate !== pd.rotate ||
      t.flipX ||
      t.flipY
    );
  }
  var kd =
    ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
  function _d() {
    var t = Lc,
      e = Dc,
      n = ud.cssPrefix,
      i = ud.replacementClass,
      r = kd;
    if (n !== t || i !== e) {
      var o = new RegExp("\\.".concat(t, "\\-"), "g"),
        a = new RegExp("\\--".concat(t, "\\-"), "g"),
        s = new RegExp("\\.".concat(e), "g");
      r = r
        .replace(o, ".".concat(n, "-"))
        .replace(a, "--".concat(n, "-"))
        .replace(s, ".".concat(i));
    }
    return r;
  }
  var Td = !1;
  function Cd() {
    ud.autoAddCss &&
      !Td &&
      (!(function (t) {
        if (t && Oc) {
          var e = Ec.createElement("style");
          e.setAttribute("type", "text/css"), (e.innerHTML = t);
          for (
            var n = Ec.head.childNodes, i = null, r = n.length - 1;
            r > -1;
            r--
          ) {
            var o = n[r],
              a = (o.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(a) > -1 && (i = o);
          }
          Ec.head.insertBefore(e, i);
        }
      })(_d()),
      (Td = !0));
  }
  var Ed = {
      mixout: function () {
        return { dom: { css: _d, insertCss: Cd } };
      },
      hooks: function () {
        return {
          beforeDOMElementCreation: function () {
            Cd();
          },
          beforeI2svg: function () {
            Cd();
          },
        };
      },
    },
    Sd = Cc || {};
  Sd[Ac] || (Sd[Ac] = {}),
    Sd[Ac].styles || (Sd[Ac].styles = {}),
    Sd[Ac].hooks || (Sd[Ac].hooks = {}),
    Sd[Ac].shims || (Sd[Ac].shims = []);
  var Md = Sd[Ac],
    Od = [],
    Pd = !1;
  function Ad(t) {
    var e = t.tag,
      n = t.attributes,
      i = void 0 === n ? {} : n,
      r = t.children,
      o = void 0 === r ? [] : r;
    return "string" == typeof t
      ? yd(t)
      : "<"
          .concat(e, " ")
          .concat(
            (function (t) {
              return Object.keys(t || {})
                .reduce(function (e, n) {
                  return e + "".concat(n, '="').concat(yd(t[n]), '" ');
                }, "")
                .trim();
            })(i),
            ">"
          )
          .concat(o.map(Ad).join(""), "</")
          .concat(e, ">");
  }
  function Rd(t, e, n) {
    if (t && t[e] && t[e][n]) return { prefix: e, iconName: n, icon: t[e][n] };
  }
  Oc &&
    ((Pd = (Ec.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
      Ec.readyState
    )) ||
      Ec.addEventListener("DOMContentLoaded", function t() {
        Ec.removeEventListener("DOMContentLoaded", t),
          (Pd = 1),
          Od.map(function (t) {
            return t();
          });
      }));
  var Ld = function (t, e, n, i) {
    var r,
      o,
      a,
      s = Object.keys(t),
      l = s.length,
      c =
        void 0 !== i
          ? (function (t, e) {
              return function (n, i, r, o) {
                return t.call(e, n, i, r, o);
              };
            })(e, i)
          : e;
    for (
      void 0 === n ? ((r = 1), (a = t[s[0]])) : ((r = 0), (a = n));
      r < l;
      r++
    )
      a = c(a, t[(o = s[r])], o, t);
    return a;
  };
  function Dd(t) {
    var e = (function (t) {
      for (var e = [], n = 0, i = t.length; n < i; ) {
        var r = t.charCodeAt(n++);
        if (r >= 55296 && r <= 56319 && n < i) {
          var o = t.charCodeAt(n++);
          56320 == (64512 & o)
            ? e.push(((1023 & r) << 10) + (1023 & o) + 65536)
            : (e.push(r), n--);
        } else e.push(r);
      }
      return e;
    })(t);
    return 1 === e.length ? e[0].toString(16) : null;
  }
  function Nd(t) {
    return Object.keys(t).reduce(function (e, n) {
      var i = t[n];
      return !!i.icon ? (e[i.iconName] = i.icon) : (e[n] = i), e;
    }, {});
  }
  function zd(t, e) {
    var n = (
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
      ).skipHooks,
      i = void 0 !== n && n,
      r = Nd(e);
    "function" != typeof Md.hooks.addPack || i
      ? (Md.styles[t] = oc(oc({}, Md.styles[t] || {}), r))
      : Md.hooks.addPack(t, Nd(e)),
      "fas" === t && zd("fa", e);
  }
  var Id,
    Bd,
    Fd,
    jd = Md.styles,
    Xd = Md.shims,
    Hd =
      (lc((Id = {}), Vc, Object.values(Kc[Vc])),
      lc(Id, Zc, Object.values(Kc[Zc])),
      Id),
    Yd = null,
    Vd = {},
    Zd = {},
    Ud = {},
    qd = {},
    Wd = {},
    $d =
      (lc((Bd = {}), Vc, Object.keys(Wc[Vc])),
      lc(Bd, Zc, Object.keys(Wc[Zc])),
      Bd);
  function Kd(t, e) {
    var n = e.split("-"),
      i = n[0],
      r = n.slice(1).join("-");
    return i !== t ||
      "" === r ||
      (function (t) {
        return ~sd.indexOf(t);
      })(r)
      ? null
      : r;
  }
  var Gd,
    Jd = function () {
      var t = function (t) {
        return Ld(
          jd,
          function (e, n, i) {
            return (e[i] = Ld(n, t, {})), e;
          },
          {}
        );
      };
      (Vd = t(function (t, e, n) {
        (e[3] && (t[e[3]] = n), e[2]) &&
          e[2]
            .filter(function (t) {
              return "number" == typeof t;
            })
            .forEach(function (e) {
              t[e.toString(16)] = n;
            });
        return t;
      })),
        (Zd = t(function (t, e, n) {
          ((t[n] = n), e[2]) &&
            e[2]
              .filter(function (t) {
                return "string" == typeof t;
              })
              .forEach(function (e) {
                t[e] = n;
              });
          return t;
        })),
        (Wd = t(function (t, e, n) {
          var i = e[2];
          return (
            (t[n] = n),
            i.forEach(function (e) {
              t[e] = n;
            }),
            t
          );
        }));
      var e = "far" in jd || ud.autoFetchSvg,
        n = Ld(
          Xd,
          function (t, n) {
            var i = n[0],
              r = n[1],
              o = n[2];
            return (
              "far" !== r || e || (r = "fas"),
              "string" == typeof i && (t.names[i] = { prefix: r, iconName: o }),
              "number" == typeof i &&
                (t.unicodes[i.toString(16)] = { prefix: r, iconName: o }),
              t
            );
          },
          { names: {}, unicodes: {} }
        );
      (Ud = n.names),
        (qd = n.unicodes),
        (Yd = ru(ud.styleDefault, { family: ud.familyDefault }));
    };
  function Qd(t, e) {
    return (Vd[t] || {})[e];
  }
  function tu(t, e) {
    return (Wd[t] || {})[e];
  }
  function eu(t) {
    return Ud[t] || { prefix: null, iconName: null };
  }
  function nu() {
    return Yd;
  }
  (Gd = function (t) {
    Yd = ru(t.styleDefault, { family: ud.familyDefault });
  }),
    hd.push(Gd),
    Jd();
  var iu = function () {
    return { prefix: null, iconName: null, rest: [] };
  };
  function ru(t) {
    var e = (
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      ).family,
      n = void 0 === e ? Vc : e,
      i = Wc[n][t],
      r = $c[n][t] || $c[n][i],
      o = t in Md.styles ? t : null;
    return r || o || null;
  }
  var ou =
    (lc((Fd = {}), Vc, Object.keys(Kc[Vc])),
    lc(Fd, Zc, Object.keys(Kc[Zc])),
    Fd);
  function au(t) {
    var e,
      n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
        .skipLookups,
      i = void 0 !== n && n,
      r =
        (lc((e = {}), Vc, "".concat(ud.cssPrefix, "-").concat(Vc)),
        lc(e, Zc, "".concat(ud.cssPrefix, "-").concat(Zc)),
        e),
      o = null,
      a = Vc;
    (t.includes(r[Vc]) ||
      t.some(function (t) {
        return ou[Vc].includes(t);
      })) &&
      (a = Vc),
      (t.includes(r[Zc]) ||
        t.some(function (t) {
          return ou[Zc].includes(t);
        })) &&
        (a = Zc);
    var s = t.reduce(function (t, e) {
      var n = Kd(ud.cssPrefix, e);
      if (
        (jd[e]
          ? ((e = Hd[a].includes(e) ? Gc[a][e] : e), (o = e), (t.prefix = e))
          : $d[a].indexOf(e) > -1
          ? ((o = e), (t.prefix = ru(e, { family: a })))
          : n
          ? (t.iconName = n)
          : e !== ud.replacementClass &&
            e !== r[Vc] &&
            e !== r[Zc] &&
            t.rest.push(e),
        !i && t.prefix && t.iconName)
      ) {
        var s = "fa" === o ? eu(t.iconName) : {},
          l = tu(t.prefix, t.iconName);
        s.prefix && (o = null),
          (t.iconName = s.iconName || l || t.iconName),
          (t.prefix = s.prefix || t.prefix),
          "far" !== t.prefix ||
            jd.far ||
            !jd.fas ||
            ud.autoFetchSvg ||
            (t.prefix = "fas");
      }
      return t;
    }, iu());
    return (
      (t.includes("fa-brands") || t.includes("fab")) && (s.prefix = "fab"),
      (t.includes("fa-duotone") || t.includes("fad")) && (s.prefix = "fad"),
      s.prefix ||
        a !== Zc ||
        (!jd.fass && !ud.autoFetchSvg) ||
        ((s.prefix = "fass"),
        (s.iconName = tu(s.prefix, s.iconName) || s.iconName)),
      ("fa" !== s.prefix && "fa" !== o) || (s.prefix = nu() || "fas"),
      s
    );
  }
  var su = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.definitions = {});
      }
      var e, n, i;
      return (
        (e = t),
        (n = [
          {
            key: "add",
            value: function () {
              for (
                var t = this, e = arguments.length, n = new Array(e), i = 0;
                i < e;
                i++
              )
                n[i] = arguments[i];
              var r = n.reduce(this._pullDefinitions, {});
              Object.keys(r).forEach(function (e) {
                (t.definitions[e] = oc(oc({}, t.definitions[e] || {}), r[e])),
                  zd(e, r[e]);
                var n = Kc[Vc][e];
                n && zd(n, r[e]), Jd();
              });
            },
          },
          {
            key: "reset",
            value: function () {
              this.definitions = {};
            },
          },
          {
            key: "_pullDefinitions",
            value: function (t, e) {
              var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
              return (
                Object.keys(n).map(function (e) {
                  var i = n[e],
                    r = i.prefix,
                    o = i.iconName,
                    a = i.icon,
                    s = a[2];
                  t[r] || (t[r] = {}),
                    s.length > 0 &&
                      s.forEach(function (e) {
                        "string" == typeof e && (t[r][e] = a);
                      }),
                    (t[r][o] = a);
                }),
                t
              );
            },
          },
        ]),
        n && sc(e.prototype, n),
        i && sc(e, i),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })(),
    lu = [],
    cu = {},
    du = {},
    uu = Object.keys(du);
  function hu(t, e) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2;
      r < n;
      r++
    )
      i[r - 2] = arguments[r];
    return (
      (cu[t] || []).forEach(function (t) {
        e = t.apply(null, [e].concat(i));
      }),
      e
    );
  }
  function fu(t) {
    for (
      var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
      i < e;
      i++
    )
      n[i - 1] = arguments[i];
    (cu[t] || []).forEach(function (t) {
      t.apply(null, n);
    });
  }
  function pu() {
    var t = arguments[0],
      e = Array.prototype.slice.call(arguments, 1);
    return du[t] ? du[t].apply(null, e) : void 0;
  }
  function mu(t) {
    "fa" === t.prefix && (t.prefix = "fas");
    var e = t.iconName,
      n = t.prefix || nu();
    if (e)
      return (
        (e = tu(n, e) || e), Rd(gu.definitions, n, e) || Rd(Md.styles, n, e)
      );
  }
  var gu = new su(),
    vu = {
      i2svg: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Oc
          ? (fu("beforeI2svg", t), pu("pseudoElements2svg", t), pu("i2svg", t))
          : Promise.reject("Operation requires a DOM of some kind.");
      },
      watch: function () {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.autoReplaceSvgRoot;
        !1 === ud.autoReplaceSvg && (ud.autoReplaceSvg = !0),
          (ud.observeMutations = !0),
          (t = function () {
            wu({ autoReplaceSvgRoot: n }), fu("watch", e);
          }),
          Oc && (Pd ? setTimeout(t, 0) : Od.push(t));
      },
    },
    bu = {
      icon: function (t) {
        if (null === t) return null;
        if ("object" === ac(t) && t.prefix && t.iconName)
          return {
            prefix: t.prefix,
            iconName: tu(t.prefix, t.iconName) || t.iconName,
          };
        if (Array.isArray(t) && 2 === t.length) {
          var e = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1],
            n = ru(t[0]);
          return { prefix: n, iconName: tu(n, e) || e };
        }
        if (
          "string" == typeof t &&
          (t.indexOf("".concat(ud.cssPrefix, "-")) > -1 || t.match(Jc))
        ) {
          var i = au(t.split(" "), { skipLookups: !0 });
          return {
            prefix: i.prefix || nu(),
            iconName: tu(i.prefix, i.iconName) || i.iconName,
          };
        }
        if ("string" == typeof t) {
          var r = nu();
          return { prefix: r, iconName: tu(r, t) || t };
        }
      },
    },
    yu = {
      noAuto: function () {
        (ud.autoReplaceSvg = !1), (ud.observeMutations = !1), fu("noAuto");
      },
      config: ud,
      dom: vu,
      parse: bu,
      library: gu,
      findIconDefinition: mu,
      toHtml: Ad,
    },
    wu = function () {
      var t = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).autoReplaceSvgRoot,
        e = void 0 === t ? Ec : t;
      (Object.keys(Md.styles).length > 0 || ud.autoFetchSvg) &&
        Oc &&
        ud.autoReplaceSvg &&
        yu.dom.i2svg({ node: e });
    };
  function xu(t, e) {
    return (
      Object.defineProperty(t, "abstract", { get: e }),
      Object.defineProperty(t, "html", {
        get: function () {
          return t.abstract.map(function (t) {
            return Ad(t);
          });
        },
      }),
      Object.defineProperty(t, "node", {
        get: function () {
          if (Oc) {
            var e = Ec.createElement("div");
            return (e.innerHTML = t.html), e.children;
          }
        },
      }),
      t
    );
  }
  function ku(t) {
    var e = t.icons,
      n = e.main,
      i = e.mask,
      r = t.prefix,
      o = t.iconName,
      a = t.transform,
      s = t.symbol,
      l = t.title,
      c = t.maskId,
      d = t.titleId,
      u = t.extra,
      h = t.watchable,
      f = void 0 !== h && h,
      p = i.found ? i : n,
      m = p.width,
      g = p.height,
      v = "fak" === r,
      b = [ud.replacementClass, o ? "".concat(ud.cssPrefix, "-").concat(o) : ""]
        .filter(function (t) {
          return -1 === u.classes.indexOf(t);
        })
        .filter(function (t) {
          return "" !== t || !!t;
        })
        .concat(u.classes)
        .join(" "),
      y = {
        children: [],
        attributes: oc(
          oc({}, u.attributes),
          {},
          {
            "data-prefix": r,
            "data-icon": o,
            class: b,
            role: u.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(m, " ").concat(g),
          }
        ),
      },
      w =
        v && !~u.classes.indexOf("fa-fw")
          ? { width: "".concat((m / g) * 16 * 0.0625, "em") }
          : {};
    f && (y.attributes[Nc] = ""),
      l &&
        (y.children.push({
          tag: "title",
          attributes: {
            id: y.attributes["aria-labelledby"] || "title-".concat(d || gd()),
          },
          children: [l],
        }),
        delete y.attributes.title);
    var x = oc(
        oc({}, y),
        {},
        {
          prefix: r,
          iconName: o,
          main: n,
          mask: i,
          maskId: c,
          transform: a,
          symbol: s,
          styles: oc(oc({}, w), u.styles),
        }
      ),
      k =
        i.found && n.found
          ? pu("generateAbstractMask", x) || { children: [], attributes: {} }
          : pu("generateAbstractIcon", x) || { children: [], attributes: {} },
      _ = k.children,
      T = k.attributes;
    return (
      (x.children = _),
      (x.attributes = T),
      s
        ? (function (t) {
            var e = t.prefix,
              n = t.iconName,
              i = t.children,
              r = t.attributes,
              o = t.symbol,
              a =
                !0 === o
                  ? "".concat(e, "-").concat(ud.cssPrefix, "-").concat(n)
                  : o;
            return [
              {
                tag: "svg",
                attributes: { style: "display: none;" },
                children: [
                  {
                    tag: "symbol",
                    attributes: oc(oc({}, r), {}, { id: a }),
                    children: i,
                  },
                ],
              },
            ];
          })(x)
        : (function (t) {
            var e = t.children,
              n = t.main,
              i = t.mask,
              r = t.attributes,
              o = t.styles,
              a = t.transform;
            if (xd(a) && n.found && !i.found) {
              var s = { x: n.width / n.height / 2, y: 0.5 };
              r.style = wd(
                oc(
                  oc({}, o),
                  {},
                  {
                    "transform-origin": ""
                      .concat(s.x + a.x / 16, "em ")
                      .concat(s.y + a.y / 16, "em"),
                  }
                )
              );
            }
            return [{ tag: "svg", attributes: r, children: e }];
          })(x)
    );
  }
  function _u(t) {
    var e = t.content,
      n = t.width,
      i = t.height,
      r = t.transform,
      o = t.title,
      a = t.extra,
      s = t.watchable,
      l = void 0 !== s && s,
      c = oc(
        oc(oc({}, a.attributes), o ? { title: o } : {}),
        {},
        { class: a.classes.join(" ") }
      );
    l && (c[Nc] = "");
    var d = oc({}, a.styles);
    xd(r) &&
      ((d.transform = (function (t) {
        var e = t.transform,
          n = t.width,
          i = void 0 === n ? Rc : n,
          r = t.height,
          o = void 0 === r ? Rc : r,
          a = t.startCentered,
          s = void 0 !== a && a,
          l = "";
        return (
          (l +=
            s && Pc
              ? "translate("
                  .concat(e.x / fd - i / 2, "em, ")
                  .concat(e.y / fd - o / 2, "em) ")
              : s
              ? "translate(calc(-50% + "
                  .concat(e.x / fd, "em), calc(-50% + ")
                  .concat(e.y / fd, "em)) ")
              : "translate(".concat(e.x / fd, "em, ").concat(e.y / fd, "em) ")),
          (l += "scale("
            .concat((e.size / fd) * (e.flipX ? -1 : 1), ", ")
            .concat((e.size / fd) * (e.flipY ? -1 : 1), ") ")),
          l + "rotate(".concat(e.rotate, "deg) ")
        );
      })({ transform: r, startCentered: !0, width: n, height: i })),
      (d["-webkit-transform"] = d.transform));
    var u = wd(d);
    u.length > 0 && (c.style = u);
    var h = [];
    return (
      h.push({ tag: "span", attributes: c, children: [e] }),
      o &&
        h.push({
          tag: "span",
          attributes: { class: "sr-only" },
          children: [o],
        }),
      h
    );
  }
  var Tu = Md.styles;
  function Cu(t) {
    var e = t[0],
      n = t[1],
      i = cc(t.slice(4), 1)[0];
    return {
      found: !0,
      width: e,
      height: n,
      icon: Array.isArray(i)
        ? {
            tag: "g",
            attributes: {
              class: "".concat(ud.cssPrefix, "-").concat(od.GROUP),
            },
            children: [
              {
                tag: "path",
                attributes: {
                  class: "".concat(ud.cssPrefix, "-").concat(od.SECONDARY),
                  fill: "currentColor",
                  d: i[0],
                },
              },
              {
                tag: "path",
                attributes: {
                  class: "".concat(ud.cssPrefix, "-").concat(od.PRIMARY),
                  fill: "currentColor",
                  d: i[1],
                },
              },
            ],
          }
        : { tag: "path", attributes: { fill: "currentColor", d: i } },
    };
  }
  var Eu = { found: !1, width: 512, height: 512 };
  function Su(t, e) {
    var n = e;
    return (
      "fa" === e && null !== ud.styleDefault && (e = nu()),
      new Promise(function (i, r) {
        pu("missingIconAbstract");
        if ("fa" === n) {
          var o = eu(t) || {};
          (t = o.iconName || t), (e = o.prefix || e);
        }
        if (t && e && Tu[e] && Tu[e][t]) return i(Cu(Tu[e][t]));
        !(function (t, e) {
          Yc ||
            ud.showMissingIcons ||
            !t ||
            console.error(
              'Icon with name "'
                .concat(t, '" and prefix "')
                .concat(e, '" is missing.')
            );
        })(t, e),
          i(
            oc(
              oc({}, Eu),
              {},
              {
                icon:
                  (ud.showMissingIcons && t && pu("missingIconAbstract")) || {},
              }
            )
          );
      })
    );
  }
  var Mu = function () {},
    Ou =
      ud.measurePerformance && Mc && Mc.mark && Mc.measure
        ? Mc
        : { mark: Mu, measure: Mu },
    Pu = 'FA "6.4.0"',
    Au = function (t) {
      Ou.mark("".concat(Pu, " ").concat(t, " ends")),
        Ou.measure(
          "".concat(Pu, " ").concat(t),
          "".concat(Pu, " ").concat(t, " begins"),
          "".concat(Pu, " ").concat(t, " ends")
        );
    },
    Ru = {
      begin: function (t) {
        return (
          Ou.mark("".concat(Pu, " ").concat(t, " begins")),
          function () {
            return Au(t);
          }
        );
      },
      end: Au,
    },
    Lu = function () {};
  function Du(t) {
    return "string" == typeof (t.getAttribute ? t.getAttribute(Nc) : null);
  }
  function Nu(t) {
    return Ec.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function zu(t) {
    return Ec.createElement(t);
  }
  function Iu(t) {
    var e = (
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      ).ceFn,
      n = void 0 === e ? ("svg" === t.tag ? Nu : zu) : e;
    if ("string" == typeof t) return Ec.createTextNode(t);
    var i = n(t.tag);
    return (
      Object.keys(t.attributes || []).forEach(function (e) {
        i.setAttribute(e, t.attributes[e]);
      }),
      (t.children || []).forEach(function (t) {
        i.appendChild(Iu(t, { ceFn: n }));
      }),
      i
    );
  }
  var Bu = {
    replace: function (t) {
      var e = t[0];
      if (e.parentNode)
        if (
          (t[1].forEach(function (t) {
            e.parentNode.insertBefore(Iu(t), e);
          }),
          null === e.getAttribute(Nc) && ud.keepOriginalSource)
        ) {
          var n = Ec.createComment(
            (function (t) {
              var e = " ".concat(t.outerHTML, " ");
              return "".concat(e, "Font Awesome fontawesome.com ");
            })(e)
          );
          e.parentNode.replaceChild(n, e);
        } else e.remove();
    },
    nest: function (t) {
      var e = t[0],
        n = t[1];
      if (~bd(e).indexOf(ud.replacementClass)) return Bu.replace(t);
      var i = new RegExp("".concat(ud.cssPrefix, "-.*"));
      if ((delete n[0].attributes.id, n[0].attributes.class)) {
        var r = n[0].attributes.class.split(" ").reduce(
          function (t, e) {
            return (
              e === ud.replacementClass || e.match(i)
                ? t.toSvg.push(e)
                : t.toNode.push(e),
              t
            );
          },
          { toNode: [], toSvg: [] }
        );
        (n[0].attributes.class = r.toSvg.join(" ")),
          0 === r.toNode.length
            ? e.removeAttribute("class")
            : e.setAttribute("class", r.toNode.join(" "));
      }
      var o = n
        .map(function (t) {
          return Ad(t);
        })
        .join("\n");
      e.setAttribute(Nc, ""), (e.innerHTML = o);
    },
  };
  function Fu(t) {
    t();
  }
  function ju(t, e) {
    var n = "function" == typeof e ? e : Lu;
    if (0 === t.length) n();
    else {
      var i = Fu;
      ud.mutateApproach === Xc && (i = Cc.requestAnimationFrame || Fu),
        i(function () {
          var e =
              !0 === ud.autoReplaceSvg
                ? Bu.replace
                : Bu[ud.autoReplaceSvg] || Bu.replace,
            i = Ru.begin("mutate");
          t.map(e), i(), n();
        });
    }
  }
  var Xu = !1;
  function Hu() {
    Xu = !0;
  }
  function Yu() {
    Xu = !1;
  }
  var Vu = null;
  function Zu(t) {
    if (Sc && ud.observeMutations) {
      var e = t.treeCallback,
        n = void 0 === e ? Lu : e,
        i = t.nodeCallback,
        r = void 0 === i ? Lu : i,
        o = t.pseudoElementsCallback,
        a = void 0 === o ? Lu : o,
        s = t.observeMutationsRoot,
        l = void 0 === s ? Ec : s;
      (Vu = new Sc(function (t) {
        if (!Xu) {
          var e = nu();
          vd(t).forEach(function (t) {
            if (
              ("childList" === t.type &&
                t.addedNodes.length > 0 &&
                !Du(t.addedNodes[0]) &&
                (ud.searchPseudoElements && a(t.target), n(t.target)),
              "attributes" === t.type &&
                t.target.parentNode &&
                ud.searchPseudoElements &&
                a(t.target.parentNode),
              "attributes" === t.type &&
                Du(t.target) &&
                ~rd.indexOf(t.attributeName))
            )
              if (
                "class" === t.attributeName &&
                (function (t) {
                  var e = t.getAttribute ? t.getAttribute(Bc) : null,
                    n = t.getAttribute ? t.getAttribute(Fc) : null;
                  return e && n;
                })(t.target)
              ) {
                var i = au(bd(t.target)),
                  o = i.prefix,
                  s = i.iconName;
                t.target.setAttribute(Bc, o || e),
                  s && t.target.setAttribute(Fc, s);
              } else
                (l = t.target) &&
                  l.classList &&
                  l.classList.contains &&
                  l.classList.contains(ud.replacementClass) &&
                  r(t.target);
            var l;
          });
        }
      })),
        Oc &&
          Vu.observe(l, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0,
          });
    }
  }
  function Uu(t) {
    var e = t.getAttribute("data-prefix"),
      n = t.getAttribute("data-icon"),
      i = void 0 !== t.innerText ? t.innerText.trim() : "",
      r = au(bd(t));
    return (
      r.prefix || (r.prefix = nu()),
      e && n && ((r.prefix = e), (r.iconName = n)),
      (r.iconName && r.prefix) ||
        (r.prefix &&
          i.length > 0 &&
          (r.iconName =
            (function (t, e) {
              return (Zd[t] || {})[e];
            })(r.prefix, t.innerText) || Qd(r.prefix, Dd(t.innerText))),
        !r.iconName &&
          ud.autoFetchSvg &&
          t.firstChild &&
          t.firstChild.nodeType === Node.TEXT_NODE &&
          (r.iconName = t.firstChild.data)),
      r
    );
  }
  function qu(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { styleParser: !0 },
      n = Uu(t),
      i = n.iconName,
      r = n.prefix,
      o = n.rest,
      a = (function (t) {
        var e = vd(t.attributes).reduce(function (t, e) {
            return (
              "class" !== t.name && "style" !== t.name && (t[e.name] = e.value),
              t
            );
          }, {}),
          n = t.getAttribute("title"),
          i = t.getAttribute("data-fa-title-id");
        return (
          ud.autoA11y &&
            (n
              ? (e["aria-labelledby"] = ""
                  .concat(ud.replacementClass, "-title-")
                  .concat(i || gd()))
              : ((e["aria-hidden"] = "true"), (e.focusable = "false"))),
          e
        );
      })(t),
      s = hu("parseNodeAttributes", {}, t),
      l = e.styleParser
        ? (function (t) {
            var e = t.getAttribute("style"),
              n = [];
            return (
              e &&
                (n = e.split(";").reduce(function (t, e) {
                  var n = e.split(":"),
                    i = n[0],
                    r = n.slice(1);
                  return i && r.length > 0 && (t[i] = r.join(":").trim()), t;
                }, {})),
              n
            );
          })(t)
        : [];
    return oc(
      {
        iconName: i,
        title: t.getAttribute("title"),
        titleId: t.getAttribute("data-fa-title-id"),
        prefix: r,
        transform: pd,
        mask: { iconName: null, prefix: null, rest: [] },
        maskId: null,
        symbol: !1,
        extra: { classes: o, styles: l, attributes: a },
      },
      s
    );
  }
  var Wu = Md.styles;
  function $u(t) {
    var e = "nest" === ud.autoReplaceSvg ? qu(t, { styleParser: !1 }) : qu(t);
    return ~e.extra.classes.indexOf(Qc)
      ? pu("generateLayersText", t, e)
      : pu("generateSvgReplacementMutation", t, e);
  }
  var Ku = new Set();
  function Gu(t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!Oc) return Promise.resolve();
    var n = Ec.documentElement.classList,
      i = function (t) {
        return n.add("".concat(jc, "-").concat(t));
      },
      r = function (t) {
        return n.remove("".concat(jc, "-").concat(t));
      },
      o = ud.autoFetchSvg
        ? Ku
        : Uc.map(function (t) {
            return "fa-".concat(t);
          }).concat(Object.keys(Wu));
    o.includes("fa") || o.push("fa");
    var a = [".".concat(Qc, ":not([").concat(Nc, "])")]
      .concat(
        o.map(function (t) {
          return ".".concat(t, ":not([").concat(Nc, "])");
        })
      )
      .join(", ");
    if (0 === a.length) return Promise.resolve();
    var s = [];
    try {
      s = vd(t.querySelectorAll(a));
    } catch (t) {}
    if (!(s.length > 0)) return Promise.resolve();
    i("pending"), r("complete");
    var l = Ru.begin("onTree"),
      c = s.reduce(function (t, e) {
        try {
          var n = $u(e);
          n && t.push(n);
        } catch (t) {
          Yc || ("MissingIcon" === t.name && console.error(t));
        }
        return t;
      }, []);
    return new Promise(function (t, n) {
      Promise.all(c)
        .then(function (n) {
          ju(n, function () {
            i("active"),
              i("complete"),
              r("pending"),
              "function" == typeof e && e(),
              l(),
              t();
          });
        })
        .catch(function (t) {
          l(), n(t);
        });
    });
  }
  function Ju(t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    $u(t).then(function (t) {
      t && ju([t], e);
    });
  }
  Uc.map(function (t) {
    Ku.add("fa-".concat(t));
  }),
    Object.keys(Wc[Vc]).map(Ku.add.bind(Ku)),
    Object.keys(Wc[Zc]).map(Ku.add.bind(Ku)),
    (Ku = dc(Ku));
  var Qu = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.transform,
        i = void 0 === n ? pd : n,
        r = e.symbol,
        o = void 0 !== r && r,
        a = e.mask,
        s = void 0 === a ? null : a,
        l = e.maskId,
        c = void 0 === l ? null : l,
        d = e.title,
        u = void 0 === d ? null : d,
        h = e.titleId,
        f = void 0 === h ? null : h,
        p = e.classes,
        m = void 0 === p ? [] : p,
        g = e.attributes,
        v = void 0 === g ? {} : g,
        b = e.styles,
        y = void 0 === b ? {} : b;
      if (t) {
        var w = t.prefix,
          x = t.iconName,
          k = t.icon;
        return xu(oc({ type: "icon" }, t), function () {
          return (
            fu("beforeDOMElementCreation", { iconDefinition: t, params: e }),
            ud.autoA11y &&
              (u
                ? (v["aria-labelledby"] = ""
                    .concat(ud.replacementClass, "-title-")
                    .concat(f || gd()))
                : ((v["aria-hidden"] = "true"), (v.focusable = "false"))),
            ku({
              icons: {
                main: Cu(k),
                mask: s
                  ? Cu(s.icon)
                  : { found: !1, width: null, height: null, icon: {} },
              },
              prefix: w,
              iconName: x,
              transform: oc(oc({}, pd), i),
              symbol: o,
              title: u,
              maskId: c,
              titleId: f,
              extra: { attributes: v, styles: y, classes: m },
            })
          );
        });
      }
    },
    th = {
      mixout: function () {
        return {
          icon:
            ((t = Qu),
            function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = (e || {}).icon ? e : mu(e || {}),
                r = n.mask;
              return (
                r && (r = (r || {}).icon ? r : mu(r || {})),
                t(i, oc(oc({}, n), {}, { mask: r }))
              );
            }),
        };
        var t;
      },
      hooks: function () {
        return {
          mutationObserverCallbacks: function (t) {
            return (t.treeCallback = Gu), (t.nodeCallback = Ju), t;
          },
        };
      },
      provides: function (t) {
        (t.i2svg = function (t) {
          var e = t.node,
            n = void 0 === e ? Ec : e,
            i = t.callback;
          return Gu(n, void 0 === i ? function () {} : i);
        }),
          (t.generateSvgReplacementMutation = function (t, e) {
            var n = e.iconName,
              i = e.title,
              r = e.titleId,
              o = e.prefix,
              a = e.transform,
              s = e.symbol,
              l = e.mask,
              c = e.maskId,
              d = e.extra;
            return new Promise(function (e, u) {
              Promise.all([
                Su(n, o),
                l.iconName
                  ? Su(l.iconName, l.prefix)
                  : Promise.resolve({
                      found: !1,
                      width: 512,
                      height: 512,
                      icon: {},
                    }),
              ])
                .then(function (l) {
                  var u = cc(l, 2),
                    h = u[0],
                    f = u[1];
                  e([
                    t,
                    ku({
                      icons: { main: h, mask: f },
                      prefix: o,
                      iconName: n,
                      transform: a,
                      symbol: s,
                      maskId: c,
                      title: i,
                      titleId: r,
                      extra: d,
                      watchable: !0,
                    }),
                  ]);
                })
                .catch(u);
            });
          }),
          (t.generateAbstractIcon = function (t) {
            var e,
              n = t.children,
              i = t.attributes,
              r = t.main,
              o = t.transform,
              a = wd(t.styles);
            return (
              a.length > 0 && (i.style = a),
              xd(o) &&
                (e = pu("generateAbstractTransformGrouping", {
                  main: r,
                  transform: o,
                  containerWidth: r.width,
                  iconWidth: r.width,
                })),
              n.push(e || r.icon),
              { children: n, attributes: i }
            );
          });
      },
    },
    eh = {
      mixout: function () {
        return {
          layer: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.classes,
              i = void 0 === n ? [] : n;
            return xu({ type: "layer" }, function () {
              fu("beforeDOMElementCreation", { assembler: t, params: e });
              var n = [];
              return (
                t(function (t) {
                  Array.isArray(t)
                    ? t.map(function (t) {
                        n = n.concat(t.abstract);
                      })
                    : (n = n.concat(t.abstract));
                }),
                [
                  {
                    tag: "span",
                    attributes: {
                      class: ["".concat(ud.cssPrefix, "-layers")]
                        .concat(dc(i))
                        .join(" "),
                    },
                    children: n,
                  },
                ]
              );
            });
          },
        };
      },
    },
    nh = {
      mixout: function () {
        return {
          counter: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.title,
              i = void 0 === n ? null : n,
              r = e.classes,
              o = void 0 === r ? [] : r,
              a = e.attributes,
              s = void 0 === a ? {} : a,
              l = e.styles,
              c = void 0 === l ? {} : l;
            return xu({ type: "counter", content: t }, function () {
              return (
                fu("beforeDOMElementCreation", { content: t, params: e }),
                (function (t) {
                  var e = t.content,
                    n = t.title,
                    i = t.extra,
                    r = oc(
                      oc(oc({}, i.attributes), n ? { title: n } : {}),
                      {},
                      { class: i.classes.join(" ") }
                    ),
                    o = wd(i.styles);
                  o.length > 0 && (r.style = o);
                  var a = [];
                  return (
                    a.push({ tag: "span", attributes: r, children: [e] }),
                    n &&
                      a.push({
                        tag: "span",
                        attributes: { class: "sr-only" },
                        children: [n],
                      }),
                    a
                  );
                })({
                  content: t.toString(),
                  title: i,
                  extra: {
                    attributes: s,
                    styles: c,
                    classes: [
                      "".concat(ud.cssPrefix, "-layers-counter"),
                    ].concat(dc(o)),
                  },
                })
              );
            });
          },
        };
      },
    },
    ih = {
      mixout: function () {
        return {
          text: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.transform,
              i = void 0 === n ? pd : n,
              r = e.title,
              o = void 0 === r ? null : r,
              a = e.classes,
              s = void 0 === a ? [] : a,
              l = e.attributes,
              c = void 0 === l ? {} : l,
              d = e.styles,
              u = void 0 === d ? {} : d;
            return xu({ type: "text", content: t }, function () {
              return (
                fu("beforeDOMElementCreation", { content: t, params: e }),
                _u({
                  content: t,
                  transform: oc(oc({}, pd), i),
                  title: o,
                  extra: {
                    attributes: c,
                    styles: u,
                    classes: ["".concat(ud.cssPrefix, "-layers-text")].concat(
                      dc(s)
                    ),
                  },
                })
              );
            });
          },
        };
      },
      provides: function (t) {
        t.generateLayersText = function (t, e) {
          var n = e.title,
            i = e.transform,
            r = e.extra,
            o = null,
            a = null;
          if (Pc) {
            var s = parseInt(getComputedStyle(t).fontSize, 10),
              l = t.getBoundingClientRect();
            (o = l.width / s), (a = l.height / s);
          }
          return (
            ud.autoA11y && !n && (r.attributes["aria-hidden"] = "true"),
            Promise.resolve([
              t,
              _u({
                content: t.innerHTML,
                width: o,
                height: a,
                transform: i,
                title: n,
                extra: r,
                watchable: !0,
              }),
            ])
          );
        };
      },
    },
    rh = new RegExp('"', "ug"),
    oh = [1105920, 1112319];
  function ah(t, e) {
    var n = "".concat(Ic).concat(e.replace(":", "-"));
    return new Promise(function (i, r) {
      if (null !== t.getAttribute(n)) return i();
      var o,
        a,
        s,
        l = vd(t.children).filter(function (t) {
          return t.getAttribute(zc) === e;
        })[0],
        c = Cc.getComputedStyle(t, e),
        d = c.getPropertyValue("font-family").match(td),
        u = c.getPropertyValue("font-weight"),
        h = c.getPropertyValue("content");
      if (l && !d) return t.removeChild(l), i();
      if (d && "none" !== h && "" !== h) {
        var f = c.getPropertyValue("content"),
          p = ~["Sharp"].indexOf(d[2]) ? Zc : Vc,
          m = ~[
            "Solid",
            "Regular",
            "Light",
            "Thin",
            "Duotone",
            "Brands",
            "Kit",
          ].indexOf(d[2])
            ? $c[p][d[2].toLowerCase()]
            : ed[p][u],
          g = (function (t) {
            var e,
              n,
              i,
              r,
              o,
              a = t.replace(rh, ""),
              s =
                ((n = 0),
                (r = (e = a).length),
                (o = e.charCodeAt(n)) >= 55296 &&
                o <= 56319 &&
                r > n + 1 &&
                (i = e.charCodeAt(n + 1)) >= 56320 &&
                i <= 57343
                  ? 1024 * (o - 55296) + i - 56320 + 65536
                  : o),
              l = s >= oh[0] && s <= oh[1],
              c = 2 === a.length && a[0] === a[1];
            return { value: Dd(c ? a[0] : a), isSecondary: l || c };
          })(f),
          v = g.value,
          b = g.isSecondary,
          y = d[0].startsWith("FontAwesome"),
          w = Qd(m, v),
          x = w;
        if (y) {
          var k =
            ((a = qd[(o = v)]),
            (s = Qd("fas", o)),
            a ||
              (s ? { prefix: "fas", iconName: s } : null) || {
                prefix: null,
                iconName: null,
              });
          k.iconName && k.prefix && ((w = k.iconName), (m = k.prefix));
        }
        if (
          !w ||
          b ||
          (l && l.getAttribute(Bc) === m && l.getAttribute(Fc) === x)
        )
          i();
        else {
          t.setAttribute(n, x), l && t.removeChild(l);
          var _ = {
              iconName: null,
              title: null,
              titleId: null,
              prefix: null,
              transform: pd,
              symbol: !1,
              mask: { iconName: null, prefix: null, rest: [] },
              maskId: null,
              extra: { classes: [], styles: {}, attributes: {} },
            },
            T = _.extra;
          (T.attributes[zc] = e),
            Su(w, m)
              .then(function (r) {
                var o = ku(
                    oc(
                      oc({}, _),
                      {},
                      {
                        icons: { main: r, mask: iu() },
                        prefix: m,
                        iconName: x,
                        extra: T,
                        watchable: !0,
                      }
                    )
                  ),
                  a = Ec.createElement("svg");
                "::before" === e
                  ? t.insertBefore(a, t.firstChild)
                  : t.appendChild(a),
                  (a.outerHTML = o
                    .map(function (t) {
                      return Ad(t);
                    })
                    .join("\n")),
                  t.removeAttribute(n),
                  i();
              })
              .catch(r);
        }
      } else i();
    });
  }
  function sh(t) {
    return Promise.all([ah(t, "::before"), ah(t, "::after")]);
  }
  function lh(t) {
    return !(
      t.parentNode === document.head ||
      ~Hc.indexOf(t.tagName.toUpperCase()) ||
      t.getAttribute(zc) ||
      (t.parentNode && "svg" === t.parentNode.tagName)
    );
  }
  function ch(t) {
    if (Oc)
      return new Promise(function (e, n) {
        var i = vd(t.querySelectorAll("*")).filter(lh).map(sh),
          r = Ru.begin("searchPseudoElements");
        Hu(),
          Promise.all(i)
            .then(function () {
              r(), Yu(), e();
            })
            .catch(function () {
              r(), Yu(), n();
            });
      });
  }
  var dh = !1,
    uh = function (t) {
      return t
        .toLowerCase()
        .split(" ")
        .reduce(
          function (t, e) {
            var n = e.toLowerCase().split("-"),
              i = n[0],
              r = n.slice(1).join("-");
            if (i && "h" === r) return (t.flipX = !0), t;
            if (i && "v" === r) return (t.flipY = !0), t;
            if (((r = parseFloat(r)), isNaN(r))) return t;
            switch (i) {
              case "grow":
                t.size = t.size + r;
                break;
              case "shrink":
                t.size = t.size - r;
                break;
              case "left":
                t.x = t.x - r;
                break;
              case "right":
                t.x = t.x + r;
                break;
              case "up":
                t.y = t.y - r;
                break;
              case "down":
                t.y = t.y + r;
                break;
              case "rotate":
                t.rotate = t.rotate + r;
            }
            return t;
          },
          { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
        );
    },
    hh = {
      mixout: function () {
        return {
          parse: {
            transform: function (t) {
              return uh(t);
            },
          },
        };
      },
      hooks: function () {
        return {
          parseNodeAttributes: function (t, e) {
            var n = e.getAttribute("data-fa-transform");
            return n && (t.transform = uh(n)), t;
          },
        };
      },
      provides: function (t) {
        t.generateAbstractTransformGrouping = function (t) {
          var e = t.main,
            n = t.transform,
            i = t.containerWidth,
            r = t.iconWidth,
            o = { transform: "translate(".concat(i / 2, " 256)") },
            a = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
            s = "scale("
              .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
              .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
            l = "rotate(".concat(n.rotate, " 0 0)"),
            c = {
              outer: o,
              inner: { transform: "".concat(a, " ").concat(s, " ").concat(l) },
              path: { transform: "translate(".concat((r / 2) * -1, " -256)") },
            };
          return {
            tag: "g",
            attributes: oc({}, c.outer),
            children: [
              {
                tag: "g",
                attributes: oc({}, c.inner),
                children: [
                  {
                    tag: e.icon.tag,
                    children: e.icon.children,
                    attributes: oc(oc({}, e.icon.attributes), c.path),
                  },
                ],
              },
            ],
          };
        };
      },
    },
    fh = { x: 0, y: 0, width: "100%", height: "100%" };
  function ph(t) {
    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return (
      t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"),
      t
    );
  }
  var mh = {
      hooks: function () {
        return {
          parseNodeAttributes: function (t, e) {
            var n = e.getAttribute("data-fa-mask"),
              i = n
                ? au(
                    n.split(" ").map(function (t) {
                      return t.trim();
                    })
                  )
                : iu();
            return (
              i.prefix || (i.prefix = nu()),
              (t.mask = i),
              (t.maskId = e.getAttribute("data-fa-mask-id")),
              t
            );
          },
        };
      },
      provides: function (t) {
        t.generateAbstractMask = function (t) {
          var e,
            n = t.children,
            i = t.attributes,
            r = t.main,
            o = t.mask,
            a = t.maskId,
            s = t.transform,
            l = r.width,
            c = r.icon,
            d = o.width,
            u = o.icon,
            h = (function (t) {
              var e = t.transform,
                n = t.containerWidth,
                i = t.iconWidth,
                r = { transform: "translate(".concat(n / 2, " 256)") },
                o = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
                a = "scale("
                  .concat((e.size / 16) * (e.flipX ? -1 : 1), ", ")
                  .concat((e.size / 16) * (e.flipY ? -1 : 1), ") "),
                s = "rotate(".concat(e.rotate, " 0 0)");
              return {
                outer: r,
                inner: {
                  transform: "".concat(o, " ").concat(a, " ").concat(s),
                },
                path: {
                  transform: "translate(".concat((i / 2) * -1, " -256)"),
                },
              };
            })({ transform: s, containerWidth: d, iconWidth: l }),
            f = {
              tag: "rect",
              attributes: oc(oc({}, fh), {}, { fill: "white" }),
            },
            p = c.children ? { children: c.children.map(ph) } : {},
            m = {
              tag: "g",
              attributes: oc({}, h.inner),
              children: [
                ph(
                  oc(
                    {
                      tag: c.tag,
                      attributes: oc(oc({}, c.attributes), h.path),
                    },
                    p
                  )
                ),
              ],
            },
            g = { tag: "g", attributes: oc({}, h.outer), children: [m] },
            v = "mask-".concat(a || gd()),
            b = "clip-".concat(a || gd()),
            y = {
              tag: "mask",
              attributes: oc(
                oc({}, fh),
                {},
                {
                  id: v,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse",
                }
              ),
              children: [f, g],
            },
            w = {
              tag: "defs",
              children: [
                {
                  tag: "clipPath",
                  attributes: { id: b },
                  children: ((e = u), "g" === e.tag ? e.children : [e]),
                },
                y,
              ],
            };
          return (
            n.push(w, {
              tag: "rect",
              attributes: oc(
                {
                  fill: "currentColor",
                  "clip-path": "url(#".concat(b, ")"),
                  mask: "url(#".concat(v, ")"),
                },
                fh
              ),
            }),
            { children: n, attributes: i }
          );
        };
      },
    },
    gh = {
      provides: function (t) {
        var e = !1;
        Cc.matchMedia &&
          (e = Cc.matchMedia("(prefers-reduced-motion: reduce)").matches),
          (t.missingIconAbstract = function () {
            var t = [],
              n = { fill: "currentColor" },
              i = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s",
              };
            t.push({
              tag: "path",
              attributes: oc(
                oc({}, n),
                {},
                {
                  d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                }
              ),
            });
            var r = oc(oc({}, i), {}, { attributeName: "opacity" }),
              o = {
                tag: "circle",
                attributes: oc(
                  oc({}, n),
                  {},
                  { cx: "256", cy: "364", r: "28" }
                ),
                children: [],
              };
            return (
              e ||
                o.children.push(
                  {
                    tag: "animate",
                    attributes: oc(
                      oc({}, i),
                      {},
                      { attributeName: "r", values: "28;14;28;28;14;28;" }
                    ),
                  },
                  {
                    tag: "animate",
                    attributes: oc(oc({}, r), {}, { values: "1;0;1;1;0;1;" }),
                  }
                ),
              t.push(o),
              t.push({
                tag: "path",
                attributes: oc(
                  oc({}, n),
                  {},
                  {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                  }
                ),
                children: e
                  ? []
                  : [
                      {
                        tag: "animate",
                        attributes: oc(
                          oc({}, r),
                          {},
                          { values: "1;0;0;0;0;1;" }
                        ),
                      },
                    ],
              }),
              e ||
                t.push({
                  tag: "path",
                  attributes: oc(
                    oc({}, n),
                    {},
                    {
                      opacity: "0",
                      d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                    }
                  ),
                  children: [
                    {
                      tag: "animate",
                      attributes: oc(oc({}, r), {}, { values: "0;0;1;1;0;0;" }),
                    },
                  ],
                }),
              { tag: "g", attributes: { class: "missing" }, children: t }
            );
          });
      },
    };
  !(function (t, e) {
    var n = e.mixoutsTo;
    (lu = t),
      (cu = {}),
      Object.keys(du).forEach(function (t) {
        -1 === uu.indexOf(t) && delete du[t];
      }),
      lu.forEach(function (t) {
        var e = t.mixout ? t.mixout() : {};
        if (
          (Object.keys(e).forEach(function (t) {
            "function" == typeof e[t] && (n[t] = e[t]),
              "object" === ac(e[t]) &&
                Object.keys(e[t]).forEach(function (i) {
                  n[t] || (n[t] = {}), (n[t][i] = e[t][i]);
                });
          }),
          t.hooks)
        ) {
          var i = t.hooks();
          Object.keys(i).forEach(function (t) {
            cu[t] || (cu[t] = []), cu[t].push(i[t]);
          });
        }
        t.provides && t.provides(du);
      });
  })(
    [
      Ed,
      th,
      eh,
      nh,
      ih,
      {
        hooks: function () {
          return {
            mutationObserverCallbacks: function (t) {
              return (t.pseudoElementsCallback = ch), t;
            },
          };
        },
        provides: function (t) {
          t.pseudoElements2svg = function (t) {
            var e = t.node,
              n = void 0 === e ? Ec : e;
            ud.searchPseudoElements && ch(n);
          };
        },
      },
      {
        mixout: function () {
          return {
            dom: {
              unwatch: function () {
                Hu(), (dh = !0);
              },
            },
          };
        },
        hooks: function () {
          return {
            bootstrap: function () {
              Zu(hu("mutationObserverCallbacks", {}));
            },
            noAuto: function () {
              Vu && Vu.disconnect();
            },
            watch: function (t) {
              var e = t.observeMutationsRoot;
              dh
                ? Yu()
                : Zu(
                    hu("mutationObserverCallbacks", { observeMutationsRoot: e })
                  );
            },
          };
        },
      },
      hh,
      mh,
      gh,
      {
        hooks: function () {
          return {
            parseNodeAttributes: function (t, e) {
              var n = e.getAttribute("data-fa-symbol"),
                i = null !== n && ("" === n || n);
              return (t.symbol = i), t;
            },
          };
        },
      },
    ],
    { mixoutsTo: yu }
  );
  yu.noAuto, yu.config;
  var vh = yu.library,
    bh = yu.dom,
    yh =
      (yu.parse,
      yu.findIconDefinition,
      yu.toHtml,
      yu.icon,
      yu.layer,
      yu.text,
      yu.counter,
      {
        prefix: "fas",
        iconName: "forward-step",
        icon: [
          320,
          512,
          ["step-forward"],
          "f051",
          "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z",
        ],
      }),
    wh = yh,
    xh = {
      prefix: "fas",
      iconName: "crop",
      icon: [
        512,
        512,
        [],
        "f125",
        "M448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64 160 64v64l178.7 0L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H173.3L384 173.3 384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-274.7z",
      ],
    },
    kh = {
      prefix: "fas",
      iconName: "pause",
      icon: [
        320,
        512,
        [9208],
        "f04c",
        "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z",
      ],
    },
    _h = {
      prefix: "fas",
      iconName: "question",
      icon: [
        320,
        512,
        [10067, 10068, 61736],
        "3f",
        "M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
      ],
    },
    Th = {
      prefix: "fas",
      iconName: "volume-high",
      icon: [
        640,
        512,
        [128266, "volume-up"],
        "f028",
        "M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z",
      ],
    },
    Ch = Th,
    Eh = {
      prefix: "fas",
      iconName: "floppy-disk",
      icon: [
        448,
        512,
        [128190, 128426, "save"],
        "f0c7",
        "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z",
      ],
    },
    Sh = Eh,
    Mh = {
      prefix: "fas",
      iconName: "backward-step",
      icon: [
        320,
        512,
        ["step-backward"],
        "f048",
        "M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z",
      ],
    },
    Oh = Mh,
    Ph = {
      prefix: "fas",
      iconName: "sun",
      icon: [
        512,
        512,
        [9728],
        "f185",
        "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",
      ],
    },
    Ah = {
      prefix: "fas",
      iconName: "play",
      icon: [
        384,
        512,
        [9654],
        "f04b",
        "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z",
      ],
    },
    Rh = {
      prefix: "fas",
      iconName: "volume-xmark",
      icon: [
        576,
        512,
        ["volume-mute", "volume-times"],
        "f6a9",
        "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
      ],
    },
    Lh = Rh,
    Dh = {
      prefix: "fas",
      iconName: "xmark",
      icon: [
        384,
        512,
        [
          128473,
          10005,
          10006,
          10060,
          215,
          "close",
          "multiply",
          "remove",
          "times",
        ],
        "f00d",
        "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
      ],
    },
    Nh = Dh,
    zh = {
      prefix: "fas",
      iconName: "moon",
      icon: [
        384,
        512,
        [127769, 9214],
        "f186",
        "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
      ],
    },
    Ih = {
      prefix: "fas",
      iconName: "check",
      icon: [
        448,
        512,
        [10003, 10004],
        "f00c",
        "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",
      ],
    };
  vh.add(Ah, kh, Ih, Oh, wh, Ch, Lh, Ph, zh, xh, Sh, Nh, _h), bh.watch();
  const Bh = vh;
  var Fh = n(377),
    jh = {};
  (jh.styleTagTransform = x()),
    (jh.setAttributes = v()),
    (jh.insert = m().bind(null, "head")),
    (jh.domAPI = f()),
    (jh.insertStyleElement = y());
  u()(Fh.Z, jh);
  Fh.Z && Fh.Z.locals && Fh.Z.locals;
  var Xh = n(464),
    Hh = {};
  (Hh.styleTagTransform = x()),
    (Hh.setAttributes = v()),
    (Hh.insert = m().bind(null, "head")),
    (Hh.domAPI = f()),
    (Hh.insertStyleElement = y());
  u()(Xh.Z, Hh);
  Xh.Z && Xh.Z.locals && Xh.Z.locals;
  const Yh = class {
    constructor({
      src: t,
      crop: e,
      transformations: n,
      maxHeight: i,
      limit: r,
      menuBarButtons: o = {
        inlineStartButtons: {},
        inlineEndButtons: {},
        disable: [],
      },
      onError: a,
      onReady: s,
      onRangeUpdate: l,
      onRangeLimit: c,
      onMarkerDragStart: d,
      onMarkerDragEnd: u,
      onClickHelpButton: h,
      onTimelineClick: f,
      onSave: p,
      debug: m = !1,
    }) {
      ve.setContext(this),
        (this.src = t),
        (this.mimeType = ""),
        (this.crop = e),
        (this.transformations = n),
        (this.video = null),
        (this.videoEditorContainer = this.createVideoEditorContainer()),
        (this.limit = r),
        (this.debug = m),
        (this.onError = a),
        (this.onReady = s),
        (this.onTimelineClick = f),
        (this.onClickHelpButton = h),
        (this.onSave = p),
        (this.onRangeUpdate = l),
        (this.onRangeLimit = c),
        (this.onMarkerDragStart = d),
        (this.onMarkerDragEnd = u),
        (this.loader = new Il({ message: "Loading video" })),
        (this.viewer = new he({
          src: t,
          maxHeight: i,
          loader: this.loader,
          onLoad: this.handleVideoLoad.bind(this),
          onLoadMetaData: this.handleLoadMetaData.bind(this),
          onViewerResize: this.handleViewerResize.bind(this),
        })),
        (this.timeline = new Xl({
          onReady: this.handleTimelineReady.bind(this),
        })),
        (this.menuBar = new T({
          customButtons: o,
          onToggleDarkMode: this.handleToggleDarkMode.bind(this),
          onClickHelpButton: this.handleClickHelpButton.bind(this),
          onToggleCrop: this.handleToggleCrop.bind(this),
          onClickSaveButton: this.handleSaveButtonClick.bind(this),
          onToggleMute: this.handleToggleMute.bind(this),
          library: Bh,
        }));
    }
    handleToggleCrop(t, e) {
      const { currentTarget: n } = t || {
        currentTarget: document.querySelector(".crop-button"),
      };
      this.timeline.handleToggleCropper(e);
      const i = n.parentElement,
        r = i.querySelector("span"),
        o = i.querySelector("i") ?? i.querySelector("svg");
      e
        ? ((r.innerText = "Done"),
          o.classList.add("fa-check"),
          o.classList.remove("fa-crop"),
          this.timeline.controls.disableControlButtons(),
          this.timeline.disable())
        : ((r.innerText = "Crop"),
          o.classList.remove("fa-check"),
          o.classList.add("fa-crop"),
          this.timeline.controls.enableControlButtons(),
          this.timeline.enable());
    }
    handleToggleMute(t, e) {
      const { currentTarget: n } = t || {
          currentTarget: document.querySelector(".mute-button"),
        },
        i = n.parentElement,
        r = i.querySelector("span"),
        o = i.querySelector("i") ?? i.querySelector("svg");
      e
        ? ((this.video.volume = 0),
          (r.innerText = "Unmute"),
          o.classList.remove("fa-volume-up"),
          o.classList.add("fa-volume-mute"),
          (this.video.muted = !0))
        : ((this.video.volume = 1),
          (r.innerText = "Mute"),
          o.classList.remove("fa-volume-mute"),
          o.classList.add("fa-volume-up"),
          (this.video.muted = !1));
    }
    handleToggleDarkMode(t, e) {
      const { currentTarget: n } = t,
        i = n.parentElement.querySelector("span"),
        r = n.parentElement.querySelector("svg"),
        o = this.videoEditorContainer.closest(".video-editor-wrapper");
      o.classList.contains("darkmode")
        ? (o.classList.remove("darkmode"),
          (i.textContent = "Dark"),
          r.classList.remove("fa-sun"),
          r.classList.add("fa-moon"))
        : (o.classList.add("darkmode"),
          (i.textContent = "Light"),
          r.classList.remove("fa-moon"),
          r.classList.add("fa-sun"));
    }
    handleViewerResize() {
      this.timeline.cropper &&
        (this.timeline.toggleCropperOff(),
        (this.timeline.transformations = this.timeline.getTransformations()),
        this.timeline.cropper.destroy(),
        (this.timeline.cropper = null));
    }
    handleClickHelpButton(t) {
      this.onClickHelpButton instanceof Function
        ? this.onClickHelpButton(t)
        : this.instructions.begin();
    }
    handleTimelineReady() {
      this.show(), this.onReady instanceof Function && this.onReady();
    }
    handleVideoLoad() {
      const { video: t } = this.viewer;
      (this.video = t),
        this.timeline.init(t),
        this.timeline.render(this.videoEditorContainer);
    }
    handleLoadMetaData() {
      this.crop && this.appendCropOverlay();
    }
    show() {
      (this.videoEditorContainer.style.opacity = 1), this.loader.hide();
    }
    handleSaveButtonClick(t) {
      this.onSave instanceof Function && this.onSave(...this.save());
    }
    save() {
      return [this.timeline.getTransformations(), this.viewer.getSrc()];
    }
    createWrapper() {
      return r("div", { properties: { className: "video-editor-wrapper" } });
    }
    createVideoEditorContainer() {
      return r("div", {
        properties: { className: "video-editor-container" },
        style: { opacity: 0 },
      });
    }
    createVideoFlexboxContainer() {
      return r("div", { properties: { className: "video-flexbox-container" } });
    }
    async createVideoEditor() {
      this.loader.updateMessage("Loading video"),
        this.menuBar.render(this.videoEditorContainer);
      const t = this.createVideoFlexboxContainer();
      return (
        await this.viewer.render(t),
        this.videoEditorContainer.append(t),
        this.loader.updateMessage("Initializing video editor"),
        this.videoEditorContainer
      );
    }
    appendCropOverlay() {
      const t = this.video.closest(".video-container"),
        e = { width: this.video.videoWidth, height: this.video.videoHeight },
        n = ic(this.crop, e);
      t.append(n);
    }
    async render(t) {
      const e = this.createWrapper();
      (this.instructions = new Jl({ container: t })),
        this.instructions.render(t),
        this.loader.render(e),
        t.append(e);
      const n = await this.createVideoEditor();
      e.append(n);
    }
  };
})();
var r = i.Z;
export { r as default };
