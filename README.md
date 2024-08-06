# Deview

Simple webdeveloper tool for visualizing page layout with a grid overlay and artboard view mode similar to design tools like Figma or Adobe InDesign. Interaction takes place using hot keys.

[Demo](https://olegfedak.github.io/deview/)

## Installation

**Via npm**

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

## Preparing

Deview grid container is quite imitating .container. Assume you have such content container class in your project. For example:

```css
.container {
    max-width: 1400px;
    padding-inline: 40px;
    margin-inline: auto;
}
```

## Configurations

Customize the artboard and grid container by overriding the default Deview CSS variables:

```css
--artboard-max-width: 1200px;
--grid-columns: 12;
--grid-column-bg: rgba(128, 201, 255, 0.25);
--inner-gutter: 20px;
```

Example:

```css
--grid-columns: var(--your-grid-columns);
--inner-gutter: var(--your-grid-gap);
```

## Features

#### 1. Artboard View Mode
This mode allows you to see the web page as an artboard, similar to design tools like Figma or Adobe InDesign.

#### 2. Text Editable Mode
Text Editable Mode is enabled when Artboard View Mode is active, allowing you to quickly change any text block on the page for visual estimate.

#### 3. Column Grid View
The grid view can be toggled using the hotkeys defined in Deview.


## Hotkeys

| Feature               | Hotkey       | Description                                                    |
|:----------------------|--------------|----------------------------------------------------------------|
| Artboard View         | `-`          | Activates the Artboard and scales the page down.               |
|                       | `+` or `=`   | Scales the page up.                                            |
|                       | `0`          | Resets the page scale to default (100%).                       |
| Text Editable         | `Click`      | Enables text edit mode for any text block. Working when Artboard is active. |
|                       | `Escape`     | Disables text edit mode.                                       |
| Column Grid View      | `1` or `G`   | Toggles the visibility of the grid overlay.                    |

## Feedback
If you have any ideas, suggestions, or encounter any issues, please let me know by [opening an issue](https://github.com/olegfedak/deview/issues) or submitting a [pull request](https://github.com/olegfedak/deview/pulls) on this repository.

## Author
Deview is conceived and developed by [Oleg Fedak](https://github.com/olegfedak).

## License

This project is open source and available under the [MIT License](LICENSE).
