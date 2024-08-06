/*!
 * Deview - A developer tool for visualizing page layout with a grid overlay and artboard view mode.
 * (c) 2024 Oleg Fedak
 * Released under the MIT License.
 */

import './styles.css';

window.addEventListener('DOMContentLoaded', () => {
    /* Main elements */
    const htmlElement = document.querySelector('html');
    const bodyElement = document.querySelector('body');
    let textEditMode = false;

    // Check for the existence of elements to avoid errors
    if (!htmlElement || !bodyElement) return;

    // Insert HTML block
    const insertHtmlBlock = () => {
        const blockHtml = `
        <!-- Artboard View. Use hotkeys: '-', '+', '0' -->
        <!-- Columns Grid. Use hotkeys '1' or 'G' -->
        <div class="deview-grid container">
            <div class="deview-grid-columns" is-hidden></div>
        </div>
    `;
        // Create a container element with the custom tag
        const container = document.createElement('div');
        container.innerHTML = blockHtml;

        // Append the container to the body element
        document.body.appendChild(container);
    };

    // Execute the function to insert the HTML block
    insertHtmlBlock();

    /* Artboard View Mode
    ========================================================================*/
    // Set initial body scale value
    bodyElement.setAttribute('dev-scale', 1.0);

    const handleArtboardView = (event) => {
        const scale = parseFloat(bodyElement.getAttribute('dev-scale'));
        const scaleOut = scale - 0.2;
        const scaleIn = scale + 0.2;

        // Skip handling if text edit mode is enabled
        if (textEditMode) return;
        // Handle different keys for scaling
        switch (event.key) {
            case '-':
                if (scale > 0.4) {
                    bodyElement.setAttribute('dev-scale', scaleOut.toFixed(1));
                    htmlElement.setAttribute('dev', '');
                }
                break;
            case '=':
                if (scale >= 0.4 && scale < 1.0) {
                    bodyElement.setAttribute('dev-scale', scaleIn.toFixed(1));

                } else if (scale === 1.0) {
                    htmlElement.removeAttribute('dev');
                }
                break;
            case '0':
                if (scale <= 1.0) {
                    bodyElement.setAttribute('dev-scale', 1.0);
                    htmlElement.removeAttribute('dev');
                }
                break;
        }

    };

    /* Content Editable Mode
    ========================================================================*/
    // Text elements can be editable in Birdview Mode
    const handleContentEditable = (event) => {
        const scale = parseFloat(bodyElement.getAttribute('dev-scale'));
        if (scale >= 1) return;

        textEditMode = bodyElement.getAttribute('contenteditable') === 'true';

        // Enable mode by clicking on the page
        if (event.type === 'click') {
            if (event.target !== htmlElement) {
                bodyElement.setAttribute('contenteditable', 'true');
            } else {
                bodyElement.removeAttribute('contenteditable');
            }
        }
        // Disable mode by pressing the Escape key
        if (event.type === 'keydown' && event.key === 'Escape') {
            bodyElement.removeAttribute('contenteditable');
        }
    };

    /* View Options
    ========================================================================*/
    // Handles visibility toggling of guides and grids
    const handleLayoutViewOptions = (event) => {
        // Function to toggle visibility of elements
        const toggleViewOption = (selector) => {
            const element = document.querySelector(selector);
            if (element) {
                element.toggleAttribute('is-hidden');
                element.toggleAttribute('is-visible');
            }
        };
        // Skip handling if text edit mode is enabled
        if (textEditMode) return;
        // Handle different keys for toggling visibility of elements
        switch (event.key) {
            case '1':
            case 'g':
                toggleViewOption('.deview-grid-columns');
                break;
        }
    };

    // Add event listeners to the HTML element
    htmlElement.addEventListener('keydown', handleArtboardView, false);
    htmlElement.addEventListener('click', handleContentEditable, false);
    htmlElement.addEventListener('keydown', handleContentEditable, false);
    htmlElement.addEventListener('keydown', handleLayoutViewOptions, false);
});
