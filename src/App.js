import './App.css';
import CardComponent from './components/card';
import AvatarImage from './images/avatar.jpg';

export default function App() {
  return (
    <div className="App">
      <CardComponent
        name="David Ford"
        address="Rye Golf Club (Old), UK"
        avatar={AvatarImage}
        details={{
          quality: 80,
          handicap: 'PRO',
          sgTotal: 4.14,
        }}
      />
    </div>
  );
}

