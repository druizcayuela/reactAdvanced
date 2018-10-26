export default ({ dispatch }) => next => action => {
     // Check to see if the action 
     // has a promise on its 'pauload' property
     // If it does, then wait for it to resolve
     // If if doesn't, then send the action on the
     // next middleware      
     if (!action.payload || !action.payload.then) {
         return next(action);
     }
     
     // We want to wait for the promise to resolve
     // (get its data!!) and the create a new action
     // with that data and dispatch it
     action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
     });
};
    
