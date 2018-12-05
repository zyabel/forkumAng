# ForkumAng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Dowload data.json to firebase

Add your data to the data.json file and
Run `node json-to-firestore.js` to download data.json information to DB.

## JSON generator

> Url: https://www.json-generator.com/

Schema: 
```

['{{repeat(15, 15)}}',
  {
    "information": {
      "cardTitle": "СПЛИТ СИСТЕМ COOPER&HUNTER CHML-IW" + '{{integer(0, 20)}}' + "AANK WITH WI-FI",
      "imgPath": "/",
      "price": '{{integer(1500, 12000)}}',
      "shortDesc": [
        "Низкий уровень шума «More Silence»",
        "Таймер",
        "Ночной режим",
        "Самодиагностика",
        "Осушение"
      ]  
    },
    "modal": {
      "description": '{{lorem(1, "paragraphs")}}'
    },
    "tableData": {
      "airCapacity": '{{integer(50, 1200)}}',
      "freezPower": '{{integer(1, 3)}}',
      "frion": "R410",
      "gasPipe": "9.53/3.8",
      "heatPower": '{{integer(1, 3)}}',
      "liquidPipe": "6.38/1.4",
      "mesuresInner": "860x153x299",
      "mesuresOutter": "860x553x399",
      "noise": "25/26/28/30/32/35/37",
      "square": '{{integer(10, 30)}}',
      "title_1": "Основные характеристики",
      "title_2": "Дополнительные характеристики",
      "title_3": "Габариты, вес",
      "typeInner": "Мульти-сплит внутренний блок",
      "typeOutter": "Настенный",
      "weightInner": '{{integer(5, 13)}}',
      "weightOutter": '{{integer(20, 50)}}' 
    }
 	}
]

```
