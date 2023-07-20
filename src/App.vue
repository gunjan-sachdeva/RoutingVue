<template>
<router-link to="/">Home</router-link>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<router-link to="/login">Login</router-link>

&nbsp;
&nbsp;
&nbsp;
<router-link to="/profile/gunjan">Gunjan Profile</router-link>
&nbsp;
&nbsp;
&nbsp;
<router-link to="/profile/neha">Neha Profile</router-link>
&nbsp;
&nbsp;
&nbsp;
<router-link to="/profile/priya">Priya Profile</router-link>

<router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>

</style>
