<template>
  <card class="hoverable">
    <template #content>
      <div class="flex border-bottom-1 surface-border pb-4">
        <img class="mr-3" alt="user header" :src="props.user.picture.large" />

        <div class="flex flex-column align-items-start">
          <span class="text-lg text-800 font-medium mb-1"
            >{{ props.user.name.first }} {{ props.user.name.last }}
          </span>
          <span class="text-md text-300 font-medium mb-2"
            ><i class="pi pi-globe mr-1"></i>{{ props.user.location.city }},{{
              props.user.location.state
            }}</span
          >
          <tag :class="tagColor" class="border-round py-1 px-2 text-sm">{{
            props.user.gender
          }}</tag>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-between pt-4">
        <prime-button
          icon="pi pi-search"
          label="View"
          class="p-button-outlined p-button-secondary w-7 mr-2"
          @click="clickView"
        />
        <prime-button
          icon="pi pi-facebook"
          class="p-button-rounded p-button-outlined p-button-secondary mx-3"
          v-tooltip.top="props.user.email"
        />
        <prime-button
          icon="pi pi-phone"
          class="p-button-rounded p-button-outlined p-button-secondary mx-3"
          v-tooltip.top="props.user.phone"
        />
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Card from "primevue/card";
import PrimeButton from "primevue/button";
import Tag from "primevue/tag";
import { User } from "@/core/interfaces/random-users-types.interface";

export default defineComponent({
  name: "user-card",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    Card,
    PrimeButton,
    Tag,
  },
  emits: ["clicked-view"],
  setup(props, { emit }) {
    const tagColor = computed(() => {
      return props.user.gender === "male"
        ? "bg-blue-50 text-blue-400"
        : "bg-orange-50 text-orange-400";
    });

    const clickView = () => {
      emit("clicked-view", props.index);
    };
    return { props, tagColor, clickView };
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.hoverable:hover {
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1),
    0px 1px 4px -1px rgba(0, 0, 0, 0.1);
}
</style>
