# mahabub-upwork-git-tra
git translation project in upwork in Dec 2023


### Install Instructions

1. Clone the repository
2. Run the docker commands, `docker compose build` and `docker compose up`
3. Open the browser and go to `http://localhost:3000/`

### Project Structure
**WIP**

### Project Details

The project is a simple web application that allows users to create translations for a given text. The application is built using the following technologies:

- Node.js
- Express.js
- PostgreSQL
- Docker
- Docker Compose
- Redis
- BullMQ


### API Documentation

1. ```GET /api/translations```

    Returns a list of all translations.

    **Response**

    ```json
    [
        {
            "id": 1,
            "text": "Hello World",
            "translations": [
                {
                    "id": 1,
                    "text": "Bonjour le monde",
                    "language": "French"
                }
            ]
        }
    ]
    ```

2. ```POST /api/translations```

    Creates a new translation.

    **Request**

    ```json
    {
        "text": "Hello World",
        "language": "French"
    }
    ```

    **Response**

    ```json
    {
        "id": 1,
        "text": "Hello World",
        "language": "French"
    }
    ```


### Features

---

### Version: 0.0.1

- Create the github API collection for the access and write.
- Create the Service caller for the doing translation task and write the translation in background.
- Create the Database Saving and fields for the saving.