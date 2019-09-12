<template>
  <div class="container">
    <!-- TODO: -->
    <!-- display message if user has phone held vertically -->
    <h1>Keyboard in development</h1>

    <div class="outer-container">
      <div class="inner-container">
        <div class="buttons-container flex">
          <!-- TODO: add button components  -->
          <div class="button-container flex">
              <tone v-for="button in buttons" v-bind:key="button.id" :name="button"/>
          </div>
          <div class="button-container flex">
              <tone v-for="s in secondary" v-bind:key="s.id" :name="s"/>
          </div>
          <div class="button-container flex">
              <tone v-for="oct in octaves" v-bind:key="oct.id" :name="oct"/>
               <knob v-for="knob in knobs" v-bind:key="knob.id" />
          </div>
        </div>
        <ul class="key-container key">
          <key v-for="key in keys" v-bind:key="key.id" :name="key"/>
          
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import Key from "@/components/Keys.vue";
import Knob from "@/components/Knob.vue";
import Tone from "@/components/Tones.vue";

export default {
  name: "Keyboard",
  components: {
    Key,
    Knob,
    Tone
  },
  data() {
    return {
      keys: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
      buttons:["Synth","AmSynth","DuoSynth","FmSynth"],
      secondary:["AutoWah","Phaser",],
      octaves:["Octave -","Octave +"],
      knobs:[1,2,3]
    };
  }
};
</script>
