<template>
  <div class="hello">
    <h2>Home component</h2>
    <h3>{{ msg }}</h3>
    <h4>service: {{ time.toString() }}</h4>
    <h4>factory: {{ factime.toString() }}</h4>

  </div>

</template>

<script>
  import Service from '../services/restResource';
  import Factory from '../services/factory';

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        time: Service.time

      }

    },
    created: function () {
      let factory = new Factory();
      this.factime = factory.time;

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
