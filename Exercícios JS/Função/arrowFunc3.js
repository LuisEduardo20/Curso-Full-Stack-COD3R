let comparaThis = function (a) {
  console.log(this === a);
}

comparaThis(global);

const obj = {}
comparaThis = comparaThis.bind(obj)
comparaThis(obj);
comparaThis(global);
comparaThis(this);

let comparaThisArrow = a => console.log(this === a);
comparaThisArrow(module.exports)
comparaThisArrow(global)
comparaThisArrow(this)

comparaThisArrow = comparaThisArrow.bind(obj)
comparaThisArrow(obj)
