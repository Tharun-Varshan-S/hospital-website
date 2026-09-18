from PIL import Image

img = Image.open("public/images/hero-screenshot.png")
width, height = img.size

# Let's crop it manually. We want to remove the navbar (top ~100px).
# We want the right side (from maybe x=1000 to x=2087).
# We want to keep the bottom caption (up to y=754).
# Let's save a crop to see its size.
crop_box = (1000, 100, 2050, 720)
cropped = img.crop(crop_box)
cropped.save("public/images/hero-artwork.png")
print("Cropped saved. Size:", cropped.size)
