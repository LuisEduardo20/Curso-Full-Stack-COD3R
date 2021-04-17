function Pessoa() {
  this.idade = 0
 
  // Forma 1
  /*setInterval(function () {
     this.idade++;
     console.log(this.idade);
  }.bind(this), 1000);*/

  // Forma 2
  const self = this;
  setInterval(function () {
     self.idade++;
     console.log(self.idade);
  }, 1000);

}

new Pessoa;