import { List, ListItem } from './components/List/List';
// import Button from './components/Button/Button';
// import ImagePicker from './components/ImagePicker/ImagePicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List loading>
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
        </List>
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
