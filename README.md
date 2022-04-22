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
- MDIcons: [https://materialdesignicons.com/](https://materialdesignicons.com/)

## Componentes  
- [Theme](#theme)
- [SideBar](#sidebar)
- [BottomNavigation](#bottomNavigation)
- [Button](#button)
- [TextField](#id2)
- [List](#id2)
- [ChipList](#id2)
- [Tabs](#id2)
- [Notification](#id2)
- [ImagePicker](#id2)
- [ToggleButton](#id2)
- [MDIcon](#id2)
### Theme<a name="theme"></a>
El módulo Tema abarca completamente el uso de variables CSS para la tematización en tiempo de ejecución. Esto permite algunos casos de uso realmente potentes, como un modo oscuro incorporado o  paletas personalizadas para sus clientes.
```javascript
    import Theme from 'leita-components-ui/Theme'
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

### SideBar<a name="sidebar"></a>
Barra lateral desplegable
```javascript
    import { SideBar, SideBarItem } from 'leita-components-ui/SideBar'
```
```jsx
    <SideBar title="MyApp">
        <SideBarItem label="Text 1" icon="account" onClick={() => console.log('Hello')}/>
        <SideBarItem label="Text 2" icon="dots-horizontal" />
    </SideBar>
```
#### SideBar Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |
| `title` | `String \| null` | Texto especificado como etiqueta. |

#### SideBarItem Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `React.ReactNode` | Texto especificado como etiqueta. |
| `icon` | `String \| null` | Icono perteneciente a @midi/font |

### BottomNavigation<a name="bottomNavigation"></a>
Barra inferior de opciones
```javascript
    import { BottomNavigation, NavigationItem } from 'leita-components-ui/Navigation'
```
```jsx
    <BottomNavigation title="MyApp">
        <NavigationItem icon="view-list" label="List" />
        <NavigationItem icon="plus" label="Add" />
        <NavigationItem icon="account" label="Profile" />
    </BottomNavigation>
```
#### BottomNavigation Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |

#### NavigationItem Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `React.ReactNode` | Texto especificado como etiqueta. |
| `icon` | `String \| null` | Icono perteneciente a @midi/font |
| `active` | `true \| false` | Indica si el elemento se encuentra activado |

### Button<a name="button"></a>
Comunica la accion que se producirá cuando el usuario lo toque.
```javascript
    import Button from 'leita-components-ui/Button'
```
```jsx
    <Button label="Prueba" onClick={() => console.log('Hello')} trailingIcon="account" />
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |
| `label` | `React.ReactNode` | Texto especificado como etiqueta. |
| `className` |  `string \| null` | Clase css personalizada. |
| `disabled` | `true \| false` | Hace que el boton se inhabilite. |
| `fullWidth` | `true \| false` | Hace que el boton ocupe todo el ancho disponible.|
| `icon` | `String \| null` | Icono derecho perteneciente a @midi/font |
| `loading` |`true \| false` | Activa animacion de carga del boton. |
| `trailingIcon` | `String \| null` | Icono izquierdo perteneciente a @midi/font |
| `type` | `primary \| danger \| primary-outline \| dark-outline \| dark \| link \| link-primary \| link-dark` | Indica el estilo del boton. |
## License
[MIT](https://choosealicense.com/licenses/mit/)
