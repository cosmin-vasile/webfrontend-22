/**
 * Updates the context using the new values
 * @param {object} contextData The current object from context
 * @param {string} key The key where the new value is added
 * @param {object} value The value to update in context
 * @returns {object} The updated context object
 */
const updateContext = (contextData = {}, key = "", value = {}) => {
  return {
    ...contextData,
    [key]: {
      ...contextData[key],
      ...value,
    },
  };
};

export default updateContext;
