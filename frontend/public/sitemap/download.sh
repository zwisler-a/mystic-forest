#!/bin/bash

# Base URL (replace with actual base path)
base_url="http://192.168.178.169:8080/"

# List of UTF-8 filenames
files=(
  "Icon_Bar.png"
  "Icon_CamperVan.png"
  "Icon_CampingZelt.png"
  "Icon_Lagerfeuerplatz.png"
  "Icon_Mondhain.png"
  "Icon_Mülltrennung.png"
  "Icon_Parkplatz_PKWohneSchlafenOnly.png"
  "Icon_Speisebereich.png"
  "Icon_Spielwiese.png"
  "Icon_tbd.png"
  "Icon_Toilettenwagen.png"
  "Icon_Wasserbrunnen.png"
  "Icon_WorkshopOase.png"
  "Icon_Wurzelwerk.png"
)

for file in "${files[@]}"; do
  encoded_file=$(python3 -c "import urllib.parse, sys; print(urllib.parse.quote(sys.argv[1]))" "$file")
  curl -L -o "$file" "${base_url}${encoded_file}"
done