const init = {
    danhsach: []
}
export default (state = init, action) => {
    // console.log('action', action);
    switch (action.type) {
        case 'them':
            const { payload } = action;
            const itemInCart = state.danhsach.find(item => item.id === payload.id);

            if (itemInCart) {
                // If the item already exists, update its quantity
                const updatedCart = state.danhsach.map(item =>
                    item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );

                return { ...state, danhsach: updatedCart };
            } else {
                // If the item doesn't exist, add it with quantity 1
                return { ...state, danhsach: [...state.danhsach, { ...payload, quantity: 1 }] };
            }
        case 'tru':
            const { payload: giamPayload } = action;
            const itemToDecrease = state.danhsach.find(item => item.id === giamPayload.id);

            if (itemToDecrease) {
                // If the item exists and has a quantity greater than 1, decrease its quantity
                if (itemToDecrease.quantity > 1) {
                    const updatedCart = state.danhsach.map(item =>
                        item.id === giamPayload.id ? { ...item, quantity: item.quantity - 1 } : item
                    );
                    return { ...state, danhsach: updatedCart };
                } else {
                    // If the item has a quantity of 1, remove it from the cart
                    const updatedCart = state.danhsach.filter(item => item.id !== giamPayload.id);
                    return { ...state, danhsach: updatedCart };
                }
            } else {
                // If the item doesn't exist, return the current state
                return state;
            }
        default:
            return state;
    }
}