import supabase from "../configs/dbConfig.js"

const addCard = async item => {
	try {
        const { data, error } = await supabase
  		.from('users')
  		.insert(item)

		if (error) throw error
		return data
	} catch (e) {
			throw e
	}
}

export default {
	addCard

}

