import './App.css';
import CardComponent from './components/card';
import useGetInfo from './hooks/useGetInfo';
import AvatarImage from './images/avatar.jpg';

export default function App() {
  const { data, loader } = useGetInfo();
  return (
    <div className="App">
      <CardComponent
        data={data}
        loader={loader}
      />
    </div>
  );
}

