# Leita Components UI

Ejercicio de creación de libreria de componentes para React JS

## Installation

```bash
    npm install leita-components-ui
```

Para usar los iconos instalar @mdi/font
```bash
    npm install @mdi/font
```

```javascript
    import '@mdi/font/css/materialdesignicons.min.css';
```

## Componentes  
- [Theme](#theme)
- [SideBar](#id2)
- [BottomNavigation](#id2)
- [Button](#id2)
- [TextField](#id2)
- [List](#id2)
- [ChipList](#id2)
- [Tabs](#id2)
- [Notification](#id2)
- [ImagePicker](#id2)
- [ToggleButton](#id2)
- [MDIcon](#id2)
### Theme<a name="theme"></a>
Carga colores y tipografía para ser usado por los otros componentes
```javascript
    import Theme from 'leita-components-ui/theme'
```
```jsx
    <Theme primary="#2274A5" fontFamily={['Raleway', 'BlinkMacSystemFont']}>
        <div className='container'> </div>
    </Theme>
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |
| `backgroundColor` | `'#fff' \| rgb(0, 0, 0)` | Color de backgroud de etiqueta body. |
| `primary` |  `'#fff' \| rgb(0, 0, 0)` | Color principal del tema. |
| `darkPrimary` | `'#fff' \| rgb(0, 0, 0)` | Color primario oscuro. |
| `accent` | `'#fff' \| rgb(0, 0, 0)` | Color de acento.|
| `success` | `'#fff' \| rgb(0, 0, 0)` | Color para acción correcta. |
| `warning` | `'#fff' \| rgb(0, 0, 0)` | Color para acción de advertencia. |
| `danger` | `'#fff' \| rgb(0, 0, 0)` | Color para acción de error. |
| `white` | `'#fff' \| rgb(0, 0, 0)` | Color blanco. |
| `black` | `'#fff' \| rgb(0, 0, 0)` | Color negro. |
| `shadow` | `'#fff' \| rgb(0, 0, 0)` | Color para sombra de elementos. |
| `fontFamily` | `['Raleway', 'BlinkMacSystemFont']` | Fuentes para el documento. |
## License
[MIT](https://choosealicense.com/licenses/mit/)
