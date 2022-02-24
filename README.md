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

## License
[MIT](https://choosealicense.com/licenses/mit/)
