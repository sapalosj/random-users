import { api } from "@/core/composables/api-client";
import HttpRequest from "@/core/enums/api.enum";
import { ref, Ref } from "vue";
import { User } from "@/core/interfaces/random-users-types.interface";

const useUsersFetchAll = (
  page: Ref<number>,
  result: Ref<number>
): {
  users: Ref<User[] | undefined>;
  error: Ref<string | undefined>;
  fetchUsers(): Promise<void>;
} => {
  const error = ref<string>();
  const users = ref<User[]>();
  const seed = (Math.random() + 1).toString(36).substring(7);

  const fetchUsers = async () => {
    try {
      const res = await api({
        method: HttpRequest.GET,
        url: `https://randomuser.me/api/?page=${page.value}&results=${result.value}&seed=${seed}`,
      });
      if (!res.ok) {
        throw Error("shit");
      }
      const data = await res.json();
      users.value = data.results as User[];
    } catch (err) {
      error.value = err as string;
    }
  };
  fetchUsers();
  return { users, error, fetchUsers };
};

export default useUsersFetchAll;
