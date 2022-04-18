// import { List, ListItem } from './components/List/List';
// import Button from './components/Button/Button';
// import ImagePicker from './components/ImagePicker/ImagePicker';
// import { ChipList, ChipListItem } from './components/ChipList/ChipList';
import { BottomNavigation, NavigationItem } from './components/BottomNavigation/BottomNavigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ChipList>
          <ChipListItem
            label="Categoria 1"
            value="aaa"
            active
            picture={'https://cnnespanol.cnn.com/wp-content/uploads/2021/08/CNN-hotdog.jpeg?quality=100&strip=info'}
          />
          <ChipListItem
            label="Categoria 1"
            value="aaa"
            active
          />
          <ChipListItem
            label="Categoria 2"
            value="awa"
            picture={'https://cnnespanol.cnn.com/wp-content/uploads/2021/08/CNN-hotdog.jpeg?quality=100&strip=info'}
          />
          <ChipListItem
            label="Categoria 3"
            value="awa"
            picture={'https://cnnespanol.cnn.com/wp-content/uploads/2021/08/CNN-hotdog.jpeg?quality=100&strip=info'}
          />
        </ChipList> */}
        {/* <List>
          <ListItem 
            label="Pizza"
            value="1"
            onClick={(e) => console.log(e)}
            description="$10.00"
            picture= {'https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg'}
            trailingIcon="account"
          />
          <ListItem
            label="Hotdoglargoquetieneunnombresuperlargoycorridoasdasdasdasdasdasdasdasdasdasdasdasdasdkhulhlhhuil"
            value="2"
            description="$15.00"
            picture={'https://cnnespanol.cnn.com/wp-content/uploads/2021/08/CNN-hotdog.jpeg?quality=100&strip=info'}
            trailingIcon='chevron-right'
          />
          <ListItem
            label="Sin imagenlargoycontinuosadasd"
            value="2"
            description="$15.00"
            trailingIcon='chevron-right'
          />
        </List> */}
        <BottomNavigation>
          <NavigationItem icon="view-list" label="List" />
          <NavigationItem icon="plus" label="Add" />
          <NavigationItem icon="account" label="Profile" />
        </BottomNavigation>
        {/* <Button label='Prueba' onClick={() => console.log("HOLAAAA")} trailingIcon='account'/> */}
        {/* <ImagePicker 
          multiple
          maxSize={5}
          maxSizeMB={5000000}
          onChange={(e) => onChangeFile(e)}
          imageList={imageList}
          /> */}
      </header>
    </div>
  );
}

export default App;
