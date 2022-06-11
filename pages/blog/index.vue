<script setup>
import { convertDate } from "../../utils";

const { query } = useRoute();
const { author } = query;

const qc = await queryContent("blog")
  .where({ author })
  .sort({ _file: -1, $numeric: true })
  .find();
</script>

<template>
  <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="mx-auto max-w-lg lg:max-w-7xl">
      <div class="border-b border-b-gray-200 pb-6">
        <h2
          class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
        >
          Recent Posts
        </h2>
      </div>
      <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        <div
          v-for="article in qc"
          :key="article._path"
          class="flex flex-col justify-between rounded-lg border border-gray-200 p-4"
        >
          <nuxt-link :href="article._path">
            <p class="text-xl text-gray-900">{{ article.title }}</p>
            <p class="mt-3 text-gray-500">{{ article.description }}</p>
          </nuxt-link>
          <div class="mt-6">
            <a
              :href="`?author=${article.author}`"
              class="text-sm font-medium text-gray-900"
            >
              {{ article.author }}
            </a>
            <div class="text-sm text-gray-500">
              <time datetime="2020-03-16">{{ convertDate(article.date) }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
