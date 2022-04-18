# Leita Components UI

Ejercicio de creación de libreria de componentes para React JS

## Installation (Próximamente)

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage (Próximamente)

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Componentes
### Button
| Propiedades | Tipo | Descripción | Opciones |
| ----------- | ---- | ----------- | -------- |
| children | React.ReactNode | Compoente especificado como hijo | |
| className | String | Clase css personalizada| |
| disabled | Boolean | Hace que el boton se deshabilite | true / false / undefined |
| fullWidth | Boolean | El boton ocupa todo el espacio disponible | true / false / undefined |
| icon | String | Icono del boton (Izquierda) | materialdesignicons |
| label | String | Texto del boton | Prueba |
| loading | Boolean | Muestra un icono de carga | true / false / undefined |
| onClick | Function | Acción del boton | () => console.log("Hola mundo) |
| style | Object | Inserta estilos personalizados al boton| { margin-top: '5px' } |
| trailingIcon | String | Icono del boton (Derecha) | materialdesignicons |
| type | String | Tipo de boton que se desea usar | primary / danger / priamry-outline / dark-outline / dark / link / link-primary / link-dark |

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
| maxSizeMB | number | MB maximos permitidos por imagen (Por defecto) | 5000000 |
| onChange | Function | Cambio del selector de imagenes | (e) => console.log("Hola mundo) |
| multiple | boolean | indica si se permite la carga de varias imagenes | true / false |

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
