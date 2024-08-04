from fastapi import APIRouter, Depends
from src.services.movie_service import MovieService

router = APIRouter()

@router.get('/backend/live')
def live():
    return 'live'

@router.get('/backend/movies/popular')
async def popular_movies(movie_service: MovieService = Depends()):
    return await movie_service.get_popular_movies()