# Fachwerk VueJS and Markdown framework for creating interactive learning
materials https://fachwerk.dev ## Get started ``` npm init fachwerk ``` ##
Development ### Installation ``` npm install npm run dev ``` ### Testing Run in
parallel with the development ``` npm run test ``` Run in CI ``` npm run test --
--run ``` ### Typecheck ``` npm run typecheck ``` ### Building and preview ```
npm run build npm run preview ``` ### Release ``` npm run release ``` ## Licence
MIT
<template>
  <header
    class="bg-gray-800 text-gray-200 hover:text-gray-100 p-5 font-medium flex justify-between"
  >
    <ul>
      <li><router-link to="/">Fachwerk</router-link></li>
    </ul>
    <ul>
      <li>
        <a href="https://github.com/fachwerk-dev/fachwerk" target="_blank">
          Github
        </a>
      </li>
    </ul>
  </header>
</template>
