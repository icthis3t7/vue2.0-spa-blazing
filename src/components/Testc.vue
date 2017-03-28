<template>
  <div>
    <h2>Testc component</h2>
    <p>prop:
      {{ onServ.prop }}
    </p>

    <p>
      {{ onServ.time.toString() }}
    </p>

    <p>
      factory {{factime.toString() }}
    </p>

    <p>
      service: {{ service.time.toString() }}
    </p>
  </div>

</template>

<script>
  import Service from '../services/restResource';
  import Factory from '../services/factory';

  export default {
      data() {
        return {
        onComp: 'im on component',
        onServ: Service

      };

    },
    created: function () {
      let factory = new Factory();
      this.factime = factory.time;
      this.service = Service;

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
