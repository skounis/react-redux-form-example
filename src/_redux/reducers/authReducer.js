export default (state, action) => {
    switch (action.type) {
      case "AUTH":
        return {
          isLoggedIn: action.payload
        };
      default:
        return state;
    }
  };