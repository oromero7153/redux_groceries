// Establish DOM elements as variables
const grocerySubmit = document.getElementById('addGrocery')
const list = document.getElementById('list')
const clearBtn = document.getElementById('clear')

// Instantiate default state value:
const initialState = {
    groceries: []
}
//reducer function 
const groceryReducer= ( state= initialState, action )=>{
    switch(action.type){
        case 'grocery/add':
         return{ groceries: [ ...state.groceries, { text: action.text }]
        }
        case 'grocery/clear':
            return []
        default:
            return state
    }
}

// establish store
const store = Redux.createStore(groceryReducer)

//reducer functions
const clearList = () =>{
    document.getElementById('newItem').value=''
    store.dispatch({
        type: 'grocery/clear'
    })
};

const newGrocery = (e) =>{
    let groceryText = document.getElementById ('newItem').value
    store.dispatch({
        type: 'grocery/add',
        text: groceryText
    })
 console.log(store.getState())
}

const renderlist =(state)=>{
    list.innerHTML =''
    const state = store.getState()
    state.groceries.forEach(grocery =>{
        let li = document.createElement('li')
        list.append(li)
        li.textContent = grocery.text
    })
}

store.subscribe (renderlist)

//event handlers
grocerySubmit.addEventListener('click', newGrocery)
clearBtn.addEventListener('click', clearList)