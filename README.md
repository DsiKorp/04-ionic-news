# 04-ionic-news

Aplicación móvil de noticias desarrollada con Ionic y Angular, que consume la API de **NewsAPI.org** para mostrar titulares y noticias por categoría.

## Tecnologias

- **Ionic Framework** 8.0 - Framework UI móvil
- **Angular** 20.0 - Framework de desarrollo
- **Capacitor** 8.3.1 - Acceso nativo a funcionalidades del dispositivo
- **Apache Cordova** - Soporte para plugins nativos
- **RxJS** 7.8 - Programación reactiva
- **TypeScript** 5.9

## Dependencias principales

| Paquete | Proposito |
|---------|-----------|
| `@ionic/angular` | Componentes UI estilo Material Design |
| `@capacitor/core` | API nativa de Capacitor |
| `@capacitor/haptics` | Feedback háptico |
| `@capacitor/status-bar` | Control de barra de estado |
| `@awesome-cordova-plugins/in-app-browser` | Abrir enlaces en navegador en-app |
| `@angular/common/http` | Peticiones HTTP a la API |

## Estructura del proyecto

```
src/app/
├── components/
│   ├── article/           # Tarjeta individual de noticia
│   └── articles/          # Lista de articulos/noticias
├── interfaces/
│   └── index.ts          # Definiciones: Article, NewsResponse, etc.
├── pages/
│   ├── tab1/             # Tab de titulares business (infinite scroll)
│   ├── tab2/             # Tab de categorias (segment + infinite scroll)
│   ├── tab3/             # Tab vacio/reservado
│   └── tabs/             # Navegacion por tabs
├── services/
│   └── news.service.ts    # Servicio API NewsAPI.org
└── app.component.ts       # Componente raiz
```

## Funcionalidades

### Pestanas

1. **Tab 1 - Inicio**: Muestra titulares de categoria `business` con scroll infinito
2. **Tab 2 - Categorias**: Selector de segmento para filtrar por categoria (business, entertainment, general, health, science, sports, technology) con scroll infinito
3. **Tab 3**: Reservada

### Servicios

- **NewsService**: Gestiona peticiones HTTP a `https://newsapi.org/v2` y almacena en caché los artículos por categoría para optimizar peticiones

### Componentes

- **ArticleComponent**: Tarjeta de noticia individual con imagen, título y descripción. Abre el artículo completo en el navegador nativo (InAppBrowser) o en nueva pestaña
- **ArticlesComponent**: Contenedor de lista de artículos

## Configuracion API

La API key de NewsAPI.org se configura en `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiKey: 'cdff27e3afe540d0a91c0522e755b60d',
  urlApi: 'https://newsapi.org/v2'
};
```

> **Nota**: La API key incluida es de demo. Para producción, obtener una key en [newsapi.org](https://newsapi.org).

## Scripts disponibles

```bash
npm install                # Instalar dependencias
ionic serve               # Iniciar servidor de desarrollo
ionic build               # Compilar para produccion
ionic run ios             # Ejecutar en iOS (requiere Xcode)
ionic run android         # Ejecutar en Android (requiere Android SDK)
npx cap sync              # Sincronizar cambios de web a nativo
```

## Categorias disponibles

Las categorias se definen en `Tab2Page` y son las admitidas por NewsAPI:

- `business`
- `entertainment`
- `general`
- `health`
- `science`
- `sports`
- `technology`
