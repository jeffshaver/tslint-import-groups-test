import * as ts from 'typescript'
import * as lint from 'tslint'
import myfile from './my-file'

const myFunction = () => {
  console.log(myfile)
  return 'a'
}

myFunction()
