import httpx
from src.core.config import Settings

settings = Settings()

def get_tmdb_client():
    return httpx.AsyncClient(base_url=settings.tmdb_api_url, headers={"Authorization": f"Bearer {settings.tmdb_api_key}"})
