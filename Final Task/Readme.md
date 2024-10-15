
---

## T-Shirt Customization Feature - E-Commerce App

This is a Next.js e-commerce feature that allows users to upload custom designs, display them on a T-shirt, change the T-shirt color, adjust design filters, and download the final preview.

### Features

1. **Upload Custom Design**: Users can upload any design (image file) and display it on a mock T-shirt.
2. **Change T-shirt Color**: Users can select the T-shirt color using a color picker.
3. **Draggable & Resizable Design**: The uploaded design can be dragged and resized within the boundaries of the T-shirt.
4. **Apply Filters**: Users can adjust brightness, contrast, and saturation to blend the design better with the T-shirt.
5. **Download Preview**: Users can download the final customized T-shirt image as a preview.

### File Structure

```bash

├── components
│   ├── ColorPicker.jsx          # Component to select T-shirt color
│   ├── DesignUploader.jsx        # Upload design component
│   ├── DownloadButton.jsx        # Button to download the T-shirt preview
│   ├── FilterControls.jsx        # Controls for applying filters to the design
│   └── TShirtPreview.jsx         # Main T-shirt preview component with draggable and resizable design
├── app
│   └── page.jsx                 # Main page with the full feature
├── public
│   └── tshirt.png               # T-shirt mockup image
├── README.md                    # Documentation
└── tailwind.config.js           # Tailwind CSS configuration
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ReyKan-KP/tasks/tree/main/tshirt-customization.git
   cd tshirt-customization
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Usage

1. **Upload a Design**: Click the "Upload Design" button to select an image file.
2. **Change T-shirt Color**: Choose a T-shirt color using the color picker.
3. **Adjust Design**: Drag, resize, and adjust the design's brightness, contrast, and saturation to match the T-shirt.
4. **Download Preview**: After customizing, click the "Download Preview" button to download the T-shirt image with the design.

### Dependencies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React RND](https://github.com/bokuweb/react-rnd) - For draggable and resizable design
- [html-to-image](https://www.npmjs.com/package/html-to-image) - For converting the preview to an image for download
- [remove.bg](https://www.remove.bg/) - API for removing image backgrounds

### Future Enhancements

- Add more filters and advanced image editing options.
- Include multiple T-shirt styles and preview angles.
- Support vector design uploads and scaling without quality loss.


---
