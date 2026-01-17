import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    "items": [
      {
        "id": 1,
        "name": "Samsung Smartphone Pro X1",
        "description": "High-performance Samsung Smartphone with Pro technology.",
        "long_description": "The all-new Samsung Smartphone Pro X1 is designed for professionals who demand the best. It features state-of-the-art Pro architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026001. Experience the future of technology with Samsung.",
        "price": 585,
        "image": "https://images.samsung.com/is/image/samsung/assets/us/2507/smartphones/smartphone-pcd/06272025/MobilePCD_CO11_bleedcard-1_Q7_DESIGN_MO.jpg?$720_850_JPG$"
      },
      {
        "id": 2,
        "name": "Sony Camera Max X2",
        "description": "High-performance Sony Camera with Max technology.",
        "long_description": "The all-new Sony Camera Max X2 is designed for professionals who demand the best. It features state-of-the-art Max architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026002. Experience the future of technology with Sony.",
        "price": 1529,
        "image": "https://www.redsharknews.com/hubfs/sony%20%20PXQ-Z200%20.jpg"
      },
      {
        "id": 3,
        "name": "Dell Headphones Elite X3",
        "description": "High-performance Dell Headphones with Elite technology.",
        "long_description": "The all-new Dell Headphones Elite X3 is designed for professionals who demand the best. It features state-of-the-art Elite architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026003. Experience the future of technology with Dell.",
        "price": 2278,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fVjQkD_PusbI-x7jg5P2qZFS7OULwrhESw&s"
      },
      {
        "id": 4,
        "name": "HP Watch Prime X4",
        "description": "High-performance HP Watch with Prime technology.",
        "long_description": "The all-new HP Watch Prime X4 is designed for professionals who demand the best. It features state-of-the-art Prime architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026004. Experience the future of technology with HP.",
        "price": 1152,
        "image": "https://cdn.andro4all.com/andro4all/2025/12/reloj-emporio-armani-ar11549.jpg"
      },
      {
        "id": 5,
        "name": "Asus Drone Neo X5",
        "description": "High-performance Asus Drone with Neo technology.",
        "long_description": "The all-new Asus Drone Neo X5 is designed for professionals who demand the best. It features state-of-the-art Neo architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026005. Experience the future of technology with Asus.",
        "price": 1731,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilIsjeXMdVcYbJMwFCgcpghXxVTffQ2TnTA&s"
      },
      {
        "id": 6,
        "name": "Logitech Monitor Core X6",
        "description": "High-performance Logitech Monitor with Core technology.",
        "long_description": "The all-new Logitech Monitor Core X6 is designed for professionals who demand the best. It features state-of-the-art Core architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026006. Experience the future of technology with Logitech.",
        "price": 2616,
        "image": "https://images.fonearena.com/blog/wp-content/uploads/2024/12/UltraGear-45GX950A-Gaming-Monitor-1024x589.jpg"
      },
      {
        "id": 7,
        "name": "Canon Mouse Hyper X7",
        "description": "High-performance Canon Mouse with Hyper technology.",
        "long_description": "The all-new Canon Mouse Hyper X7 is designed for professionals who demand the best. It features state-of-the-art Hyper architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026007. Experience the future of technology with Canon.",
        "price": 373,
        "image": "https://lh5.googleusercontent.com/proxy/1zNnIrxy1btCS0JG1zREN7SiLih_qPgkSmoVBQcKpzSJKwEx2P1ilysJo9LJ_K3wzLWO4-5XpAHLZg21-NBerUgaHbR-_AXS333YkOPmHqqzSQO1ChWi052Pgw"
      },
      {
        "id": 8,
        "name": "Nikon Keyboard Air X8",
        "description": "High-performance Nikon Keyboard with Air technology.",
        "long_description": "The all-new Nikon Keyboard Air X8 is designed for professionals who demand the best. It features state-of-the-art Air architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026008. Experience the future of technology with Nikon.",
        "price": 208,
        "image": "https://m.media-amazon.com/images/I/91TIKTmA8HL._SL1500_.jpg"
      },
      {
        "id": 9,
        "name": "Bose Tablet Z-Series X9",
        "description": "High-performance Bose Tablet with Z-Series technology.",
        "long_description": "The all-new Bose Tablet Z-Series X9 is designed for professionals who demand the best. It features state-of-the-art Z-Series architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026009. Experience the future of technology with Bose.",
        "price": 1742,
        "image": "https://www.gadgetmatch.com/wp-content/uploads/2025/07/gadgetmatch-20250709-unpacked-nyc-samsung-galaxy-fold-7-hinge-7.jpg"
      },
      {
        "id": 10,
        "name": "DJI Speaker Ultra X10",
        "description": "High-performance DJI Speaker with Ultra technology.",
        "long_description": "The all-new DJI Speaker Ultra X10 is designed for professionals who demand the best. It features state-of-the-art Ultra architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026010. Experience the future of technology with DJI.",
        "price": 423,
        "image": "https://dronelife.com/wp-content/uploads/2016/10/Screen-Shot-2016-10-25-at-9.51.20-AM.png"
      },
      {
        "id": 11,
        "name": "GoPro Console Pro X11",
        "description": "High-performance GoPro Console with Pro technology.",
        "long_description": "The all-new GoPro Console Pro X11 is designed for professionals who demand the best. It features state-of-the-art Pro architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026011. Experience the future of technology with GoPro.",
        "price": 1186,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvL59_-R9uVUwGD0KbIXPlNotBb_qkvX2Lw&s"
      },
      {
        "id": 12,
        "name": "Razer GPU Max X12",
        "description": "High-performance Razer GPU with Max technology.",
        "long_description": "The all-new Razer GPU Max X12 is designed for professionals who demand the best. It features state-of-the-art Max architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026012. Experience the future of technology with Razer.",
        "price": 243,
        "image": "https://macandegg-us.b-cdn.net/files/2018/05/Razer-Core-X-2018-Studio-Open-with-GPU_preview.png"
      },
      {
        "id": 13,
        "name": "Microsoft Router Elite X13",
        "description": "High-performance Microsoft Router with Elite technology.",
        "long_description": "The all-new Microsoft Router Elite X13 is designed for professionals who demand the best. It features state-of-the-art Elite architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026013. Experience the future of technology with Microsoft.",
        "price": 250,
        "image": "https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc4/Microsoft-Surface-Pro-11-OLED-windows-tablet-deal.jpg"
      },
      {
        "id": 14,
        "name": "LG Microphone Prime X14",
        "description": "High-performance LG Microphone with Prime technology.",
        "long_description": "The all-new LG Microphone Prime X14 is designed for professionals who demand the best. It features state-of-the-art Prime architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026014. Experience the future of technology with LG.",
        "price": 503,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6nFF_TqbfVZH6zNevF5ERRikrn_Bp0oESQ&s"
      },
      {
        "id": 15,
        "name": "Lenovo VR Headset Neo X15",
        "description": "High-performance Lenovo VR Headset with Neo technology.",
        "long_description": "The all-new Lenovo VR Headset Neo X15 is designed for professionals who demand the best. It features state-of-the-art Neo architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026015. Experience the future of technology with Lenovo.",
        "price": 2461,
        "image": "https://www.uploadvr.com/content/images/size/w1200/2017/12/lenovo-explorer-image.png"
      },
      {
        "id": 16,
        "name": "Apple Laptop Core X16",
        "description": "High-performance Apple Laptop with Core technology.",
        "long_description": "The all-new Apple Laptop Core X16 is designed for professionals who demand the best. It features state-of-the-art Core architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026016. Experience the future of technology with Apple.",
        "price": 2220,
        "image": "https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/06/07114410/MacBook-Air-M1.jpeg"
      },
      {
        "id": 17,
        "name": "Nintendo Console Switch X17",
        "description": "High-performance Nintendo Console with Switch technology.",
        "long_description": "The all-new Nintendo Console Switch X17 is designed for professionals who demand the best. It features state-of-the-art Switch architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026017. Experience the future of technology with Nintendo.",
        "price": 350,
        "image": "https://i.guim.co.uk/img/media/6031b8ef039e34150277184feab392ccf33be9dc/2_0_3773_2266/master/3773.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=38bf1effdd065035b5989b15483a0e42"
      },
      {
        "id": 18,
        "name": "NVIDIA Graphics Card RTX X18",
        "description": "High-performance NVIDIA Graphics Card with RTX technology.",
        "long_description": "The all-new NVIDIA Graphics Card RTX X18 is designed for professionals who demand the best. It features state-of-the-art RTX architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026018. Experience the future of technology with NVIDIA.",
        "price": 1599,
        "image": "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/overview/shop-2080-ti-1070@2x.jpg"
      },
      {
        "id": 19,
        "name": "JBL Speaker Boombox X19",
        "description": "High-performance JBL Speaker with Boombox technology.",
        "long_description": "The all-new JBL Speaker Boombox X19 is designed for professionals who demand the best. It features state-of-the-art Boombox architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026019. Experience the future of technology with JBL.",
        "price": 499,
        "image": "https://unwiredforsound.com/wp-content/uploads/2020/03/JBL-Boombox-1-2.jpg"
      },
      {
        "id": 20,
        "name": "Fitbit Tracker Charge X20",
        "description": "High-performance Fitbit Tracker with Charge technology.",
        "long_description": "The all-new Fitbit Tracker Charge X20 is designed for professionals who demand the best. It features state-of-the-art Charge architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026020. Experience the future of technology with Fitbit.",
        "price": 149,
        "image": "https://cdn.mos.cms.futurecdn.net/50eec40ea7749e824e0cd51018c81dcb.jpg"
      },
      {
        "id": 21,
        "name": "Corsair Keyboard Mechanical X21",
        "description": "High-performance Corsair Keyboard with Mechanical technology.",
        "long_description": "The all-new Corsair Keyboard Mechanical X21 is designed for professionals who demand the best. It features state-of-the-art Mechanical architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026021. Experience the future of technology with Corsair.",
        "price": 199,
        "image": "https://d1q3zw97enxzq2.cloudfront.net/images/K70_PRO_MINI_WIRELESS_PBT_HERO_T.width-1000.format-webp.webp"
      },
      {
        "id": 22,
        "name": "Seagate SSD FireCuda X22",
        "description": "High-performance Seagate SSD with FireCuda technology.",
        "long_description": "The all-new Seagate SSD FireCuda X22 is designed for professionals who demand the best. It features state-of-the-art FireCuda architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026022. Experience the future of technology with Seagate.",
        "price": 230,
        "image": "https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/products/gaming-drive/pc-gaming/firecuda-gaming-ssd/_shared/images/firecuda-gaming-ssd-page-row-7-1440x1080.jpg"
      },
      {
        "id": 23,
        "name": "Panasonic Camera Lumix X23",
        "description": "High-performance Panasonic Camera with Lumix technology.",
        "long_description": "The all-new Panasonic Camera Lumix X23 is designed for professionals who demand the best. It features state-of-the-art Lumix architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026023. Experience the future of technology with Panasonic.",
        "price": 1899,
        "image": "https://nofilmschool.com/media-library/panasonic-lumix-firmware-updates.jpg?id=55825715&width=1245&height=700&coordinates=0%2C37%2C0%2C38"
      },
      {
        "id": 24,
        "name": "OnePlus Smartwatch Cobalt X24",
        "description": "High-performance OnePlus Smartwatch with Cobalt technology.",
        "long_description": "The all-new OnePlus Smartwatch Cobalt X24 is designed for professionals who demand the best. It features state-of-the-art Cobalt architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026024. Experience the future of technology with OnePlus.",
        "price": 280,
        "image": "https://st.gsmarena.com/imgroot/news/21/07/oneplus-watch-cobalt-edition/-1200w5/gsmarena_023.jpg"
      },
      {
        "id": 25,
        "name": "Intel Processor Core X25",
        "description": "High-performance Intel Processor with Core technology.",
        "long_description": "The all-new Intel Processor Core X25 is designed for professionals who demand the best. It features state-of-the-art Core architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026025. Experience the future of technology with Intel.",
        "price": 550,
        "image": "https://intelcorp.scene7.com/is/image/intelcorp/cpu-still:1920-1080?wid=720&hei=405"
      },
      {
        "id": 26,
        "name": "AMD Processor Ryzen X26",
        "description": "High-performance AMD Processor with Ryzen technology.",
        "long_description": "The all-new AMD Processor Ryzen X26 is designed for professionals who demand the best. It features state-of-the-art Ryzen architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026026. Experience the future of technology with AMD.",
        "price": 520,
        "image": "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/1413018-am5-ryzen.jpg"
      },
      {
        "id": 27,
        "name": "Xiaomi Scooter Electric X27",
        "description": "High-performance Xiaomi Scooter with Electric technology.",
        "long_description": "The all-new Xiaomi Scooter Electric X27 is designed for professionals who demand the best. It features state-of-the-art Electric architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026027. Experience the future of technology with Xiaomi.",
        "price": 650,
        "image": "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-electric-scooter-4-ultra/m/m/video1_m.jpg"
      },
      {
        "id": 28,
        "name": "Sennheiser Microphone Vocal X28",
        "description": "High-performance Sennheiser Microphone with Vocal technology.",
        "long_description": "The all-new Sennheiser Microphone Vocal X28 is designed for professionals who demand the best. It features state-of-the-art Vocal architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026028. Experience the future of technology with Sennheiser.",
        "price": 350,
        "image": "https://www.sennheiser.com/cdn-cgi/image/width=1920,format=avif,quality=75/globalassets/digizuite/48928-en-xs_wireless_2_vocalset_product_mood_shot_front_view.jpg/SennheiserFullWidth"
      },
      {
        "id": 29,
        "name": "Wacom Tablet Cintiq X29",
        "description": "High-performance Wacom Tablet with Cintiq technology.",
        "long_description": "The all-new Wacom Tablet Cintiq X29 is designed for professionals who demand the best. It features state-of-the-art Cintiq architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026029. Experience the future of technology with Wacom.",
        "price": 800,
        "image": "https://m.media-amazon.com/images/I/71x8R8QamHL.jpg"
      },
      {
        "id": 30,
        "name": "Garmin Watch Fenix X30",
        "description": "High-performance Garmin Watch with Fenix technology.",
        "long_description": "The all-new Garmin Watch Fenix X30 is designed for professionals who demand the best. It features state-of-the-art Fenix architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026030. Experience the future of technology with Garmin.",
        "price": 799,
        "image": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/Garmin-suunto-strava-issues-kv.jpg"
      },
      {
        "id": 31,
        "name": "Philips Light Hue X31",
        "description": "High-performance Philips Light with Hue technology.",
        "long_description": "The all-new Philips Light Hue X31 is designed for professionals who demand the best. It features state-of-the-art Hue architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026031. Experience the future of technology with Philips.",
        "price": 90,
        "image": "https://www.assets.signify.com/is/image/Signify/4116331P9-carousel-PUP_01?wid=1280&hei=960&qlt=82"
      },
      {
        "id": 32,
        "name": "Bang & Olufsen Headphone Beoplay X32",
        "description": "High-performance Bang & Olufsen Headphone with Beoplay technology.",
        "long_description": "The all-new Bang & Olufsen Headphone Beoplay X32 is designed for professionals who demand the best. It features state-of-the-art Beoplay architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026032. Experience the future of technology with Bang & Olufsen.",
        "price": 549,
        "image": "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22405325/beoplayportallede.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100"
      },
      {
        "id": 33,
        "name": "Google Smartphone Pixel X33",
        "description": "High-performance Google Smartphone with Pixel technology.",
        "long_description": "The all-new Google Smartphone Pixel X33 is designed for professionals who demand the best. It features state-of-the-art Pixel architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026033. Experience the future of technology with Google.",
        "price": 699,
        "image": "https://static.beebom.com/wp-content/uploads/2018/06/pixel-3-render-new-new.jpg?w=752&quality=75"
      },
      {
        "id": 34,
        "name": "Amazon Tablet Fire X34",
        "description": "High-performance Amazon Tablet with Fire technology.",
        "long_description": "The all-new Amazon Tablet Fire X34 is designed for professionals who demand the best. It features state-of-the-art Fire architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026034. Experience the future of technology with Amazon.",
        "price": 149,
        "image": "https://cdn.mos.cms.futurecdn.net/UH7J2P3FGRvYdToQa3hATb.jpg"
      },
      {
        "id": 35,
        "name": "Tesla Charger Super X35",
        "description": "High-performance Tesla Charger with Super technology.",
        "long_description": "The all-new Tesla Charger Super X35 is designed for professionals who demand the best. It features state-of-the-art Super architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026035. Experience the future of technology with Tesla.",
        "price": 250,
        "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1243437710.jpeg?c=original"
      },
      {
        "id": 36,
        "name": "Dyson Fan Blade X36",
        "description": "High-performance Dyson Fan with Blade technology.",
        "long_description": "The all-new Dyson Fan Blade X36 is designed for professionals who demand the best. It features state-of-the-art Blade architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026036. Experience the future of technology with Dyson.",
        "price": 399,
        "image": "https://www.lb.dyson.com/medialibrary/Group/Carousels/SlideBackground/FansHeaters/Fans/AM01-02-03/Large/AM01_Cooling_Tech_1000x560.ashx?h=560&iar=0&w=1000&la=en&hash=7620F768BB2272C0DDB2A270785DEAC6"
      },
      {
        "id": 37,
        "name": "Alienware Laptop Area51 X37",
        "description": "High-performance Alienware Laptop with Area51 technology.",
        "long_description": "The all-new Alienware Laptop Area51 X37 is designed for professionals who demand the best. It features state-of-the-art Area51 architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026037. Experience the future of technology with Alienware.",
        "price": 2799,
        "image": "https://i.pcmag.com/imagery/articles/01oN03DkhXp3JIj5jBahM9G-1.fit_lim.size_1050x.jpg"
      },
      {
        "id": 38,
        "name": "Meta VR Quest X38",
        "description": "High-performance Meta VR with Quest technology.",
        "long_description": "The all-new Meta VR Quest X38 is designed for professionals who demand the best. It features state-of-the-art Quest architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026038. Experience the future of technology with Meta.",
        "price": 499,
        "image": "https://techcrunch.com/wp-content/uploads/2019/04/Oculus-Quest-2.jpg"
      },
      {
        "id": 39,
        "name": "Sonos Speaker Era X39",
        "description": "High-performance Sonos Speaker with Era technology.",
        "long_description": "The all-new Sonos Speaker Era X39 is designed for professionals who demand the best. It features state-of-the-art Era architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026039. Experience the future of technology with Sonos.",
        "price": 449,
        "image": "https://www.popsci.com/wp-content/uploads/2023/03/07/Sonos-Era-300-speaker-in-Santa-Barbara-demo-room.jpg?quality=85&w=768"
      },
      {
        "id": 40,
        "name": "FujiFilm Camera Instax X40",
        "description": "High-performance FujiFilm Camera with Instax technology.",
        "long_description": "The all-new FujiFilm Camera Instax X40 is designed for professionals who demand the best. It features state-of-the-art Instax architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026040. Experience the future of technology with FujiFilm.",
        "price": 120,
        "image": "https://www.thephoblographer.com/wp-content/uploads/2021/05/Chris-Gampat-The-Phoblographer-Fujifilm-Instax-Mini-40-review-product-images-2.81-100s200-11.jpg"
      },
      {
        "id": 41,
        "name": "WD Drive Passport X41",
        "description": "High-performance WD Drive with Passport technology.",
        "long_description": "The all-new WD Drive Passport X41 is designed for professionals who demand the best. It features state-of-the-art Passport architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026041. Experience the future of technology with WD.",
        "price": 110,
        "image": "https://datarecoverylab.nz/wp-content/uploads/2022/06/wd_my_passport.jpeg"
      },
      {
        "id": 42,
        "name": "Rode Mic Pod X42",
        "description": "High-performance Rode Mic with Pod technology.",
        "long_description": "The all-new Rode Mic Pod X42 is designed for professionals who demand the best. It features state-of-the-art Pod architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026042. Experience the future of technology with Rode.",
        "price": 199,
        "image": "https://wilcoxsound.com/wp-content/uploads/2024/11/Rode-PodMicUSB-Black-2.jpg"
      },
      {
        "id": 43,
        "name": "Elgato Stream Deck X43",
        "description": "High-performance Elgato Stream with Deck technology.",
        "long_description": "The all-new Elgato Stream Deck X43 is designed for professionals who demand the best. It features state-of-the-art Deck architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026043. Experience the future of technology with Elgato.",
        "price": 149,
        "image": "https://res.cloudinary.com/elgato-pwa/image/upload/v1676211852/Products/10GBD9901/above-the-fold/desktop/sd_-abf-desktop-02_aw53j9.jpg"
      },
      {
        "id": 44,
        "name": "Keychron Keyboard Q1 X44",
        "description": "High-performance Keychron Keyboard with Q1 technology.",
        "long_description": "The all-new Keychron Keyboard Q1 X44 is designed for professionals who demand the best. It features state-of-the-art Q1 architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026044. Experience the future of technology with Keychron.",
        "price": 169,
        "image": "https://vibegaming.com.bd/wp-content/uploads/2021/08/Screenshot-2021-08-21-033118.jpeg"
      },
      {
        "id": 45,
        "name": "Anker PowerBank Prime X45",
        "description": "High-performance Anker PowerBank with Prime technology.",
        "long_description": "The all-new Anker PowerBank Prime X45 is designed for professionals who demand the best. It features state-of-the-art Prime architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026045. Experience the future of technology with Anker.",
        "price": 99,
        "image": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/prime-family.001.jpeg?quality=90&strip=all&crop=21.875,0,56.25,100"
      },
      {
        "id": 46,
        "name": "Starlink Dish Standard X46",
        "description": "High-performance Starlink Dish with Standard technology.",
        "long_description": "The all-new Starlink Dish Standard X46 is designed for professionals who demand the best. It features state-of-the-art Standard architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026046. Experience the future of technology with Starlink.",
        "price": 599,
        "image": "https://i.pcmag.com/imagery/articles/04tmf1VpItypasEabkAeFPW-1..v1706721449.jpg"
      },
      {
        "id": 47,
        "name": "Nothing Phone Glyph X47",
        "description": "High-performance Nothing Phone with Glyph technology.",
        "long_description": "The all-new Nothing Phone Glyph X47 is designed for professionals who demand the best. It features state-of-the-art Glyph architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026047. Experience the future of technology with Nothing.",
        "price": 650,
        "image": "https://www.androidauthority.com/wp-content/uploads/2022/07/nothing-phone-1-glyph-on-rear-scaled.jpeg"
      },
      {
        "id": 48,
        "name": "Valve Console Steam X48",
        "description": "High-performance Valve Console with Steam technology.",
        "long_description": "The all-new Valve Console Steam X48 is designed for professionals who demand the best. It features state-of-the-art Steam architecture, ensuring lightning-fast performance for all your tasks. With a battery life that lasts up to 24 hours and a durable build quality, this device is your perfect daily companion. It comes with a 2-year official warranty, premium packaging, and exclusive accessories. Serial Number: #2026048. Experience the future of technology with Valve.",
        "price": 399,
        "image": "https://metro.co.uk/wp-content/uploads/2024/12/SEI_232177932-bdf8.jpg?quality=90&strip=all&w=646"
      },
      {
        "id": 1768599565937,
        "name": "vision-pro",
        "price": 1900,
        "description": "Featuring the new powerful M5 chip and comfortable Dual Knit Band, Apple Vision Pro seamlessly blends digital content with your physical space.",
        "long_description": " Its stunning display boasts 23 million pixels powered by Micro-OLED technology, bringing every detail to life with vibrant clarity. Enjoy smooth visuals thanks to high refresh rates of up to 100Hz, enhancing your viewing pleasure. Powered by the advanced Apple M2 Chip, Vision Pro is equipped with cutting-edge sensors and a stereoscopic camera system to capture immersive spatial photos and videos with precision. Immerse yourself in smarter Spatial Audio with Dolby Atmos, delivering rich audio tones while you watch movies and TV shows on Netflix and Amazon Prime. Benefit from personalized Spatial Audio, secure Optic ID authentication, and seamless connectivity with Wi-Fi 6 and Bluetooth 5.3. Step into a world of innovation and elevate your digital viewing experience with Apple Vision Pro.",
        "image": "https://www.vrarworld.cn/uploads/20231222/1622b2bffe055ad0f41938b6b8c1403d.jpg"
      },
      {
        "id": 1768599667505,
        "name": "macebook-pro",
        "price": 3799,
        "description": "MacBook Pro laptop with M5, M4 Pro, and M4 Max chips. Built for AI and Apple Intelligence. Up to 24 hours of battery life. Liquid Retina XDR display.",
        "long_description": "Apple’s latest Apple MacBook addition, the MacBook Pro M3, comes with a 12-core CPU and an 18-core GPU. The most advanced Apple M3 pro chip is used in this MacBook ensuring the users get the highest performance while doing any task. It comes with 18GB of dedicated memory, enabling you to perform intensive multitasking at the same time simultaneously. Its amazing retina display and Dolby Atmos sound system ensure the best experience while watching content, editing videos, or gaming. Enjoy up to 22 hours of battery life and an uninterrupted wireless connection with its wifi 6E and Bluetooth 5.3. Live up to your imagination with this latest MacBook Pro M3.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydLJMoDBQEVnWHrMpCRy3OhyUO1-J_Z3SQA&s"
      },
      {
        "id": 1768599824817,
        "name": "assus proart",
        "price": 3499,
        "description": "ProArt StudioBook laptops deliver professional-grade graphics performance on the go. Filmmaking & Video Editing Accelerate complex 4K or 8K post-production",
        "long_description": "Accelerate complex 4K or 8K post-production workflows in tools like AdobeR Premiere Pro and DaVinci Resolve, and deliver your story by deadline   Experience powerful and reliable performance for efficient modeling and rendering in MayaR, Octane Render, Unreal and more.   Visualize and achieve complex artwork and mixed media with color-accurate results in tools like AdobeR Illustrator, InDesign and After Effects.",
        "image": "https://peterfalkingham.com/wp-content/uploads/2024/12/dsc_7522.jpg?w=1000"
      },
      {
        "id": 1768600037740,
        "name": "Apple 17 pro max",
        "price": 1999,
        "description": "The new internal design creates significant additional room for battery capacity, giving iPhone 17 Pro Max the best-ever iPhone battery life, and up to 4 more ",
        "long_description": "The latest iPhone models come packed with advanced capabilities. Helpful Apple Intelligence features such as visual intelligence13 and Writing Tools to make your everyday easier. Fast, secure connections with Wi‑Fi 7,14 Bluetooth 6, 5G connectivity,15 and eSIM.16 And safety features like Messages via satellite designed to give you peace of mind. The new iOS design reflects and refracts what’s beneath it in real time, dynamically adapting to your content across apps and devices.",
        "image": "https://helios-i.mashable.com/imagery/articles/02XQYYiuPY8AZ6AWXywH6qS/hero-image.fill.size_1200x675.v1757937839.png"
      }
    ]
  };

  return NextResponse.json(data.items);
}