import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await projectAuth.signOut();
    //error.value = null;
  } catch (err) {
    error.value = err.message;
    console.error(err.message);
  }
};

const useLogout = () => {
  return { logout, error };
};

export default useLogout;
