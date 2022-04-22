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
| ----------- | ---- | ----------- | -------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo.|
| `backgroundColor` | `'#fff' | rgb(0, 0, 0)` | Color de backgroud de etiqueta body.|
| `primary` |  `'#fff' | rgb(0, 0, 0)` | Color principal del tema.|
| `darkPrimary` | `'#fff' | rgb(0, 0, 0)` | Color primario oscuro.|
| `accent` | `'#fff' | rgb(0, 0, 0)` | Color de acento.|
| `success` | `'#fff' | rgb(0, 0, 0)` | Color para acción correcta.|
| `warning` | `'#fff' | rgb(0, 0, 0)` | Color para acción de advertencia.|
| `danger` | `'#fff' | rgb(0, 0, 0)` | Color para acción de error.|
| `white` | `'#fff' | rgb(0, 0, 0)` | Color blanco.|
| `black` | `'#fff' | rgb(0, 0, 0)` | Color negro.|
| `shadow` | `'#fff' | rgb(0, 0, 0)` | Color para sombra de elementos.|
| `fontFamily` | `['Raleway', 'BlinkMacSystemFont']` | Fuentes para el documento.|

### Ejemplo
```javascript
<Button
    label='Prueba'
    onClick={() => console.log("HOLAAAA")}
    trailingIcon='account'
    disabled
/>
```

### Image Picker
| Propiedades | Tipo | Descripción | Opciones |
| ----------- | ---- | ----------- | -------- |
| imageList | Array | Array de imagenes | [Buffer, url] |
| maxSize | number | Cantidad maxima de imagenes permitidas | 5 (Por defecto) |
| maxSizeMB | number | MB maximos permitidos por imagen | 5000000 (Por defecto) |
| onChange | Function | Cambio del selector de imagenes | (e) => console.log("Hola mundo) |
| multiple | boolean | indica si se permite la carga de varias imagenes | true (Por defecto) / false |

### Ejemplo
```javascript
<ImagePicker 
    multiple
    maxSize={5}
    maxSizeMB={5000000}
    onChange={(e) => onChangeFile(e)}
    imageList={imageList}
    />
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
