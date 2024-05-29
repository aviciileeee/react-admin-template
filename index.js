// {
//   let a = 10
//   var b = 1
// }

// // console.log(a)
// console.log(b)

const nameProps = 'name'
let a = {
  [nameProps]: 'avicii',
  sayHello() {
    console.log('hello ')
  }
}

Object.defineProperty(a, 'priProp', {
  enumerable: false,
  writable: true,
  value: 'hi',
  configurable: true
})

console.log(a.sayHello.name)
// console.log(Object.getOwnPropertyDescriptor(a, 'name'))
console.log(Object.getOwnPropertyNames(a))

// ES6对象新增特性: 简写语法、属性名表达式、方法的name属性、属性的可枚举性和遍历、super、对象结构赋值(可枚举值)
for (const prop in a) {
  console.log(prop)
}
// for...in\Object.keys()\JSON.stringify()\Object.assign() es6新增

console.log('-------')

const proto = {
  foo: 'super foo'
}

const obj = {
  foo: 'child foo',
  find() {
    // console.log(super.foo)
    console.log(Object.getPrototypeOf(this).foo)
  }
}

Object.setPrototypeOf(obj, proto)
obj.find()

console.log('-------')

const o = Object.create({ x: 1, y: 2 })
o.z = 3

const { x, ...newObj } = o
console.log(x, newObj)
console.log(Object.assign({}, o))
console.log('-------!')

console.log({ ...'hello' })

console.log({ ...obj })

// 对象的扩展运算符 = Object.assign()
