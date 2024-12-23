<template>
  <div class="flex flex-col md:flex-row w-full justify-center items-center gap-8 sm:gap-32 md:gap-16">
    <div class="flex max-w-[500px] flex-1 flex-col gap-8">
      <p class="flex text-sm uppercase dark:text-gray-300 text-gray-800">
        ✨
        A Software for high growth startups
      </p>

      <div class="flex max-w-[400px] flex-col gap-4">
        <h1 class="text-4xl leading-[3rem] tracking-wide lg:text-5xl font-bold lg:leading-[4rem] lg:-tracking-wider dark:text-white text-black sm:text-5xl sm:leading-snug">
          We make you look
          <span class="my-1 inline-block border-b-8 dark:border-green-500 border-green-400 bg-green-200 px-4 font-bold text-black rounded-lg">different</span>
        </h1>
        <p class="text-lg lg:text-base">
          Node.js® is a free, open-source, cross-platform JavaScript runtime environment
          that lets developers create servers, web apps, command line tools and scripts.
        </p>
      </div>

      <div class="flex flex-col max-w-[400px] gap-4">
        <div class="w-full flex flex-col lg:flex-row gap-4 justify-center">
          <a
            href="/"
            class="py-2 w-full flex items-center justify-center rounded px-6 font-medium tracking-wide text-white dark:border dark:border-green-800/60 dark:bg-green-600/20 bg-green-700/80 hover:bg-green-800/80 hover:dark:bg-green-800/50 hover:dark:text-green-300 transition-colors whitespace-nowrap"
          >Download Now</a>
          <a
            href="/"
            class="py-2 w-full lg:w-auto flex items-center justify-center rounded px-6 font-medium tracking-wide text-white dark:border dark:border-green-800/60 dark:bg-green-600/20 bg-green-700/80 hover:bg-green-800/80 hover:dark:bg-green-800/50 hover:dark:text-green-300 transition-colors whitespace-nowrap"
          >Watch how it works</a>
        </div>
        <small class="text-center text-sm">Want new features sooner? Get <b class="text-lime-600">Your software <a href="#">v0.1</a></b><sup title="Downloads a Node.js installer for your current platform">1</sup> instead.</small>
      </div>
    </div>

    <div class="flex max-w-full w-full lg:max-w-[48rem] min-w-0 flex-1 flex-col items-center gap-4">
      <div class="bg-gray-900 dark:bg-gray-900/80 h-[400px] rounded-lg border-gray-800 border w-full" />
      <p class="text-center text-sm">
        Write some <span class="font-bold text-green-400">fancy text</span> here!
      </p>
    </div>
  </div>
</template>
