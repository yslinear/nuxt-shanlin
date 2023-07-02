<template>
  <div class="layout">
    <Header />
    <div style="min-height: 95vh;" class="container mx-auto w-full max-w-screen-md p-4 py-6">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
