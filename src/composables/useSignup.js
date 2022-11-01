import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete the Signup!");
    }
    await res.user.updateProfile({
      displayName,
    });
    //console.log(res.user);
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
    console.error(err.message);
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
