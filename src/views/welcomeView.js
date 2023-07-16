


/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
      <h1>Welcome</h1>
    `;
    return element;
  };