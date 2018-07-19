import {consoleLog as name} from './myFirstModule'
import {person} from './mySecondModule'
import {hello} from './mySecondModule'
import myOwnDefaultExport from './defaultExport'
import {sayHello as myHello} from './defaultExport'
import myDefaultObject, {say1, say2,say3} from './manyExports'
import ToDo from './ToDo' 


new ToDo('#root')

console.log(myDefaultObject)

say1()
say2()
say3()
myDefaultObject.say1()

myHello()

myOwnDefaultExport()

name()
console.log(person)
console.log(hello())
