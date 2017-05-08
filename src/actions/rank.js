import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

export const RANKLIST = 'RANKLIST'

const rankList = (obj) => {return {type:RANKLIST,obj}}

export const rankListAction = () => {
	return async dispatch => {
		try{
			let data = await api( Config.rankListAPI );
			dispatch(rankList(data.data.info));
		} catch(error) {
			console.log(error);
		}
	}
}
