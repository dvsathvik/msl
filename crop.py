from PIL import Image
import os

images = [
    ("C:\\Users\\dvsat\\.gemini\\antigravity-ide\\brain\\9fd8374e-d325-4cce-bbaa-23e73deb1482\\mfg_iot_raw_1781770699424.png", "mfg_iot.png"),
    ("C:\\Users\\dvsat\\.gemini\\antigravity-ide\\brain\\9fd8374e-d325-4cce-bbaa-23e73deb1482\\mfg_safeload_raw_1781770713850.png", "mfg_safeload.png"),
    ("C:\\Users\\dvsat\\.gemini\\antigravity-ide\\brain\\9fd8374e-d325-4cce-bbaa-23e73deb1482\\mfg_diagnostics_raw_1781770732835.png", "mfg_diagnostics.png")
]

out_dir = r"c:\Users\dvsat\Desktop\MSL\public\assets\img\hero\generated"
os.makedirs(out_dir, exist_ok=True)

for in_path, out_name in images:
    if os.path.exists(in_path):
        img = Image.open(in_path)
        # Original is 1024x1024. We want 1024x576 (16:9).
        # Diff is 448 pixels total. 224 from top, 224 from bottom.
        left = 0
        top = 224
        right = 1024
        bottom = 1024 - 224
        cropped_img = img.crop((left, top, right, bottom))
        cropped_img.save(os.path.join(out_dir, out_name))
        print(f"Cropped and saved {out_name}")
    else:
        print(f"Not found: {in_path}")
