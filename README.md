# Deview

*Current Concept:* A developer tool for visualizing page layout with a grid overlay and artboard view mode similar to design tools like Figma or Adobe InDesign.

## Installation

**Via npm**

To install Deview as a development dependency:

```bash
npm install deview -D
```

Import Deview into your project. This will automatically attach the functionality to your page without the need for additional method calls:

```js
import 'deview';
```

**Via CDN**

You can also include Deview in your project using a CDN. Add the following script tag to your HTML file and this will automatically enable Deview's functionalities:

```html
<script src="https://unpkg.com/deview@^0.1.0/dist/deview.js"></script>
```

## Features

**1. Artboard View Mode**

Artboard View Mode will be enabled by default. This mode allows you to see the web page as an artboard, similar to design tools like Figma or Adobe InDesign.

**2. Text Editable Mode**

Text Editable Mode is enabled when Artboard View Mode is active, allowing you to quickly change any text block on the page for visual adjustments.

**3. Column Grid View**

The grid view can be toggled using the hotkeys defined in Deview. By default, the grid view will be visible once Deview is imported.
## Hotkeys

| Feature               | Hotkey       | Description                                                    |
|-----------------------|--------------|----------------------------------------------------------------|
| **Artboard View**| `-`          | Activetes the Artboard and Scales the page down.                                          |
|                       | `+` or `=`   | Scales the page up.                                            |
|                       | `0`          | Resets the page scale to default (100%).                       |
| **Text Editable**| `Click`      | Enables text edit mode for any text block. Working when Artboard is active. |
|                       | `Escape`     | Disables text edit mode.                                       |
| **Column Grid View**  | `1` or `G`   | Toggles the visibility of the grid overlay.                    |

## Grid Container

You can customize the grid container by overriding the default CSS variables:

```css
.deview {
    --container-width: 100%; // ignore if you have .container
    --grid-columns: 12;
    --grid-column-bg: rgba(128, 201, 255, 0.25);
    --inner-gutter: 20px;
    --outer-gutter: 0;
}
```

## License

This project is licensed under the MIT [License](LICENSE) - see the LICENSE file for details.
