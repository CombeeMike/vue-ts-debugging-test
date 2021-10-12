<template>
  <select v-model="selAuthorId">
    <option v-for="author in authors" :value="author.id" :key="author.id">
      {{ author.name }}
    </option>
  </select>

  <div v-for="item in books" :key="item.id">{{ item.name }}</div>
</template>

<script lang="ts">
import { authors, books } from "@/assets/data";
import Book from "@/types/Book";
import { defineComponent } from "vue";

const sleep = async (ms: number) =>
  new Promise((resolve) => window.setTimeout(resolve, ms));

export default defineComponent({
  name: "Books",
  data: () => ({
    books: [] as Book[],
    authors,
    selAuthorId: authors[0].id,
  }),
  methods: {
    async updateBooks() {
      const selAuthor = this.authors.find((x) => x.id === this.selAuthorId);
      if (selAuthor) {
        // "Fake" some async API call here...
        await sleep(100);
        const allBooks = books;
        const authorBooks = allBooks.filter((x) => x.authorId === selAuthor.id);
        this.books = authorBooks;
      } else {
        this.books = [];
      }
    },
  },
  async created() {
    await this.updateBooks();
  },
  computed: {
    selAuthorName() {
      const author = this.authors.find((x) => x.id === this.selAuthorId);
      return author?.name;
    },
  },
  watch: {
    async selAuthorName() {
      await this.updateBooks();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
