export const state = () => ({
  list: [],
})

export const mutations = {
  setData(state, data) {
    state.list.push({
      id: data.id,
      imageUrl: data.imageUrl,
    })
  },
}
