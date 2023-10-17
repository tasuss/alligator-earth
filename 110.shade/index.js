console.log("shade 110 index js")
var bit, idx, jsx, dat;

var loadOnce = false;

var script = document.createElement('script');
script.onload = async () => {

  if (loadOnce == false) {
    loadOnce = true
    console.log("mqtt--- " + MQTT)

    var prt = 1012
    var local = 'ws://gatorsocket.herokuapp.com/';

    bit = await SHADE.hunt(SHADE.ActShd.INIT_SHADE, { dat: MQTT, src: local });

    window.addEventListener('resize', async () => {
      bit = await SHADE.hunt(SHADE.ActVsg.DIMENSION_VISAGE, {})
    }
    )

  }
};

setTimeout(() => {

  script.src = "./jsx/mqtt.js";
  document.head.appendChild(script)

}, 333)


