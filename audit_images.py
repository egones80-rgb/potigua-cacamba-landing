import asyncio
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 1800})
        page = await context.new_page()

        print("Navigating to http://localhost:8080...")
        
        # Listen for failed requests
        failed_requests = []
        page.on("requestfailed", lambda request: failed_requests.append({
            "url": request.url,
            "errorText": request.failure if request.failure else "Unknown error"
        }))

        # Listen for response status codes
        responses = []
        page.on("response", lambda response: responses.append({
            "url": response.url,
            "status": response.status
        }))

        await page.goto("http://localhost:8080", wait_until="networkidle")
        
        # Audit <img> elements
        img_audit = await page.evaluate("""
            () => {
                const images = Array.from(document.querySelectorAll('img'));
                return images.map(img => ({
                    src: img.src,
                    alt: img.alt,
                    naturalWidth: img.naturalWidth,
                    naturalHeight: img.naturalHeight,
                    complete: img.complete,
                    currentSrc: img.currentSrc,
                    offsetParent: !!img.offsetParent
                }));
            }
        """)

        report = {
            "img_elements": img_audit,
            "failed_requests": failed_requests,
            "responses": [r for r in responses if "/__l5e/" in r["url"] or r["url"].endswith(".jpg") or r["url"].endswith(".png")]
        }

        with open("/tmp/image_audit_report.json", "w") as f:
            json.dump(report, f, indent=2)

        print(f"Audit complete. Found {len(img_audit)} images.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
