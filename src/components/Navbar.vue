<template>
  <nav v-if="user">
    <div>
        <p>Hey! Welcome {{ user.displayName }}</p>
        <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout.js"
import getUser from "../composables/getUser.js"

export default {
    setup(){
        const { logout, error } = useLogout()
        const { user } = getUser()

        const handleClick = async() =>{
            
            await logout()
            if(!error.value){
                console.log('User logged out')
            }
        }

        return { handleClick, user}

    }

}
</script>

<style>

</style>