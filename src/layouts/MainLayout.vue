<template>
  <div class="flex flex-col min-w-screen min-h-screen px-10 py-5">
    <div class="flex flex-col min-w-full min-h-full grow p-10 shadow-2xl rounded-2xl bg-gray-800 ">
      <div class="flex flex-col min-h-full grow">
        <slot />
      </div>
    </div>
  </div>
</template>
