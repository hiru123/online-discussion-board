import React from 'react';
import {comments} from './commentData';
import card from './card';
function App() {

  return (
    <div>
      comments.map(comment => <Card commentObject{comments})
    </div>
  );
}
export default App;
