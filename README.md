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
- [TextField](#textfield)
- [TextArea](#textarea)
- [Select](#select)
- [List](#list)
- [ChipList](#chiplist)
- [Tabs](#tabs)
- [Notification](#notification)
- [ImagePicker](#imagepicker)
- [ToggleButton](#togglebutton)
- [MDIcon](#mdicon)
### Theme<a name="theme"></a>
El módulo Tema abarca completamente el uso de variables CSS para la tematización en tiempo de ejecución. Esto permite algunos casos de uso realmente potentes, como un modo oscuro incorporado o  paletas personalizadas para sus clientes.
```javascript
    import { Theme } from 'leita-components-ui'
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
    import { SideBar, SideBarItem } from 'leita-components-ui'
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
| `label` | `string \| null` | Texto especificado como etiqueta. |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |

### BottomNavigation<a name="bottomNavigation"></a>
Barra inferior de opciones
```javascript
    import { BottomNavigation, NavigationItem } from 'leita-components-ui'
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
| `label` | `string \| null` | Texto especificado como etiqueta. |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |
| `active` | `true \| false` | Indica si el elemento se encuentra activado |

### Button<a name="button"></a>
Comunica la accion que se producirá cuando el usuario lo toque.
```javascript
    import { Button } from 'leita-components-ui'
```
```jsx
    <Button label="Prueba" onClick={() => console.log('Hello')} trailingIcon="account" />
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |
| `label` | `string \| null` | Texto especificado como etiqueta. |
| `className` |  `string \| null` | Clase css personalizada. |
| `disabled` | `true \| false` | Hace que el boton se inhabilite. |
| `fullWidth` | `true \| false` | Hace que el boton ocupe todo el ancho disponible.|
| `icon` | `String \| null` | Icono derecho perteneciente a @mdi/font |
| `loading` |`true \| false` | Activa animacion de carga del boton. |
| `trailingIcon` | `String \| null` | Icono izquierdo perteneciente a @mdi/font |
| `type` | `primary \| danger \| primary-outline \| dark-outline \| dark \| link \| link-primary \| link-dark` | Indica el estilo del boton. |

### TextField<a name="textfield"></a>
Permite a los usuarios ingresar editar y seleccionar texto.
```javascript
    import { TextField } from 'leita-components-ui'
```
```jsx
    <TextField label="Prueba" id="prueba" />
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `string` | Texto especificado como etiqueta. |
| `value` | `string \| null` | Valor de entrada |
| `type` | `html values` | Valores que puede recibir el textfield. |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |
| `disabled` | `true \| false` | Hace que el textfield se inhabilite. |
| `id` | `String` | Identificador unico del textfield. |

### TextArea<a name="textarea"></a>
Permite a los usuarios ingresar editar y seleccionar texto.
```javascript
    import { TextArea } from 'leita-components-ui'
```
```jsx
    <TextArea label="Prueba" id="prueba" />
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `string` | Texto especificado como etiqueta. |
| `value` | `string \| null` | Valor de entrada. |
| `type` | `html values` | Valores que puede recibir el textarea. |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |
| `disabled` | `true \| false` | Hace que el textarea se inhabilite. |
| `id` | `String` | Identificador unico del textarea. |

### Select<a name="select"></a>
Permite a los usuarios seleccionar opciones listadas.
```javascript
    import { Select } from 'leita-components-ui'
```
```jsx
    <Select
        id={"comida"}
        label="Comida"
        options={[{ label: 'pizza', value: '1'}, { label: 'hotdog', value: '2'}]}
        value="1"
    />
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `string` | Texto especificado como etiqueta. |
| `value` | `string \| null` | Valor de entrada. |
| `options` | `[{label, value}, {label, value}]` | Opciones a listar por el componente. |
| `disabled` | `true \| false` | Hace que el textarea se inhabilite. |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |
| `id` | `String` | Identificador unico del textarea. |

### List<a name="list"></a>
Indices verticales continuos.
```javascript
    import { List, ListItem } from 'leita-components-ui'
```
```jsx
    <List loading>
        <ListItem
              label="Pizza"
              value="1"
              onClick={(e) => console.log(e)}
              description="$10.00"
              picture="https://www.infobae.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
              trailingIcon="chevron-right"
            />
    </List>
```
#### List Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |
| `loading` |`true \| false` | Activa animacion de carga del boton. |

#### ListItem Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `string \| null` | Texto principal. |
| `value` | `string \| null` | Valor de entrada. |
| `description` | `string \| null` | Texto secundario. |
| `trailingIcon` | `String \| null` | Icono izquierdo perteneciente a @mdi/font |
| `className` |  `string \| null` | Clase css personalizada. |
| `picture` |  `string \| null` | Url de recurso. |
### ChipList<a name="chiplist"></a>
Lista horizontal de tarjetas.
```javascript
    import { ChipList, ChipListItem } from 'leita-components-ui'
```
```jsx
    <ChipList loading>
        <ChipListItem
              label="Pizza"
              value="1"
              onClick={(e) => console.log(e)}
              active
              picture="https://www.infobae.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
            />
    </List>
```
#### ChipList Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |
| `loading` |`true \| false` | Activa animacion de carga del boton. |

#### ChipListItem Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `string \| null` | Texto principal. |
| `value` | `string \| null` | Valor de entrada. |
| `className` |  `string \| null` | Clase css personalizada. |
| `active` | `true \| false` | Indica si el elemento se encuentra activado |
| `picture` |  `string \| null` | Url de recurso. |

### Tabs<a name="tabs"></a>
Permita explorar y cambiar entre vistas de manera sencilla.
```javascript
    import { Tabs, TabItem } from 'leita-components-ui'
```
```jsx
    <Tabs>
        <TabItem label="test" value="test" active />
        <TabItem label="test" value="test" />
    </Tabs>
```
#### Tabs Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |

#### TabItem Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `label` | `string \| null` | Texto principal. |
| `value` | `string \| null` | Valor de entrada. |
| `className` |  `string \| null` | Clase css personalizada. |
| `active` | `true \| false` | Indica si el elemento se encuentra activado |

### Notification<a name="notification"></a>
Permite mantener informado al usuario de las acciones que realiza.
```javascript
    import { Notification } from 'leita-components-ui'
```
```jsx
    <Notification 
        text={'Mensaje de pureba'}
        type={'danger'}
        icon="alert"
        description="mas detalles de lo que paso"
        show={show}/>
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `text` | `string` | Texto principal. |
| `description` | `string \| null` | Texto secundario. |
| `type` | `success \| danger \| warning` | Énfasis de la notificación. |
| `show` | `true \| false` | Hace que la notificacion se muestre o no. |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |

### ImagePicker<a name="imagepicker"></a>
```javascript
    import { ImagePicker } from 'leita-components-ui'
```
```jsx
    <ImagePicker
        multiple
        maxSize={5}
        maxSizeMB={5000000}
        onChange={(e) => onChangeFile(e)}
        imageList={imageList}
    />
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `imageList` | `[String, String]` | Lista de imagenes que se muestran. |
| `multiple` | `true \| false` | Hace que se puedan subir mas de una imagen. |
| `maxSize` | `5` | Cuando se permitens subir mas de una imagen, este parametro limita la cantidad. |
| `maxSizeMB` | `5000000` | Limita el tamaño de la imagen que se selecciona. |


### ToggleButton<a name="togglebutton"></a>
Permite ocultar opciones en un unico boton.
```javascript
    import { ToggleButton, ToggleButtonItem } from 'leita-components-ui'
```
```jsx
    <ToggleButton label="Contactame" icon="message">
        <ToggleButtonItem value="facebook" icon="facebook" />
        <ToggleButtonItem value="twitter" icon="twitter" />
    </ToggleButton>
```
#### ToggleButton Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `children` | `React.ReactNode` | Contenido especificado como hijo. |
| `disabled` | `true \| false` | Hace que el boton se inhabilite. |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |
| `label` | `string \| null` | Texto principal. |

#### ToggleButtonItem Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `icon` | `String \| null` | Icono perteneciente a @mdi/font |
| `value` | `string \| null` | Valor de entrada. |
| `active` | `true \| false` | Indica si el elemento se encuentra activado |

### MDIcon<a name="mdicon"></a>
Agerga iconos para reforzar el mensaje.
```javascript
    import { MDIcon } from 'leita-components-ui'
```
```jsx
    <MDIcon name="loading" className="rotate" />
```
#### Props
| Nombre | Tipo | Descripción |
| ----------- | ---- | ----------- |
| `size` | `24 \| 36 \| 48` | Tamaño del icono. |
| `name` | `string` | Nombre del icono perteneciente a @mdi/font. |
| `className` |  `string \| null` | Clase css personalizada. |
| `style` | `{ margin: '1rem' }` | Estilos personalizados para el icono. |
## License
[MIT](https://choosealicense.com/licenses/mit/)
