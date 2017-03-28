<template>
  <div>
    <h2>Testc component</h2>
    <p>prop:
      {{ onServ }}
    </p>

    <p>
      comp: {{ onComp }}
    </p>
  </div>

</template>

<script>
  import TestImport from '../services/restResource';

  export default {
    data() {
      return {
      onComp: 'im on component',
      onServ: TestImport.prop

    };

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
