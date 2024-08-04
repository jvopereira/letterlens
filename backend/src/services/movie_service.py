from fastapi import HTTPException
from src.core.factory import get_tmdb_client

class MovieService:
    def __init__(self):
        self.client = get_tmdb_client()

    async def get_popular_movies(self):
        response = await self.client.get("/movie/popular")
        if response.status_code == 200:
            return response.json()['results']
        else:
            raise HTTPException(status_code=response.status_code, detail=response.json()['status_message'])