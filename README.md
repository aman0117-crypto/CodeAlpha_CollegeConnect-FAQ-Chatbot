# 🎓 CollegeConnect – FAQ Chatbot

**CollegeConnect** is a web-based College FAQ Chatbot designed to help students quickly find answers to common college-related questions. It provides information about admissions, courses, fees, examinations, placements, scholarships, hostel facilities, and other campus services.

The chatbot uses Natural Language Processing (NLP) techniques to understand user questions and retrieve the most relevant answers from a predefined FAQ dataset.

## ✨ Features

* 💬 Interactive chatbot with a modern and responsive user interface.
* 🎓 Answers to 40 frequently asked college-related questions.
* 🧠 NLP-based question matching using TF-IDF.
* 🔍 Cosine Similarity to identify the most relevant FAQ.
* 👋 Greeting detection for messages such as Hello, Hi, and Hey.
* 💡 Suggested questions for quick interaction.
* ⌨️ Supports sending messages using the Send button or Enter key.
* 🤖 Typing animation for a better chat experience.
* ❓ Fallback responses when a suitable answer is not found.
* 📱 Responsive design for different screen sizes.

## 🛠️ Technologies Used

| Technology        | Purpose                                  |
| ----------------- | ---------------------------------------- |
| Python            | Backend programming                      |
| Flask             | Web application framework                |
| Scikit-learn      | NLP-based question matching              |
| TF-IDF            | Text vectorization                       |
| Cosine Similarity | Finding the closest matching FAQ         |
| HTML5             | Webpage structure                        |
| CSS3              | Styling and responsive design            |
| JavaScript        | Chat functionality and API communication |
| JSON              | Storing FAQ questions and answers        |

## 📁 Project Structure

```text
CollegeConnect/
│
├── app.py                  # Flask application and chatbot logic
├── faqs.json               # FAQ questions and answers
├── requirements.txt        # Project dependencies
├── README.md               # Project documentation
│
├── templates/
│   └── index.html          # Chatbot interface
│
├── static/
│   ├── style.css           # UI styling
│   └── script.js           # Frontend chat functionality
│
└── venv/                   # Python virtual environment (not uploaded)
```

## ⚙️ Installation and Setup

Follow these steps to run CollegeConnect on your local machine.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd CollegeConnect
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

**Windows PowerShell:**

```powershell
.\venv\Scripts\Activate.ps1
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the Application

```bash
python app.py
```

### 7. Open in Browser

Visit the following address:

```text
http://127.0.0.1:5000/
```

The CollegeConnect chatbot is now ready to use!

## 🧠 How It Works

1. The user enters a college-related question through the chatbot interface.
2. JavaScript sends the question to the Flask backend through a POST request.
3. The backend processes the question using the TF-IDF vectorizer.
4. Cosine Similarity compares the user's question with the questions stored in `faqs.json`.
5. The chatbot identifies the closest matching FAQ.
6. The corresponding answer is returned and displayed in the chat interface.
7. If no suitable match is found, the chatbot displays a fallback response.

## 📚 FAQ Categories

The chatbot covers questions related to:

* Admissions and Eligibility
* Courses and Academics
* Fees and Scholarships
* Examinations and Results
* Placements and Internships
* Hostel and Campus Facilities
* Student Services and Documents
* Events and Extracurricular Activities

## 🚀 Future Enhancements

* Integration with a real college database.
* Support for more languages.
* Voice-based question input.
* Admin panel to manage FAQs.
* Improved semantic understanding of user queries.

## 👨‍💻 Developer

**Aman Gupta**

Developed as part of the **CodeAlpha Virtual Internship Program**.

## 📄 License

This project is developed for educational and learning purposes.
