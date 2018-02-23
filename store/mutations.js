export const STORAGE_KEY = 'todos-vuejs'

export const state = {
  todos: [1, 2, 3, 4, 5]
}

export const mutations = {
  consoleTodo (state) {
    console.info('consoleTodo')
  }
}
