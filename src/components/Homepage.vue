<template>
    <div class="app-container">
        <Header />
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      
     
   
  
    </main>
    <Footer />
    <router-view/>
  </div>
  </template>
  
  <script setup>
  
  import Header from './Header.vue';
  import Section1 from './Section1_homepage.vue';
  import Section2 from './Section2_homepage.vue';
  import Section3 from './Section3_homepage.vue';
  import Section4 from './Section4_homepage.vue';
  import Section5 from './Section5_homepage.vue';
  import Section6 from './Section6_homepage.vue';

  import Footer from './Footer.vue';
  
  
  </script>
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Viaoda+Libre&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
  
  </style>