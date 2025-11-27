# Accenture Malaysia Cloud Conference Website

A Flask-based informational website for a 1-day consulting conference organized by Accenture Malaysia, focusing on Google Cloud Technologies.

## Features

- **Home Page**: Displays current date, location, and event schedule.
- **Schedule**: A list of 8 talks with details (Title, Speakers, Category, Description, Time).
- **Search & Filter**: Real-time filtering by talk title, speaker name, or category.
- **Responsive Design**: Optimized for desktop and mobile viewing.
- **Premium UI**: Designed with Accenture-inspired aesthetics.

## Tech Stack

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)

## Setup Instructions

### Prerequisites

- Python 3.x installed.

### Installation

1.  **Clone the repository** (or navigate to the project directory).
2.  **Create a virtual environment**:
    ```bash
    python -m venv venv
    ```
3.  **Activate the virtual environment**:
    - Windows (PowerShell):
        ```powershell
        .\venv\Scripts\Activate
        ```
    - macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
4.  **Install dependencies**:
    ```bash
    pip install Flask
    ```

### Running the Application

1.  **Start the Flask server**:
    ```bash
    python app.py
    ```
2.  **Open your browser** and navigate to:
    `http://127.0.0.1:5000`

### Running in Production (Linux)

1.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
2.  **Run with Gunicorn**:
    ```bash
    gunicorn -w 4 -b 0.0.0.0:8000 wsgi:app
    ```

## Customization

- **Data**: Modify `data.py` to change the schedule, speakers, or talks.
- **Styles**: Edit `static/css/style.css` to change the look and feel.
- **Templates**: Update `templates/index.html` or `templates/base.html` to modify the layout.

## Project Structure

```
.
├── app.py              # Main Flask application
├── wsgi.py             # WSGI entry point for Gunicorn
├── data.py             # Dummy data for the conference
├── templates/
│   ├── base.html       # Base HTML template
│   ├── index.html      # Home page template
│   ├── 404.html        # 404 Error page
│   └── 500.html        # 500 Error page
├── static/
│   ├── css/
│   │   └── style.css   # Stylesheet
│   └── js/
│       └── script.js   # Client-side scripts
├── requirements.txt    # Python dependencies
└── README.md           # Documentation
```
