function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
}

function veto() {
  returns ('No, I must disagree')
}

function approve() {
  returns ('You can do that!')
}

function doCharity() {
  return ('I like to help people.')
}

function releasePressStatement() {
  returns ('You will see great things from Scuber.')
}

function sayHi() {
  returns ('"Hi, my name is ${BoardMember.name} I am from ${BoardMember.homeState}, and I was trained in ${BoardMember.training}')
}
