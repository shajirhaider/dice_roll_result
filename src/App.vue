<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <app-rollDice></app-rollDice>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="col-md-6 float-right">
          <div class="showChart">
            <app-showChart></app-showChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RollDice from './components/RollDice';
  import ShowChart from './components/ShowChart';

  export default {
    name: 'app',
    data () {
      return {
      };
    },

    components:{
      appRollDice:RollDice,
      appShowChart: ShowChart
    }
  }
</script>

<style>
  body{
    margin:8px;
    height:100vh;
  }
  .showChart{
    margin-left: 60px;
  }

</style>
