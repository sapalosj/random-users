<template>
  <card class="card-container">
    <template #content>
      <paginator
        @page="onPage"
        :first="1"
        :rows="results"
        :total-records="100"
        :rows-per-page-options="[6, 12, 24]"
        class="mb-3"
        ><template #start>
          <dropdown
            v-model="genderOption"
            :options="dropdownOptions"
            option-label="label"
            option-value="value"
            place-holder="Filter By Gender"
          ></dropdown></template
      ></paginator>
      <div class="grid">
        <div
          class="col-12 md:col-6 xl:col-4"
          v-for="(user, index) in filterByGender"
          :key="index"
        >
          <user-card
            :user="user"
            :index="index"
            @clicked-view="singleViewPage"
          />
        </div>
      </div>
    </template>
  </card>
  <prime-dialog v-model:visible="displayDialog" :modal="true">
    <user-modal v-if="userByIndex !== undefined" :user="userByIndex" />
  </prime-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed, ComputedRef } from "vue";
import { User } from "@/core/interfaces/random-users-types.interface";
import UserCard from "@/components/user-card.vue";
import useUsersFetchAll from "@/core/composables/users/use-fetch-all";
import Paginator, { PageState } from "primevue/paginator";
import Card from "primevue/card";
import Dropdown from "primevue/dropdown";
import PrimeDialog from "primevue/dialog";
import UserModal from "@/components/user-modal.vue";

export default defineComponent({
  name: "UsersGridPage",
  components: {
    UserCard,
    Paginator,
    Card,
    Dropdown,
    PrimeDialog,
    UserModal,
  },
  setup() {
    const page = ref<number>(1);

    const results = ref<number>(6);

    const genderOption = ref<string>("");

    const { users, fetchUsers } = useUsersFetchAll(page, results);

    const userByIndex = ref<User>();

    const displayDialog = ref<boolean>(false);

    const dropdownOptions = [
      { label: "Default", value: "" },
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ];

    const filterByGender: ComputedRef<User[] | undefined> = computed(() => {
      return genderOption.value !== ""
        ? users.value?.filter((el) => el.gender === genderOption.value)
        : users.value;
    });

    const onPage = (event: PageState) => {
      page.value = event.page + 1; // plus one for 1 based index
      results.value = event.rows;
      fetchUsers();
    };

    const singleViewPage = (index: number) => {
      if (users.value !== undefined) {
        userByIndex.value = users.value[index];
        displayDialog.value = true;
      }
    };

    return {
      genderOption,
      filterByGender,
      dropdownOptions,
      results,
      userByIndex,
      onPage,
      singleViewPage,
      displayDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
.card-container {
  background-color: var(--surface-b);
  padding: 3rem;
}
</style>
