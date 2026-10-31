from flask import Flask, render_template, request, jsonify
import json
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load frequently asked questions

with open("faqs.json", "r", encoding="utf-8") as file:
    faqs = json.load(file)

questions = [faq["question"] for faq in faqs]

vectorizer = TfidfVectorizer(
lowercase=True,
stop_words="english",
ngram_range=(1, 2)
)

question_vectors = vectorizer.fit_transform(questions)

def get_response(user_message):
    user_message = user_message.strip()


    if not user_message:
        return "Please enter a question so I can help you."

    # Handle common greetings
    normalized = re.sub(r"[^\w\s]", "", user_message.lower())
    greetings = {"hi", "hello", "hey", "good morning", "good afternoon"}

    if normalized in greetings:
        return (
            "Hello! 👋 Welcome to CollegeConnect. "
            "I'm here to answer your college-related questions. "
            "What would you like to know?"
        )

    # Find the closest matching FAQ
    user_vector = vectorizer.transform([user_message])
    similarities = cosine_similarity(user_vector, question_vectors)[0]

    best_match_index = similarities.argmax()
    best_score = similarities[best_match_index]

    if best_score < 0.18:
        return (
            "I'm sorry, I couldn't find a suitable answer to that question. "
            "Please try asking about admissions, courses, fees, examinations, "
            "placements, or campus facilities."
        )

    return faqs[best_match_index]["answer"]


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(silent=True) or {}
    message = data.get("message", "")


    if not isinstance(message, str):
        return jsonify({"response": "Please enter a valid text question."}), 400

    response = get_response(message)
    return jsonify({"response": response})


if __name__ == "__main__":
    app.run(debug=True)
