<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ $http }}
    <!-- <div id="test">My name is <input v-model="name" /></div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  // data() {
  //   return {
  //     name: ""
  //   };
  // },
  // mounted() {
  //   if (localStorage.name) this.name = localStorage.name;
  // },
  // watch: {
  //   name(newName) {
  //     localStorage.name = newName;
  //   }
  // }
  data: function() {
    return {
      intervalId: undefined
    };
  },
  mounted() {
    const that = this;
    this.intervalId = setInterval(function() {
      // eslint-disable-next-line no-console
      console.log("check test runner");

      const url = this.$backendURL + "/test_runner_status";
      that.$http
        .get(url)
        .then(response => {
          const data = response.data;
          // eslint-disable-next-line no-console
          console.log(data.Status);
        })
        .catch(() => {});
    }, 1000);
    // },
    // beforeDestroy () {
    //   // eslint-disable-next-line no-console
    //   console.log('clearInterval')
    //   clearInterval(this.intervalId)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
