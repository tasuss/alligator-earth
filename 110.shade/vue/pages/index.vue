<script setup lang="ts" generic="T extends any, O extends any">

import { inject } from 'vue'
import { getCurrentInstance } from 'vue'


const instance = getCurrentInstance();
const SPACE = inject('SPACE') as any
const SHADE = inject('SHADE') as any


onMounted(async () => {

  console.log("mount up ")

  bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } })
  instance?.proxy?.$forceUpdate();
})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } })

  bit = await SHADE.hunt(SHADE.ActVsg.READ_VISAGE, { idx: "vsg00" })

  bit = await SHADE.hunt(SHADE.ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  bit = await SHADE.hunt(SHADE.ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });
  
  bit = await SHADE.hunt(SHADE.ActShd.TEST_SHADE, {});
  
})

onUnmounted(async () => {


  console.log("unmounted..")
  bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

})

defineOptions({
  name: 'IndexPage',
})


</script>

<template>
  <div>

    <canvas id="indexCanvas"></canvas>

  </div>
</template>
