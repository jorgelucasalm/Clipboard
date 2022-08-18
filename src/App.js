import { useState } from 'react';
import './App.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaste } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [isDisable, setIsDisable] = useState(false)
  const [campanha, setCampanha] = useState('')
  const [textoCampanha, setTextCampanha] = useState('')
  console.log(campanha);

  return (
    <container>
      <div className="inputs">
        <button onClick={() => setIsDisable(!isDisable)}><FontAwesomeIcon icon={faLock} /></button>
        <div className="clipbord">
          <input type="text" disabled={isDisable} onChange={(e) => setCampanha(e.target.value)} />
          <CopyToClipboard text={campanha}>
            <button>
              <FontAwesomeIcon icon={faPaste} />
            </button>
          </CopyToClipboard>
        </div>
        <div className="clipbord">
          <input type="text" value={"BLACKLIST"} disabled="true" />
          <CopyToClipboard text={campanha}>
            <button>
              <FontAwesomeIcon icon={faPaste} />
            </button>
          </CopyToClipboard>
        </div>
        <div className="clipbord">
          <input type="text" disabled={isDisable} onChange={(e) => setTextCampanha(e.target.value)} />
          <CopyToClipboard text={textoCampanha}>
            <button>
              <FontAwesomeIcon icon={faPaste} />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </container>
  );
}

export default App;
