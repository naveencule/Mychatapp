# My Chat App

This is a full-stack chat application built with Django for the backend and React for the frontend. It includes features for chat and interest messages, with a visually appealing interface inspired by FC Barcelona,The Club Of My life

## Prerequisites

- [Python] 3.x
- [Node.js] (includes npm)
- [Django]
- [Django REST Framework]
- [React]

## Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd mychatapp
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Apply migrations to set up the database:
    ```bash
    python manage.py migrate
    ```

5. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

The backend should now be running at `http://127.0.0.1:8000/`.

## Frontend Setup

1. Navigate to the React application directory:
    ```bash
    cd my-react-app
    ```

2. Install the necessary npm packages:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

The frontend should now be running at `http://localhost:3000/`.

## Running the Application

1. Make sure the Django backend server is running (`http://127.0.0.1:8000/`).
2. Make sure the React frontend server is running (`http://localhost:3000/`).
3. Open your browser and navigate to `http://localhost:3000/` to use the chat application.


## Acknowledgements

- FC Barcelona for the color inspiration.
- The Django and React communities for their excellent frameworks.

