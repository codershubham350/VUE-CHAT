<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="test@mail.com" v-model="email">
    <input type="password" required placeholder="******" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'

export default {
setup(props,context){
    // refs
     const email = ref('')
    const password = ref('')

    const {error, login} = useLogin()

    const handleSubmit = async()=>{
      await login(email.value, password.value)
       // console.log( email.value, password.value);
       if(!error.value){
        context.emit('login')
       }
       
    }


    return{  email, password, handleSubmit, error }
}
}
</script>

<style>

</style>