# Fancy Counter

A modern, stylish counter app built with **React** and **Vite**.

preview: https://taleex.github.io/fancy-counter/

## ✨ Features

- **Increment/Decrement**: Easily increase or decrease the counter value.
- **Limit Lock**: The counter locks at 5, encouraging users to "Buy Pro" for higher counts.
- **Reset**: Instantly reset the counter to zero.
- **Keyboard Support**: Press the <kbd>Space</kbd> key to increment the counter.
- **Responsive Design**: Looks great on all screen sizes.
- **Sleek UI**: Uses [Radix UI Icons](https://icons.radix-ui.com/) and a modern color palette.

## 🚀 Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run the development server**
   ```sh
   npm run dev
   ```

3. **Open your browser**
   Visit [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Radix UI Icons](https://icons.radix-ui.com/)
- [ESLint](https://eslint.org/) for code quality

## 📁 Project Structure

```
src/
  App.jsx            # Main app component
  Card.jsx           # Counter card logic & layout
  Count.jsx          # Displays the current count
  ButtonContainer.jsx# Holds increment/decrement buttons
  CountButton.jsx    # Individual button logic
  ResetButton.jsx    # Reset button logic
  Title.jsx          # Card title (changes on lock)
  index.css          # Styles
  main.jsx           # Entry point
```

## 📦 Build

To create a production build:
```sh
npm run build
```

## 📝 License

This project is for educational purposes.

---

Made with ❤️ using React + Vite.
//
