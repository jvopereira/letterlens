from fastapi import FastAPI, HTTPException
from src.api.routes import movies
from src.middlewares.auth import verify_token

app = FastAPI()

app.include_router(movies.router)

@app.middleware("http")
async def auth_middleware(request, call_next):
    if request.url.path in ["/backend/live"]:
        return await call_next(request)
    
    authorization: str = request.headers.get("Authorization")
    if authorization:
        auth_token = authorization.split(" ")[1]
        await verify_token(auth_token)
    else:
        raise HTTPException(status_code=401, detail="Authorization header missing")
    
    response = await call_next(request)
    return response