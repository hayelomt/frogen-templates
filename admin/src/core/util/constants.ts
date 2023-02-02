const API_ADDRESS = import.meta.env.VITE_API_ADDRESS;

const appConstants = {
  apiUrl: `${API_ADDRESS}/api`,
  mediaUrl: `${API_ADDRESS}/media`,
  storageKeys: {
    theme: 'theme',
    user: 'user',
  },
};

export default appConstants;
