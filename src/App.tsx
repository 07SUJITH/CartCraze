import { Button } from './components/ui/button';

const App = () => {
  return (
    <div className="h-screen w-screen text-2xl flex justify-center items-center">
      <div>
        <h4 className="text-4xl font-bold text-green-600">
          Hello, Vite + React!
        </h4>
        <p className="text-xl">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default App;
