import {ChildAsFC} from './Child'

function Parent() {
	return<ChildAsFC color='red' onClick={()=>console.log('hi')}/>
}

export default Parent;