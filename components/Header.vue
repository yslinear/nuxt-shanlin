<template>
  <nav class="bg-slate-200">
    <div class="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
        <img src="https://www.shanlin.co/templates/g5_helium/custom/images/logo-no-background.png" class="h-8 mr-3"
          alt="ShanLin Logo" />
      </a>
      <div>
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.href" class="block py-2 pl-3 pr-4 md:p-0 text-slate-800">
              <Icon :name="`${$route.path.includes(link.href) ? `${link.icon}-fill` : link.icon}`" class="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'articles', href: '/articles', icon: 'ph:article' },
        { text: 'photos', href: '/photos', icon: 'ph:image-square' }
      ]
    };
  }
};
</script>
