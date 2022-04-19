import { Theme } from './components/Theme/Theme';
import { List, ListItem } from './components/List/List';
import Button from './components/Button/Button';
import ImagePicker from './components/ImagePicker/ImagePicker';
import { ToggleButton, ToggleButtonItem } from './components/ToggleButton/ToggleButton';
import { ChipList, ChipListItem } from './components/ChipList/ChipList';
import { BottomNavigation, NavigationItem } from './components/BottomNavigation/BottomNavigation';
import './App.css';
import { SideBar, SideBarItem } from './components/SideBar/SideBar';
import { TabItem, Tabs } from './components/Tabs/Tabs';

function App() {
  const fontFamily = [
    'Raleway',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue']
  return (
    <Theme
      primary={'#2274A5'}
      backgroundColor={'#fbfbfb'}
      darkPrimary={'#011627'}
      accent={'#eeeeee'}
      black={'#171D1C'}
      white={'#FFFBFC'}
      shadow={'#9b9b9b96'}
      fontFamily={fontFamily}>
      <div className="App">
        <SideBar title='test'>
          <SideBarItem label='test' icon='account' />
          <SideBarItem label='test2' icon='menu' />
          <SideBarItem label='algo exageradamentelargoycontinuo' icon='dots-horizontal' />
        </SideBar>
        <div className="App-header">
          <ToggleButton label='Contactame' icon='message'>
            <ToggleButtonItem value='facebook' icon='facebook' />
            <ToggleButtonItem value='twitter' icon='twitter' />
          </ToggleButton>
          <Tabs>
            <TabItem label='test' value='test' active/>
            <TabItem label='test' value='test' />
          </Tabs>
          <ChipList>
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
          </ChipList>
          <List>
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
          <Button label='Prueba' onClick={() => console.log("HOLAAAA")} trailingIcon='account'/>
          {/* <ImagePicker 
            multiple
            maxSize={5}
            maxSizeMB={5000000}
            onChange={(e) => onChangeFile(e)}
            imageList={imageList}
          /> */}
        </div>
        <BottomNavigation>
          <NavigationItem icon="view-list" label="List" />
          <NavigationItem icon="plus" label="Add" />
          <NavigationItem icon="account" label="Profile" />
        </BottomNavigation>
      </div>
    </Theme>
  );
}

export default App;
