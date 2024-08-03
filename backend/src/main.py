from fastapi import FastAPI

app = FastAPI()

@app.get("/random-movies")
def get_random_movies():
    return [
        {"title": "Inception", "year": 2010},
        {"title": "The Matrix", "year": 1999},
        {"title": "Interstellar", "year": 2014}
    ]