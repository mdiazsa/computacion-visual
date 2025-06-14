
# 📝 Informe de Detección y Segmentación de Objetos con YOLOv8 y SAM en Google Colab

## 📌 Objetivo

El objetivo de este trabajo es implementar un pipeline de visión por computador en Google Colab que permita:

- Cargar una imagen desde Google Drive.
- Detectar objetos en la imagen utilizando el modelo YOLOv8.
- Segmentar los objetos detectados usando Segment Anything Model (SAM).
- Visualizar los resultados (cajas y máscaras).
- Guardar las detecciones en un archivo CSV con el nombre de la clase y las coordenadas de la caja delimitadora.

---

## 📂 1. Carga de Imagen desde Google Drive

Se utilizó la API de Google Colab para montar Google Drive y acceder a una imagen ubicada en la carpeta del usuario. La imagen fue visualizada utilizando la biblioteca `PIL` y `matplotlib`.

```python
from google.colab import drive
drive.mount('/content/drive')
...
img = Image.open(image_path)
plt.imshow(img)
```

> ✅ Resultado: la imagen fue cargada correctamente desde Drive y se mostró en el cuaderno.

---

## 🎯 2. Detección de Objetos con YOLOv8

Se utilizó el modelo YOLOv8 (`yolov8n.pt`) de la librería `ultralytics` para detectar objetos en la imagen cargada.

```python
model = YOLO('yolov8n.pt')
results = model(img)
```

Posteriormente, se imprimieron las clases detectadas junto a sus coordenadas de caja delimitadora (`xmin`, `ymin`, `xmax`, `ymax`).

> ✅ Resultado: se identificaron y mostraron múltiples objetos con sus respectivas clases y coordenadas.

---

## 🖼️ 3. Visualización de Resultados de Detección

Se visualizaron las cajas delimitadoras sobre la imagen utilizando:

```python
results[0].plot()
plt.imshow(results[0].plot())
```

> 🖼️ Resultado: imagen con las detecciones superpuestas, lista para análisis visual.

---

## ✂️ 4. Segmentación con Segment Anything Model (SAM)

Se empleó `SAM` (modelo `sam_b.pt`) para refinar las detecciones de YOLO usando segmentación basada en las cajas predichas.

```python
sam = SAM('sam_b.pt')
sam_results = sam(img, bboxes=[coords])
```

Cada máscara generada fue visualizada superpuesta a la imagen original:

```python
plt.imshow(img)
plt.imshow(mask, cmap='viridis', alpha=0.5)
```

> ✅ Resultado: se generaron máscaras segmentadas que permiten una mejor comprensión de la forma de cada objeto.

---

## 📄 5. Exportación de Resultados a CSV

Se guardaron los resultados de detección en un archivo `.csv` con el siguiente formato:

| Class Name | xmin | ymin | xmax | ymax |
|------------|------|------|------|------|

El código correspondiente fue:

```python
with open(csv_file_path, mode='w', newline='') as file:
    ...
    writer.writerow([class_name, coords[0], coords[1], coords[2], coords[3]])
```

> ✅ Resultado: se generó correctamente el archivo `detections.csv` en Google Drive.

---

## 🧠 Conclusiones

- Se demostró una integración exitosa de múltiples modelos de visión por computador: YOLOv8 para detección y SAM para segmentación.
- El flujo completo (desde carga de datos hasta exportación de resultados) fue implementado eficientemente en Colab.
- Este pipeline puede ser fácilmente escalado para conjuntos de imágenes o usado como base para tareas más complejas como reconocimiento semántico o tracking.

