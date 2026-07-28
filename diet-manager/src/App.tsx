import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        <Card
          title="Tokio"
          description="La capitale del Giappone"
          imgUrl="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isVisited={true}
        />
        <Card
          title="Parigi"
          description="La capitale della Francia"
          imgUrl="https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isVisited={false}
        />
        <Card
          title="Londra"
          description="La capitale del Regno Unito"
          imgUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isVisited={false}
        />
        <Card
          title="New York"
          description="La citta piu grande degli Stati Uniti"
          imgUrl="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isVisited={false}
        />
      </div>
    </>
  );
}

export default App;
