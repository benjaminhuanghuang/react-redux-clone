import {Todo} from './components/models'


interface Action {
  type: string
}

enum TodoActionType {
  ADD_TAG = "ADD_TAG",
  REMOVE_TAG = "REMOVE_TAG",
  ADD = "ADD",
  REMOVE = "REMOVE"

}

interface TodoAction extends Action {
  todo: Todo
  type: TodoActionType
}