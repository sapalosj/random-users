<template>
  <card class="shadow-7">
    <template #header>
      <div class="filler"></div>
    </template>
    <template #content>
      <Avatar
        :image="props.user.picture.large"
        class="p-mr-2"
        size="xlarge"
        shape="circle"
      />
      <h2 class="align-self-center">
        {{ props.user.name.first }} {{ props.user.name.last }} ,
        {{ props.user.dob.age }}
      </h2>
      <span class="text-md text-300 font-medium"
        ><i class="pi pi-calendar mr-1 mb-3"></i> Born {{ formattedDob }}</span
      >
      <span class="text-md text-300 font-medium"
        ><i class="pi pi-map-marker mr-1 mb-3"></i> Lives in
        {{ props.user.location.state }}, {{ props.user.location.city }},
        {{ props.user.location.street.name }}</span
      >
      <span class="text-md text-300 font-medium"
        ><i class="pi pi-user mr-2 mb-3"></i>{{ props.user.gender }}</span
      >
      <span class="text-md text-300 font-medium"
        ><i class="pi pi-phone mr-2 mb-3"></i>{{ props.user.cell }}</span
      >
      <span class="text-md text-300 font-medium"
        ><i class="pi pi-phone mr-2 mb-3"></i>{{ props.user.phone }}</span
      >
      <span class="text-md text-300 font-medium"
        ><i class="pi pi-inbox mr-2 mb-3"></i>{{ props.user.email }}</span
      >
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ComputedRef } from "vue";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import { User } from "@/core/interfaces/random-users-types.interface";

export default defineComponent({
  name: "UserModal",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  components: {
    Card,
    Avatar,
  },

  setup(props) {
    const formattedDob: ComputedRef<string> = computed(() => {
      let date = new Date(props.user.dob.date).toDateString().split(" ");
      return `${date[1]} ${date[2]}, ${date[3]}`;
    });
    return { props, formattedDob };
  },
});
</script>

<style lang="scss" scoped>
.filler {
  height: 6rem;
  width: 100%;
}

::v-deep(.p-card-content) {
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: -6em;
}
::v-deep(.p-avatar) {
  height: 9rem;
  width: 9rem;
  border: 0.5rem solid var(--surface-c);
  align-self: center;
}
::v-deep(.p-card-header) {
  position: relative;
  background-color: var(--surface-c);
}

::v-deep(.p-card-footer) {
  border-top: 1px solid var(--surface-d);
}

#back-arrow {
  border: 1px solid white;
  padding: 0.5rem;
}
</style>
