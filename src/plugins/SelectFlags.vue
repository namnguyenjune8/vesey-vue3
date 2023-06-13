<template>
  <div class="flag max-lg:mt-3">
    <div class="selected-flag" @click="toggleFlagList">
      <img :src="getFlagImage(selectedLanguage)" :alt="selectedLanguage" class="flag-icon" />
    </div>
    <div class="flag-list z-50 max-lg:mt-4" v-show="showFlagList" :class="{ 'hidden': !showFlagList }">
      <ul class="language-list border border-gray-200 shadow-lg bg-white flex flex-col 
      justify-center items-center animate__animated max-lg:ml-24 max-lg:flex-row "  :class="{ 'animate__fadeIn': showFlagList, 'animate__fadeOut': !showFlagList }">
        <li class="language-flag" v-for="language in supportedLanguages" :key="language" @click="selectLanguage(language)" :class="{ 'selected': language === selectedLanguage }">
          <img :src="getFlagImage(language)" :alt="language" class="flag-icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import enFlag from '../assets/en.jpg';
import vnFlag from '../assets/vn.png';
import frFlag from '../assets/fr.png';

export default {
  data() {
    return {
      selectedLanguage: 'en',
      supportedLanguages: ['en', 'vn', 'fr'],
      flagImages: {
        en: enFlag,
        vn: vnFlag,
        fr: frFlag,
      },
      showFlagList: false,
    };
  },
  methods: {
    toggleFlagList() {
      this.showFlagList = !this.showFlagList;
    },
    selectLanguage(language) {
      this.selectedLanguage = language;
      this.$i18n.locale = language;
      localStorage.setItem('language', language);
      this.showFlagList = false;
    },
    getFlagImage(language) {
      return this.flagImages[language];
    },
  },
  mounted() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
      this.selectedLanguage = savedLanguage;
      this.$i18n.locale = savedLanguage;
    }
  },
};
</script>

<style>
.flag {
  position: absolute;
  width: 2rem;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flag-icon {
  width: 40px; /* Thay đổi kích thước ảnh cờ */
  height: 25px; /* Thay đổi kích thước ảnh cờ */
  margin-top: 5px;
}

.language-list {
  list-style: none;
  gap: 0.3rem;
}

.language-list li {
  display: inline-block;
  cursor: pointer;
  padding-bottom: 38px;
  padding-left: 2px;
  padding-right: 2px;
}

.selected-flag {
  cursor: pointer;
}

.flag-list {
  display: inline-block;
  margin-top: 6rem;
}

.language-flag {
  width: 40px; /* Thay đổi kích thước ảnh cờ */
  height: 25px; /* Thay đổi kích thước ảnh cờ */
}

.animate__fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

.animate__fadeOut {
  animation: fadeOut 0.3s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.selected {
  background-color: #ccc;
}
</style>