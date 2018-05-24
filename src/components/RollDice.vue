
<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="containerDice">
            <div class="row">
              <div class="dice">
                <p>{{rolling}} </p>
              </div>
            </div>

            <div class=" row buttons">
              <button class="btn btn-primary" v-on:click="rollOnce"> Roll once </button>
              <button class="btn btn-success"  v-on:click="keepRolling"> Keep Rolling</button>
            </div>

            <div class="row">
              <div class="buttons">
                <button class="btn btn-danger" v-on:click="startOver"> Start Over</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
           <div class="row">
             <div class="showTable">
                <h3 v-bind="totalCounter= this.$store.state.counter1+this.$store.state.counter2+this.$store.state.counter3+
                  this.$store.state.counter4+this.$store.state.counter5+this.$store.state.counter6">{{totalCounter}} Dice Rolls</h3>
                <table class="table table-dark table-hover">
              <thead>
              <tr>
                <th>Dice Number</th>
                <th>Number of Count</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>{{this.$store.state.counter1}}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{{this.$store.state.counter2}}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{{this.$store.state.counter3}}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{{this.$store.state.counter4}}</td>
              </tr>
              <tr>
                <td>5</td>
                <td >{{this.$store.state.counter5}}</td>
              </tr>
              <tr>
                <td>6</td>
                <td>{{this.$store.state.counter6}}</td>
              </tr>
              </tbody>
            </table>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "RollDice",
    data(){
      return{
        rolling: 0,
        totalCounter:0,
      };
    },
    methods: {
      rollOnce() {
        var rollingOnce = Math.ceil(Math.random() * 6);
        this.rolling = rollingOnce;
        if (rollingOnce == 1)
          this.$store.state.counter1++;
        if (rollingOnce == 2)
          this.$store.state.counter2++;
        if (rollingOnce == 3)
          this.$store.state.counter3++;
        if (rollingOnce == 4)
          this.$store.state.counter4++;
        if (rollingOnce == 5)
          this.$store.state.counter5++;
        if (rollingOnce == 6)
          this.$store.state.counter6++;
      },
      keepRolling() {
        var timeInterval = 500;
        for (var i= 0; i< 100; i++) {
          this.rolling = setTimeout(this.rollOnce, i * timeInterval)
        }
      },

      startOver() {
        this.rolling= 0;
        this.$store.state.counter1=0;
        this.$store.state.counter2=0;
        this.$store.state.counter3=0;
        this.$store.state.counter4=0;
        this.$store.state.counter5=0;
        this.$store.state.counter6=0;
      }
    }

  }
</script>

<style  scoped>
  .dice{
    margin: 50px auto;
    text-align: center;
    padding: 15px;
    color: aliceblue;
    height: 60px;
    width: 50px;
    background-color: darkred;
    border:  black 2px solid;
    border-radius: 10px;
  }
  .buttons{
    margin:0 auto;
    padding: 20px;
    position: relative;
  }
  .buttons :first-child{
    margin: 0 20px;
  }

  .showTable{
   margin-left: 30%;
  }
  .containerDice{
    background-image: url("../assets/img/diceback.jpg");
    border-radius: 20%;
    position: absolute;
    margin-top: 50px;
    margin-left: 30%;
    height: 80%;

  }
  td,thead{
    text-align: center;
  }
  h3 {
    text-align:center;
    background: whitesmoke;
  }
</style>

