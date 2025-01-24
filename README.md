---

# Full Stack Web Application  

This is a **Full Stack Web Application** built using **MongoDB**, **Node.js**, **Express**, and **Bootstrap**, following the **MVC (Model-View-Controller)** architecture to ensure maintainable and scalable code. Below, you'll find the key features, technologies used, and setup instructions.  

## 🌟 Features  

### Frontend:  
- **Responsive Design:** Developed using Bootstrap for seamless user experience across devices.  
- **EJS-Mate:** Enhanced templating using layout support for DRY (Don't Repeat Yourself) principles.
- **HTML & CSS:** Used for structuring and styling the application with responsive design principles.

### Backend:  
- **Node.js & Express:** The backbone of the server-side logic.  
- **MongoDB with Mongoose:** Database management, including complex relationships and validations.
- **MongoDB Atlas:** Leveraged MongoDB Atlas for cloud-hosted, highly available, and secure database storage.
- **Authentication & Authorization:**  
  - Secured routes and actions using authentication.  
  - Implemented role-based authorization for granular access control.  
- **Error Handling:**  
  - Centralized error management with custom error classes.  
  - Custom error pages for better user experience.  
- **Validation:**  
  - Client-side validations for instant feedback.  
  - Server-side validations for robust data integrity.  
- **Middleware:** Various middlewares integrated for enhanced functionality.  
- **Session Management:** Used sessions and cookies (both signed and unsigned) to manage user sessions and preferences securely.  
- **Data Storage in Cloudinary:** Images and other media files stored in the cloud for efficient handling and scalability.  

### Deployment:  
The project is deployed on **Render**, ensuring it is live and accessible. 
The data base is made live using **MongoDB Atlas**.

---

## 🛠️ Technologies and Libraries  

### Backend:  
- **Node.js**  
- **Express.js**  
- **Mongoose**  
- **EJS-Mate**  

### Middleware:  
- **Connect-Flash:** For user notifications (e.g., success or error messages).  
- **Custom Middlewares:** Includes wrapAsync() for modular and error-handling code.  

### Security:  
- **Salting:** Added security for sensitive user information.  
- **Cookies & Sessions:** To manage user authentication and persistence securely.  

### Other Tools:  
- **Cloudinary:** For cloud-based media storage.  
- **Render:** For project deployment.  

---

## 🏗️ Project Structure  

The project follows the **MVC Architecture** for clean code separation:  

- **Models:** Define database schemas and relationships using Mongoose.  
- **Views:** EJS templates for dynamic and reusable UI components.  
- **Controllers:** Handle business logic, including authentication, validations, and data manipulations.  

---

## 🚀 Installation and Setup  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/yourusername/your-repo-name.git  
   cd your-repo-name  
   ```  

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add the following:  
   ```env  
   CLOUDINARY_NAME=your_cloudinary_name  
   CLOUDINARY_API_KEY=your_api_key  
   CLOUDINARY_API_SECRET=your_api_secret  
   SECRET=your_session_secret  
   ```  

4. **Start the Application**  
   ```bash  
   npm start  
   ```  
   Visit `http://localhost:3000` to view the app.  

---

## 🔑 Key Learnings  

While building this project, I gained a deeper understanding of:  
1. **Mongoose Relationships:** Implemented relationships and used populate for efficient querying and data representation.  
2. **Error Handling:** Centralized approach with custom error classes for better debugging and modularity.  
3. **Validation:** Combined client-side and server-side validations for a seamless and secure user experience.  
4. **Middleware:** Custom and third-party middleware integration, including connect-flash, for robust application logic.  
5. **Authentication & Authorization:** Implemented salting for securing passwords and managing both authentication and role-based authorization.  

---

## 📸 Screenshots  

<img src="https://github.com/user-attachments/assets/37e61fb1-3090-4ce2-bba1-11125477cfba" height=300px>
<img src="https://github.com/user-attachments/assets/05b17d21-d52f-42d8-a3ac-ad954629ab3d" height=300px>
 
---

## 🌐 Live Demo  

Check out the live version of the project here: [Demo Link](https://destiny-webapp.onrender.com/listings)

---

## 🤝 Contribution  

Contributions are welcome! Please open an issue or submit a pull request for any improvements.  

---

## 📧 Contact  

For any inquiries or feedback, feel free to reach out:  
**Email:** pratyushprasad108@gmail.com 
**GitHub:** [My Github Link](https://github.com/PratyushPrasad-8)  
