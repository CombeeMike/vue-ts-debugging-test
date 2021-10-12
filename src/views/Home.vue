<template>
  <div class="home">
    <Books />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Books from "@/components/Books.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Books,
  },
});
</script>
