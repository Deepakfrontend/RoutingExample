
# 🏢 Office Website - React Routing Example

This is a modern and stylish office website built using **React**. It demonstrates key features like **React Router**, **component-based structure**, and a **gallery slideshow**. The site includes multiple pages such as Home, About, Gallery, and Contact with location-based nested routing.

---

## 🚀 Features

- 📁 Component-Based Architecture  
- 🧭 Navigation Bar with Route Links  
- 🗂️ Pages: Home, About, Contact, Gallery  
- 🗺️ Nested Routing for Office Locations: Noida, Gurugram, Bangalore  
- 🖼️ Stylish Gallery Slideshow using `setInterval` and CSS Transitions  
- 📱 Responsive Layout and Animated Hover Effects  
- ✨ Styled Using Custom CSS Inspired by Amazon-Style UI  

---

## 🗃️ Project Structure

```plaintext
src/
├── assets/               # Static images (used in gallery)
├── Component/
│   ├── Nav.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── Noida.jsx
│   ├── Gurugram.jsx
│   └── Bangalore.jsx
├── Style/
│   ├── About.css
│   ├── Gallery.css
│   ├── Home.css
│   └── OfficeLocation.css
└── App.jsx               # App entry point with routing
```

---

## 🛠️ Installation & Setup

1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/office-site.git
   cd office-site
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the App**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit: [http://localhost:5173](http://localhost:5173)

---

## 🔗 Routing Summary

| Path                 | Component        |
|----------------------|------------------|
| `/`                  | Home             |
| `/about`             | About            |
| `/gallery`           | Gallery          |
| `/contact`           | Contact          |
| `/contact/noida`     | Noida Office     |
| `/contact/gurugram`  | Gurugram Office  |
| `/contact/bangalore` | Bangalore Office |

---

## 📸 Gallery Slideshow

The gallery section auto-plays a slideshow of images located in the `assets/` folder.  
To personalize the site, replace the default images with your own office photos.

---

## 📦 Dependencies

- React  
- React Router DOM  
- Vite (for development server)  

---

## 📄 License

This project is for learning and demonstration purposes.  
You are free to modify and use it in your own projects.

---

## ✍️ Author

**Deepak Kumar**

> Feel free to contribute or fork this repo if you find it useful!
