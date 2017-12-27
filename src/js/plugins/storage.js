import DB from '../util/db'

export default store => {
	store.subscribe((mutations,state) =>{
		const formatTodos = JSON.stringify(state.todos)
		DB.updateInfo(formatTodos).catch((ret)=>{
			throw new Errow(ret)
		})
	})
}