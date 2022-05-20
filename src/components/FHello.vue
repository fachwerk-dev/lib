<template>
  <h1>▦ Hello Fachwerk</h1>
  <p>It works! <em>Wunderbar!</em> Now, here are some code snippets for you to to copy and try out:</p>
  <details><summary><b>Use global data</b></summary>
  <p>Fachwerk exports a globally available <code>data</code> object, a group of variables that are accessible everywhere. Here is how to set and get the variable <code>data.something</code>:</p>
  <p class="language-">
    <pre v-pre><code>&lt;f-slider v-model="data.something" /> {{ data.something }}</code></pre>
  </p>
  </details>
  <details><summary><b>Use components</b></summary>
  <p>Let's assign the value <code>data.r</code> to something visual, say a <em>radius</em> of the circle:</p>
  <p class="language-">
    <pre v-pre><code>&lt;f-svg centered>
  &lt;circle :r="data.something" />
&lt;/f-svg></code></pre>
  </p>
  </details>
  <details><summary><b>Use functions</b></summary>
  <p>What can be more visual that circle with user-controllabe radius? A <em>coloured</em> circle with user-controllabe radius. Here we use a `hsl()` function that provides a convenient way to create and format CSS colors:</p>
  <p class="language-">
    <pre v-pre><code>&lt;f-svg centered>
  &lt;circle :r="data.something" :fill="hsl(data.something)" />
&lt;/f-svg></code></pre></p>
  </details>
  <p />
  <p>Read more at Fachwerk <a href="https://fachwerk.dev/" target="_black"> documentation</a>.</p>
</template>
