<template >
    <section >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 pt-20 text-center lg:pt-12 gap-4 flex max-md:pb-8 pb-24 ">
          <div class="w-2/3 max-md:w-full">
          <h1 class="lg:text-7xl max-md:text-center md:text-5xl max-sm:text-5xl font-viaoda-libre font-normal text-88 leading-126 uppercase tracking-tight text-gray-900 max-md:text-6xl md:ml-12 text-left">
            <span class="block">TẠO THIỆP MỜI</span>
            <span class="block">ONLINE HIỆN ĐẠI</span>
            <span class="flex items-center max-md:justify-center">TIỆN LỢI 
  
          <img class="inline-block ml-4 h-14 w-24 max-md:hidden " src="../assets/0.1.jpg" alt="" />
  
          </span>
        </h1>
            <p class=" mt-6 max-w-2xl max-md:text-center px-4 text-lg sm:px-14 lg:px-14 tracking-tight text-slate-700 text-left ">
              <span class="typed-text decoration-1"></span><span class="cursor">&nbsp;</span>
             </p>
            <div class="mt-10 flex justify-start gap-x-6 ml-14 max-md:ml-0 max-md:justify-center">
              <a type="submit" class="flex-none rounded-md  bg-indigo-500 px-9 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 first-letter
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer
              ">Tạo thiệp mời</a>
            </div>
            <div class="mt-36 lg:mt-44">
              
            </div>
          </div>
  
          <div class="w-1/3 max-md:hidden	 text-center md:text-right relative mt-12">
          <div class="boder-image  md:mr-24 inline-block">
            <span class="image-section-1 z-10">
  
              <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" 
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27354%27%20height=%27490%27/%3e">
              </span>
              <img alt="card" src="https://stg.vesey.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.ba4c380b.jpg&w=384&q=75" 
              decoding="async" data-nimg="intrinsic" class="img" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" 
              srcset="https://stg.vesey.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.ba4c380b.jpg&w=384&q=75 1x, https://stg.vesey.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.ba4c380b.jpg&w=384&q=75 2x">
                  
              </span>
                     <img class="absolute position-icon pb-4 z-50" src="../assets/1.svg" alt=""/> 
  
          </div>
        </div>
  </div>
      </section>
</template>
<script>
export default {
  mounted() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = [ " Tùy ý tạo và chỉnh sửa thiệp mời dạng landing page một cách dễ dàng, nhanh chóng theo cách riêng của bạn."];
    const typingDelay = 50;
    const erasingDelay = 50;
    const newTextDelay = 500;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(
          charIndex
        );
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
  },
};
</script>
<style lang="scss">
    
</style>